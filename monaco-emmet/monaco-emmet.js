import * as monaco from 'monaco-editor';
import { expand } from '@emmetio/expand-abbreviation';

// tries to find a valid emmet expansion in the string,
// returns the  substring and expanded form of it
// if not valid, returns null
const getEmmet = (str, field) => {
  // add a default field
  if(!field) {
    field = (index) => index === 1 ? `$${index}` : '';
  }

  // empty or ends with white space, illegal
  if (str === '' || str.match(/\s$/)) return null;

  // deal with white space, this determines how many characters needed to be emmeted
  // e.g. `a span div` => `a span <div></div>` skip `a span `
  // e.g. `a{111 222}` => `<a href="">111 222</a>`
  // conclusion: white spaces are only allowed between `[]` or `{}`
  // note: quotes also allowed white spaces, but quotes must in `[]` or `{}`, so skip it
  const step = { '{': 1, '}': -1, '[': 1, ']': -1 };
  let pair = 0;

  for (let i = str.length - 1; i > 0; i--) {
    pair += step[str[i]] || 0;
    if (str[i].match(/\s/) && pair >= 0) {
      // illegal white space detected
      str = str.substr(i + 1);
      break;
    }
  }

  // starts with illegal character
  // note: emmet self allowed number element like `<1></1>`,
  // but obviously it's not fit with html standard, so skip it
  if (!str.match(/^[a-zA-Z[(.#]/)) return '';

  // run expand to test the final result
  // `field` was used to set proper caret position after emmet
  let expandText;
  try {
    expandText = expand(str, { field });
  } catch (e) {
    return null;
  }

  return {
    string: str,
    expanded: expandText,
  };
};

// takes a model and cursor position, and tries to extract a place to
// expand an abbreviation.
function getEmmetFromModel(model, position) {
  let str;

  const column = position.column;
  const lineNumber = position.lineNumber;

  // there is nothing before caret, return
  if (
    column === 1 ||
    column <= model.getLineFirstNonWhitespaceColumn(lineNumber)
  ) {
    return null;
  }

  // inspired by `monaco.editor.tokenize`.
  // see source map from `https://microsoft.github.io/monaco-editor/`
  const tokenizationSupport = model._tokens.tokenizationSupport;
  let state = tokenizationSupport.getInitialState();
  let tokenizationResult;

  for (let i = 1; i <= lineNumber; i++) {
    tokenizationResult = tokenizationSupport.tokenize(
      model.getLineContent(i),
      state,
      0
    );
    state = tokenizationResult.endState;
  }

  const tokens = tokenizationResult.tokens;

  // get token type at current column
  for (let i = tokens.length - 1; i >= 0; i--) {
    if (column - 1 > tokens[i].offset) {
      // type must be empty string when start emmet
      // and if not the first token, make sure the previous token is `delimiter.html`
      // to prevent emmet triggered within attributes
      if (
        tokens[i].type === '' &&
        (i === 0 || tokens[i - 1].type === 'delimiter.html')
      ) {
        // get content between current token offset and current cursor column
        str = model
          .getLineContent(lineNumber)
          .substring(tokens[i].offset, column - 1)
          .trimLeft();
      } else {
        return null;
      }
      break;
    }
  }

  return getEmmet(str);
}

let firstTime = true;
const firstTimeRegister = () => {
  if(!firstTime) return;
  firstTime = false;

  // register a completion provider
  monaco.languages.registerCompletionItemProvider('html', {
    provideCompletionItems: (model, cursor) => {

      const emmet = getEmmetFromModel(model, cursor);
      if (!emmet) return [];

      // return {suggestions:[{command}]}
      return [
        {
          label: emmet.string,
          insertText: emmet.string,
          range: new monaco.Range(
            cursor.lineNumber,
            cursor.column - emmet.string.length,
            cursor.lineNumber,
            cursor.column
          ),
          command: {
            id: 'emmet:expand',
          },
          detail: 'Emmet Abbreviation',
          documentation: emmet.expanded.replace(/\$\d+/g, '|'),
        },
      ];
    },
  });
};

const enableEmmet = editor => {
  if (!editor) {
    throw Error('Must provide monaco-editor instance.');
  }

  // register a context key to make sure emmet tab keybind triggered at proper condition
  const emmetLegal = editor.createContextKey('emmetLegal', false);

  let cursor, emmet;

  // using onDidChangeCursorSelection instead of onDidChangeCursorPosition,
  // that could skip checking when there is any selection
  editor.onDidChangeCursorSelection(cur => {
    cursor = cur;
    const selection = cursor.selection;
    
    // if selection area not empty, return
    if (
      selection.startLineNumber !== selection.endLineNumber ||
      selection.startColumn !== selection.endColumn
    ) {
      return;
    }

    const model = editor.getModel();
    if(!model) return;

    const position = selection.getPosition();
    
    emmet = getEmmetFromModel(model, position);
    emmetLegal.set(!!emmet);
  });

  const expandAbbreviation = () => {
    // don't run if not emmetLegal, which is doable if you run it form
    // the command palette. the action is set to display in the command
    // palette even though it would do nothing is intentional, and it's
    // what happens in vscode.
    if (!emmetLegal.get()) return;

    // attention: push an undo stop before and after executeEdits
    // to make sure undo operation works as expected
    editor.pushUndoStop();

    // record first `FIELD` position and remove all `FIELD`
    const expandTextArr = emmet.expanded.split('$1');
    const posOffsetArr = expandTextArr[0].split('\n');

    const lineNumber = cursor.selection.startLineNumber + posOffsetArr.length - 1;
    const column =
      posOffsetArr.length === 1
        ? posOffsetArr[0].length - emmet.string.length + cursor.selection.startColumn
        : posOffsetArr.slice(-1)[0].length + 1;

    let expanded = expandTextArr.join('');

    // replace range text with expandText
    editor.executeEdits('emmet', [
      {
        range: new monaco.Range(
          cursor.selection.positionLineNumber,
          cursor.selection.positionColumn - emmet.string.length,
          cursor.selection.positionLineNumber,
          cursor.selection.positionColumn
        ),
        text: expanded,
        forceMoveMarkers: true,
      },
    ]);

    // move cursor to the position of first `FIELD` in expandText
    editor.setPosition(new monaco.Position(lineNumber, column));

    editor.pushUndoStop();
  };

  // add action to command palette, with a keybinding
  editor.addAction({
    id: 'emmet:expand',
    label: 'Emmet: Expand Abbreviation',
    keybindingContext: 'emmetLegal && !suggestWidgetVisible',
    keybindings: [monaco.KeyCode.Tab],
    run: () => {
      expandAbbreviation();
    },
  });

  // add a command internally, this is used by the completion provider
  editor._commandService.addCommand({
    id: 'emmet:expand',
    handler: () => {
      expandAbbreviation();      
    },
  });

  firstTimeRegister();
};

export default enableEmmet;

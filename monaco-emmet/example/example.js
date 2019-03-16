import * as monaco from 'monaco-editor';
import enableEmmet from '../monaco-emmet';

// Create an editor, see monaco-editor for more info.
const editor = monaco.editor.create(
  document.getElementById('editor-root'),
  {
    value: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
  
</body>
</html>
`,
    language: 'html',
  }
);

editor.setPosition({ column: 2, lineNumber: 10 });

enableEmmet(editor);

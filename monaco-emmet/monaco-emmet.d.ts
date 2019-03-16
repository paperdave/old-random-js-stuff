import * as monaco from 'monaco-editor'

/**
 * almost the same behavior as WebStorm's builtin emmet.
 * only triggered when string before text cursor(caret) matches emmet rules,
 * caret within html tag content area and suggest widget not visible,
 * otherwise will fallback to its original functionality.
 */
export default function enableEmmet(editor: monaco.editor.ICodeEditor): undefined;

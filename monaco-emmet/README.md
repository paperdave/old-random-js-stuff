# monaco-emmet
Emmet plugin for monaco editor, modified from
[troy351/emmet-monaco](https://github.com/troy351/emmet-monaco).

**Currently only supports HTML, Compatible with monaco-editor v0.12.0 and above**

Source code is well commented if you want to figure out how it works.

## Installation and Usage
monaco-emmet is distributed as a ES Module, you may need to use something like webpack to properly
use this module.

- `npm i monaco-emmet`

Then you would use it by calling the default exported function like so
```js
import * as monaco from 'monaco-editor';
import enableEmmet from 'monaco-emmet';

// Create an editor, see monaco-editor for more info.
const editor = monaco.editor.create(...);

enableEmmet(editor);
```
You can see a full example using webpack in `./example`.

## Contributing
You can install dependencies and load up the built in example to test changes by installing the dev dependencies.

- `npm i -D`

and then starting the development server

- `npm start`

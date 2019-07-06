# source-code-loader
Loads the source of a file, making sure to skip other loaders.

**THIS IS NOT ACTUALLY REQUIRED, AS YOU CAN JUST USE `!!RAW-LOADER!./filename.js` TO DISABLE OTHER LOADERS**

```sh
npm i source-code-loader
```

Simply just add `source-code-loader!` before to load the source of a file
instead of the module itself.
```js
import ModuleSource from 'source-code-loader!./example.js'

console.log(ModuleSource);
```

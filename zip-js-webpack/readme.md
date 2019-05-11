# zip.js
This is a unofficial package containing [zip.js by Gildas Lormeau](https://gildas-lormeau.github.io/zip.js/index.html),
and a version of it that is compatible with CommonJS (webpack). For more information on what it is and how to use
it, see [the official page](https://gildas-lormeau.github.io/zip.js/index.html).

> Note: This module is intended to be ran in the browser, not through node.js

## Install
```
npm i zip.js
```

There are four packaged versions of zip.js
- **`src`**: Original Source Code.
- **`src-min`**: Original Source Code, Minimized.
- **`cjs`**: CommonJS, compatible with webpack (just import zip.js, no config needed). See Below
- **`cjs-min`**: CommonJS, Minimized.

In almost all cases, you should use the minimized versions.

## Usage in Webpack
You can just import the module, and use just like the regular one. Note that it doesn't
currently have support for the filesystem and zlib extensions.
```js
import { createWriter, BlobReader, BlobWriter } from 'zip.js';

// This is part of one of the examples.
function zipBlob(filename, blob, callback) {
  createWriter(new BlobWriter("application/zip"), function (zipWriter) {
    zipWriter.add(filename, new BlobReader(blob), function () {
      zipWriter.close(callback);
    });
  }, onerror);
}

// ... do whatever

```
Alternatively, you can import the module as `zip` instead of each component seperatly
```
import * as zip from 'zip.js';
```

One key difference from this version is that you **must** use web workers, so the `useWebWorkers`, `workerScriptsPath`, and `workerScripts` properties are not present in this version.

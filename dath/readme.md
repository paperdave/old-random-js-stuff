# Dath
Dath stands for **D**egree m**ath**.

This is a simple library that adds degree variants of all trigonometric functions in the `Math`
global variable.

```
npm i dmath
```

To use, just load `dmath.js` it in your app, and you will have all the extended functions in the
`Math` global or in the `DMath` global. If using a module bundler or Node.JS, you will not recieve
global variables but rather the DMath object in it's exports.

Alongside the degree trig functions, there are also two functions to convert between degrees and
radians:

- `deg2rad(x)`
- `rad2deg(x)`

## Examples
Globals, In an HTML file
```html
<script src="https://unpkg.com/math"></script>
<script>
  console.log(Math.dcos(180));
  // or
  console.log(Dath.dcos(180));
</script>
```

Using Node.JS
```js
const Math = require('math');

console.log(Math.dsin(180));
```

Using Webpack
```js
import * as Math from 'math';

console.log(Math.deg2rad(60));
```

## Why "Dath"
Originally this was called "DMath", but that was taken by `d-math` so i needed a new name.

# material-ui-fast-ripple
Patches `@material-ui/core/ButtonBase` to speed up the animation on ripples.

```sh
npm i material-ui-fast-ripple
```

To use, simply run this before importing any `@material-ui` packages, or anything that uses it.
```js
import { patch } from 'material-ui-fast-ripple';

patch();
```

If you want to set custom speeds, you can pass a options paramater
```js
import { patch } from 'material-ui-fast-ripple';

patch({
  DURATION: 550,
  DELAY_RIPPLE: 80,
});
```

**Warning: Running `patch` is a destructive action since it replaces the TouchRipple module,
  but this should be safe since it's api is the same.**

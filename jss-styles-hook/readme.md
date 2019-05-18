# jss-styles-hook
Recreation of [react-jss](https://github.com/cssinjs/jss/tree/master/packages/react-jss) but using
React's hooks API.

Install:
```sh
npm i jss-styles-hook
```

So, instead of:
```jsx
const styles = {
  // ...
}

const Button = function({classes, children}) {
  return <button className={classes.myButton}>
    <span className={classes.myLabel}>{children}</span>
  </button>;
}

const StyledButton = withStyles(styles)(Button)
```

you can use:
```jsx
const styles = () => ({
  // ...
})

const StyledButton = function({children}) {
  const classes = useStyles(styles);

  return <button className={classes.myButton}>
    <span className={classes.myLabel}>{children}</span>
  </button>;
}
```

In the future I want to make it more like `@material-ui` styling system, with themes and other
features. But hopefully by then `@material-ui/styles` will be stable enough to actually use.

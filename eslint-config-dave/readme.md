# Dave's ESLint Config
I use this custom configuration in my projects.

To use in your project, run
```sh
npm i eslint-config-dave
```

and create an `.eslintrc` file with
```json
{
  "extends": "dave"
}
```

If you are using React, you can use this in the .eslintrc for some additional React rules. (includes `babel-eslint`)
```json
{
  "extends": "dave/react"
}
```

## Core Rules
- **Semicolons are Required**, this is because you can run into cases where javascript doesn't know
  exactly what you are trying to say.
- **Tab Size is 2 Spaces**, this is so more code can fit on a screen at once
- **Max Line length is 100 characters**, this is also so more code can fit, and not needing you to
  scroll.
- **No Console Statements**, these are not needed in a final version of your code, so you should not
  keep any around for long. If a specific statement is needed you should use the eslint disable
  comment (`// eslint-disable-next-line no-console`)
- **Single Quotes**, this is a personal preference, you can change this if you want.

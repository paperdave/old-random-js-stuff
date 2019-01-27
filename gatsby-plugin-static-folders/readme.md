# gatsby-plugin-static-folders
Lets you add additional static folders to your site, to better organize it.

`gatsby-config.js`
```
{
  plugins: [
    {
      resolve: 'gatsby-plugin-static-folders',
      options: {
        folders: [
          './images',
          './downloads',
        ]
      }
    }
  ]
}
```

This will merge the two folders `images` and `downloads` into the output `public` folder.

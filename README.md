# AB-Test

<a href='https://www.youtube.com/watch?v=pGy5vrFJlH0'>Jack Herrington AB-Test</a>

```bash
cd packages/ab
yarn build
cd dist
PORT=8081 npx servor
```

- webpack will dump remoteEntry.js and all the js chunks into dist
- servor is a cors based static server
- it serves your dist files from the static build of webpack to test the app
- home app consumes the files based on the matchup of the ab app's webpack.config.js output public path and the home app's webpack.config.js remotes path + it's html script tag (if we are building from source we use the library key in remote module plugin as well as the script tag in the head of html instead of using key@server)

```js
/* ./packages/ab/webpack.config.js */
module.exports = {
output: {
  publicPath: 'http://localhost:8081'
}
}

/* ./packages/home/webpack.config.js */
new ModuleFederationPlugin({
      remotes: {
        ab: 'ab',
      },
    }),
```

```html
<!-- ./packages/home/src/index.html -->
<head>
  <script src="http://localhost:8081/remoteEntry.js" />
</head>
```

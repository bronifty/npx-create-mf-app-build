# AB-Test

<a href='https://www.youtube.com/watch?v=pGy5vrFJlH0'>Jack Herrington AB-Test</a>

```bash
cd packages/ab
yarn build
cd dist
PORT=8081 npx servor
```

- servor is a cors based static server
- it serves your dist files from the static build of webpack to test the app
- home app consumes the files based on the webpack.config.js output public path

```js
/* ./packages/ab/webpack.config.js */
module.exports = {
output: {
  publicPath: 'http://localhost:8081'
}
...
}
```

- if this was a company url you would put that and reference it is the script tag in the head of the home app's webpage

```html
<!-- ./packages/home/src/index.html -->
<head>
  <script src="http://localhost:8081/remoteEntry.js" />
</head>
...
```

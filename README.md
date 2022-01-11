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

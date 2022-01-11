# Module Federation Demo

- based on <a href='https://www.youtube.com/watch?v=K-yQB9YGmgE' >Jack Herrington's Module Federation demo</a> but with some code fixes

- to see the demo, run the following commands and open browser tabs on localhost:8080 and localhost:8081

```bash
yarn
yarn build
yarn start
```

- to demo the fallback, switch to host app and run yarn start then open browser on localhost:8080 (it serves the nav app from build via linked library instead of remote federation)

```bash
cd packages/home && yarn start
```

- <a href='#'>Tutorial Vid</a>

## Summary

- create packages directory (could be named anything) and build 2 mf-apps inside, which will be run by wsrun (a yarn workspaces task runner)
  - follow the prompts to create your app (I'm using react)

```bash
mkdir packages
cd packages
npx create-mf-app --name host
npx create-mf-app --name nav
```

- create the component in the nav app that you want to share and default export it
- next we will import the exported component with module federation by configuring webpack.config.js in both apps

```js
/* nav */
{
  const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
  ...

plugins: [
    new ModuleFederationPlugin({
      name: 'nav',
      library: { type: 'var', name: 'nav' },
      filename: 'remoteEntry.js',
      remotes: {},
      exposes: {
        './Nav': './src/Nav',
      },
      shared: require('./package.json').dependencies,
    }),
    new HtmlWebPackPlugin({
      template: './src/index.html',
    }),
  ],
}

/* host */
{
  const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
  ...

  plugins: [
    new ModuleFederationPlugin({
      name: 'home',
      library: { type: 'var', name: 'home' },
      filename: 'remoteEntry.js',
      remotes: {
        mfNav: 'nav',
      },
      exposes: {},
      shared: require('./package.json').dependencies,
    }),
    new HtmlWebPackPlugin({
      template: './src/index.html',
    }),
  ],
};
```

- now you can refer to the remote module as 'mfNav/Nav' in your host app (we will lazy load it into suspense to handle the async import)

```jsx
/* host/src/App.jsx */
const Nav = React.lazy(() => import('mfNav/Nav'));

const App = () => (
  <div className='container'>
    <React.Suspense fallback={<div>Loading...</div>}>
      <Nav />
    </React.Suspense>
    <h2>HOME</h2>
  </div>
);
ReactDOM.render(<App />, document.getElementById('app'));
```

### Ref

<a href='https://reactjs.org/docs/error-boundaries.html'>React Error Boundaries</a>

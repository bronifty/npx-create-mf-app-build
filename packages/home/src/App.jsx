import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

class HeaderWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch() {}

  render() {
    if (this.state.hasError) {
      const FallbackNav = React.lazy(() => import('nav/build/Nav'));
      return (
        <React.Suspense fallback={<div>Loading...</div>}>
          <FallbackNav />
        </React.Suspense>
      );
    }
    const Nav = React.lazy(() => import('mfNav/Nav'));

    return (
      <React.Suspense fallback={<div>Loading...</div>}>
        <Nav />
      </React.Suspense>
    );
  }
}

const App = () => (
  <div className='container'>
    <HeaderWrapper />
    <h2>HOME</h2>
  </div>
);
ReactDOM.render(<App />, document.getElementById('app'));

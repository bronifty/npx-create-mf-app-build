import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import Nav from './Nav';
const App = () => (
  <div className='container'>
    <Nav />
    <h1>NAV APP</h1>
  </div>
);
ReactDOM.render(<App />, document.getElementById('app'));

import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from 'react-router-dom';
import { useQuery } from 'react-query';

const App = () => (
  <Router>
    <div className='max-w-7xl mx-auto'>
      <header className='bg-blue-700 text-white w-full font-bold text-3xl'>
        <h1 className='p-5 text-center'>CMS Editor</h1>
      </header>
      <div className='mt-10 text-3xl'>
        <Routes>
          <Route path='/:page' element={<div>About</div>} />
          <Route path='/' element={<div>Home</div>} />
        </Routes>
      </div>
    </div>
  </Router>
);
ReactDOM.render(<App />, document.getElementById('app'));

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const FrameA = React.lazy(() => import('home/FrameA'));
const FrameB = React.lazy(() => import('home/FrameB'));
const VariantChooser = React.lazy(() => import('ab/VariantChooser'));
const App = () => (
  <div className='container'>
    <h2>HOME APP</h2>
    <React.Suspense fallback={<div>Loading variant</div>}>
      <VariantChooser
        test='test1'
        variations={{
          a: FrameA,
          b: FrameB,
        }}
        src='https://placedog.net/640/480?id=55'
        style={{ width: '50%', height: '50%' }}
      />
    </React.Suspense>
  </div>
);
ReactDOM.render(<App />, document.getElementById('app'));

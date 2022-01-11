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
import { fetchPage } from './api';
import Shell from './Shell';

const PageAdmin = () => {
  const { page } = useParams();
  const { data, isLoading } = useQuery(['getPage', { page }], () =>
    fetchPage()(page)
  );
  const [fields, setFields] = React.useState({});

  React.useEffect(() => {
    setFields(data ?? {});
  }, [data]);

  // const data = fetchPage()(page);
  return (
    <div>
      Page: - {JSON.stringify(data, null, 2)}
      {!isLoading && fields && <div>stuff</div>}
    </div>
  );
};

const App = () => (
  <Shell>
    <Router>
      <div className='max-w-7xl mx-auto'>
        <header className='bg-blue-700 text-white w-full font-bold text-3xl'>
          <h1 className='p-5 text-center'>CMS Editor</h1>
        </header>
        <div className='mt-10 text-3xl'>
          <Routes>
            <Route path='/:page' element={<PageAdmin />} />
            <Route path='/' element={<div>HOME</div>} />
          </Routes>
        </div>
      </div>
    </Router>
  </Shell>
);
ReactDOM.render(<App />, document.getElementById('app'));

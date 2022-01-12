import React from 'react';
import ReactDOM from 'react-dom';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { getSuperHeroes, addSuperHero } from './api';
import './index.scss';
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <div className='mt-10 text-3xl mx-auto max-w-6xl'>
      <Superheroes />
    </div>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);

const Superheroes = () => {
  const queryClient = useQueryClient();
  const { isLoading, isError, data } = useQuery('superheroes', getSuperHeroes);
  const mutation = useMutation(addSuperHero, {
    onSuccess: () => {
      queryClient.invalidateQueries('superheroes');
    },
  });
  return (
    <div className='flex flex-col'>
      <form>
        <input type='text' name='name' placeholder='name' />
        <button
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
          onClick={(e) => {
            e.preventDefault();
            mutation.mutate({
              id: Math.random() * 100,
              name: document.querySelector('input[name="name"]').value,
              alterEgo: '',
            });
            document.querySelector('input[name="name"]').value = '';
          }}
        >
          Add Superhero
        </button>
      </form>

      <div className='mt-10'>
        {isLoading ? (
          <div>Loading...</div>
        ) : isError ? (
          <div>Error: {error.message}</div>
        ) : (
          <ul className='list-disc list-inside'>
            {data.map((superhero) => (
              <li key={superhero.id}>{superhero.name}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById('app'));

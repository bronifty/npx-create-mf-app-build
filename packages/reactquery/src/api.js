const getSuperHeroes = async () => {
  const res = await fetch('http://localhost:4000/superheroes');
  return res.json();
};

const addSuperHero = async (hero) => {
  const res = await fetch('http://localhost:4000/superheroes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(hero),
  });
  const data = await res.json();
  console.log('data', data);
  return data;
};

export { getSuperHeroes, addSuperHero };

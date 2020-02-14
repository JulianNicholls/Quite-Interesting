import React, { useContext, useEffect } from 'react';

import { Store, FETCH_DATA } from './store';

import './App.css';

interface IImages {
  medium: string;
  original: string;
}

interface IEpisode {
  id: number;
  name: string;
  season: number;
  number: number;
  image: IImages;
  summary: string;
}

const URL: string =
  'https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes';

const App = () => {
  const { state, dispatch } = useContext(Store);

  useEffect(() => {
    state.episodes.length === 0 && fetchData();
  });

  const fetchData = async () => {
    const response = await fetch(URL);
    const data = await response.json();

    dispatch({ type: FETCH_DATA, payload: data._embedded.episodes });
  };

  return (
    <>
      <h1>Rick and Morty</h1>
      <p>Pick your favourite episode.</p>
      <section>
        {state.episodes.map((e: IEpisode) => (
          <article key={e.id}>
            <img src={e.image.medium} alt={e.name} />
            <div>{e.name}</div>
            <section>
              Episode S{e.season}:E{e.number}
            </section>
          </article>
        ))}
      </section>
    </>
  );
};

export default App;

import React, { useContext, useEffect } from 'react';

import { Store, FETCH_DATA, ADD_FAVOURITE, REMOVE_FAVOURITE } from './store';
import { IEpisode, IAction } from './interfaces';

import './App.css';

const EpisodeList = React.lazy<any>(() => import('./components/EpisodeList'));

const URL: string =
  'https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes';

const App = (): JSX.Element => {
  const {
    state: { episodes, favourites },
    dispatch,
  } = useContext(Store);

  useEffect(() => {
    episodes.length === 0 && fetchData();
  });

  const fetchData = async () => {
    const response = await fetch(URL);
    const data = await response.json();

    dispatch({ type: FETCH_DATA, payload: data._embedded.episodes });
  };

  const toggleFavourite = (episode: IEpisode): void => {
    const inFavourites: boolean = favourites.includes(episode);
    const action: IAction = {
      type: inFavourites ? REMOVE_FAVOURITE : ADD_FAVOURITE,
      payload: episode,
    };

    dispatch(action);
  };

  return (
    <>
      <header>
        <h1>Rick and Morty</h1>
        <p>
          Pick your favourite episode. <br />
          Favourites: {favourites.length === 0 ? 'none' : favourites.length}
        </p>
      </header>
      <React.Suspense fallback={<div className="loading">Loading...</div>}>
        <section className="episode-layout">
          <EpisodeList
            episodes={episodes}
            toggleFavourite={toggleFavourite}
            favourites={favourites}
          />
        </section>
      </React.Suspense>
    </>
  );
};

export default App;

import React, { useEffect, useContext } from 'react';

import { Store } from '../store';

import { fetchData, toggleFavourite } from '../store/actions';

const EpisodeList = React.lazy<any>(() => import('./EpisodeList'));

const HomePage = () => {
  const store = useContext(Store);
  const {
    state: { episodes },
    dispatch,
  } = store;

  useEffect(() => {
    episodes.length === 0 && fetchData(dispatch);
  });

  const props: EpisodeListProps = {
    episodes,
    store,
    toggleFavourite,
  };

  return (
    <React.Suspense fallback={<div className="loading">Loading...</div>}>
      <section className="episode-layout">
        <EpisodeList {...props} />
      </section>
    </React.Suspense>
  );
};

export default HomePage;

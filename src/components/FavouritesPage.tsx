import React, { useContext } from 'react';

import { Store } from '../store';

import { toggleFavourite } from '../store/actions';

const EpisodeList = React.lazy<any>(() => import('./EpisodeList'));

const FavouritesPage = () => {
  const store = useContext(Store);
  const {
    state: { favourites },
  } = store;

  const props: IEpisodeProps = {
    episodes: favourites,
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

export default FavouritesPage;

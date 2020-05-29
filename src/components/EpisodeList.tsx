import React from 'react';

import EpisodeCard from './EpisodeCard';

const EpisodeList = (props: EpisodeListProps): Array<JSX.Element> => {
  const {
    store: {
      state: { favourites },
      dispatch,
    },
    episodes,
    toggleFavourite,
  } = props;

  const toggle = (episode: Episode) => {
    toggleFavourite(episode, favourites, dispatch);
  };

  return episodes.map((episode: Episode) => (
    <EpisodeCard
      key={episode.id}
      episode={episode}
      favourite={favourites.includes(episode)}
      toggle={toggle}
    />
  ));
};

export default EpisodeList;

import React from 'react';

import { IEpisode } from '../interfaces';

interface IEpisodeList {
  episodes: Array<IEpisode>;
  toggleFavourite(e: IEpisode): void;
  favourites: Array<IEpisode>;
}
const EpisodeList = (props: IEpisodeList): Array<JSX.Element> => {
  const { episodes, toggleFavourite, favourites } = props;

  return episodes.map((e: IEpisode) => (
    <article className="episode-box" key={e.id}>
      <img src={e.image.medium} alt={e.name} />
      <div>{e.name}</div>
      <section>
        <div>
          Episode S{e.season}:E{e.number}
          <button
            className="favourite-button"
            type="button"
            onClick={() => toggleFavourite(e)}
          >
            {favourites.includes(e) ? 'Remove' : 'Favourite'}
          </button>
        </div>
      </section>
    </article>
  ));
};

export default EpisodeList;

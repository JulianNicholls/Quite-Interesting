import React from 'react';

const EpisodeList = (props: IEpisodeProps): Array<JSX.Element> => {
  const {
    store: {
      state: { favourites },
      dispatch,
    },
    episodes,
    toggleFavourite,
  } = props;

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
            onClick={() => toggleFavourite(e, favourites, dispatch)}
          >
            {favourites.includes(e) ? 'Remove' : 'Favourite'}
          </button>
        </div>
      </section>
    </article>
  ));
};

export default EpisodeList;

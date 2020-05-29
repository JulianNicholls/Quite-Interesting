import React from 'react';

interface ECProps {
  episode: Episode;
  favourite: boolean;
  toggle: (episode: Episode) => void;
}

const EpisodeCard = ({ episode, favourite, toggle }: ECProps): JSX.Element => (
  <article className="episode-box">
    <img
      src={
        episode.image !== null && episode.image.medium
          ? episode.image.medium
          : 'https://via.placeholder.com/250x140&text=No%20Pickles'
      }
      alt={episode.name}
    />

    <div>{episode.name}</div>
    <section>
      Episode S{episode.season}, E{episode.number}
      <button
        className="favourite-button"
        type="button"
        onClick={() => toggle(episode)}
      >
        {favourite ? 'Remove' : 'Favourite'}
      </button>
    </section>
  </article>
);

export default EpisodeCard;

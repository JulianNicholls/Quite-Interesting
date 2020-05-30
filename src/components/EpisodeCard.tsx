import React from 'react';

interface ECProps {
  episode: Episode;
  favourite: boolean;
  toggle: (episode: Episode) => void;
}

const EpisodeCard = ({ episode, favourite, toggle }: ECProps): JSX.Element => {
  const { image } = episode;

  return (
    <article className="episode-box">
      <img
        src={
          image !== null && image.medium
            ? image.medium
            : 'https://via.placeholder.com/250x140/eeeeee/333333&text=No+Alans'
        }
        alt={episode.name}
      />

      <div>{episode.name}</div>
      <section>
        Season {episode.season}, Ep. {episode.number}
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
};

export default EpisodeCard;

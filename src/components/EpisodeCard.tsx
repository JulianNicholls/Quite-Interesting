import React from 'react';

interface ECProps {
  episode: Episode;
  favourite: boolean;
  toggle: (episode: Episode) => void;
}

const strippedHTML = (html: string) => {
  // https://css-tricks.com/snippets/javascript/strip-html-tags-in-javascript/
  return html ? html.replace(/(<([^>]+)>)/gi, '') : '';
};

const EpisodeCard = ({ episode, favourite, toggle }: ECProps): JSX.Element => {
  const { image, summary, name, season, number } = episode;
  return (
    <article className="episode-box" data-summary={strippedHTML(summary)}>
      <img
        src={image !== null && image.medium ? image.medium : '/tv-static.png'}
        alt={name}
      />

      <div>{name}</div>
      <section>
        Season {season}, Ep. {number}
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

// : 'https://via.placeholder.com/250x140/999999/555555&text=No+Image'

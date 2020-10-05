import React from 'react';

interface ECProps {
  episode: Episode;
  favourite: boolean;
  toggle: (episode: Episode) => void;
}

const strippedHTML = (html: string) => {
  // https://css-tricks.com/snippets/javascript/strip-html-tags-in-javascript/
  const stripped = html ? html.replace(/(<([^>]+)>)/gi, '') : '';

  return stripped.replace(/\.\s+/, '.\n');
};

const EpisodeCard = ({ episode, favourite, toggle }: ECProps): JSX.Element => {
  const { image, summary, name, season, number, airdate, airtime, url } = episode;
  const firstAiring =
    airdate && airtime
      ? new Date(`${airdate} ${airtime}`).toLocaleString('en-GB')
      : 'TBA';

  return (
    <article
      className="episode-box"
      data-summary={`Original Broadcast: ${firstAiring}\n${strippedHTML(summary)}`}
    >
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img src={image?.medium ? image.medium : '/tv-static.png'} alt={name} />
      </a>

      <section>
        <div>
          {name}
          <br />
          Series {season} ({name[0]}), No. {number}
        </div>
        <button className="btn" type="button" onClick={() => toggle(episode)}>
          {favourite ? 'Remove' : 'Favourite'}
        </button>
      </section>
    </article>
  );
};

export default EpisodeCard;

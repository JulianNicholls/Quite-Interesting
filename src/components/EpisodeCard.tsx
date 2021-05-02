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
  const {
    image,
    summary,
    name,
    season,
    number,
    runtime,
    airstamp,
    airdate,
    airtime,
    url,
  } = episode;
  const dateStr = airstamp ?? `${airdate} ${airtime}`;
  const firstAiring = dateStr ? new Date(dateStr).toLocaleString('en-GB') : 'TBA';

  return (
    <article
      className="episode-box"
      data-summary={`Original Broadcast: ${firstAiring}\n${strippedHTML(summary)}`}
    >
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img
          src={image?.original ? image.original : '/tv-static.png'}
          alt={name}
        />
      </a>

      <section>
        <div>
          {name}
          <br />
          Series {String.fromCharCode(64 + season)}, No. {number}{' '}
          {runtime && `- ${runtime} mins`}
        </div>
        <button className="btn" type="button" onClick={() => toggle(episode)}>
          {favourite ? 'Remove' : 'Favourite'}
        </button>
      </section>
    </article>
  );
};

export default EpisodeCard;

interface Images {
  medium: string;
  original: string;
}

interface Episode {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  type: string,
  airdate: string;
  airtime: string;
  airstamp: string;
  runtime: number;
  image: Images | null;
  summary: string;
}

interface State {
  episodes: Array<Episode>;
  favourites: Array<Episode>;
}

type ActionType = string;

interface Action {
  type: ActionType;
  payload: Episode | Array<Episode>;
}

type Dispatch = React.Dispatch<Action>;

interface EpisodeListProps {
  episodes: Array<Episode>;
  store: { state: State; dispatch: Dispatch; };
  toggleFavourite(
    episode: Episode,
    favourites: Array<Episode>,
    dispatch: Dispatch
  ): void;
}

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
  type: string;
  airdate: string;
  airtime: string;
  airstamp: string;
  runtime: number;
  image: Images | null;
  summary: string;
}

interface SearchResult {
  score: number;
  show: {
    id: number;
    url: string;
    name: string;
    genres: string[];
    image: Images | null;
  };
}

interface State {
  episodes: Array<Episode>;
  favourites: Array<Episode>;
  searchResults: Array<SearchResult>;
}

type ActionType = string;

interface Action {
  type: ActionType;
  payload: Episode | Array<Episode> | Array<SearchResult>;
}

type Dispatch = React.Dispatch<Action>;

interface EpisodeListProps {
  episodes: Array<Episode>;
  store: { state: State; dispatch: Dispatch };
  toggleFavourite(episode: Episode, favourites: Array<Episode>, dispatch: Dispatch): void;
}

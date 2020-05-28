interface IImages {
  medium: string;
  original: string;
}

interface IEpisode {
  id: number;
  name: string;
  season: number;
  number: number;
  airdate: string;
  airtime: string;
  runtime: number;
  image: IImages;
  summary: string;
  url: string;
}

interface IState {
  episodes: Array<IEpisode>;
  favourites: Array<IEpisode>;
}

type ActionType = string;

interface IAction {
  type: ActionType;
  payload: IEpisode | Array<IEpisode>;
}

type Dispatch = React.Dispatch<IAction>;

interface IEpisodeProps {
  episodes: Array<IEpisode>;
  store: { state: IState; dispatch: Dispatch };
  toggleFavourite(
    episode: IEpisode,
    favourites: Array<IEpisode>,
    dispatch: Dispatch
  ): void;
}

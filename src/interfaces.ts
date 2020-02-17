interface IImages {
  medium: string;
  original: string;
}

export interface IEpisode {
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

export interface IState {
  episodes: Array<IEpisode>;
  favourites: Array<IEpisode>;
}

export type ActionType = string;

export interface IAction {
  type: ActionType;
  payload: IEpisode | Array<IEpisode>;
}

export type Dispatch = React.Dispatch<IAction>;

export interface IEpisodeProps {
  episodes: Array<IEpisode>;
  store: { state: IState; dispatch: Dispatch };
  toggleFavourite(
    episode: IEpisode,
    favourites: Array<IEpisode>,
    dispatch: Dispatch
  ): void;
}

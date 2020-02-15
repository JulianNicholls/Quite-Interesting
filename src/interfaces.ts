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
  favourites: Array<any>;
}

export type ActionType = string;

export interface IAction {
  type: ActionType;
  payload: any;
}

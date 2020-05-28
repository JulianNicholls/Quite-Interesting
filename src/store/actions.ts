import { FETCH_DATA, ADD_FAVOURITE, REMOVE_FAVOURITE } from '../store';

const URL: string =
  'https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes';

export const fetchData = async (dispatch: any) => {
  const response = await fetch(URL);
  const data = await response.json();

  dispatch({ type: FETCH_DATA, payload: data._embedded.episodes });
};

export const toggleFavourite = (
  episode: IEpisode,
  favourites: Array<IEpisode>,
  dispatch: any
): void => {
  const inFavourites: boolean = favourites.includes(episode);
  const action: IAction = {
    type: inFavourites ? REMOVE_FAVOURITE : ADD_FAVOURITE,
    payload: episode,
  };

  dispatch(action);
};

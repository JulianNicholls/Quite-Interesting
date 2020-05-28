import { FETCH_DATA, ADD_FAVOURITE, REMOVE_FAVOURITE } from '../store';

const URL: string =
  'https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes';

export const fetchData = async (dispatch: Dispatch) => {
  const response = await fetch(URL);
  const data = await response.json();

  dispatch({ type: FETCH_DATA, payload: data._embedded.episodes });
};

export const toggleFavourite = (
  episode: Episode,
  favourites: Array<Episode>,
  dispatch: Dispatch
): void => {
  const inFavourites: boolean = favourites.includes(episode);
  const action: Action = {
    type: inFavourites ? REMOVE_FAVOURITE : ADD_FAVOURITE,
    payload: episode,
  };

  dispatch(action);
};

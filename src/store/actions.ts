import { FETCH_DATA, ADD_FAVOURITE, REMOVE_FAVOURITE } from '../store';

// This was a search, but on further inspection, this is a much better way
// to get the info.
const URL: string = 'https://api.tvmaze.com/shows/703/episodes';

export const fetchData = async (dispatch: Dispatch) => {
  const response = await fetch(URL);
  const data = await response.json();

  dispatch({ type: FETCH_DATA, payload: data });
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

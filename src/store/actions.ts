export const FETCH_DATA: ActionType = 'FETCH_DATA';
export const ADD_FAVOURITE: ActionType = 'ADD_FAVOURITE';
export const REMOVE_FAVOURITE: ActionType = 'REMOVE_FAVOURITE';

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
  const inFavourites = favourites.includes(episode);
  const action: Action = {
    type: inFavourites ? REMOVE_FAVOURITE : ADD_FAVOURITE,
    payload: episode,
  };

  dispatch(action);
};

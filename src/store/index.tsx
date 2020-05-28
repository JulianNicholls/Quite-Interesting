import React from 'react';

export const FETCH_DATA: ActionType = 'FETCH_DATA';
export const ADD_FAVOURITE: ActionType = 'ADD_FAVOURITE';
export const REMOVE_FAVOURITE: ActionType = 'REMOVE_FAVOURITE';
// export const x: ActionType = 'x';

const initialState: IState = { episodes: [], favourites: [] };

export const Store: React.Context<IState | any> = React.createContext(
  initialState
);

function reducer(state: IState, action: IAction): IState {
  const episode = action.payload as IEpisode;

  switch (action.type) {
    case FETCH_DATA:
      return { ...state, episodes: action.payload as Array<IEpisode> };

    case ADD_FAVOURITE:
      return {
        ...state,
        favourites: [...state.favourites, episode],
      };

    case REMOVE_FAVOURITE:
      return {
        ...state,
        favourites: state.favourites.filter(({ id }) => id !== episode.id),
      };

    default:
      return state;
  }
}

export function StoreProvider({
  children,
}: JSX.ElementChildrenAttribute): JSX.Element {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>;
}

// https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes

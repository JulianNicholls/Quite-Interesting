import React from 'react';

import { FETCH_DATA, ADD_FAVOURITE, REMOVE_FAVOURITE } from './actions';

const initialState: State = { episodes: [], favourites: [], searchResults: [] };

export const Store: React.Context<State | any> = React.createContext(initialState);

function reducer(state: State, action: Action): State {
  const episode = action.payload as Episode;

  switch (action.type) {
    case FETCH_DATA:
      return { ...state, episodes: action.payload as Array<Episode> };

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

// Simple really!
interface SPProps {
  children: JSX.Element;
}

export const StoreProvider = ({ children }: SPProps): JSX.Element => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>;
};

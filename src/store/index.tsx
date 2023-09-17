import { createContext, useContext, useReducer } from 'react';

import { FETCH_DATA, ADD_FAVOURITE, REMOVE_FAVOURITE, SEARCH_RESULTS } from './actions';

const initialState: State = { episodes: [], favourites: [], searchResults: [] };

export const Store: React.Context<State | any> = createContext(initialState);

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

    case SEARCH_RESULTS:
      return {
        ...state,
        searchResults: action.payload as Array<SearchResult>,
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
  const [state, dispatch] = useReducer(reducer, initialState);

  return <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>;
};

export const useStoreSimple = () => useContext(Store);

type USType = {
  state: State;
  dispatch: Dispatch;
};

export const useStore = (): USType => {
  const context = useContext(Store);

  if (!context) throw new Error('useStore must be inside StoreProvider');

  return context;
};

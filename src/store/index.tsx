import React from 'react';

interface IState {
  episodes: [];
  favourites: [];
}

type ActionType = string;

interface IAction {
  type: ActionType;
  payload: any;
}

interface IProviderProps {
  children: JSX.Element;
}

export const FETCH_DATA: ActionType = 'FETCH_DATA';
// const x: ActionType = 'x';

const initialState: IState = { episodes: [], favourites: [] };

export const Store: React.Context<IState | any> = React.createContext(
  initialState
);

function reducer(state: IState, action: IAction): IState {
  switch (action.type) {
    case FETCH_DATA:
      return { ...state, episodes: action.payload };

    default:
      return state;
  }
}

export function StoreProvider(props: IProviderProps): JSX.Element {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <Store.Provider value={{ state, dispatch }}>{props.children}</Store.Provider>
  );
}

// https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes

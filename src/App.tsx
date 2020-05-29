import React, { useContext } from 'react';

import { Store } from './store';

import Header from './components/Header';

import './App.css';

interface AppProps {
  children: JSX.Element | Array<JSX.Element>;
  path: string;
}

const App = ({ children, path }: AppProps): JSX.Element => {
  const {
    state: { favourites },
  } = useContext(Store);

  return (
    <>
      <Header favourites={favourites.length} />
      {children}
    </>
  );
};

export default App;

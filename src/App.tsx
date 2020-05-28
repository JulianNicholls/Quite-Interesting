import React, { useContext } from 'react';
import { Link } from '@reach/router';

import { Store } from './store';

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
      <header>
        <h1>
          Rick and Morty
          <br />
          <small>Pick your favourite episode.</small>
        </h1>
        <div>
          <Link className="link" to="/">
            Home
          </Link>
          <Link className="link" to="/favourites">
            Favourites: {favourites.length === 0 ? 'none' : favourites.length}
          </Link>
        </div>
      </header>
      {children}
    </>
  );
};

export default App;

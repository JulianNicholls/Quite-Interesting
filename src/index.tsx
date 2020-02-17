import React from 'react';
import ReactDOM from 'react-dom';
import { Router, RouteComponentProps } from '@reach/router';

import App from './App';
import { StoreProvider } from './store';
import HomePage from './components/HomePage';
import FavouritesPage from './components/FavouritesPage';

const RouterPage = (props: { pageComponent: JSX.Element } & RouteComponentProps) =>
  props.pageComponent;

ReactDOM.render(
  <StoreProvider>
    <Router>
      <App path="/">
        <RouterPage path="/" pageComponent={<HomePage />} />
        <RouterPage path="/favourites" pageComponent={<FavouritesPage />} />
      </App>
    </Router>
  </StoreProvider>,
  document.getElementById('root')
);

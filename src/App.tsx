import { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Store } from './store';

import Header from './components/Header';
import HomePage from './components/HomePage';
import FavouritesPage from './components/FavouritesPage';

import './App.css';

const App = (): JSX.Element => {
  const {
    state: { favourites },
  } = useContext(Store);

  return (
    <>
      <Header favourites={favourites.length} />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favourites" element={<FavouritesPage />} />
      </Routes>

      <footer>
        &copy; <a href="https://reallybigshoe.co.uk">ReallyBigShoe</a> 2020-2023. All data supplied
        by <a href="http://tvmaze.com">TV Maze</a>
      </footer>
    </>
  );
};

export default App;

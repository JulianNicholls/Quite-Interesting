import React from 'react';
import { Link } from '@reach/router';

interface HProps {
  favourites: number;
}

const Header = ({ favourites }: HProps) => {
  return (
    <header>
      <h1>
        Quite Interesting
        <br />
        <small>Pick your favourite episodes.</small>
      </h1>
      <div>
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/favourites">
          Favourites: <strong>{favourites === 0 ? 'none' : favourites}</strong>
        </Link>
      </div>
    </header>
  );
};

export default Header;

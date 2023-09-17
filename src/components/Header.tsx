import { useState, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';

import { useStore } from '../store';
import { search } from '../store/actions';

interface HProps {
  favourites: number;
}

const Header = ({ favourites }: HProps) => {
  const store = useStore();
  const {
    state: { searchResults },
    dispatch,
  } = store;

  const [term, setTerm] = useState('');

  const doSearch = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);

    setTerm(e.target.value);
    search(e.target.value, dispatch);
  };

  return (
    <>
      <header>
        <h1>
          Quite Interesting
          <br />
          <small>Pick your favourite episodes.</small>
        </h1>

        <form>
          <label htmlFor="term">Search:</label>
          <input id="term" type="text" value={term} onChange={doSearch} />
        </form>

        <div>
          <Link className="link" to="/">
            Home
          </Link>

          <Link className="link" to="/favourites">
            Favourites: <strong>{favourites === 0 ? 'none' : favourites}</strong>
          </Link>
        </div>
      </header>
      <div style={{ display: 'flex', justifyContent: 'start' }}>
        {searchResults.map((result: SearchResult) => (
          <div style={{ marginInlineEnd: '1rem' }} key={result.show.id}>
            {result.show.name}
          </div>
        ))}
      </div>
    </>
  );
};

export default Header;

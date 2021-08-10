import { useEffect, useRef, useState } from 'react';
// Styles
import { Wrapper, Content } from './SearchBar.style';

import searchIcon from '../../images/search-icon.svg';

const SearchBar = ({ setSearchTherm }) => {
  const [state, setState] = useState('');
  const initial = useRef(true);

  //USE EFFECT
  useEffect(() => {
    if (initial.current) {
      initial.current = false;
      return;
    }

    const timer = setTimeout(() => {
      setSearchTherm(state);
    }, 500);

    return () => clearTimeout(timer);
  }, [state, setSearchTherm]);

  return (
    <Wrapper>
      <Content>
        <img src={searchIcon} alt="search-icon" />
        <input
          type="text"
          placeholder="Search Text"
          onChange={(event) => setState(event.currentTarget.value)}
          value={state}
        />
      </Content>
    </Wrapper>
  );
};

export default SearchBar;

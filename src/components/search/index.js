import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { createSearchParams } from 'react-router-dom';

const Search = () => {

  // get navigate function
  const navigate = useNavigate();

  const searchInputRef = useRef();

  const onSearchHandler = (e) => {
    e.preventDefault();

    const searchQuery = {
      name: searchInputRef.current.value
    }

    // use createSearchParams 
    const query = createSearchParams(searchQuery);

    // redirect user to path
    navigate({
      pathname: "search",
      search: `?${query}`
    })
  };

  return (
    <form onSubmit={onSearchHandler} className="search-form">
      <input type="text" className="search" ref={searchInputRef} />
      <button type="submit" className="search-button">
        🔎
      </button>
    </form>
  );
};

export default Search;

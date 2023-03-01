import React from "react";

function SearchBar({ handleSearch, onSort }) {
    
  function handleKeyUp(e) { 
    handleSearch(e.target.value);
  }

  function handleOnSort(e) { 
    onSort(e.target.value);
  }

  return (
    <div className="search">
      <div>
        <input
          type="checkbox"
          id="sort"
          name="sort"
          onChange={handleOnSort}
        />
    </div>
      <label>
        Search
        <input
          onKeyUp={handleKeyUp}
          className="searchTerm"
          placeholder="Search person?">
        </input>
    </label>
    </div>
  );
}

export default SearchBar;

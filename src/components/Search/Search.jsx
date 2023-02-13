import React from "react";
/*
takes two props as parameters - setSearch, which handles the state of the search input,
and updatePageNumber, which updates the page number to 1 when a new search is initiated.
*/
const Search = ({ setSearch, updatePageNumber }) => {
  /*When the text in the input element is changed, the setSearch prop is called to update the search state,
   and the updatePageNumber prop is called to reset the page number to 1. 
  */
  return (
    <>
      <label className="labelHidden" htmlFor="search">
        Search Character
      </label>
      <form className="search">
        <input
          id="search"
          onChange={(event) => {
            updatePageNumber(1);
            setSearch(event.target.value);
          }}
          placeholder="Search for characters"
          className="search__input"
          type="text"
        />
      </form>
    </>
  );
};

export default Search;

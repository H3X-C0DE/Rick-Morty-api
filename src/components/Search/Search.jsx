import React from "react";
/*
takes two props as parameters - setSearch, which handles the state of the search input,
and updatePageNumber, which updates the page number to 1 when a new search is initiated.
*/
const Search = ({ setSearch, updatePageNumber }) => {
  let searchBtn = (event) => {
    event.preventDefault();
  };
  /*When the text in the input element is changed, the setSearch prop is called to update the search state,
   and the updatePageNumber prop is called to reset the page number to 1. 
  */
  return (
    <form className="">
      <input
        onChange={(event) => {
          updatePageNumber(1);
          setSearch(event.target.value);
        }}
        placeholder="Search for characters"
        className=""
        type="text"
      />
      <button onClick={searchBtn} className="">
        Search
      </button>
    </form>
  );
};

export default Search;

import React, { useState } from "react";
import Gender from "./category/Gender";
import Species from "./category/Species";
import Status from "./category/Status";

const Filter = ({
  // pageNumber,
  updatePageNumber,
  updateStatus,
  updateGender,
  updateSpecies,
}) => {
  let clear = () => {
    updateStatus("");
    updateGender("");
    updateSpecies("");
    updatePageNumber(1);
    window.location.reload(false);
  };
  const [open, setOpen] = useState(false);

  const toggleDropdown = () => {
    setOpen(!open);
  };

  return (
    <div className="filter">
      {/* <h2 className="filter__title">Filters</h2> */}

      {/* <button className="filter__btn filterToggle" onClick={toggleDropdown}>
        Filters
      </button>
      {open && ( */}
      <div>
        <Status
          updatePageNumber={updatePageNumber}
          updateStatus={updateStatus}
        />
        <b class="hr"></b>
        <Species
          updatePageNumber={updatePageNumber}
          updateSpecies={updateSpecies}
        />
        <b class="hr"></b>
        <Gender
          updatePageNumber={updatePageNumber}
          updateGender={updateGender}
        />
      </div>
      <b class="hr"></b>

      <button onClick={clear} className="filter__btn clear">
        Clear Filters
      </button>

      {/* )} */}
    </div>
  );
};

export default Filter;

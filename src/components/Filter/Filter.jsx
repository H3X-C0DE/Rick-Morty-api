import React, { useState } from "react";
import Gender from "./Category/Gender";
import Species from "./Category/Species";
import Status from "./Category/Status";

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

      <button onClick={clear} className="filter__btn clear">
        Clear Filters
      </button>

      <button className="filter__btn filterToggle" onClick={toggleDropdown}>
        Filters
      </button>
      {open && (
        <div>
          <Status
            updatePageNumber={updatePageNumber}
            updateStatus={updateStatus}
          />
          <Species
            updatePageNumber={updatePageNumber}
            updateSpecies={updateSpecies}
          />
          <Gender
            updatePageNumber={updatePageNumber}
            updateGender={updateGender}
          />
        </div>
      )}
    </div>
  );
};

export default Filter;

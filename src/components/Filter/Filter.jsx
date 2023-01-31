import React from "react";
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

  return (
    <div className="filter">
      <div>
        <Status
          updatePageNumber={updatePageNumber}
          updateStatus={updateStatus}
        />
        <b className="hr"></b>
        <Species
          updatePageNumber={updatePageNumber}
          updateSpecies={updateSpecies}
        />
        <b className="hr"></b>
        <Gender
          updatePageNumber={updatePageNumber}
          updateGender={updateGender}
        />
      </div>
      <b className="hr"></b>

      <button onClick={clear} className="filter__btn clear">
        Clear Filters
      </button>

      {/* )} */}
    </div>
  );
};

export default Filter;

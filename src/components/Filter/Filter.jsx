import { React } from "react";
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
      {/* <h2 className="filter__title">Filters</h2> */}
      <button onClick={clear} className="filter__btn">
        Clear Filters
      </button>
      <div className="filter__tags" id="filterTags">
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
    </div>
  );
};

export default Filter;

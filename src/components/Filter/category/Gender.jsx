import React from "react";
import FilterBTN from "../FilterBTN";

const Gender = ({ updateGender, updatePageNumber }) => {
  let genders = ["female", "male", "genderless", "unknown"];
  return (
    <>
      <div className="filterTags">
        {genders.map((items, index) => {
          return (
            <FilterBTN
              name="gender"
              index={index}
              key={index}
              updatePageNumber={updatePageNumber}
              task={updateGender}
              input={items}
            />
          );
        })}
      </div>
    </>
  );
};

export default Gender;

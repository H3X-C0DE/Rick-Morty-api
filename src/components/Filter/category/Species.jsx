import React from "react";
import FilterBTN from "../FilterBTN";

const Species = ({ updateSpecies, updatePageNumber }) => {
  let species = [
    "Human",
    "Alien",
    "Humanoid",
    "Poopybutthole",
    "Mythological",
    "Unknown",
    "Animal",
    "Disease",
    "Robot",
    "Cronenberg",
    "Planet",
  ];
  return (
    <div className="filterTags">
      {species.map((item, index) => {
        return (
          <FilterBTN
            name="species"
            index={index}
            key={index}
            updatePageNumber={updatePageNumber}
            task={updateSpecies}
            input={item}
          />
        );
      })}
    </div>
  );
};

export default Species;

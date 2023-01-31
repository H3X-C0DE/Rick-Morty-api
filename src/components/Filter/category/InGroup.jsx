import React from "react";

export default function InputGroup({ name, changeID, total }) {
  return (
    <div className="input-group">
      <select
        onChange={(e) => changeID(e.target.value)}
        className="input-group__form"
        id={name}
      >
        <option value="1">Choose...</option>
        {[...Array(total).keys()].map((id, index) => {
          return (
            <option value={id + 1}>
              {name} - {id + 1}
            </option>
          );
        })}
      </select>
    </div>
  );
}

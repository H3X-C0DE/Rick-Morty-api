const FilterBTN = ({ input, task, updatePageNumber, index, name }) => {
  return (
    <>
      <input
        className="filterBtn isChecked"
        type="radio"
        name={name}
        id={`${name}-${index}`}
      />
      <label
        onClick={(x) => {
          task(input);
          updatePageNumber(1);
        }}
        className="filterBtn__label"
        for={`${name}-${index}`}
      >
        {input}
      </label>
    </>
  );
};
export default FilterBTN;

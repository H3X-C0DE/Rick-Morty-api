import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
const Pagination = ({ pageNumber, info, updatePageNumber }) => {
  let pageChange = (data) => {
    updatePageNumber(data.selected + 1);
  };

  const [width, setWidth] = useState(window.innerWidth);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <>
      <ReactPaginate
        className="pagination"
        forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
        previousLabel="prev"
        nextLabel="next"
        previousClassName="pagination__prev"
        nextClassName="pagination__next"
        activeClassName="active"
        marginPagesDisplayed={width < 576 ? 1 : 2}
        pageRangeDisplayed={width < 576 ? 1 : 2}
        pageCount={info?.pages}
        onPageChange={pageChange}
        pageClassName="pagination__number"
        pageLinkClassName="page-link"
      />
    </>
  );
};

export default Pagination;

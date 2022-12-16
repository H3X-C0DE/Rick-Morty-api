import React from "react";
import ReactPaginate from "react-paginate";
import "../Pagination/pagination.css";
const Pagination = ({ pageNumber, info, updatePageNumber }) => {
  let pageChange = (data) => {
    updatePageNumber(data.selected + 1);
  };

  return (
    <>
      <ReactPaginate
        className="pagination"
        nextLabel="Next"
        forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
        previousLabel="Prev"
        previousClassName="btn prev"
        nextClassName="btn next"
        activeClassName="active"
        pageCount={info?.pages}
        onPageChange={pageChange}
        pageClassName="page-item"
        pageLinkClassName="page-link"
      />
    </>
  );
};

export default Pagination;

import React from "react";
import ReactPaginate from "react-paginate";

interface IPaginationProps {
  pageCount: number;
  handlePageClick: (selectedItem: { selected: number }) => void;
}

export const Pagination: React.FC<IPaginationProps> = ({
  pageCount,
  handlePageClick,
}) => {
  return (
    <ReactPaginate
      nextLabel=">"
      onPageChange={handlePageClick}
      pageRangeDisplayed={3}
      marginPagesDisplayed={2}
      pageCount={pageCount}
      previousLabel="<"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      previousClassName="page-item"
      previousLinkClassName="page-link"
      nextClassName="page-item"
      nextLinkClassName="page-link"
      breakLabel="..."
      breakClassName="page-item"
      breakLinkClassName="page-link"
      containerClassName="pagination"
      activeClassName="active"
    // renderOnZeroPageCount={null}
    />
  );
};
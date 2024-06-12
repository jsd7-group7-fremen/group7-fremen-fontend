import React from "react";
import { BsChevronRight } from "react-icons/bs";
import { BsChevronLeft } from "react-icons/bs";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevClick = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="join flex justify-center my-8">
      <button
        className="btn btn-outline mx-2 px-4 rounded-full"
        onClick={handlePrevClick}
      >
        <BsChevronLeft />
        Prev
      </button>
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          className={`btn btn-circle btn-outline mx-1 ${
            currentPage === index + 1 ? "active" : ""
          }`}
          onClick={() => onPageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}
      <button
        className="btn btn-outline mx-2 px-4 rounded-full"
        onClick={handleNextClick}
      >
        Next
        <BsChevronRight />
      </button>
    </div>
  );
};

export default Pagination;

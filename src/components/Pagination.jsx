import PropTypes from "prop-types";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";

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

  // Create an array of all page numbers
  const pageNumbers = [...Array(totalPages).keys()].map((num) => num + 1);

  return (
    <div className="flex justify-center my-8">
      <button
        className="btn mx-2 rounded-full lg:w-32 sm:w-24 bg-black text-white font-bold hover:bg-gray-400 flex items-center justify-center"
        onClick={handlePrevClick}
        disabled={currentPage === 1} // Disabled on the first page, button doesn't work
      >
        <BsChevronLeft className="mr-2" />
        PREV
      </button>
      {pageNumbers.map((pageNum) => (
        <button
          key={pageNum}
          className={`btn btn-circle btn-outline hover:text-white hover:bg-black mx-1 lg:w-12 sm:w-10 ${
            currentPage === pageNum ? "bg-black text-white" : ""
          }`}
          onClick={() => onPageChange(pageNum)}
        >
          {pageNum}
        </button>
      ))}
      <button
        className="btn mx-2 rounded-full lg:w-32 sm:w-24 bg-black text-white font-bold hover:bg-gray-400 flex items-center justify-center"
        onClick={handleNextClick}
        disabled={currentPage === totalPages} // Disabled on the last page, button doesn't work
      >
        NEXT
        <BsChevronRight className="ml-2" />
      </button>
    </div>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;

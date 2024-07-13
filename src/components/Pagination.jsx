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

  // สร้าง array ของหมายเลขหน้าทั้งหมด
  const pageNumbers = [...Array(totalPages).keys()].map((num) => num + 1);

  return (
    <div className="flex justify-center my-8">
      <button
        className="btn mx-2 rounded-full w-32 bg-black text-white font-bold hover:bg-gray-400 flex items-center justify-center"
        onClick={handlePrevClick}
        disabled={currentPage === 1} // disabled เฉพาะหน้าแรก ปุ่มไม่ทำงาน
      >
        <BsChevronLeft className="mr-2" />
        PREV
      </button>
      {pageNumbers.map((pageNum) => (
        <button
          key={pageNum}
          className={`btn btn-circle btn-outline hover:text-white hover:bg-black mx-1 ${
            currentPage === pageNum ? "bg-black text-white" : ""
          }`}
          onClick={() => onPageChange(pageNum)}
        >
          {pageNum}
        </button>
      ))}
      <button
        className="btn mx-2 rounded-full w-32 bg-black text-white font-bold hover:bg-gray-400 flex items-center justify-center"
        onClick={handleNextClick}
        disabled={currentPage === totalPages} // disabled เฉพาะหน้าสุดท้าย ปุ่มไม่ทำงาน
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

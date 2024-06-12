import React, { useState } from "react";
import { BsChevronRight } from "react-icons/bs";
import { BsChevronLeft } from "react-icons/bs";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const numSlides = 2;
  const imageExtensions = [".jpg", ".png"];

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? numSlides - 1 : prevSlide - 1
    );
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === numSlides - 1 ? 0 : prevSlide + 1
    );
  };

  return (
    <div className="max-w-2xl mx-auto relative">
      <div id="default-carousel" className="relative" data-carousel="static">
        <div className="overflow-hidden relative h-56 rounded-lg sm:h-56 2xl:h-96">
          {[...Array(numSlides)].map((_, index) => (
            <div
              key={index}
              className={`${
                index === currentSlide ? "block" : "hidden"
              } duration-800 ease-in-out`}
              data-carousel-item
            >
              {imageExtensions.map((ext) => (
                <img
                  key={index + ext}
                  src={`./images/carousel/promotion${index + 1}${ext}`}
                  className="block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg"
                />
              ))}
            </div>
          ))}
        </div>

        <button
          type="button"
          className="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
          data-carousel-prev
          onClick={handlePrevSlide}
        >
          <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/80 dark:group-hover:bg-gray-800/60 group-focus:outline-none">
            <BsChevronLeft />
            <span className="hidden">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
          data-carousel-next
          onClick={handleNextSlide}
        >
          <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/80 dark:group-hover:bg-gray-800/60 group-focus:outline-none">
            <BsChevronRight />
            <span className="hidden">Next</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;

import React, { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      document.getElementById("hill6").style.transform = `translate(${
        -scrollPosition * 0.25
      }px, -${scrollPosition * 0.25}px)`;
      document.getElementById("hill3").style.transform = `translateY(${
        scrollPosition * 0.0
      }px)`;
      document.getElementById("hill5").style.transform = `translate(${
        scrollPosition * 0.25
      }px, -${scrollPosition * 0.25}px)`;
      document.getElementById("men").style.transform = `translateY(${
        scrollPosition * -0.7
      }px)`;
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="overflow-hidden">
      <section className="flex justify-center items-center h-screen bg-white mb-44">
        <img
          src="./images/hero/hill5.png"
          alt="hill5"
          className="absolute top-0 left-0 w-full pointer-events-none"
          id="hill5"
        />
        <img
          src="./images/hero/hill6.png"
          alt="hill6"
          className="absolute top-0 left-0 w-full pointer-events-none"
          id="hill6"
        />
        <img
          src="./images/hero/hill3.png"
          alt="hill3"
          className="absolute top-0 left-0 w-full pointer-events-none"
          id="hill3"
        />

        <div className="absolute" id="men">
          <div className="flex justify-center">
            <img
              src="./images/hero/men.png"
              alt="men"
              className="w-96 h-auto drop-shadow-[0_5px_0px_rgba(253,224,71)]"
            />
          </div>
          <h2 className="flex justify-center text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-green-200 to-green-500 bg-transparent h-full">
            FREMAN STORE
          </h2>
        </div>
      </section>
    </div>
  );
};

export default Hero;

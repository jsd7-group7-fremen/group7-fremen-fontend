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
      // document.getElementById("sunlight").style.transform = `translateY(${
      //   scrollPosition * 0.15
      // }px)`;
      document.getElementById("men").style.transform = `translateY(${
        scrollPosition * -0.5
      }px)`;
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="flex justify-center items-center h-screen bg-white mb-44 overflow-hidden">
      <img
        src="./images/hero/hill5.png"
        alt="hill5"
        className="absolute top-0 left-0 w-full pointer-events-none"
        id="hill5"
        style={{ position: "absolute" }}
      />
      <img
        src="./images/hero/hill6.png"
        alt="hill6"
        className="absolute top-0 left-0 w-full pointer-events-none"
        id="hill6"
        style={{ position: "absolute" }}
      />
      <img
        src="./images/hero/hill3.png"
        alt="hill3"
        className="absolute top-0 left-0 w-full pointer-events-none"
        id="hill3"
      />
      {/* <img
        src="./images/hero/sunlight.png"
        alt="sunlight"
        className="absolute top-0 left-0 w-full pointer-events-none"
        id="sunlight"
        style={{ position: "absolute" }}
      /> */}
      <div className="absolute" id="men" style={{ position: "absolute" }}>
        <img src="./images/hero/men.png" alt="men" className="w-96 h-auto" />
        <h2 className="flex justify-center text-white text-7xl font-bold drop-shadow-xl">
          FREMAN STORE
        </h2>
      </div>
    </section>
  );
};

export default Hero;

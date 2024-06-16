import React from "react";
import "./logo.css";

const logo = [
  { src: "./images/logo/logo-adidas-new.jpeg", alt: "logo-adidas-new" },
  { src: "./images/logo/columbia-logo.jpeg", alt: "columbia-logo" },
  { src: "./images/logo/hoka-logo.jpeg", alt: "hoka-logo" },
  { src: "./images/logo/logo-asics.jpeg", alt: "logo-asics" },
  { src: "./images/logo/logo-crocs-hp-new.jpeg", alt: "logo-crocs-hp-new" },
  { src: "./images/logo/logo-nb-hp.jpeg", alt: "logo-nb-hp" },
  { src: "./images/logo/logo-nike-hp.jpeg", alt: "logo-nike-hp" },
  {
    src: "./images/logo/logo-reebok-homepage.jpeg",
    alt: "logo-reebok-homepage",
  },
  { src: "./images/logo/logo-sport-05.png", alt: "logo-sport-05" },
  { src: "./images/logo/logo-sport-20.png", alt: "logo-sport-20" },
];

const LogoSlide = () => {
  return (
    <div className="w-full">
      <div className="carousel h-20 my-8 flex justify-center gap-8 animate-slide overflow:hidden">
        {logo.map((logo, index) => (
          <div key={index} className="carousel-item">
            <img src={logo.src} alt={logo.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoSlide;

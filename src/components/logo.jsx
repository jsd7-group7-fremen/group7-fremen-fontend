import React from "react";
import "./logo.css";

const logo = [
  { src: "./images/Logo/logo-adidas-new.jpeg", alt: "logo-adidas-new" },
  { src: "./images/Logo/columbia-logo.jpeg", alt: "columbia-logo" },
  { src: "./images/Logo/hoka-logo.jpeg", alt: "hoka-logo" },
  { src: "./images/Logo/logo-asics.jpeg", alt: "logo-asics" },
  { src: "./images/Logo/logo-crocs-hp-new.jpeg", alt: "logo-crocs-hp-new" },
  { src: "./images/Logo/logo-nb-hp.jpeg", alt: "logo-nb-hp" },
  { src: "./images/Logo/logo-nike-hp.jpeg", alt: "logo-nike-hp" },
  {
    src: "./images/Logo/logo-reebok-homepage.jpeg",
    alt: "logo-reebok-homepage",
  },
  { src: "./images/Logo/logo-sport-05.png", alt: "logo-sport-05" },
  { src: "./images/Logo/logo-sport-20.png", alt: "logo-sport-20" },
];

const LogoSlide = () => {
  return (
    <div className="w-full overflow-hidden logo pt-10">
      <div className="carousel">
        <div className="carousel-inner">
          {logo.map((logo, index) => (
            <div key={index} className="carousel-item">
              <img src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoSlide;

import "./logo.css";
import adidasLogo from "/images/Logo/logo-adidas-new.jpeg";
import columbiaLogo from "/images/Logo/columbia-logo.jpeg";
import hokaLogo from "/images/Logo/hoka-logo.jpeg";
import asicsLogo from "/images/Logo/logo-asics.jpeg";
import crocsLogo from "/images/Logo/logo-crocs-hp-new.jpeg";
import nbLogo from "/images/Logo/logo-nb-hp.jpeg";
import nikeLogo from "/images/Logo/logo-nike-hp.jpeg";
import reebokLogo from "/images/Logo/logo-reebok-homepage.jpeg";
import sport05Logo from "/images/Logo/logo-sport-05.png";
import sport20Logo from "/images/Logo/logo-sport-20.png";

const logo = [
  {
    src: adidasLogo,
    alt: "logo-adidas-new",
  },
  {
    src: columbiaLogo,
    alt: "columbia-logo",
  },
  {
    src: hokaLogo,
    alt: "hoka-logo",
  },
  {
    src: asicsLogo,
    alt: "logo-asics",
  },
  {
    src: crocsLogo,
    alt: "logo-crocs-hp-new",
  },
  {
    src: nbLogo,
    alt: "logo-nb-hp",
  },
  {
    src: nikeLogo,
    alt: "logo-nike-hp",
  },
  {
    src: reebokLogo,
    alt: "logo-reebok-homepage",
  },
  {
    src: sport05Logo,
    alt: "logo-sport-05",
  },
  {
    src: sport20Logo,
    alt: "logo-sport-20",
  },
];

const LogoSlide = () => {
  return (
    <div className="overflow-hidden pt-10">
      <div className="carousel">
        <div className="carousel-inner lg:gap-x-4">
          {logo.map((logo, index) => (
            <div key={index} className="carousel-item lg:logo sm:logo">
              <img src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoSlide;

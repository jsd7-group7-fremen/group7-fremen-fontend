import MocNav from "./components/MocNav";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import LogoSlide from "./components/logo";
import Pagination from "./components/Pagination";
import ProductsRandom from "./components/ProductsRandom";
import "./index.css";

function App() {
  return (
    <>
      <MocNav />
      <Navbar />
      <Hero />
      <Carousel />
      <LogoSlide />
      <ProductsRandom />
      <Pagination />
      <Footer />
    </>
  );
}

export default App;

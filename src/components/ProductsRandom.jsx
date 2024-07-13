import { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "./Pagination";
import PropTypes from "prop-types";

const ProductsRandom = ({ category }) => {
  const [products, setProducts] = useState([]);
  const [shuffledProducts, setShuffledProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 2;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let url = "http://localhost:8080/products";
        if (category) {
          url += `?category=${category}`;
        }
        const response = await axios.get(url);
        const productsData = response.data.products;
        setProducts(Array.isArray(productsData) ? productsData : []);
      } catch (error) {
        console.error("Error fetching products:", error);
        setProducts([]);
      }
    };

    fetchProducts();
  }, [category]);

  useEffect(() => {
    if (products.length > 0) {
      setShuffledProducts(randomProducts(products));
    }
  }, [products]);

  const randomProducts = (array) => {
    const newArray = [];
    const oldArray = [...array];
    while (oldArray.length > 0) {
      const index = Math.floor(Math.random() * oldArray.length);
      newArray.push(oldArray[index]);
      oldArray.splice(index, 1);
    }
    return newArray;
  };

  const paginatedProducts = () => {
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    return shuffledProducts.slice(startIndex, endIndex);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <div className="lg:grid lg:grid-cols-3 gap-10 sm:grid sm:grid-cols-1 sm:flex-col sm:content-center my-10">
        {paginatedProducts().map((item) => (
          <div
            key={item._id}
            className="card w-96 bg-gray-300 shadow-inner transition duration-300 ease-in-out justify-self-center sm:justify-center sm:my-4"
          >
            <figure className="px-10">
              <img
                src={item.productImages.front}
                alt="Shoes"
                className="w-48 h-42 transition duration-300 ease-in-out hover:scale-110"
              />
            </figure>
            <div className="card-body">
              <div className="card-title flex flex-col">
                <h2 className="font-bold text-2xl text-center">{item.brand}</h2>
                <p className="font-bold text-lg text-center">
                  Model : {item.productName}
                </p>
                <p className="font-bold text-lg text-center">
                  Price : ${item.unitPrice}
                </p>
              </div>
              <div className="card-detail items-start text-start py-1">
                <p className="text-left">
                  <b className="font-extrabold">Color :</b> {item.color}
                </p>
                <p className="text-left">
                  <b className="font-extrabold">Style :</b>{" "}
                  {Array.isArray(item.category)
                    ? item.category.join("/")
                    : item.category}
                </p>
              </div>
              <div className="flex justify-center sm:justify-start">
                <button className="btn px-4 py-2 bg-black text-white rounded-xl font-bold hover:bg-gray-400 w-full">
                  SEE DETAILS
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(products.length / productsPerPage)}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

ProductsRandom.propTypes = {
  category: PropTypes.string, // Ensure category is a string
};

export default ProductsRandom;

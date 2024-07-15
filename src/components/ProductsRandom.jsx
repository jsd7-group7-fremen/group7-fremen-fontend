import { useEffect, useState } from "react";
import axiosInstance from "../utils/axiosInstance";
import Pagination from "./Pagination";
import PropTypes from "prop-types";
import { Link, useOutletContext } from "react-router-dom";

const ProductsRandom = ({ category }) => {
  const { searchQuery } = useOutletContext();
  const [products, setProducts] = useState([]);
  const [shuffledProducts, setShuffledProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let url = "/products";
        if (category) {
          url += `?category=${category}`;
        }
        const response = await axiosInstance.get(url);
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
    const filteredProducts = searchQuery
      ? shuffledProducts.filter((product) =>
          product.productName.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : shuffledProducts;
    return filteredProducts.slice(startIndex, endIndex);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="lg:grid lg:grid-cols-3 gap-x-40 gap-y-10 sm:grid sm:grid-cols-1 sm:flex-col sm:items-center my-10">
        {paginatedProducts().map((item) => (
          <div
            key={item._id}
            className="card lg:w-96 sm:w-full bg-gray-300 shadow-inner transition duration-300 ease-in-out justify-self-center sm:justify-center sm:my-4 mb-10"
          >
            <figure className="px-10 pt-10">
              <img
                src={item.productImages.front}
                alt="Shoes"
                className="w-38 h-40 sm:w-40 sm:h-32 transition duration-300 ease-in-out hover:scale-105 bg-transparent sm:rounded-lg rounded-lg"
                style={{ background: "transparent" }}
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
                <Link to={`/ProductInfo/${item._id}`}>
                  <button className="btn px-4 py-2 bg-black text-white rounded-xl font-bold hover:bg-gray-400 w-80">
                    SEE DETAILS
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(
          (searchQuery
            ? shuffledProducts.filter((product) =>
                product.productName
                  .toLowerCase()
                  .includes(searchQuery.toLowerCase())
              ).length
            : shuffledProducts.length) / productsPerPage
        )}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

ProductsRandom.propTypes = {
  category: PropTypes.string,
};

export default ProductsRandom;

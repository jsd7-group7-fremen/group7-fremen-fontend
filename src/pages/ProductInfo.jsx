import Footer from "../components/Footer";
import Popup from "../components/popup";
import { useState, useEffect } from "react";
import axiosInstance from "../utils/axiosInstance";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faChevronUp,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { jwtDecode } from "jwt-decode";

const ProductInfo = () => {
  const { productId } = useParams();
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [isShippingOpen, setIsShippingOpen] = useState(false);
  const [isReviewOpen, setIsReviewOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [cartItem, setCartItem] = useState(null);
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    // decode
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        console.log(decodedToken);
        console.log(decodedToken.id);
        setUserId(decodedToken.id);
      } catch (error) {
        console.error("Error decoding token:", error);
      }
    } else {
      console.log("No token found in local storage.");
    }
  }, []);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axiosInstance.get(`/products/${productId}`);
        setProduct(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
        alert(
          "An unexpected error occurred while fetching the product. Please try again."
        );
      } finally {
        setLoading(false);
      }
    };

    if (productId) {
      fetchProduct();
    }
  }, [productId]);

  const toggleDetail = () => {
    setIsDetailOpen(!isDetailOpen);
  };

  const toggleShipping = () => {
    setIsShippingOpen(!isShippingOpen);
  };

  const toggleReview = () => {
    setIsReviewOpen(!isReviewOpen);
  };

  const handleAddToCart = async (e) => {
    e.preventDefault();

    const item = {
      _id: userId,
      productId: product._id,
      quantity: 1,
      size: product.sizeUs,
      // name: product.productName,
      // size: product.sizeUs,
      // price: product.unitPrice,
      // imageUrl: product.productImages?.side,
    };

    try {
      await axiosInstance.post("/carts/", item);
      // If the post request is successful, set the cart item and show the popup
      setCartItem(item);
      setIsPopupOpen(true);
    } catch (error) {
      console.error(error);
      alert(
        "An unexpected error occurred while adding the item to the cart. Please try again."
      );
    }
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="md:mx-28 md:flex gap-3">
        <div className="md:w-2/3">
          <div className="hidden md:grid grid-cols-2 gap-0.5 md:pt-24 mb-28">
            <img src={product?.productImages?.top} alt="Image top" />
            <img src={product?.productImages?.side} alt="Image side" />
            <img src={product?.productImages?.rear} alt="Image rear" />
            <img src={product?.productImages?.bottom} alt="Image bottom" />
          </div>
        </div>
        <div className="pt-28 md:w-1/3">
          <div className="px-8 pb-8 md:pb-0">
            <h1 className="text-4xl">{product.productName}</h1>
            <div className="inline-flex space-x-2 pt-2">
              {product?.category?.map((category, index) => (
                <p className="text-xl" key={index}>
                  {category}
                </p>
              ))}
            </div>
            <p className="text-2xl mt-4 font-bold">THB {product.unitPrice}</p>
          </div>
          <div className="w-full md:hidden ">
            <img
              src={product?.productImages?.isometric}
              alt="Image"
              className="mx-"
            />
          </div>
          <div className="ml-8 w-1/3">
            <img
              src={product?.productImages?.side}
              alt="Image side"
              className="mx-auto"
            />
          </div>
          <div className="px-8 md:mt-1">
            <p className="text-xl md:text-lg md:font-semibold">
              {product.color}
            </p>
            <div className="md:flex justify-between pt-8">
              <p className="text-xl pb-2 md:text-xl md:font-bold">Size</p>
              {/* <a
                href="https://www.nike.com/th/size-fit/womens-footwear"
                className="hidden md:block md:text-lg md:text-gray-600 md:underline underline-offset-2"
              >
                Size guide
              </a> */}
            </div>
            <div className="flex justify-between">
              <button className="border rounded-xl py-2 px-8 hover:bg-gray-400">
                US {product.sizeUs}
              </button>
            </div>
            <div className="mt-4 mb-6">
              <button
                className="btn px-4 py-2 bg-black text-white rounded-xl w-full font-bold hover:bg-gray-400 mb-2"
                onClick={handleAddToCart}
              >
                ADD TO CART
              </button>
              {/* <button className="btn px-4 py-2 bg-white text-black border-slate-400 rounded-xl w-full font-bold hover:bg-gray-400">
                FAVORITE ♡
              </button> */}
            </div>
            {isPopupOpen && (
              <Popup
                className="flex justify-center items-center"
                item={cartItem}
                onClose={closePopup}
              />
            )}
            <div className="pt-8 pb-12">
              <div>
                <hr />
                <h2
                  className="flex justify-between underline underline-offset-2 text-xl py-6"
                  onClick={toggleDetail}
                >
                  Product Description
                  <FontAwesomeIcon
                    icon={isDetailOpen ? faChevronUp : faChevronDown}
                    className="ml-2"
                  />
                </h2>
                {isDetailOpen && (
                  <div>
                    <section className="mb-8">{product.description}</section>
                  </div>
                )}
              </div>
              <div>
                <hr />
                <h2
                  className="flex justify-between underline underline-offset-2 text-xl py-6"
                  onClick={toggleShipping}
                >
                  Shipping Details
                  <FontAwesomeIcon
                    icon={isShippingOpen ? faChevronUp : faChevronDown}
                    className="ml-2"
                  />
                </h2>
                {isShippingOpen && (
                  <div>
                    <p className="mb-4">
                      Free shipping for orders over 5500 THB.
                    </p>
                    <div className="mb-6">
                      <h2 className="text-xl font-semibold mb-2">Bangkok:</h2>
                      <ul className="list-disc pl-5">
                        <li>Standard delivery: 3-6 business days</li>
                        <li>Express delivery: 2-4 business days</li>
                      </ul>
                    </div>
                    <div className="mb-6">
                      <h2 className="text-xl font-semibold mb-2">
                        Samut Prakan:
                      </h2>
                      <ul className="list-disc pl-5">
                        <li>Standard delivery: 4-7 business days</li>
                        <li>Express delivery: 3-5 business days</li>
                      </ul>
                    </div>
                    <div className="mb-6">
                      <h2 className="text-xl font-semibold mb-2">
                        Nonthaburi:
                      </h2>
                      <ul className="list-disc pl-5">
                        <li>Standard delivery: 4-7 business days</li>
                        <li>Express delivery: 3-5 business days</li>
                      </ul>
                    </div>
                    <div className="mb-6">
                      <h2 className="text-xl font-semibold mb-2">
                        Other provinces:
                      </h2>
                      <ul className="list-disc pl-5">
                        <li>Standard delivery: 5-8 business days</li>
                        <li>Express delivery: 3-5 business days</li>
                      </ul>
                    </div>
                    <p className="mb-4">
                      Orders are processed and delivered Monday-Friday, except
                      on public holidays. Free shipping for returns for Nike
                      members.
                      <a href="#" className="text-blue-500 underline">
                        Return policy exceptions
                      </a>
                    </p>
                  </div>
                )}
              </div>
              <div>
                <hr />
                {/* <h2
                  className="flex justify-between underline underline-offset-2 text-xl py-6"
                  onClick={toggleReview}
                >
                  Review
                  <div className="flex justify-between">
                    <div className="pr-2">
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                    </div>
                    <FontAwesomeIcon
                      icon={isReviewOpen ? faChevronUp : faChevronDown}
                      className="ml-2"
                    />
                  </div>
                </h2> */}
                {isReviewOpen && (
                  <div>{/* Add your review content here */}</div>
                )}
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductInfo;

import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import PropTypes from "prop-types";
import axiosInstance from "../utils/axiosInstance";
import SearchBar from "../components/SearchBar";

const Navbar = ({ setCategoryProducts }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
  const [userImage, setUserImage] = useState(null); // State to store user's image

  useEffect(() => {
    // Fetch user data after login
    if (isLoggedIn) {
      axiosInstance
        .get("/user/image")
        .then((response) => {
          setUserImage(response.data.user.image); // Assuming the response structure includes an 'image field
        })
        .catch((error) => {
          console.error("Error fetching user image:", error);
          setUserImage(null); // Reset image state on error
        });
    }
  }, [isLoggedIn]);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (searchQuery.trim() === "") return;

    try {
      const response = await axiosInstance.get(
        `/products?search=${searchQuery}`
      );
      setCategoryProducts(response.data.products);
    } catch (error) {
      console.error("Error fetching search results:", error);
      setCategoryProducts([]);
    }
  };

  const handleClearSearch = () => {
    setSearchQuery("");
  };

  const handleLogout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    setUserImage(null); // Clear user image state on logout
  };

  return (
    <div>
      <div className="bg-white flex items-center justify-between px-6 fixed w-full z-40">
        <div className="navbar-start">
          <figure>
            <Link to="/">
              <img
                src="/images/Logo/logo.png"
                alt="logo-brand"
                className="w-12 h-auto ml-2"
              />
            </Link>
          </figure>
        </div>
        <div className="navbar bg-white z-10 top-0 left-0 right-0 content-start flex justify-center">
          <div className="navbar-center hidden lg:flex">
            <div className="dropdown dropdown-hover">
              <Link to="/">
                <button
                  tabIndex="0"
                  role="button"
                  className="btn btn-ghost hover:bg-gray-50 hover:border-gray-300 m-1"
                >
                  HOME
                </button>
              </Link>
              <Link to="/Filter">
                <button
                  tabIndex="0"
                  role="button"
                  className="btn btn-ghost hover:bg-gray-50 hover:border-gray-300 m-1"
                >
                  PRODUCT
                </button>
              </Link>
            </div>
            <div className="dropdown dropdown-hover">
              <button
                tabIndex="0"
                role="button"
                className="btn btn-ghost hover:bg-gray-50 hover:border-gray-300 m-1"
              >
                MORE
              </button>
              <ul
                tabIndex="0"
                className="dropdown-content z-[1] menu p-2 shadow bg-white rounded-box"
              >
                <ul className="menu xl:flex flex-row lg:min-w-max bg-gray-50 rounded-box">
                  <li>
                    <ul>
                      <li>
                        <Link to="/morelogin">Login</Link>
                      </li>
                      <li>
                        <Link to="/moreregister">Register</Link>
                      </li>
                      <li>
                        <Link to="/morepayment">Payment</Link>
                      </li>
                      <li>
                        <Link to="/morepolicy">Private & Policy</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </ul>
            </div>
            <div className="dropdown dropdown-hover">
              <div
                tabIndex="0"
                role="button"
                className="btn btn-ghost hover:bg-gray-50 hover:border-gray-300 m-1"
              >
                <Link to="/contract">CONTRACT</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="navbar-end flex">
          <SearchBar
            value={searchQuery}
            onChange={({ target }) => setSearchQuery(target.value)}
            handleSearch={handleSearch}
            onClearSearch={handleClearSearch}
          />
          <div className="flex justify-center">
            <div className="dropdown dropdown-end px-1">
              <div
                tabIndex="0"
                role="center"
                className="btn btn-ghost btn-circle border-gray-300"
              >
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="inline-block w-5 h-5 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="badge badge-sm indicator-item">12</span>
                </div>
              </div>
              <div
                tabIndex="0"
                className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
              >
                <div className="card-body">
                  <span className="font-bold text-lg">12 Products</span>
                  <span className="text-info">Total Price: 999 Bath</span>
                  <div className="card-actions">
                    <Link to="/Cart">
                      <button className="btn btn-outline w-44">CART</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {isLoggedIn ? (
              <div className="dropdown dropdown-end px-1 relative">
                <button
                  tabIndex="0"
                  className="btn btn-ghost btn-circle border-gray-300"
                >
                  {userImage ? (
                    <img
                      src={userImage}
                      alt="user-profile"
                      className="w-8 h-8 rounded-full"
                    />
                  ) : (
                    "USER"
                  )}
                </button>
                <ul className="dropdown-content card-body bg-white mt-3 rounded-xl p-4">
                  <li>
                    <div className="card-actions">
                      <button
                        onClick={handleLogout}
                        className="btn btn-outline w-44"
                      >
                        LOGOUT
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
            ) : (
              <div className="dropdown dropdown-end px-1 relative">
                <Link to="/Login">
                  <button className="btn btn-circle avatar border-gray-300 bg-white">
                    LOGIN
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
      <Outlet context={{ searchQuery }} />
    </div>
  );
};

Navbar.propTypes = {
  setCategoryProducts: PropTypes.func.isRequired,
};

export default Navbar;

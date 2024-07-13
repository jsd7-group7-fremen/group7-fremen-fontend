import { Link, Outlet } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import PropTypes from "prop-types";

const Navbar = ({ setCategoryProducts }) => {
  const [changeNav] = useState(false); // Only changeNav is used

  const navbarClass =
    changeNav === "fixed"
      ? "navbar bg-white fixed z-10 top-0 left-0 right-0 content-start"
      : "relative navbar bg-white z-10 top-0 left-0 right-0 content-start";

  const fetchCategoryProducts = async (category) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/products?category=${category}`
      );
      setCategoryProducts(response.data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
      setCategoryProducts([]);
    }
  };

  return (
    <div>
      <div className={navbarClass}>
        <div className="navbar-start">
          <figure>
            <Link to="/">
              <img
                src="./images/Logo/logo.png"
                alt="logo-brand"
                className="w-12 h-auto ml-2"
              />
            </Link>
          </figure>
        </div>
        <div className="navbar-center hidden lg:flex">
          <div className="dropdown dropdown-hover">
            <div
              tabIndex="0"
              role="button"
              className="btn btn-ghost hover:bg-gray-50 hover:border-gray-300 m-1"
            >
              PRODUCT
            </div>
            <ul
              tabIndex="0"
              className="dropdown-content z-[1] menu p-2 shadow bg-white rounded-box"
            >
              <ul className="menu xl:flex flex-row lg:min-w-max bg-gray-50 rounded-box">
                <li>
                  <a>SHOES</a>
                  <ul>
                    <li>
                      <a onClick={() => fetchCategoryProducts("men")}>
                        Trainer
                      </a>
                    </li>
                    <li>
                      <a onClick={() => fetchCategoryProducts("running")}>
                        Running
                      </a>
                    </li>
                    <li>
                      <a onClick={() => fetchCategoryProducts("best seller")}>
                        Sneaker
                      </a>
                    </li>
                    <li>
                      <a onClick={() => fetchCategoryProducts("High-Top")}>
                        High-Top
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>BRAND</a>
                  <ul>
                    <li>
                      <a onClick={() => fetchCategoryProducts("Asics")}>
                        Asics
                      </a>
                    </li>
                    <li>
                      <a onClick={() => fetchCategoryProducts("Adidas")}>
                        Adidas
                      </a>
                    </li>
                    <li>
                      <a onClick={() => fetchCategoryProducts("HOKA")}>HOKA</a>
                    </li>
                    <li>
                      <a onClick={() => fetchCategoryProducts("Nike")}>Nike</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <br />
                  <br />
                  <ul>
                    <li>
                      <a onClick={() => fetchCategoryProducts("New Balance")}>
                        New Balance
                      </a>
                    </li>
                    <li>
                      <a onClick={() => fetchCategoryProducts("Under Armour")}>
                        Under Armour
                      </a>
                    </li>
                    <li>
                      <a onClick={() => fetchCategoryProducts("Columbia")}>
                        Columbia
                      </a>
                    </li>
                    <li>
                      <a onClick={() => fetchCategoryProducts("Crocs")}>
                        Crocs
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <br />
                  <br />
                  <ul>
                    <li>
                      <a onClick={() => fetchCategoryProducts("Reebok")}>
                        Reebok
                      </a>
                    </li>
                    <li>
                      <a onClick={() => fetchCategoryProducts("Puma")}>Puma</a>
                    </li>
                    <li>
                      <a onClick={() => fetchCategoryProducts("Umbro")}>
                        Umbro
                      </a>
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
              NEW ARRIVAL
            </div>
            <ul
              tabIndex="0"
              className="dropdown-content z-[1] menu p-2 shadow bg-white rounded-box"
            >
              <ul className="menu xl:flex flex-row lg:min-w-max bg-gray-50 rounded-box">
                <li>
                  <a>ALL PRODUCTS</a>
                  <ul>
                    <li>
                      <a onClick={() => fetchCategoryProducts("Best Seller")}>
                        Best Seller
                      </a>
                    </li>
                    <li>
                      <a onClick={() => fetchCategoryProducts("Special Price")}>
                        Special Price
                      </a>
                    </li>
                    <li>
                      <a onClick={() => fetchCategoryProducts("Membership")}>
                        Membership
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={() => fetchCategoryProducts("Limited Edition")}
                      >
                        Limited Edition
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>DISCOUNT</a>
                  <ul>
                    <li>
                      <a onClick={() => fetchCategoryProducts("Men")}>Men</a>
                    </li>
                    <li>
                      <a onClick={() => fetchCategoryProducts("Women")}>
                        Women
                      </a>
                    </li>
                    <li>
                      <a onClick={() => fetchCategoryProducts("Kids")}>Kids</a>
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
              MORE
            </div>
            <ul
              tabIndex="0"
              className="dropdown-content z-[1] menu p-2 shadow bg-white rounded-box"
            >
              <ul className="menu xl:flex flex-row lg:min-w-max bg-gray-50 rounded-box">
                <li>
                  <ul>
                    <li>
                      <a href="#">Login</a>
                    </li>
                    <li>
                      <a href="#">Register</a>
                    </li>
                    <li>
                      <a href="#">Payment</a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
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
              <a href="#">CONTRACT</a>
            </div>
          </div>
        </div>
        <div className="navbar-end mr-2">
          <div className="form-control">
            <label className="input input-bordered flex items-center gap-2">
              <input type="text" className="grow" placeholder="SEARCH" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-6 h-6 opacity-100"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
          </div>
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
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
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
                  <span className="text-info">Total Price: 999฿</span>
                  <div className="card-actions">
                    <Link to="/Cart">
                      <button className="btn btn-outline w-44">CART</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="dropdown dropdown-end">
              <Link to="/Login">
                <button className="btn btn-circle avatar border-gray-300 bg-white">
                  Login
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

Navbar.propTypes = {
  setCategoryProducts: PropTypes.func.isRequired,
};

export default Navbar;

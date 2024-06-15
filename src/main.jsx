import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { element } from "prop-types";
import "./index.css";
import Navbar from "./components/Navbar";

import Home from "./Home.jsx";
import Filter from "./pages/Filter.jsx";
import Cart from "./pages/Cart.jsx";
import Admin from "./pages/Admin.jsx";
import Login from "./pages/Login.jsx";
import Payment from "./pages/Payment.jsx";
import ProductInfo from "./pages/ProductInfo.jsx";
import Register from "./pages/Register.jsx";
import ForgotPassword from"./pages/ForgotPassword.jsx";

const router = createBrowserRouter([
  {
    path: "",
    element: <Navbar changeNav="fixed"/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Cart",
        element: <Cart />,
      },
      {
        path: "/Login",
        element: <Login />,
      }
    ],
  },
  {
    path: "",
    element: <Navbar changeNav="relative"/>,
    children: [
      {
        path: "/Filter",
        element: <Filter />,
      },
      {
        path: "/ProductInfo",
        element: <ProductInfo />,
      }
    ]
  },
  {
    path: "/Cart/Payment",
    element: <Payment />,
  },
  {
    path: "/Payment",
    element: <Payment />,
  },
  {
    path: "/ProductInfo",
    element: <ProductInfo />,
  },
  {
    path: "/Cart/ProductInfo",
    element: <ProductInfo />,
  },
  {
    path: "/Login/Register",
    element: <Register />,
  },
  {
    path: "/Login/ForgotPassword",
    element: <ForgotPassword />,
  },
  {
    path: "/Cart/Payment/Login",
    element: <Login />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

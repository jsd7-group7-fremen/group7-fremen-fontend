import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { element } from "prop-types";
import "./index.css";

import Home from "./Home.jsx";
import Filter from "./pages/Filter.jsx";
import Cart from "./pages/Cart.jsx";
import Admin from "./pages/Admin.jsx";
import Login from "./pages/Login.jsx";
import Payment from "./pages/Payment.jsx";
import ProductInfo from "./pages/ProductInfo.jsx";
import Register from "./pages/Register.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Filter",
    element: <Filter />,
  },
  {
    path: "/Cart",
    element: <Cart />,
  },
  {
    path: "/Admin",
    element: <Admin />,
  },
  {
    path: "/Login",
    element: <Login />,
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
    path: "/Register",
    element: <Register />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

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
import ForgotPassword from "./pages/ForgotPassword.jsx";
import AdminHome from "./pages/Admin/AdminHome.jsx";
import UserList from "./pages/Admin/UserList.jsx";
import ProductList from "./pages/Admin/ProductList.jsx";
import ProductEdit from "./pages/Admin/ProductEdit.jsx";
import Navbar from "./components/Navbar.jsx";
import OrderList from "./pages/Admin/OrderList.jsx";
import ProductCreate from "./pages/Admin/ProductCreate.jsx";
import UserProfile from "./pages/Admin/UserProfile.jsx";

const router = createBrowserRouter([
  {
    path: "",
    element: <Navbar changeNav="fixed" />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Cart",
        element: <Cart />,
      },
    ],
  },
  {
    path: "",
    element: <Navbar changeNav="relative" />,
    children: [
      {
        path: "/Filter",
        element: <Filter />,
      },
      {
        path: "/ProductInfo/:productId",
        element: <ProductInfo />,
      },
    ],
  },
  {
    path: "/Admin",
    element: <Admin />,
    children: [
      {
        path: "",
        element: <AdminHome />,
      },
      {
        path: "Users",
        element: <UserList />,
      },
      {
        path: "Users/profile/:id",
        element: <UserProfile />,
      },
      {
        path: "Products",
        element: <ProductList />,
      },
      {
        path: "Products/Create",
        element: <ProductCreate />,
      },
      {
        path: "Products/edit/:id",
        element: <ProductEdit />,
      },
      {
        path: "Orders",
        element: <OrderList />,
      },
    ],
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
    path: "/Register",
    element: <Register />,
  },
  {
    path: "/ForgotPassword",
    element: <ForgotPassword />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

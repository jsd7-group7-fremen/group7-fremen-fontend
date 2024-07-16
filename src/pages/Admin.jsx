import React, { useEffect, useState } from "react";
import AdminSidebar from "../components/AdminComponents/AdminSidebar";
import { Outlet, useNavigate } from "react-router-dom";
import AdminPage from "../components/AdminComponents/AdminPage";
import { jwtDecode } from "jwt-decode";
import axiosInstance from "../utils/axiosInstance";
// import Navbar from "../components/Navbar"

const Admin = () => {
  const [userId, setUserId] = useState(null);
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  const getUser = async (id) => {
    try {
      const response = await axiosInstance.get("/users/" + id);
      console.log(id);
      if (response.data) {
        setUser(response.data.data);
        if (!response.data.data.isAdmin) {
          navigate("/"); // Redirect to homepage or another page if not admin
        }
      }
    } catch (error) {
      console.log("An unexpected error occurred. Please try again.");
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        setUserId(decodedToken.id);
      } catch (error) {
        console.error("Error decoding token:", error);
      }
    } else {
      console.log("No token found in local storage.");
    }

    if (userId) {
      getUser(userId);
    }
  }, [userId]);

  return (
    <div>
      <AdminPage />
      <div className="flex">
        <AdminSidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default Admin;

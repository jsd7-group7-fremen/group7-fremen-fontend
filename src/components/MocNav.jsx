import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";
import {jwtDecode} from "jwt-decode"; // Corrected import

const MocNav = () => {
  const [userId, setUserId] = useState(null);
  const [user, setUser] = useState({});

  const getUser = async (id) => {
    try {
      const response = await axiosInstance.get("/users/" + id);
      if (response.data) {
        setUser(response.data.data);
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
  }, []);

  useEffect(() => {
    if (userId) {
      getUser(userId);
    }
  }, [userId]);

  return (
    <div className="fixed bottom-2 right-2 w-[90px] bg-slate-300 flex justify-around rounded-full z-10">
      {user && user.isAdmin ? ( // Check if user.isAdmin is defined
        <Link
          className="hover:bg-slate-200 p-2 w-full rounded-full text-center transition-all duration-200"
          to="/Admin"
        >
          Admin
        </Link>
      ) : (
        <div className="hidden">Admin</div>
      )}
    </div>
  );
};

export default MocNav;

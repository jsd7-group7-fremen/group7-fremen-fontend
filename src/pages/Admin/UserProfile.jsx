import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";

const UserProfile = () => {
  const { id } = useParams();
  console.log("id => ", id);
  const [user, setUser] = useState({});

  const getUser = async () => {
    try {
      console.log("/users" + id);
      const response = await axiosInstance.get("/users/" + id);
      if (response.data) {
        setUser(response.data.data);
      }
      console.log(response);
      console.log(response.data);
      console.log(response?.data?.data);
    } catch (error) {
      console.log("An unexpected error occurred. Please try again.");
    }
  };

  useEffect(() => {
    getUser();
    console.log("user", user);
  }, []);

  return (
    <div className="flex-[4_0_0%] w-full rounded overflow-hidden shadow-lg p-4 pt-14 bg-white h-screen flex ">
      <div>
        <img
          className="w-full object-cover"
          src={user.image}
          alt="User profile"
        />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{user.fullName}</div>
        <p className="text-gray-700 text-base">Email: {user.email}</p>
        <p className="text-gray-700 text-base">Gender: {user.gender}</p>
        <p className="text-gray-700 text-base">
          Date of Birth: {new Date(user.dateOfBirth).toLocaleDateString()}
        </p>
        <p className="text-gray-700 text-base">
          User Status: {user.userStatus}
        </p>
        <p className="text-gray-700 text-base">
          Admin: {user.isAdmin ? "Yes" : "No"}
        </p>
        <div className=" pt-4 pb-2">
          <p className="text-gray-600 text-sm">
            Created Date: {new Date(user.createdDate).toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

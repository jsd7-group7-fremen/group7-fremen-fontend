import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";

const Profile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  // console.log("id => ", id);
  const [user, setUser] = useState({});

  const getUser = async () => {
    try {
      console.log("/users/" + id);
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
    <div className="flex justify-center bg-slate-200">
      <div className=" w-6/12 flex content-center">
        <div className=" w-full rounded overflow-hidden shadow-lg p-4 pt-24 bg-neutral-100 h-screen flex flex-col  items-center">
          <div className=" flex">
            <div>
              <div className="font-bold text-xl mb-2">{user.fullName}</div>
              <img
                className="w-full object-cover rounded-xl max-w-[500px]"
                src={user.image}
                alt="User profile"
              />
            </div>
            <div className="px-6 py-9 w-[50%]">
              <p className="text-gray-700 text-base">
                <span className=" font-semibold">Email: </span> {user.email}
              </p>
              <p className="text-gray-700 text-base">
                <span className=" font-semibold">Gender: </span> {user.gender}
              </p>
              <p className="text-gray-700 text-base">
                <span className=" font-semibold">Date of Birth: </span>
                {new Date(user.dateOfBirth).toLocaleDateString()}
              </p>
              {/* <p className="text-gray-700 text-base">
          User Status: {user.userStatus}
        </p>
        <p className="text-gray-700 text-base">
          Admin: {user.isAdmin ? "Yes" : "No"}
        </p> */}
              <div className=" pt-4 pb-2">
                <p className="text-gray-600 text-sm">
                  <span className=" font-semibold">Created Date:</span>{" "}
                  {new Date(user.createdDate).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
          <button
            className=" btn bg-black text-white mt-4 px-8 absolute bottom-3 right-3"
            onClick={() => navigate(-1)}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;

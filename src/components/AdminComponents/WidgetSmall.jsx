import React from "react";
import { MdOutlineVisibility } from "react-icons/md";
import axiosInstance from "../../utils/axiosInstance";

const WidgetSmall = () => {
  const getAllUsers = async () => {
    try {
      console.log("success");
    } catch (error) {
      console.log("error");
    }
  };
  return (
    <div className="flex-1 shadow-lg p-5 mr-5">
      <span className=" text-2xl font-semibold">New Join Members</span>
      <ul>
        <li className="flex items-center justify-between m-5">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className=" w-10 h-10 rounded-[50%] object-cover"
          />
          <div className="flex flex-col">
            <span className=" font-semibold">Anna Keller</span>
            <span className=" font-light">Software Developer</span>
          </div>
          <button className="flex items-center rounded-xl py-2 px-3 bg-[#eeeef7] text-[#555] cursor-pointer">
            <MdOutlineVisibility className=" mr-1" />
            Display
          </button>
        </li>
        <li className="flex items-center justify-between m-5">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className=" w-10 h-10 rounded-[50%] object-cover"
          />
          <div className="flex flex-col">
            <span className=" font-semibold">Anna Keller</span>
            <span className=" font-light">Software Developer</span>
          </div>
          <button className="flex items-center rounded-xl py-2 px-3 bg-[#eeeef7] text-[#555] cursor-pointer">
            <MdOutlineVisibility className=" mr-1" />
            Display
          </button>
        </li>
        <li className="flex items-center justify-between m-5">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className=" w-10 h-10 rounded-[50%] object-cover"
          />
          <div className="flex flex-col">
            <span className=" font-semibold">Anna Keller</span>
            <span className=" font-light">Software Developer</span>
          </div>
          <button className="flex items-center rounded-xl py-2 px-3 bg-[#eeeef7] text-[#555] cursor-pointer">
            <MdOutlineVisibility className=" mr-1" />
            Display
          </button>
        </li>
        <li className="flex items-center justify-between m-5">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className=" w-10 h-10 rounded-[50%] object-cover"
          />
          <div className="flex flex-col">
            <span className=" font-semibold">Anna Keller</span>
            <span className=" font-light">Software Developer</span>
          </div>
          <button className="flex items-center rounded-xl py-2 px-3 bg-[#eeeef7] text-[#555] cursor-pointer">
            <MdOutlineVisibility className=" mr-1" />
            Display
          </button>
        </li>
        <li className="flex items-center justify-between m-5">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className=" w-10 h-10 rounded-[50%] object-cover"
          />
          <div className="flex flex-col">
            <span className=" font-semibold">Anna Keller</span>
            <span className=" font-light">Software Developer</span>
          </div>
          <button className="flex items-center rounded-xl py-2 px-3 bg-[#eeeef7] text-[#555] cursor-pointer">
            <MdOutlineVisibility className=" mr-1" />
            Display
          </button>
        </li>
        <li className="flex items-center justify-between m-5">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className=" w-10 h-10 rounded-[50%] object-cover"
          />
          <div className="flex flex-col">
            <span className=" font-semibold">Anna Keller</span>
            <span className=" font-light">Software Developer</span>
          </div>
          <button className="flex items-center rounded-xl py-2 px-3 bg-[#eeeef7] text-[#555] cursor-pointer">
            <MdOutlineVisibility className=" mr-1" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
};

export default WidgetSmall;

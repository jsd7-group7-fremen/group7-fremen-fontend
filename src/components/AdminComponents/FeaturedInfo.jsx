import React from "react";
import { FaLongArrowAltDown, FaLongArrowAltUp } from "react-icons/fa";

const FeaturedInfo = () => {
  return (
    <div id="featured" className="flex justify-between py-2">
      <div id="featuredItem" className=" flex-1 mx-5 p-[30px] rounded-md cursor-pointer shadow-md">
        <span id="featuredTitle" className=" text-xl">Revanue</span>
        <div id="featuredMoneyContainer" className="flex py-4">
          <span id="featuredMoney" className=" text-3xl">฿24105</span>
          <span id="featuredMoneyRate" className="flex items-center pl-5">
            -11.4
            <FaLongArrowAltDown className=" text-sm text-red-600"/>
          </span>
        </div>
        <span id="featuredSub" className="text-sm text-gray-500">Conpared to last month</span>
      </div>
      <div id="featuredItem" className=" flex-1 mx-5 p-[30px] rounded-md cursor-pointer shadow-md">
        <span id="featuredTitle" className=" text-xl">Sales</span>
        <div id="featuredMoneyContainer" className="flex py-4">
          <span id="featuredMoney" className=" text-3xl">฿45555</span>
          <span id="featuredMoneyRate" className="flex items-center pl-5">
            -1
            <FaLongArrowAltDown className=" text-sm text-red-600"/>
          </span>
        </div>
        <span id="featuredSub" className="text-sm text-gray-500">Conpared to last month</span>
      </div>
      <div id="featuredItem" className=" flex-1 mx-5 p-[30px] rounded-md cursor-pointer shadow-md">
        <span id="featuredTitle" className=" text-xl">Cost</span>
        <div id="featuredMoneyContainer" className="flex py-4">
          <span id="featuredMoney" className=" text-3xl">฿28885</span>
          <span id="featuredMoneyRate" className="flex items-center pl-5">
            -11.4
            <FaLongArrowAltUp className=" text-sm text-green-600"/>
          </span>
        </div>
        <span id="featuredSub" className="text-sm text-gray-500">Conpared to last month</span>
      </div>
    </div>
  );
};

export default FeaturedInfo;

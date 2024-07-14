import React from "react";

const WidgetLg = () => {
  const ButtonWidgetLg = ({ type }) => {
    // return <button className="flex items-center rounded-xl w-28 justify-center py-2 px-3 bg-[#eeeef7] text-[#555] cursor-pointer ">{type}</button>
    return (
      <button
        className={`flex items-center rounded-xl w-28 justify-center py-2 px-3 text-[#555] cursor-pointer ${
          type === "Approved"
            ? "bg-green-200"
            : type === "Declined"
            ? "bg-red-200"
            : type === "Pending"
            ? "bg-blue-200"
            : "bg-[#eeeef7] "
        }`}
      >
        {type}
      </button>
    );
  };
  // {type==="Approved"?"bg-green-200":"bg-black"}
  return (
    <div className="flex-[2_0_0%] shadow-lg p-5">
      <h3 className=" font-semibold text-2xl">Latest Transaction</h3>
      <table className=" w-full border-separate border-spacing-5">
        <thead>
          <tr className=" text-left">
            <th>Customer</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody >
          <tr>
            <td className=" flex items-center">
              <img
                src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className="w-10 h-10 rounded-[50%] object-cover"
              />
              <span className=" pl-4">Susan Carol</span>
            </td>
            <td className=" font-extralight">2 Jun 2021</td>
            <td className=" font-extralight">฿3999</td>
            <td>
              <ButtonWidgetLg type={"Approved"} />
            </td>
          </tr>
          <tr>
            <td className=" flex items-center">
              <img
                src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className="w-10 h-10 rounded-[50%] object-cover"
              />
              <span className=" pl-4">Susan Carol</span>
            </td>
            <td className=" font-extralight">2 Jun 2021</td>
            <td className=" font-extralight">฿3999</td>
            <td>
              <ButtonWidgetLg type={"Declined"} />
            </td>
          </tr>
          <tr>
            <td className=" flex items-center">
              <img
                src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className="w-10 h-10 rounded-[50%] object-cover"
              />
              <span className=" pl-4">Susan Carol</span>
            </td>
            <td className=" font-extralight">2 Jun 2021</td>
            <td className=" font-extralight">฿3999</td>
            <td>
              <ButtonWidgetLg type={"Pending"} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default WidgetLg;

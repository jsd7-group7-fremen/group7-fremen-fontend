import React from "react";
import { Link } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <div className="flex-1 max-w-[370px] h-[calc(100vh-50px)] bg-gray-100 sticky top-[50px]">
      <div id="wrapper" className=" p-5 text-[#555]">
        <div id="Menu" className=" mb-2.5">
          <h3 id="sidebartitle" className=" text-sm text-[rgb(187,186,186)]">
            Dashboard
          </h3>
          <ul id="sidebarlist" className=" p-5 pt-1">
            <Link to="/Admin">
              <li className=" p-1.5 cursor-pointer rounded-lg hover:bg-slate-300">
                Home
              </li>
            </Link>
            <Link to="/Admin/users">
              <li className=" p-1.5 cursor-pointer rounded-lg hover:bg-slate-300">
                Users
              </li>
            </Link>
            <Link to="/Admin/Products">
              <li className=" p-1.5 cursor-pointer rounded-lg hover:bg-slate-300">
                Products
              </li>
            </Link>
            <Link to="/Admin/Orders">
              <li className=" p-1.5 cursor-pointer rounded-lg hover:bg-slate-300">
                Orders
              </li>
            </Link>
            {/* <li className=" p-1.5 cursor-pointer rounded-lg hover:bg-slate-300">
              Sales
            </li> */}
          </ul>
        </div>
        {/* <div id="Menu" className=" mb-2.5">
          <h3 id="sidebartitle" className=" text-sm text-[rgb(187,186,186)]">
            Quick Menu
          </h3>
          <ul id="sidebarlist" className=" p-5 pt-1">
            
            <li className=" p-1.5 cursor-pointer rounded-lg hover:bg-slate-300">
              Transaction
            </li>
            <li className=" p-1.5 cursor-pointer rounded-lg hover:bg-slate-300">
              Report
            </li>
          </ul>
        </div> */}
      </div>
    </div>
  );
};

export default AdminSidebar;

import React from "react";
import MocNav from "../components/MocNav";
import AdminSidebar from "../components/AdminComponents/AdminSidebar";
import AdminHome from "./Admin/AdminHome";
import { Outlet } from "react-router-dom";
// import Navbar from "../components/Navbar"

const Admin = () => {
  return (
    <div className=" mt-12">
      {/* <Navbar/> */}
      <MocNav />
      <div className="flex">
        <AdminSidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default Admin;

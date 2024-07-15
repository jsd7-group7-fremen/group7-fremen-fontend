import React from "react";
import MocNav from "../components/MocNav";
import AdminSidebar from "../components/AdminComponents/AdminSidebar";
import { Outlet } from "react-router-dom";
import AdminPage from "../components/AdminComponents/AdminPage";
// import Navbar from "../components/Navbar"

const Admin = () => {
  return (
    <div>
      <AdminPage />
      <MocNav />
      <div className="flex">
        <AdminSidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default Admin;

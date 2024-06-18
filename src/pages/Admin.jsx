import React from "react";
import MocNav from "../components/MocNav";
import AdminSidebar from "../components/AdminSidebar";
import AdminPage from "../components/AdminPage";
// import Navbar from "../components/Navbar"

const Admin = () => {
  return (
    <div>
      {/* <Navbar/> */}
      <MocNav />
      <div className="flex">
        <AdminSidebar />
        <AdminPage />
      </div>
    </div>
  );
};

export default Admin;

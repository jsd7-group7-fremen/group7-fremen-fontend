import React from "react";
import { Link } from "react-router-dom";

const AdminPage = () => {
  return (
    <div className=" sticky top-0 h-12 w-screen bg-slate-500 text-white p-3 font-semibold flex justify-between">
      <div>Kick It Up for Admin</div>
      <Link to="/" className=" pr-6">
        Back to home
      </Link>
    </div>
  );
};

export default AdminPage;

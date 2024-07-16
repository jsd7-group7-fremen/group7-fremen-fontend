import React from "react";
// import FeaturedInfo from '../../components/AdminComponents/FeaturedInfo'
import Chart from "../../components/AdminComponents/Chart";
// import usersdata from "../../data/UsersData";
// import WidgetSmall from "../../components/AdminComponents/WidgetSmall";
// import WidgetLg from "../../components/AdminComponents/WidgetLg";
import SalesLineChart from "../../components/AdminComponents/ChartProducts";

const AdminHome = () => {
  return (
    <div className=" flex-[4_0_0%]">
      {/* <FeaturedInfo/> */}
      <Chart />
      {/* <SalesLineChart /> */}
      <div id="homeWidget" className="flex m-5">
        {/* <WidgetSmall />
        <WidgetLg /> */}
      </div>
    </div>
  );
};

export default AdminHome;

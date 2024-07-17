import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import axiosInstance from "../../utils/axiosInstance";

const Chart = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("/users");
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []);

  const genderData = [
    {
      name: "Female",
      value: userData.filter((user) => user.gender === "female").length,
    },
    {
      name: "Male",
      value: userData.filter((user) => user.gender === "male").length,
    },
  ];

  const COLORS = ["#0088FE", "#FFBB28"];

  return (
    <PieChart width={400} height={400}>
      <Pie
        data={genderData}
        cx={200}
        cy={200}
        labelLine={false}
        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
      >
        {genderData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
};

export default Chart;

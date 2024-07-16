import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const UserData = [
  {
    _id: "6687b18d7d29bba43c36eaf7",
    email: "bee@mail.com",
    password: "12345678",
    image:
      "https://res.cloudinary.com/dhafpmdbf/image/upload/v1720981771/Lady_Gag...",
    isAdmin: false,
    createdDate: "2024-07-05T15:30:30.140+00:00",
    gender: "female",
    dateOfBirth: "1990-08-05T15:30:30.140+00:00",
    userStatus: "active",
    fullName: "B Naphatthamon",
  },
  // Add more user objects here
];

const genderData = [
  {
    name: "Female",
    value: UserData.filter((user) => user.gender === "female").length,
  },
  {
    name: "Male",
    value: UserData.filter((user) => user.gender === "male").length,
  },
];

const COLORS = ["#0088FE", "#FFBB28"];

const Chart = () => {
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

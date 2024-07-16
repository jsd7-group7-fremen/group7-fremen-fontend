import React, { useState, useEffect } from "react";
import axiosInstance from "../../utils/axiosInstance";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const SalesLineChart = () => {
  const [allProducts, setAllProducts] = useState([]);

  const getAllProducts = async () => {
    try {
      const response = await axiosInstance.get("/Order"); // Replace with your actual endpoint
      setAllProducts(response.data);
    } catch (error) {
      console.log("An unexpected error occurred. Please try again.", error);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  const processData = (data) => {
    const salesData = {};

    data.forEach((entry) => {
      const purchaseDate = new Date(entry.purchaseDate);
      const month = `${purchaseDate.getFullYear()}-${String(
        purchaseDate.getMonth() + 1
      ).padStart(2, "0")}`;

      entry.products.forEach((product) => {
        if (!salesData[month]) {
          salesData[month] = 0;
        }
        salesData[month] += product.quantityInOrder;
      });
    });

    return Object.keys(salesData).map((month) => ({
      month,
      quantity: salesData[month],
    }));
  };

  const aggregatedData = processData(allProducts);

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart
        width={500}
        height={300}
        data={aggregatedData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="quantity"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default SalesLineChart;

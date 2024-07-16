import React, { useEffect, useState } from "react";
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
import axiosInstance from "../../utils/axiosInstance";

const SalesLineChart = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [aggregatedData, setAggregatedData] = useState([]);

  const getAllProducts = async () => {
    try {
      const response = await axiosInstance.get("/products");
      if (response.data && response.data.products) {
        setAllProducts(response.data.products);
      } else {
        console.log("No products found in the response");
      }
    } catch (error) {
      console.log("An unexpected error occurred. Please try again.", error);
    }
  };

  useEffect(() => {
    const processData = (data) => {
      const salesData = {};

      data.forEach((entry) => {
        const purchaseDate = new Date(entry.purchaseDate);
        const month = `${purchaseDate.getFullYear()}-${String(
          purchaseDate.getMonth() + 1
        ).padStart(2, "0")}`;

        if (entry.products) {
          entry.products.forEach((product) => {
            if (!salesData[month]) {
              salesData[month] = 0;
            }
            salesData[month] += product.quantityInOrder;
          });
        }
      });

      return Object.keys(salesData).map((month) => ({
        month,
        quantity: salesData[month],
      }));
    };

    if (allProducts.length > 0) {
      const processedData = processData(allProducts);
      setAggregatedData(processedData);
    }
  }, [allProducts]);

  useEffect(() => {
    getAllProducts();
  }, []);

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

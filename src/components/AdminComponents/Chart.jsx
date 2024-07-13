import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Chart = ({
  title = "Default Title",
  data = [],
  dataKey = "value",
  grid = true,
}) => {
  return (
    <div className="flex-1 mx-5 p-[20px] rounded-md cursor-pointer shadow-md">
      <h3 className="mb-5">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" />
          <Line type="monotone" dataKey={dataKey} stroke="red" />
          <Tooltip />
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;

import React from "react";
import { useContext } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import { TopicsContext } from "./Root";

const Statistics = () => {
  const topicsItems = useContext(TopicsContext).data[1].total;
//   console.log(topicsItems.data[1].total);

//   for (const total of topicsItems) {
//     const totalData = total.total;
//     return totalData;
//   }
  return (
    <div>
      <LineChart
        width={730}
        height={250}
        data={topicsItems}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
};

export default Statistics;

import React from "react";
import { useContext } from "react";
import {
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  BarChart,
  Bar,
} from "recharts";
import { TopicsContext } from "./Root";

const Statistics = () => {
  const topicsItems = useContext(TopicsContext).data;

  let newData = [];
  for (const total of topicsItems) {
    newData.push(total);
  }

  console.log(newData);

  return (
    <div className="flex items-center justify-center px-4 ">
      <BarChart width={400} height={400} data={newData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey='name' fill="#8884d8" />
        <Bar dataKey='total' fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default Statistics;

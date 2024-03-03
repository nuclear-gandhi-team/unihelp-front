"use client";

import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "Jan",
    total: Math.floor(Math.random() * 101),
  },
  {
    name: "Feb",
    total: Math.floor(Math.random() * 101),
  },
  {
    name: "Mar",
    total: Math.floor(Math.random() * 101),
  },
  {
    name: "Apr",
    total: Math.floor(Math.random() * 101),
  },
  {
    name: "May",
    total: Math.floor(Math.random() * 101),
  },
  {
    name: "Jun",
    total: Math.floor(Math.random() * 101),
  },
  {
    name: "Jul",
    total: Math.floor(Math.random() * 101),
  },
  {
    name: "Aug",
    total: Math.floor(Math.random() * 101),
  },
  {
    name: "Sep",
    total: Math.floor(Math.random() * 101),
  },
  {
    name: "Oct",
    total: Math.floor(Math.random() * 101),
  },
  {
    name: "Nov",
    total: Math.floor(Math.random() * 101),
  },
  {
    name: "Dec",
    total: Math.floor(Math.random() * 101),
  },
];

const AverageGradeStudentGraph = () => {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}`}
        />
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <Line dataKey="total" stroke="black" type="monotone" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default AverageGradeStudentGraph;

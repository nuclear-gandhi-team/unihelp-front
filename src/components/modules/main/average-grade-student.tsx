"use client";

import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

import { data } from "@/lib/const/random-chart";

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

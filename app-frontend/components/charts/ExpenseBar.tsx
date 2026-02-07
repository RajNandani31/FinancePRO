"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  { month: "Jan", expense: 9000 },
  { month: "Feb", expense: 11000 },
  { month: "Mar", expense: 10000 },
  { month: "Apr", expense: 12000 },
];

export default function ExpenseBar() {
  return (
    <BarChart width={500} height={300} data={data}>
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="expense" fill="#2563eb" />
    </BarChart>
  );
}

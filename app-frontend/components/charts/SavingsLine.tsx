"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

export default function SavingsLine({
  monthlySavings,
}: {
  monthlySavings: number;
}) {
  const data = Array.from({ length: 6 }, (_, i) => ({
    month: `M${i + 1}`,
    savings: monthlySavings * (i + 1),
  }));

  return (
    <LineChart width={500} height={300} data={data}>
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Line
        type="monotone"
        dataKey="savings"
        stroke="#10b981"
        strokeWidth={3}
      />
    </LineChart>
  );
}

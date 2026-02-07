"use client";

import { PieChart, Pie, Cell, Tooltip } from "recharts";

const data = [
  { name: "Needs", value: 60 },
  { name: "Wants", value: 25 },
  { name: "Savings", value: 15 },
];

const COLORS = ["#2563eb", "#f59e0b", "#10b981"];

export default function BudgetPie() {
  return (
    <PieChart width={300} height={300}>
      <Pie data={data} dataKey="value" cx="50%" cy="50%" outerRadius={100}>
        {data.map((_, i) => (
          <Cell key={i} fill={COLORS[i]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  );
}

"use client";

import { PieChart, Pie, Cell, Tooltip } from "recharts";

const COLORS = ["#2563eb", "#f59e0b", "#10b981"];

export default function BudgetPie({
  needs,
  wants,
  savings,
}: {
  needs: number;
  wants: number;
  savings: number;
}) {
  const data = [
    { name: "Needs", value: needs },
    { name: "Wants", value: wants },
    { name: "Savings", value: savings },
  ];

  return (
    <PieChart width={300} height={300}>
      <Pie
        data={data}
        dataKey="value"
        cx="50%"
        cy="50%"
        outerRadius={100}
        label
      >
        {data.map((_, i) => (
          <Cell key={i} fill={COLORS[i]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  );
}

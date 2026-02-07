"use client";

import { useOnboardingStore } from "@/app/stores/onboardingStore";
import { generateInsights } from "@/lib/insights";


export default function OverviewPage() {
  const {
    income,
    fixedExpenses,
    variableExpenses,
    goal,
    risk,
  } = useOnboardingStore();
  const insights = generateInsights(
  income,
  fixedExpenses,
  variableExpenses
);


  const savings =
    income - fixedExpenses - variableExpenses;

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Overview</h1>

      <div className="grid grid-cols-3 gap-4">
        <Stat title="Income" value={`₹${income}`} />
        <Stat
          title="Expenses"
          value={`₹${fixedExpenses + variableExpenses}`}
        />
        <Stat title="Savings" value={`₹${savings}`} />
      </div>

      <div className="bg-white p-4 rounded shadow">
        <p className="text-sm text-gray-500">Goal</p>
        <p className="font-semibold">{goal}</p>
        <p className="text-sm mt-1">Risk: {risk}</p>
      </div>
      <div className="bg-white p-4 rounded shadow">
  <h3 className="font-semibold mb-2">Insights</h3>
  <ul className="list-disc ml-5 text-sm space-y-1">
    {insights.map((i, idx) => (
      <li key={idx}>{i}</li>
    ))}
  </ul>
</div>

    </div>
    
  );
}

function Stat({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <p className="text-sm text-gray-500">{title}</p>
      <p className="text-xl font-bold">{value}</p>
    </div>
  );
}

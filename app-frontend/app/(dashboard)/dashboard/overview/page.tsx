"use client";

import { useFinanceStore } from "@/app/stores/financeStore";

export default function OverviewPage() {
  const { income, expenses, savings } = useFinanceStore();

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Financial Overview</h1>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-sm text-gray-500">Income</p>
          <p className="text-xl font-semibold">₹{income}</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-sm text-gray-500">Expenses</p>
          <p className="text-xl font-semibold">₹{expenses}</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-sm text-gray-500">Savings</p>
          <p className="text-xl font-semibold">₹{savings}</p>
        </div>
      </div>
    </div>
  );
}

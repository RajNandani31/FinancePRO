"use client";

import { useOnboardingStore } from "@/app/stores/onboardingStore";
import { useRouter } from "next/navigation";

export default function ExpensesPage() {
  const { fixedExpenses, variableExpenses, setData } =
    useOnboardingStore();
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow w-[400px]">
        <h1 className="text-xl font-bold mb-4">Monthly Expenses</h1>

        <input
          type="number"
          placeholder="Fixed expenses (rent, mess)"
          value={fixedExpenses}
          onChange={(e) =>
            setData({ fixedExpenses: Number(e.target.value) })
          }
          className="w-full border p-2 rounded mb-4"
        />

        <input
          type="number"
          placeholder="Variable expenses (food, fun)"
          value={variableExpenses}
          onChange={(e) =>
            setData({ variableExpenses: Number(e.target.value) })
          }
          className="w-full border p-2 rounded mb-6"
        />

        <button
          onClick={() => router.push("/onboarding/goals")}
          className="w-full bg-blue-600 text-white py-2 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
}

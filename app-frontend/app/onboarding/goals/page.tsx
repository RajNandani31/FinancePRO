"use client";

import { useOnboardingStore } from "@/app/stores/onboardingStore";
import { useRouter } from "next/navigation";

export default function GoalsPage() {
  const { goal, risk, setData } = useOnboardingStore();
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow w-[400px]">
        <h1 className="text-xl font-bold mb-4">Your Goal</h1>

        <input
          value={goal}
          onChange={(e) => setData({ goal: e.target.value })}
          placeholder="Laptop, Travel, Emergency fund"
          className="w-full border p-2 rounded mb-4"
        />

        <select
          value={risk}
          onChange={(e) =>
            setData({ risk: e.target.value as "low" | "medium" | "high" })
          }
          className="w-full border p-2 rounded mb-6"
        >
          <option value="low">Low Risk</option>
          <option value="medium">Medium Risk</option>
          <option value="high">High Risk</option>
        </select>

        <button
          onClick={() => router.push("/dashboard/overview")}
          className="w-full bg-green-600 text-white py-2 rounded"
        >
          Finish
        </button>
      </div>
    </div>
  );
}

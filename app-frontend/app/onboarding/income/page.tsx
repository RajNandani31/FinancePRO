"use client";

import { useOnboardingStore } from "@/app/stores/onboardingStore";
import { useRouter } from "next/navigation";

export default function IncomePage() {
  const { income, setData } = useOnboardingStore();
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow w-[400px]">
        <h1 className="text-xl font-bold mb-4">Your Monthly Income</h1>

        <input
          type="number"
          value={income}
          onChange={(e) => setData({ income: Number(e.target.value) })}
          placeholder="₹ Monthly income"
          className="w-full border p-2 rounded mb-6"
        />

        <button
          onClick={() => router.push("/onboarding/expenses")}
          className="w-full bg-blue-600 text-white py-2 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
}

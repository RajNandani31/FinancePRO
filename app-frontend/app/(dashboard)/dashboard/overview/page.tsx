"use client";

import { useEffect, useState } from "react";
import api from "@/lib/api";
import { useOnboardingStore } from "@/app/stores/onboardingStore";

type AnalysisResult = {
  budget?: { savings?: number };
  insights?: string[];
  investments?: unknown;
};

export default function OverviewPage() {
  const {
    income,
    fixedExpenses,
    variableExpenses,
    risk,
  } = useOnboardingStore();

  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchAnalysis() {
      try {
        setLoading(true);

        const res = await api.post("/analyze", {
          income,
          fixedExpenses,
          variableExpenses,
          risk,
        });

        setResult(res.data);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch analysis");
      } finally {
        setLoading(false);
      }
    }

    fetchAnalysis();
  }, [income, fixedExpenses, variableExpenses, risk]);

  if (loading) return <p>Loading analysis...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Financial Overview</h1>

      {/* Basic numbers */}
      <div className="grid grid-cols-3 gap-4">
        <Card title="Income" value={`₹${income}`} />
        <Card
          title="Expenses"
          value={`₹${fixedExpenses + variableExpenses}`}
        />
        <Card
          title="Savings"
          value={`₹${result?.budget?.savings ?? 0}`}
        />
      </div>

      {/* Insights */}
      {result?.insights && (
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold mb-2">Insights</h3>
          <ul className="list-disc ml-5 text-sm space-y-1">
            {result.insights.map((i: string, idx: number) => (
              <li key={idx}>{i}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Investment suggestion */}
      {Boolean(result?.investments) && (
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold mb-2">Investment Suggestion</h3>
          <pre className="text-sm">
            {JSON.stringify(result?.investments, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}

function Card({ title, value }: { title: string; value: string }) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <p className="text-sm text-gray-500">{title}</p>
      <p className="text-xl font-bold">{value}</p>
    </div>
  );
}

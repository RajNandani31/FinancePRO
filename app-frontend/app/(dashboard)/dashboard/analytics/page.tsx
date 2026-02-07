import ExpenseBar from "@/components/charts/ExpenseBar";

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Spending Analytics</h1>

      <div className="bg-white p-6 rounded shadow">
        <ExpenseBar />
      </div>
    </div>
  );
}

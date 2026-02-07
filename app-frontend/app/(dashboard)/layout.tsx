import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-60 bg-gray-900 text-white p-6">
        <h2 className="text-xl font-bold mb-8">FinancePRO</h2>

        <div className="space-y-4 flex flex-col">
          <Link href="/dashboard/overview">Overview</Link>
          <Link href="/dashboard/budget">Budget</Link>
          <Link href="/dashboard/investment">Investments</Link>
          <Link href="/dashboard/analytics">Analytics</Link>
        </div>
      </aside>

      <main className="flex-1 bg-gray-50 p-6">{children}</main>
    </div>
  );
}

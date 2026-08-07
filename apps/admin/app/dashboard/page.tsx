export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-gray-500 dark:text-gray-400">Welcome to the Enterprise IAM Administration Console.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {/* Placeholder cards for demonstration */}
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
            <h3 className="font-semibold text-gray-900 dark:text-gray-50">Metric {i}</h3>
            <p className="mt-2 text-3xl font-bold">1,234</p>
          </div>
        ))}
      </div>
    </div>
  )
}

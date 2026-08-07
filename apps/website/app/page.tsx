"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [health, setHealth] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch from the Next.js proxy route to prove it routes to FastAPI
    fetch("/api/v1/health")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then((data) => setHealth(data))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div className="flex flex-col flex-1 items-center justify-center min-h-screen bg-zinc-50 font-sans p-8">
      <main className="w-full max-w-2xl bg-white p-8 rounded-xl shadow-sm border border-zinc-200">
        <h1 className="text-3xl font-bold mb-6 text-zinc-900">
          Enterprise IAM Platform
        </h1>
        
        <div className="space-y-4">
          <div className="p-4 rounded-lg bg-zinc-100 border border-zinc-200">
            <h2 className="text-lg font-semibold mb-2 text-zinc-800">System Status</h2>
            {error ? (
              <div className="text-red-500 font-mono text-sm break-all">
                Error connecting to API proxy: {error}
              </div>
            ) : health ? (
              <pre className="text-zinc-700 font-mono text-sm whitespace-pre-wrap">
                {JSON.stringify(health, null, 2)}
              </pre>
            ) : (
              <div className="text-zinc-500 animate-pulse">Checking connectivity...</div>
            )}
          </div>
          
          <div className="flex flex-wrap gap-4 mt-8">
            <a href="/admin" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition shadow-sm">
              Admin Dashboard (Proxy)
            </a>
            <a href="/portal" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition shadow-sm">
              Customer Portal (Proxy)
            </a>
            <a href="/api/v1/health" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-700 transition shadow-sm">
              API Health (Proxy)
            </a>
            <a href="http://localhost:3004" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-zinc-800 text-white rounded hover:bg-zinc-900 transition shadow-sm">
              Documentation
            </a>
            <a href="http://localhost:3003" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700 transition shadow-sm">
              Setup Wizard
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}

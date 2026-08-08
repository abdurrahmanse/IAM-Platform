"use client";

import React, { useEffect, useState } from "react";

type HealthStatus = "loading" | "ok" | "error";

export const HealthCheck: React.FC = () => {
  const [status, setStatus] = useState<HealthStatus>("loading");
  const [latency, setLatency] = useState<number | null>(null);

  useEffect(() => {
    let isMounted = true;

    const checkHealth = async () => {
      const start = performance.now();
      try {
        const response = await fetch("/api/health");
        if (response.ok) {
          const data = await response.json();
          if (data.status === "ok") {
            const end = performance.now();
            if (isMounted) {
              setStatus("ok");
              setLatency(Math.round(end - start));
            }
          } else {
            if (isMounted) setStatus("error");
          }
        } else {
          if (isMounted) setStatus("error");
        }
      } catch (error) {
        if (isMounted) setStatus("error");
      }
    };

    checkHealth();

    const interval = setInterval(checkHealth, 30000); // Check every 30 seconds

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative group cursor-pointer">
        {/* Glow Effect Background */}
        <div 
          className={`absolute -inset-0.5 rounded-full blur opacity-50 group-hover:opacity-100 transition duration-500
            ${status === "ok" ? "bg-emerald-400" : status === "error" ? "bg-rose-500" : "bg-amber-400"}
          `}
        ></div>
        
        {/* Main Badge Container */}
        <div className="relative flex items-center gap-3 px-4 py-3 bg-zinc-900/80 backdrop-blur-md rounded-full border border-white/10 shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-zinc-800/90">
          
          {/* Status Indicator Dot */}
          <div className="relative flex h-3 w-3">
            {status === "loading" && (
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            )}
            {status === "ok" && (
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-30"></span>
            )}
            {status === "error" && (
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-500 opacity-75"></span>
            )}
            <span 
              className={`relative inline-flex rounded-full h-3 w-3 transition-colors duration-500
                ${status === "ok" ? "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]" : 
                  status === "error" ? "bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.8)]" : 
                  "bg-amber-400"}
              `}
            ></span>
          </div>

          {/* Text Content */}
          <div className="flex flex-col">
            <span className="text-xs font-bold tracking-wider text-white/90 uppercase font-sans">
              API Status
            </span>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-medium text-white/60">
                {status === "ok" ? "All Systems Operational" : 
                 status === "error" ? "Service Disruption" : 
                 "Checking connection..."}
              </span>
              {status === "ok" && latency !== null && (
                <>
                  <span className="w-1 h-1 rounded-full bg-white/20"></span>
                  <span className="text-[10px] text-emerald-400 font-mono font-medium">
                    {latency}ms
                  </span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    const API_URL = process.env.INTERNAL_API_URL || "http://127.0.0.1:8000";

    return [
      {
        source: "/api/:path*",
        destination: `${API_URL}/api/:path*`, // Proxy to FastAPI
      }
    ];
  },
  output: "standalone",
};

export default nextConfig;

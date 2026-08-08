import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/admin/:path*",
        destination: "http://localhost:3001/admin/:path*",
      },
      {
        source: "/portal/:path*",
        destination: "http://localhost:3002/portal/:path*",
      },
      {
        source: "/docs/:path*",
        destination: "http://localhost:3003/docs/:path*",
      },
      {
        source: "/setup/:path*",
        destination: "http://localhost:3004/setup/:path*",
      },
      {
        source: "/api/:path*",
        destination: "http://localhost:8000/api/:path*",
      },
    ];
  },
};

export default nextConfig;

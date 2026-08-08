import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/docs",
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://localhost:8000/api/:path*",
      },
    ];
  },
};

export default nextConfig;

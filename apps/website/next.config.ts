import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async rewrites() {
    const API_URL = process.env.INTERNAL_API_URL || 'http://127.0.0.1:8000';
    const ADMIN_URL = process.env.INTERNAL_ADMIN_URL || 'http://127.0.0.1:3001';
    const PORTAL_URL = process.env.INTERNAL_PORTAL_URL || 'http://127.0.0.1:3002';

    return [
      {
        source: '/api/:path*',
        destination: `${API_URL}/api/:path*`, // Proxy to FastAPI
      },
      {
        source: '/admin/:path*',
        destination: `${ADMIN_URL}/admin/:path*`, // Proxy to Admin app
      },
      {
        source: '/portal/:path*',
        destination: `${PORTAL_URL}/portal/:path*`, // Proxy to Portal app
      },
    ];
  },
  output: 'standalone',
};

export default nextConfig;

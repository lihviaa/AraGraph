import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/birds',
        destination: 'http://3.92.8.209:8080/aves/nome/todas',
      },
    ];
  },
};

export default nextConfig;

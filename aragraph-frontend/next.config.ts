import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/birds',
        destination: 'http://34.200.244.166:8080/aves/nome/todas',
      },
    ];
  },
};

export default nextConfig;

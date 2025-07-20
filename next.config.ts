import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    serverActions: {
      bodySizeLimit: "1gb",
    },
  },

  basePath: "/buku-saku",
  assetPrefix: "/buku-saku",
};

export default nextConfig;

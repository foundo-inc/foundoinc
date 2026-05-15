import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Disable static generation during build for pages with client-side state
  experimental: {
    staticGenerationRetryCount: 0,
  },
};

export default nextConfig;

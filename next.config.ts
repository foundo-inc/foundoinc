import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    turbo: {
      rules: {
        "*.scss": {
          loaders: ["sass-loader"],
          as: "*.css",
        },
      },
    },
  },
};

export default nextConfig;

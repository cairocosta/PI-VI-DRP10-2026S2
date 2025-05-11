import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    domains: ["randomuser.me"],
  },
};

export default nextConfig;

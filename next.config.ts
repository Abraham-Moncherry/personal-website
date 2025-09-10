import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Enable ISR for dynamic data fetching
    staleTimes: {
      dynamic: 30, // 30 seconds
    },
  },
};

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Enable ISR for dynamic data fetching
    staleTimes: {
      dynamic: 30, // 30 seconds
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
    ],
  },
};

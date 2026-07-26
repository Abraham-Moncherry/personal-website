import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Enable ISR for dynamic data fetching
    staleTimes: {
      dynamic: 30, // 30 seconds
    },
  },
  // Proxies PostHog through our own domain so ad-blockers that block
  // *.posthog.com don't silently drop analytics.
  async rewrites() {
    return [
      {
        source: "/ingest/static/:path*",
        destination: "https://eu-assets.i.posthog.com/static/:path*",
      },
      {
        source: "/ingest/array/:path*",
        destination: "https://eu-assets.i.posthog.com/array/:path*",
      },
      {
        source: "/ingest/:path*",
        destination: "https://eu.i.posthog.com/:path*",
      },
    ];
  },
  // Required for the PostHog proxy - its API paths are trailing-slash sensitive.
  skipTrailingSlashRedirect: true,
};

export default nextConfig;

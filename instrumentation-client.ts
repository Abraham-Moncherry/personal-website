import posthog from "posthog-js";

const token = process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN;

if (!token) {
  if (process.env.NODE_ENV !== "production") {
    console.warn(
      "NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN is not set - PostHog analytics are disabled."
    );
  }
} else {
  posthog.init(token, {
    // Routed through the /ingest rewrites in next.config.ts, not the EU host
    // directly, so ad-blockers don't drop the requests.
    api_host: "/ingest",
    ui_host: "https://eu.posthog.com",
    defaults: "2026-01-30",
    capture_exceptions: true,
    debug: process.env.NODE_ENV === "development",
  });
}

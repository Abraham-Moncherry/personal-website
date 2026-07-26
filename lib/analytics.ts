import posthog from "posthog-js";

/**
 * Safe wrapper around posthog.capture - no-ops when no key is configured so
 * local dev and preview builds don't warn on every interaction.
 */
export function track(event: string, properties?: Record<string, unknown>) {
  if (!process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN) return;
  posthog.capture(event, properties);
}

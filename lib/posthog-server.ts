import { PostHog } from "posthog-node";

const token = process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN;

/**
 * Cookie posthog-js writes in the browser. It holds the visitor's anonymous
 * `distinct_id` and current session id, which lets a server-captured event join
 * the same person and session as their client-side activity.
 */
export const POSTHOG_COOKIE_NAME = token ? `ph_${token}_posthog` : null;

/**
 * PostHog client for route handlers. Unlike the browser, this talks to
 * eu.i.posthog.com directly - the /ingest proxy exists purely to dodge
 * ad-blockers, which are irrelevant server-side.
 *
 * Returns null when no token is configured so local dev stays silent.
 */
export function getServerPostHog(): PostHog | null {
  if (!token) return null;

  return new PostHog(token, {
    host: "https://eu.i.posthog.com",
    // Route handlers are short-lived, so there's no long-running process to
    // batch into. Send on the first event and don't wait for a timer.
    flushAt: 1,
    flushInterval: 0,
  });
}

type BrowserIdentity = {
  distinctId?: string;
  sessionId?: string;
};

/**
 * Pulls the distinct id and session id out of the posthog-js cookie. Best
 * effort by design - a first-time or cookie-less visitor simply has neither,
 * and the caller falls back to an anonymous id.
 */
export function readBrowserIdentity(rawCookie?: string): BrowserIdentity {
  if (!rawCookie) return {};

  try {
    const parsed = JSON.parse(decodeURIComponent(rawCookie));
    return {
      distinctId:
        typeof parsed.distinct_id === "string" ? parsed.distinct_id : undefined,
      // $sesid is [lastActivityTs, sessionId, startTs]
      sessionId: Array.isArray(parsed.$sesid) ? parsed.$sesid[1] : undefined,
    };
  } catch {
    return {};
  }
}

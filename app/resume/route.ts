import { NextRequest, NextResponse } from "next/server";
import {
  POSTHOG_COOKIE_NAME,
  getServerPostHog,
  readBrowserIdentity,
} from "@/lib/posthog-server";

/**
 * Where the file actually lives. It is deliberately not at /resume.pdf any
 * more - a file served straight out of public/ runs no code, so direct hits
 * (a link pasted into a job application, a recruiter forwarding the URL) were
 * completely invisible. Everything now goes through this handler first.
 */
const RESUME_FILE = "/files/abraham-moncherry-resume.pdf";

/**
 * Link-preview crawlers fetch any URL you post on LinkedIn, Slack or WhatsApp.
 * Left unfiltered they'd inflate the download count every time the link is
 * shared, which is exactly when the number matters most.
 */
const CRAWLER_PATTERN =
  /bot|crawler|spider|slurp|preview|facebookexternalhit|linkedinbot|whatsapp|slackbot|telegram|discord|twitter|embedly|quora|bitly|skypeuripreview|headlesschrome|python-requests|curl|wget/i;

function clientIp(request: NextRequest): string | undefined {
  // The left-most entry is the original client; everything after it is proxies.
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]?.trim();
  return request.headers.get("x-real-ip") ?? undefined;
}

export async function GET(request: NextRequest) {
  const fileUrl = new URL(RESUME_FILE, request.url);
  const userAgent = request.headers.get("user-agent") ?? "";

  const posthog = getServerPostHog();

  if (posthog && !CRAWLER_PATTERN.test(userAgent)) {
    const { searchParams } = request.nextUrl;
    const cookie = POSTHOG_COOKIE_NAME
      ? request.cookies.get(POSTHOG_COOKIE_NAME)?.value
      : undefined;
    const { distinctId, sessionId } = readBrowserIdentity(cookie);
    const ip = clientIp(request);

    try {
      // captureImmediate awaits the network call. In a serverless function the
      // process can be frozen the moment we return a response, so a queued
      // event would silently never be sent.
      await posthog.captureImmediate({
        // Someone arriving from a shared link has no cookie yet. Keying the
        // fallback on the IP keeps repeat fetches from one person together
        // without inventing an identity that outlives the request.
        distinctId: distinctId ?? `anon-resume:${ip ?? "unknown"}`,
        event: "resume_accessed",
        properties: {
          action: searchParams.get("action") ?? "view",
          // No source param means nobody clicked a link on the site - the URL
          // was opened directly.
          source: searchParams.get("source") ?? "direct",
          had_session: Boolean(distinctId),
          $session_id: sessionId,
          // The request reaches PostHog from our server, so the visitor's IP
          // has to be passed explicitly or GeoIP would resolve our host.
          $ip: ip,
          $current_url: request.url,
          $referrer: request.headers.get("referer") ?? "$direct",
          $raw_user_agent: userAgent,
          // Matches the browser SDK's identified_only behaviour: nobody ever
          // logs in here, so don't create person profiles.
          $process_person_profile: false,
        },
        disableGeoip: false,
      });
    } catch (error) {
      // Analytics must never stand between someone and the resume.
      console.error("Failed to capture resume access:", error);
    } finally {
      await posthog.shutdown();
    }
  }

  return NextResponse.redirect(fileUrl, 302);
}

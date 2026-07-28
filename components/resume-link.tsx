"use client";

import { FileText } from "lucide-react";

/**
 * Points at the route handler in app/resume, not the PDF itself, so every
 * access is counted server-side - including links opened outside the site.
 * The query params are read there and become event properties; no click
 * handler is needed, which also means the count survives blocked JS.
 */
export const RESUME_PATH = "/resume";

/**
 * Small resume icon that sits beside the About Me heading. It nudges itself
 * every few seconds to draw the eye, and shakes continuously on hover. Both
 * animations are motion-safe: a perpetually moving element is a vestibular
 * trigger, so they disappear entirely for anyone with reduced motion enabled.
 */
export function ResumeIconLink() {
  return (
    <a
      href={`${RESUME_PATH}?source=about`}
      target="_blank"
      rel="noopener noreferrer"
      // A bare icon says nothing to a screen reader, and the native tooltip
      // gives sighted users the same hint on hover.
      aria-label="Read my resume (PDF)"
      title="Read my resume (PDF)"
      className="group inline-flex shrink-0 items-center justify-center rounded-lg p-1.5 text-primary transition-colors duration-200 hover:bg-primary/10"
    >
      <FileText
        aria-hidden
        strokeWidth={1.75}
        className="size-5 motion-safe:animate-[resume-nudge_5s_ease-in-out_infinite] motion-safe:group-hover:animate-[resume-shake_0.35s_ease-in-out_infinite] md:size-7"
      />
    </a>
  );
}

/**
 * Saves the resume to disk rather than opening it.
 */
export function ResumeDownloadLink() {
  return (
    <a
      href={`${RESUME_PATH}?source=footer&action=download`}
      download="Abraham-Moncherry-Resume.pdf"
      className="text-xs font-label uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary"
    >
      Resume
    </a>
  );
}

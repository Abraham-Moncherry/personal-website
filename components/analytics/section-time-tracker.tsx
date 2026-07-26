"use client";

import { useEffect } from "react";
import { track } from "@/lib/analytics";

const SECTIONS = ["hero", "about", "projects", "blogs"];

/**
 * Measures how long each section is actually on screen and reports it as
 * `section_time_spent`. Time only accrues while the section is at least half
 * visible AND the tab is in the foreground, so a page left open in a
 * background tab doesn't inflate the numbers.
 */
export function SectionTimeTracker() {
  useEffect(() => {
    const visible = new Set<string>();
    const enteredAt = new Map<string, number>();
    const totals = new Map<string, number>();

    const startTiming = (id: string) => {
      if (!enteredAt.has(id)) enteredAt.set(id, performance.now());
    };

    const accrue = (id: string) => {
      const start = enteredAt.get(id);
      if (start === undefined) return;
      totals.set(id, (totals.get(id) ?? 0) + (performance.now() - start));
      enteredAt.delete(id);
    };

    const observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          const id = entry.target.id;
          if (entry.isIntersecting) {
            visible.add(id);
            if (document.visibilityState === "visible") startTiming(id);
          } else {
            visible.delete(id);
            accrue(id);
          }
        }
      },
      { threshold: 0.5 }
    );

    const elements = SECTIONS.map(id => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null
    );
    elements.forEach(el => observer.observe(el));

    // Sends whatever has accrued so far, then resets. Called on tab-hide and
    // page-unload; totals are cleared each time so nothing double-counts.
    const flush = () => {
      visible.forEach(accrue);
      totals.forEach((ms, id) => {
        const seconds = Math.round(ms / 1000);
        if (seconds < 1) return;
        track("section_time_spent", { section: id, seconds });
      });
      totals.clear();
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        flush();
      } else {
        visible.forEach(startTiming);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("pagehide", flush);

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("pagehide", flush);
      flush();
    };
  }, []);

  return null;
}

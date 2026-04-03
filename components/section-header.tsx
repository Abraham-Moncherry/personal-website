"use client";

import { ViewportReveal } from "@/components/viewport-reveal";

interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
}

export function SectionHeader({ label, title, subtitle }: SectionHeaderProps) {
  return (
    <ViewportReveal delay={0}>
      <div className="flex flex-col items-center gap-3 md:gap-4 mb-12 md:mb-16">
        {label && (
          <span className="text-xs md:text-sm font-medium tracking-widest uppercase text-violet-400">
            {label}
          </span>
        )}
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-center">
          {title}
        </h2>
        {subtitle && (
          <p className="text-base md:text-lg text-muted-foreground text-center max-w-2xl">
            {subtitle}
          </p>
        )}
      </div>
    </ViewportReveal>
  );
}

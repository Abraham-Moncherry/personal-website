"use client";

import Image from "next/image";

export function SocialsFoooter() {
  return (
    <div className="w-full">
      <div className="relative h-24 overflow-hidden sm:h-36 md:h-44 lg:h-48">
        <Image
          src="/editorial-balance.webp"
          alt="A collage of a balancing rock, textured paper, and a pale pink flower"
          fill
          sizes="100vw"
          className="object-cover object-[center_43%] transition-[filter] duration-500 dark:brightness-[0.68] dark:saturate-[0.78]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-transparent to-background/55 pointer-events-none" />
      </div>

      <div className="flex w-full flex-col items-center justify-between gap-5 px-5 py-8 md:flex-row md:gap-6 md:px-8 md:py-12 2xl:px-12">
        {/* Social Links */}
        <div className="flex gap-8">
          <a
            href="https://linkedin.com/in/abrahammoncherry"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-label uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Abraham-Moncherry"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-label uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
          >
            GitHub
          </a>
          <a
            href="mailto:abraham.m.moncherry@gmail.com"
            className="text-xs font-label uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
          >
            Email
          </a>
        </div>

        {/* Right: Copyright */}
        <div className="text-center md:text-right text-xs font-label uppercase tracking-widest text-muted-foreground">
          © 2025 Abraham Moncherry
        </div>
      </div>
    </div>
  );
}

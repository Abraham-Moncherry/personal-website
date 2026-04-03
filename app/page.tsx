import { Conversation } from "@/components/conversation";
import { ViewportReveal } from "@/components/viewport-reveal";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-24 md:py-32">
      {/* Hero content - two column on desktop, stacked on mobile */}
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Left side: Text content */}
        <ViewportReveal delay={0}>
          <div className="flex flex-col gap-6">
            <div>
              <span className="text-xs md:text-sm font-medium tracking-widest uppercase text-violet-400">
                AI Engineer
              </span>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mt-4 md:mt-6">
                Abraham
              </h1>
              <p className="text-2xl md:text-3xl text-muted-foreground font-light mt-2">
                Moncherry
              </p>
            </div>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
              Building intelligent voice agents and software that makes meaningful impact.
            </p>

            <div className="pt-4">
              <p className="text-sm text-muted-foreground/70">
                Tap the orb to chat with Selina, my AI agent.
              </p>
            </div>
          </div>
        </ViewportReveal>

        {/* Right side: Orb */}
        <ViewportReveal delay={0.2}>
          <div className="flex justify-center md:justify-end">
            <div className="w-64 h-64 md:w-80 md:h-80">
              <Conversation />
            </div>
          </div>
        </ViewportReveal>
      </div>

      {/* Scroll indicator */}
      <ViewportReveal delay={0.4}>
        <div className="mt-20 md:mt-24 animate-pulse">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-muted-foreground/50 tracking-widest uppercase">
              Scroll to explore
            </span>
            <svg
              className="w-5 h-5 text-muted-foreground/50"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </ViewportReveal>
    </main>
  );
}

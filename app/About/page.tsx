"use client";

import { HoverCardInfo } from "@/components/hoverCardInfo";
import TechStackCarousel from "@/components/TechStackCarousel";
import { SectionHeader } from "@/components/section-header";
import { ViewportReveal } from "@/components/viewport-reveal";
import { useEffect, useState } from "react";

export default function Page() {
  const [animationDuration, setAnimationDuration] = useState(25);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setAnimationDuration(10);
      } else {
        setAnimationDuration(25);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-24 md:py-32">
      <div className="w-full max-w-5xl">
        <SectionHeader
          label="About"
          title="Crafting the future of voice AI"
          subtitle="CS student and AI engineer passionate about building intelligent systems that matter"
        />

        {/* Two-column grid: About + Tech Stack */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 mb-16 md:mb-24">
          {/* Left: About content */}
          <div className="md:col-span-2 space-y-6">
            <ViewportReveal delay={0.2}>
              <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                Welcome! Hopefully, you've already had a chat with <strong>Selina</strong>, my professional AI agent built using RAG. She knows almost everything about my professional journey — though I've managed to keep a few secrets from her.
              </p>
            </ViewportReveal>

            <ViewportReveal delay={0.3}>
              <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                I'm <HoverCardInfo />, a 3rd-year Computer Science student at the <strong>University of Melbourne</strong> and an AI Engineer at <strong>Heya Voice AI</strong>, where I design and build voice agents that transform how businesses and users interact with technology.
              </p>
            </ViewportReveal>

            <ViewportReveal delay={0.4}>
              <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                I'm passionate about the intersection of artificial intelligence and human connection. I love experimenting with emerging technologies and building solutions that create positive real-world impact. Whether it's voice agents, natural language understanding, or just exploring the latest in AI, I'm constantly learning and building.
              </p>
            </ViewportReveal>

            <ViewportReveal delay={0.5}>
              <p className="text-sm text-muted-foreground/60 pt-4">
                Reach out anytime — via LinkedIn, GitHub, or email. I'd love to chat about projects, ideas, or just connect.
              </p>
            </ViewportReveal>
          </div>

          {/* Right: Profile highlight (could add avatar here) */}
          <ViewportReveal delay={0.3}>
            <div className="md:col-span-1 sticky top-24 p-6 rounded-2xl border border-border/50 bg-muted/30 backdrop-blur-sm">
              <h3 className="text-lg font-semibold mb-4">Current Role</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-muted-foreground text-xs uppercase tracking-wide">Position</p>
                  <p className="font-medium">AI Engineer</p>
                </div>
                <div>
                  <p className="text-muted-foreground text-xs uppercase tracking-wide">Company</p>
                  <p className="font-medium">Heya Voice AI</p>
                </div>
                <div>
                  <p className="text-muted-foreground text-xs uppercase tracking-wide">Education</p>
                  <p className="font-medium">CS @ University of Melbourne</p>
                </div>
                <div>
                  <p className="text-muted-foreground text-xs uppercase tracking-wide">Focus</p>
                  <p className="font-medium">Voice AI & NLP</p>
                </div>
              </div>
            </div>
          </ViewportReveal>
        </div>

        {/* Tech Stack Section */}
        <div className="space-y-8 md:space-y-12">
          <ViewportReveal delay={0.5}>
            <div className="flex flex-col items-center gap-3 mb-12">
              <span className="text-xs md:text-sm font-medium tracking-widest uppercase text-violet-400">
                Tools & Technologies
              </span>
              <h3 className="text-3xl md:text-4xl font-bold text-center">
                What I work with
              </h3>
            </div>
          </ViewportReveal>

          <ViewportReveal delay={0.6}>
            <TechStackCarousel animationDuration={animationDuration} />
          </ViewportReveal>
        </div>
      </div>
    </main>
  );
}

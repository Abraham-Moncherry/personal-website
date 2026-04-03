"use client";

import { Conversation } from "@/components/conversation";
import { ViewportReveal } from "@/components/viewport-reveal";
import { SectionHeader } from "@/components/section-header";
import { ProjectCard } from "@/components/project-card";
import { StaggerContainer } from "@/components/stagger-container";
import { MediumFeedWrapper } from "@/components/MediumFeedWrapper";
import TechStackCarousel from "@/components/TechStackCarousel";
import { HoverCardInfo } from "@/components/hoverCardInfo";

interface Project {
  title: string;
  image: string;
  alt: string;
  description: string;
  codeUrl: string;
  demoUrl: string;
}

const projects: Project[] = [
  {
    title: "Mental Health Chatbot",
    image: "/mch.png",
    alt: "Mental Health Chatbot interface",
    description:
      "An intelligent RAG-powered chatbot system that provides accurate mental health services information and support through continuous, context-aware conversation.",
    codeUrl: "https://github.com/IT-Project-5F/mental-health-chat-bot",
    demoUrl: "https://mch-staging.mooo.com/",
  },
  {
    title: "Garden Of Love",
    image: "/garden-of-love.png",
    alt: "Garden of Love 3D game",
    description:
      "A 3D miniature adventure game in Unity featuring Elara's quest through a mystical garden. Navigate towering obstacles and challenges to break her curse — only true love's kiss can restore her.",
    codeUrl: "https://github.com/Abraham-Moncherry/garden-of-love",
    demoUrl: "https://abraham-moncherry.github.io/garden-of-love-web/",
  },
  {
    title: "Personal Website",
    image: "/personal-website.png",
    alt: "Personal website with AI agent",
    description:
      "A modern Next.js portfolio showcasing AI integration. Features Selina, my RAG-based professional agent, for interactive conversational exploration of projects and skills.",
    codeUrl: "https://github.com/Abraham-Moncherry/personal-website",
    demoUrl: "https://abrahamm.dev/",
  },
  {
    title: "Facial Recognition System",
    image: "/facial-recognition.png",
    alt: "Facial recognition interface",
    description:
      "An intelligent system that identifies students from a database using facial recognition technology and dynamically displays their verified information and records.",
    codeUrl: "https://github.com/Abraham-Moncherry/Facial-Recognition-Student-System",
    demoUrl: "https://github.com/Abraham-Moncherry/Facial-Recognition-Student-System",
  },
  {
    title: "Flarpy Bird",
    image: "/flarpyBird.png",
    alt: "Flarpy Bird game",
    description:
      "A dynamic twist on the classic Flappy Bird game, built in Unity with enhanced mechanics, smooth physics, and engaging gameplay challenges.",
    codeUrl: "https://github.com/Abraham-Moncherry/Flapry-Bird",
    demoUrl: "https://abraham-moncherry.github.io/Flarpy-Bird-Web/",
  },
];

export default function Home() {
  return (
    <main className="w-full">
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          HERO SECTION
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section
        id="hero"
        className="min-h-screen flex flex-col items-center justify-center px-6 py-24 md:py-32"
      >
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
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          ABOUT SECTION
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section
        id="about"
        className="min-h-screen flex flex-col items-center justify-center px-6 py-24 md:py-32"
      >
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

            {/* Right: Profile highlight */}
            <ViewportReveal delay={0.3}>
              <div>
                <div className="sticky top-24 p-6 rounded-2xl border border-border/50 bg-muted/30 backdrop-blur-sm">
                  <h3 className="text-lg font-semibold mb-4">Current Role</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="text-muted-foreground text-xs uppercase tracking-wide">
                        Position
                      </p>
                      <p className="font-medium">AI Engineer</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground text-xs uppercase tracking-wide">
                        Company
                      </p>
                      <p className="font-medium">Heya Voice AI</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground text-xs uppercase tracking-wide">
                        Education
                      </p>
                      <p className="font-medium">CS @ University of Melbourne</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground text-xs uppercase tracking-wide">
                        Focus
                      </p>
                      <p className="font-medium">Voice AI & NLP</p>
                    </div>
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
              <TechStackCarousel animationDuration={25} />
            </ViewportReveal>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          PROJECTS SECTION
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section
        id="projects"
        className="min-h-screen flex flex-col items-center justify-center px-6 py-24 md:py-32"
      >
        <div className="w-full max-w-6xl">
          <SectionHeader
            label="Portfolio"
            title="Projects I've built"
            subtitle="A collection of work spanning AI, web development, games, and machine learning"
          />

          {/* Projects grid */}
          <StaggerContainer staggerDelay={0.15} childDuration={0.6}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {projects.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          BLOGS SECTION
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section
        id="blogs"
        className="min-h-screen flex flex-col items-center justify-center px-6 py-24 md:py-32"
      >
        <div className="w-full max-w-4xl">
          <SectionHeader
            label="Writing"
            title="Thoughts on AI & Technology"
            subtitle="Essays, explorations, and learnings from building in the AI space"
          />

          <ViewportReveal delay={0.3}>
            <MediumFeedWrapper />
          </ViewportReveal>
        </div>
      </section>
    </main>
  );
}

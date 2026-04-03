"use client";

import { Conversation } from "@/components/conversation";
import { ViewportReveal } from "@/components/viewport-reveal";
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
    title: "Gitty",
    image: "/gitty.png",
    alt: "Gitty Chrome extension",
    description:
      "A Chrome extension for developers that tracks your commits, builds streaks, and lets you compete with friends. Consistency has never felt this good.",
    codeUrl: "https://github.com/Abraham-Moncherry/gitty",
    demoUrl: "https://www.getgitty.dev/",
  },
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
    codeUrl:
      "https://github.com/Abraham-Moncherry/Facial-Recognition-Student-System",
    demoUrl:
      "https://github.com/Abraham-Moncherry/Facial-Recognition-Student-System",
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
        className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-12 md:pt-16 pb-12 overflow-hidden"
      >
        {/* Background orb glow */}
        <div className="absolute inset-0 flex items-center justify-center -z-10">
          <div
            className="w-96 h-96 md:w-[600px] md:h-[600px] rounded-full blur-3xl opacity-20"
            style={{
              background:
                "linear-gradient(135deg, rgba(120,90,0,0.8) 0%, rgba(254,147,44,0.4) 100%)",
            }}
          />
        </div>

        <div className="w-full max-w-7xl flex flex-col items-center gap-12 md:gap-16">
          {/* Text content (centered) */}
          <ViewportReveal delay={0}>
            <div
              className="flex flex-col gap-6 text-center"
              style={{ animation: "fade-up 0.8s ease-out" }}
            >
              <div style={{ animation: "fade-up 0.8s ease-out 0.1s both" }}>
                <span className="text-xs md:text-sm font-medium tracking-widest uppercase text-primary font-label">
                  AI Software Engineer
                </span>
                <h1 className="text-5xl md:text-7xl font-black tracking-tight mt-4 md:mt-6 font-headline">
                  Abraham
                </h1>
                <h1 className="text-5xl md:text-7xl font-black tracking-tight font-headline text-muted-foreground">
                  Moncherry
                </h1>
              </div>

              <p
                className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg mx-auto"
                style={{ animation: "fade-up 0.8s ease-out 0.2s both" }}
              >
                Building with relentless focus on impact.
              </p>

              <p
                className="text-sm text-muted-foreground/70"
                style={{ animation: "fade-up 0.8s ease-out 0.3s both" }}
              >
                Tap the orb to chat with Selina, my AI agent.
              </p>
            </div>
          </ViewportReveal>

          {/* Orb (interactive, centered) */}
          <ViewportReveal delay={0.2}>
            <div
              className="flex justify-center"
              style={{ animation: "float 4s ease-in-out infinite" }}
            >
              <div className="w-48 h-48 md:w-72 md:h-72">
                <Conversation />
              </div>
            </div>
          </ViewportReveal>
        </div>

      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          ABOUT SECTION
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section
        id="about"
        className="flex flex-col items-center px-6 py-16 md:py-24 bg-muted/10"
      >
        <div className="w-full max-w-7xl">
          <div className="mb-16">
            <span className="text-xs md:text-sm font-medium tracking-widest uppercase text-primary font-label">
              About
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mt-2 font-headline">
              About Me
            </h2>
          </div>

          {/* Two-column layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 mb-16">
            {/* Left: Bio (md:col-span-2) */}
            <div className="md:col-span-2 space-y-6">
              <ViewportReveal delay={0.2}>
                <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                  Final year Computer Science student at the{" "}
                  <strong>University of Melbourne</strong>. Currently working as
                  an AI Engineer at <strong>Heya Voice AI</strong>, a voice AI
                  startup in Melbourne.
                </p>
              </ViewportReveal>

              <ViewportReveal delay={0.3}>
                <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                  I love building things and creating impact. Passionate about
                  solving real problems through technology and making a positive
                  difference in society.
                </p>
              </ViewportReveal>

              <ViewportReveal delay={0.4}>
                <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                  Outside of code, I'm into running and resistance training.
                  Health and wellness keep me grounded and energized.
                </p>
              </ViewportReveal>
            </div>
          </div>

          {/* Tech Carousel Section */}
          <div className="space-y-8 md:space-y-12 mt-20 md:mt-32">
            <ViewportReveal delay={0.5}>
              <div className="flex flex-col items-center gap-4 mb-12"></div>
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
        className="flex flex-col items-center px-6 py-16 md:py-24 bg-muted/10"
      >
        <div className="w-full max-w-6xl">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="text-xs md:text-sm font-medium tracking-widest uppercase text-primary font-label">
                Portfolio
              </span>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight mt-2 font-headline">
                Projects I've built
              </h2>
            </div>
            <span className="text-xs md:text-sm font-medium tracking-widest uppercase text-muted-foreground font-label hidden md:block">
              2023 — 2026
            </span>
          </div>

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
          CTA SECTION
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="flex flex-col items-center justify-center px-6 py-32 md:py-48 text-center">
        <div className="max-w-3xl">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight font-headline mb-8">
            Let's build the future together.
          </h2>
          <a
            href="mailto:abraham@example.com"
            className="inline-block px-8 py-4 text-base font-bold font-headline bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-opacity"
          >
            Get In Touch
          </a>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          BLOGS SECTION
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section
        id="blogs"
        className="flex flex-col items-center px-6 py-16 md:py-24 bg-muted/10"
      >
        <div className="w-full max-w-4xl">
          <div className="mb-16">
            <span className="text-xs md:text-sm font-medium tracking-widest uppercase text-primary font-label">
              Writing
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mt-2 font-headline">
              My Thoughts and Ideas
            </h2>
          </div>

          <ViewportReveal delay={0.3}>
            <MediumFeedWrapper />
          </ViewportReveal>
        </div>
      </section>
    </main>
  );
}

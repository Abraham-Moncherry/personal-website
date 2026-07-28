"use client";

import { Conversation } from "@/components/conversation";
import { ViewportReveal } from "@/components/viewport-reveal";
import { ProjectCard } from "@/components/project-card";
import { StaggerContainer } from "@/components/stagger-container";
import { MediumFeedWrapper } from "@/components/MediumFeedWrapper";
import TechStackCarousel from "@/components/TechStackCarousel";
import { HoverCardInfo } from "@/components/hoverCardInfo";
import { track } from "@/lib/analytics";
import { ResumeIconLink } from "@/components/resume-link";

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
    title: "Caissa",
    image: "/caissa.png",
    alt: "Caissa chess analysis board",
    description:
      "An open-source chess analysis and coaching web app. Import a PGN, replay the game on an interactive board, inspect Stockfish's key moments, and ask an AI coach what you should have played and how to improve.",
    codeUrl: "https://github.com/Abraham-Moncherry/caissa",
    demoUrl: "https://github.com/Abraham-Moncherry/caissa",
  },
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
        className="relative flex min-h-0 flex-col items-center justify-start overflow-hidden px-5 pb-10 pt-4 md:min-h-screen md:justify-center md:px-6 md:pb-12 md:pt-16"
      >
        {/* Background orb glow */}
        <div className="absolute inset-0 flex items-center justify-center -z-10">
          <div
            className="w-96 h-96 md:w-[600px] md:h-[600px] rounded-full blur-3xl opacity-20"
            style={{
              background:
                "linear-gradient(135deg, rgba(121,101,78,0.68) 0%, rgba(183,155,120,0.42) 55%, rgba(215,195,162,0.34) 100%)",
            }}
          />
        </div>

        <div className="flex w-full max-w-7xl flex-col items-center gap-8 md:gap-16">
          {/* Text content (centered) */}
          <ViewportReveal delay={0}>
            <div
              className="flex flex-col gap-4 text-center md:gap-6"
              style={{ animation: "fade-up 0.8s ease-out" }}
            >
              <div style={{ animation: "fade-up 0.8s ease-out 0.1s both" }}>
                <span className="text-xs md:text-sm font-medium tracking-widest uppercase text-primary font-label">
                  AI Software Engineer
                </span>
                <h1 className="mt-3 text-5xl font-black tracking-tight font-headline md:mt-6 md:text-7xl">
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
                Tap the sound wave to chat with Selina, my AI agent.
              </p>
            </div>
          </ViewportReveal>

          {/* Sound wave (interactive, centered) */}
          <ViewportReveal delay={0.2}>
            <div className="flex justify-center">
              <div className="flex h-48 w-[min(76vw,300px)] items-center justify-center md:h-56">
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
        className="flex flex-col items-center bg-muted/10 px-5 py-12 md:px-6 md:py-24"
      >
        <div className="w-full max-w-7xl">
          <div className="mb-10 md:mb-16">
            <span className="text-xs md:text-sm font-medium tracking-widest uppercase text-primary font-label">
              About
            </span>
            <div className="mt-2 flex items-baseline gap-2 md:gap-3">
              <h2 className="text-3xl md:text-5xl font-black tracking-tight font-headline">
                About Me
              </h2>
              <ResumeIconLink />
            </div>
          </div>

          {/* Bio */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-16">
            <div className="space-y-4 md:col-span-2 md:space-y-6">
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

          {/* Experience timeline */}
          <div className="mt-12 md:mt-24">
            <ViewportReveal delay={0.5}>
              <span className="text-xs md:text-sm font-medium tracking-widest uppercase text-primary font-label">
                Experience
              </span>
              <h3 className="text-2xl md:text-3xl font-black tracking-tight mt-2 font-headline">
                Where I&apos;ve been
              </h3>
            </ViewportReveal>

            <ViewportReveal delay={0.6}>
              <div className="relative mt-6 pl-8 md:mt-10 md:pl-10">
                <div className="absolute left-[7px] top-2 bottom-0 w-px bg-border" />
                <div className="absolute left-0 top-2 h-[15px] w-[15px] rounded-full border-4 border-background bg-primary ring-1 ring-primary" />
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between max-w-3xl">
                  <div>
                    <h4 className="text-lg md:text-xl font-black font-headline">
                      Heya Voice AI
                    </h4>
                    <p className="mt-1 text-sm md:text-base text-muted-foreground">
                      AI Software Engineer
                    </p>
                  </div>
                  <span className="text-xs md:text-sm font-medium tracking-widest uppercase text-muted-foreground font-label">
                    Mar 2025 — Present
                  </span>
                </div>
              </div>
            </ViewportReveal>
          </div>

          {/* Tech Carousel Section */}
          <div className="mt-10 md:mt-32">
            <ViewportReveal delay={0.8}>
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
        className="flex flex-col items-center bg-muted/10 px-5 py-12 md:px-6 md:py-24"
      >
        <div className="w-full max-w-6xl">
          <div className="mb-10 md:mb-16">
            <div>
              <span className="text-xs md:text-sm font-medium tracking-widest uppercase text-primary font-label">
                Portfolio
              </span>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight mt-2 font-headline">
                Projects I've built
              </h2>
            </div>
          </div>

          {/* Projects grid */}
          <StaggerContainer staggerDelay={0.15} childDuration={0.6}>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-12">
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
      <section className="flex flex-col items-center justify-center px-5 py-20 text-center md:px-6 md:py-48">
        <div className="max-w-3xl">
          <h2 className="mb-6 text-4xl font-black tracking-tight font-headline md:mb-8 md:text-6xl">
            Don't be a stranger.
          </h2>
          <a
            href="mailto:abraham.m.moncherry@gmail.com?subject=Not%20a%20stranger%20anymore"
            className="inline-block px-8 py-4 text-base font-bold font-headline bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-opacity"
            onClick={() => track("cta_email_clicked")}
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
        className="flex flex-col items-center bg-muted/10 px-5 py-12 md:px-6 md:py-24"
      >
        <div className="w-full max-w-4xl">
          <div className="mb-10 md:mb-16">
            <span className="text-xs md:text-sm font-medium tracking-widest uppercase text-primary font-label">
              Writing
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mt-2 font-headline">
              Notes from the build
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

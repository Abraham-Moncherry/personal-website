"use client";

import { ProjectCard } from "@/components/project-card";
import { SectionHeader } from "@/components/section-header";
import { StaggerContainer } from "@/components/stagger-container";

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

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-24 md:py-32">
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
    </main>
  );
}

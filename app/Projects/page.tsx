import { MacWindow } from "@/components/MacWindow";
import Image from "next/image";
import { Button } from "@/components/ui/button";

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
    alt: "Mental Health Chatbot",
    description:
      "An intelligent RAG (Retrieval-Augmented Generation) chatbot system for mental health services information with continuous conversation support",
    codeUrl: "https://github.com/IT-Project-5F/mental-health-chat-bot",
    demoUrl: "https://mch-staging.mooo.com/",
  },
  {
    title: "Garden Of Love",
    image: "/garden-of-love.png",
    alt: "Garden Of Love",
    description:
      "A 3D miniature adventure game built in Unity, where Elara, a cursed protagonist, must battle towering creatures across a mystical garden to reunite with her lover. Only true love's kiss can break the spell and return her to her normal form.",
    codeUrl: "https://github.com/Abraham-Moncherry/garden-of-love",
    demoUrl: "https://abraham-moncherry.github.io/garden-of-love-web/",
  },
  {
    title: "Personal Website",
    image: "/personal-website.png",
    alt: "Personal Website",
    description:
      "A Next.js website with AI integration featuring Selina, my professional agent.",
    codeUrl: "https://github.com/Abraham-Moncherry/personal-website",
    demoUrl: "https://abrahamm.dev/",
  },
  {
    title: "Facial Recognition Student System",
    image: "/facial-recognition.png",
    alt: "Facial Recognition Student System",
    description:
      "Facial recognition system that identies students saved in the database and display student details.",
    codeUrl: "https://github.com/Abraham-Moncherry/Facial-Recognition-Student-System",
    demoUrl: "https://github.com/Abraham-Moncherry/Facial-Recognition-Student-System",
  },
  {
    title: "Flarpy Bird",
    image: "/flarpyBird.png",
    alt: "Flarpy Bird game",
    description: "Flarpy Bird is a Flappy Bird-style game built in Unity.",
    codeUrl: "https://github.com/Abraham-Moncherry/Flapry-Bird",
    demoUrl: "https://abraham-moncherry.github.io/Flarpy-Bird-Web/",
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="w-full max-w-[600px]">
      <div className="flex flex-col h-full">
        <MacWindow title={project.title}>
          <Image
            src={project.image}
            alt={project.alt}
            fill
            className="object-cover"
          />
        </MacWindow>
        <p className="text-gray-600 flex-grow py-2">{project.description}</p>
        <div className="flex gap-3 pt-2">
          <Button variant="secondary" asChild>
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Code
            </a>
          </Button>
          <Button asChild>
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Demo
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default async function Page() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center p-4 md:p-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
        My Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-2 md:gap-y-2 md:gap-x-25 py-1 max-w-6xl w-full justify-items-center">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}

import React from "react";

interface TechItem {
  name: string;
  icon: string;
  alt: string;
}

const techStack: TechItem[] = [
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    alt: "JavaScript",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    alt: "React",
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    alt: "Next.js",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    alt: "TypeScript",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    alt: "Node.js",
  },
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    alt: "Python",
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    alt: "PostgreSQL",
  },
  {
    name: "Prisma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg",
    alt: "Prisma",
  },
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    alt: "Docker",
  },
  {
    name: "AWS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    alt: "AWS",
  },
  {
    name: "Vercel",
    icon: " https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",
    alt: "Vercel",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    alt: "Git",
  },
  {
    name: "Github Actions",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg",
    alt: "Github Actions",
  },
  {
    name: "Unity",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg",
    alt: "Unity",
  },
  {
    name: "C#",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
    alt: "C#",
  },
];

interface TechStackCarouselProps {
  animationDuration?: number;
}

const TechStackCarousel: React.FC<TechStackCarouselProps> = ({
  animationDuration = 30,
}) => {
  return (
    <div className="relative w-full flex flex-col items-center gap-12">
      <div className="relative w-full h-30 overflow-hidden before:absolute before:top-0 before:left-0 before:w-16 before:h-full before:z-10 before:pointer-events-none after:absolute after:top-0 after:right-0 after:w-16 after:h-full after:z-10 after:pointer-events-none ">
        <div
          className="flex h-full animate-scroll"
          style={{
            width: "calc(200% + 2.5rem)",
            animationDuration: `${animationDuration}s`,
          }}
        >
          {/* First set of tech items */}
          {techStack.map((tech, index) => (
            <div
              key={`first-${index}`}
              className="flex-none h-20 w-20 mx-5 my-5 flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-xl overflow-hidden"
            >
              <img
                src={tech.icon}
                alt={tech.alt}
                className="w-12 h-12 object-contain drop-shadow-sm"
              />
            </div>
          ))}

          {/* Duplicate set for seamless loop */}
          {techStack.map((tech, index) => (
            <div
              key={`second-${index}`}
              className="flex-none h-20 w-20 mx-5 my-5 flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-xl overflow-hidden"
            >
              <img
                src={tech.icon}
                alt={tech.alt}
                className="w-12 h-12 object-contain drop-shadow-sm"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStackCarousel;

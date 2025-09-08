import React from "react";
import { useTheme } from "next-themes";

const VercelLogo = ({
  size = 48,
  className = "",
}: {
  size?: number;
  className?: string;
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 76 65"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" />
  </svg>
);

interface TechItem {
  name: string;
  icon: string;
  darkIcon?: string;
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
    darkIcon:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
    alt: "AWS",
  },
  {
    name: "Vercel",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",
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
  const { theme } = useTheme();

  return (
    <div className="w-full overflow-hidden">
      <div className="relative flex overflow-hidden py-4">
        <div
          className="flex animate-scroll"
          style={{
            animationDuration: `${animationDuration}s`,
          }}
        >
          {/* First set of tech items */}
          {techStack.map((tech, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 w-14 h-14 md:w-20 md:h-20 mx-2 md:mx-4 flex items-center justify-center"
            >
              {tech.name === "Vercel" ? (
                <VercelLogo
                  size={40}
                  className="md:w-12 md:h-12 text-black dark:text-white"
                />
              ) : (
                <img
                  src={
                    tech.darkIcon && theme == "dark" ? tech.darkIcon : tech.icon
                  }
                  alt={tech.alt}
                  className="w-10 h-10 md:w-12 md:h-12 object-contain"
                />
              )}
            </div>
          ))}

          {/* Duplicate set for seamless loop */}
          {techStack.map((tech, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 w-14 h-14 md:w-20 md:h-20 mx-2 md:mx-4 flex items-center justify-center"
            >
              {tech.name === "Vercel" ? (
                <VercelLogo
                  size={40}
                  className="md:w-12 md:h-12 text-black dark:text-white"
                />
              ) : (
                <img
                  src={
                    tech.darkIcon && theme == "dark" ? tech.darkIcon : tech.icon
                  }
                  alt={tech.alt}
                  className="w-10 h-10 md:w-12 md:h-12 object-contain"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStackCarousel;

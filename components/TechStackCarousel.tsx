"use client";

import React from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

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
  animationDuration = 40,
}) => {
  const { theme } = useTheme();

  const duplicatedStack = [...techStack, ...techStack];

  return (
    <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
      <div className="relative overflow-hidden py-12 md:py-16">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-8 md:gap-16 items-center"
          animate={{ x: [0, -1000] }}
          transition={{
            duration: animationDuration,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {duplicatedStack.map((tech, index) => (
            <motion.div
              key={`${tech.name}-${index}`}
              className="flex-shrink-0 flex items-center justify-center"
              whileHover={{ scale: 1.2, y: -12 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div
                className="relative flex items-center justify-center group cursor-pointer"
                title={tech.name}
              >
                {tech.name === "Vercel" ? (
                  <VercelLogo
                    size={48}
                    className="w-12 h-12 md:w-16 md:h-16 text-black dark:text-white transition-all duration-300 group-hover:drop-shadow-lg"
                  />
                ) : (
                  <img
                    src={
                      tech.darkIcon && theme == "dark"
                        ? tech.darkIcon
                        : tech.icon
                    }
                    alt={tech.alt}
                    className="w-12 h-12 md:w-16 md:h-16 object-contain transition-all duration-300 group-hover:drop-shadow-lg"
                  />
                )}

                {/* Tooltip on hover */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: -40 }}
                  className="absolute bottom-full mb-2 whitespace-nowrap pointer-events-none"
                >
                  <div className="px-3 py-1 rounded-lg bg-foreground text-background text-xs md:text-sm font-medium">
                    {tech.name}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TechStackCarousel;

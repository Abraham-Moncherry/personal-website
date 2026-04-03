"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  alt: string;
  codeUrl: string;
  demoUrl: string;
}

export function ProjectCard({
  title,
  description,
  image,
  alt,
  codeUrl,
  demoUrl,
}: ProjectCardProps) {
  return (
    <motion.div
      className="group flex flex-col h-full bg-card rounded-2xl overflow-hidden border border-border/20"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
    >
      {/* Image container with hover overlay */}
      <div className="relative w-full aspect-video overflow-hidden bg-muted">
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
        />
        {/* Hover overlay */}
        <motion.div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center gap-2 md:gap-4 opacity-0 group-hover:opacity-100"
          transition={{ duration: 0.3 }}
        >
          <motion.div
            whileHover={{ rotate: [-3, 3, -3, 0], transition: { duration: 0.5 } }}
          >
            <Button
              asChild
              size="sm"
              variant="secondary"
              className="rounded-lg md:px-6 md:py-2 md:text-base"
            >
              <a href={codeUrl} target="_blank" rel="noopener noreferrer">
                Code
                <ExternalLink className="w-3.5 h-3.5 md:w-4 md:h-4 ml-1.5" />
              </a>
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ rotate: [-3, 3, -3, 0], transition: { duration: 0.5 } }}
          >
            <Button
              asChild
              size="sm"
              className="rounded-lg md:px-6 md:py-2 md:text-base"
            >
              <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                Demo
                <ExternalLink className="w-3.5 h-3.5 md:w-4 md:h-4 ml-1.5" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl md:text-2xl font-black font-headline mb-3">{title}</h3>
        <p className="text-muted-foreground flex-grow mb-6 leading-relaxed text-sm md:text-base">
          {description}
        </p>
      </div>

      {/* Mobile buttons (visible on small screens) */}
      <div className="flex gap-3 lg:hidden">
        <Button asChild variant="secondary" className="flex-1">
          <a href={codeUrl} target="_blank" rel="noopener noreferrer">
            Code
          </a>
        </Button>
        <Button asChild className="flex-1">
          <a href={demoUrl} target="_blank" rel="noopener noreferrer">
            Demo
          </a>
        </Button>
      </div>
    </motion.div>
  );
}

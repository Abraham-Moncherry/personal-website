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
      className="group flex flex-col h-full"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
    >
      {/* Image container with hover overlay */}
      <div className="relative w-full aspect-video overflow-hidden rounded-2xl bg-muted mb-6">
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {/* Hover overlay */}
        <motion.div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100"
          transition={{ duration: 0.3 }}
        >
          <Button
            asChild
            size="sm"
            variant="secondary"
            className="rounded-lg"
          >
            <a href={codeUrl} target="_blank" rel="noopener noreferrer">
              Code
              <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
            </a>
          </Button>
          <Button
            asChild
            size="sm"
            className="rounded-lg"
          >
            <a href={demoUrl} target="_blank" rel="noopener noreferrer">
              Demo
              <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
            </a>
          </Button>
        </motion.div>
      </div>

      {/* Content */}
      <h3 className="text-xl md:text-2xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground flex-grow mb-4 leading-relaxed">
        {description}
      </p>

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

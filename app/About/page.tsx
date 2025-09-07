"use client";

import { HoverCardInfo } from "@/components/hoverCardInfo";
import TechStackCarousel from "@/components/TechStackCarousel";
import { useEffect, useState } from "react";

export default function Page() {
  const [animationDuration, setAnimationDuration] = useState(25);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setAnimationDuration(10); // Faster on mobile
      } else {
        setAnimationDuration(25); // Default for desktop/tablet
      }
    };
    handleResize(); // Set on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Debug: log the animationDuration to verify it updates
  useEffect(() => {
    console.log("animationDuration:", animationDuration);
  }, [animationDuration]);

  return (
    <div className="flex flex-col min-h-[80vh]">
      <div className="flex-1 flex flex-col items-center justify-center px-4 md:px-8 py-4 md:py-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">About Me</h1>
        <div className="max-w-2xl text-center space-y-6">
          <section className="space-y-4">
            <p className="text-base md:text-lg leading-relaxed">
              Welcome! Hopefully, you've already had a chat with Selina, my
              professional agent built using RAG. She knows almost everything
              about my professional life (I had to keep some secrets from her).
            </p>

            <p className="text-base md:text-lg leading-relaxed">
              I'm <HoverCardInfo />, a 3rd-year Computer Science student at the
              University of Melbourne and currently working part-time as an AI
              Engineer at Heya Voice AI, where I create voice agents just like
              Selina.
            </p>

            <p className="text-base md:text-lg leading-relaxed">
              I'm thrilled to be in the AI space and love experimenting with new
              technologies and tech stacks that could positively impact society.
            </p>
          </section>

          <div className="text-sm md:text-base text-gray-400 mt-4">
            Feel free to reach out through my socials or email down below.
          </div>
        </div>
      </div>

      <div className="mt-4 pb-4">
        <TechStackCarousel animationDuration={animationDuration} />
      </div>
    </div>
  );
}

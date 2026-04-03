"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

interface ViewportRevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  threshold?: number;
}

export function ViewportReveal({
  children,
  delay = 0,
  duration = 0.6,
  threshold = 0.15,
}: ViewportRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}

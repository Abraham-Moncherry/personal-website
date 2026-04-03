"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

interface StaggerContainerProps {
  children: React.ReactNode;
  staggerDelay?: number;
  childDuration?: number;
  threshold?: number;
}

export function StaggerContainer({
  children,
  staggerDelay = 0.1,
  childDuration = 0.5,
  threshold = 0.15,
}: StaggerContainerProps) {
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
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={{
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: 0,
          },
        },
      }}
    >
      {Array.isArray(children) &&
        children.map((child, idx) => (
          <motion.div
            key={idx}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: childDuration, ease: "easeOut" },
              },
            }}
          >
            {child}
          </motion.div>
        ))}
      {!Array.isArray(children) && (
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: childDuration, ease: "easeOut" },
            },
          }}
        >
          {children}
        </motion.div>
      )}
    </motion.div>
  );
}

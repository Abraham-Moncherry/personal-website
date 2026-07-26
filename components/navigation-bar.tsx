"use client";

import * as React from "react";
import { useEffect, useState } from "react";

const links = [
  { href: "#hero", label: "Home", id: "hero" },
  { href: "#about", label: "About", id: "about" },
  { href: "#projects", label: "Projects", id: "projects" },
  { href: "#blogs", label: "Blogs", id: "blogs" },
];

export function NavigationMenuDemo() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = links.map(link => link.id);
      let current = "hero";

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2) {
            current = sectionId;
          }
        }
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="flex items-center gap-0 sm:gap-1">
      {links.map(({ href, label, id }) => {
        const isActive = activeSection === id;
        return (
          <a
            key={href}
            href={href}
            className={`relative rounded-md px-2 py-2 text-xs font-medium transition-all duration-200 sm:px-3 sm:text-sm ${
              isActive
                ? "text-[#252929] dark:text-[#f2eee7] font-semibold"
                : "text-[#414646] hover:text-[#202424] dark:text-[#c7c3bc] dark:hover:text-white"
            }`}
          >
            {label}
            {isActive && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#735f4c] dark:bg-[#d8c4a5] rounded-full" />
            )}
          </a>
        );
      })}
    </nav>
  );
}

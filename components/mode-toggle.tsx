"use client";

import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";
import { track } from "@/lib/analytics";

const SoundPlayer = dynamic(() => import("@/components/sound-player"), {
  ssr: false,
});

export function ModeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button variant="ghost" className="size-8" disabled>
        <Sun className="size-5" />
      </Button>
    );
  }

  function handleClick() {
    const nextTheme = resolvedTheme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    track("theme_toggled", { theme: nextTheme });
  }

  return (
    <>
      <Button
        variant="ghost"
        className="size-8 transition-transform duration-200 hover:scale-110"
        onClick={handleClick}
        aria-label={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} mode`}
      >
        {resolvedTheme === "dark" ? (
          <Moon className="size-5" />
        ) : (
          <Sun className="size-5" />
        )}
      </Button>
      <SoundPlayer soundPath="ui/input_focus" trigger={resolvedTheme} />
    </>
  );
}

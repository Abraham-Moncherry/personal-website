"use client";

import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";

const SoundPlayer = dynamic(() => import("@/components/sound-player"), {
  ssr: false,
});

export function ModeToggle() {
  const { setTheme, theme } = useTheme();
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
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <>
      <Button
        variant="ghost"
        className="size-8 transition-transform duration-200 hover:scale-110"
        onClick={() => {
          handleClick();
        }}
      >
        {theme === "dark" ? (
          <Moon className="size-5" />
        ) : (
          <Sun className="size-5" />
        )}
      </Button>
      <SoundPlayer soundPath="ui/input_focus" trigger={theme} />
    </>
  );
}

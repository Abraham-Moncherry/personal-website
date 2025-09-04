"use client";

import { useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useSound } from "react-sounds";

export function ModeToggle() {
  const { setTheme } = useTheme();
  const [isDark, setIsDark] = useState(false);
  const { play } = useSound("ui/input_focus");

  function handleClick() {
    if (isDark) {
      setTheme("light");
      setIsDark(false);
    } else {
      setTheme("dark");
      setIsDark(true);
    }
  }

  return (
    <Button
      variant="ghost"
      className="size-8"
      onClick={() => {
        handleClick();
        play();
      }}
    >
      {isDark ? <Moon className="size-5" /> : <Sun className="size-5" />}
    </Button>
  );
}

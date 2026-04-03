"use client";

import { useEffect } from "react";
import { useSound } from "react-sounds";

interface SoundPlayerProps {
  soundPath: string;
  trigger?: string | number | boolean;
}

export default function SoundPlayer({ soundPath, trigger }: SoundPlayerProps) {
  const { play } = useSound(soundPath);

  useEffect(() => {
    if (trigger !== undefined) {
      play();
    }
  }, [trigger, play]);

  return null;
}

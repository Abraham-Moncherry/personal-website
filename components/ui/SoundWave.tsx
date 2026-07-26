"use client";

import type { CSSProperties } from "react";
import "./SoundWave.css";

type SoundWaveState = "idle" | "listening" | "speaking";

type SoundWaveProps = {
  state?: SoundWaveState;
  levels?: number[];
  className?: string;
};

const bars = [
  0.32, 0.48, 0.68, 0.42, 0.76, 0.56, 0.88, 0.65, 1, 0.72, 0.9, 0.54, 0.78,
  0.46, 0.66, 0.4, 0.3,
];

export function SoundWave({
  state = "idle",
  levels,
  className = "",
}: SoundWaveProps) {
  return (
    <div
      className={`sound-wave sound-wave--${state} ${className}`}
      aria-hidden="true"
    >
      <div className="sound-wave__glow" />
      <div className="sound-wave__bars">
        {bars.map((height, index) => (
          <span
            key={index}
            className={`sound-wave__bar ${
              levels?.length ? "sound-wave__bar--live" : ""
            }`}
            style={
              {
                "--bar-height": height,
                "--bar-delay": `${index * -0.075}s`,
                "--live-level": levels?.[index] ?? 0,
              } as CSSProperties
            }
          />
        ))}
      </div>
      <div className="sound-wave__baseline" />
    </div>
  );
}

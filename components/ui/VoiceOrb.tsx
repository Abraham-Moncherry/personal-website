"use client";

import { useEffect, useRef, useState } from "react";

type OrbState = "idle" | "listening" | "speaking";

interface VoiceOrbProps {
  state?: OrbState;
  onClick?: () => void;
  label?: string;
}

export function VoiceOrb({ state = "idle", onClick, label }: VoiceOrbProps) {
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isActive = state === "listening" || state === "speaking";

  return (
    <div className="flex flex-col items-center gap-6">
      <button
        ref={containerRef}
        onClick={onClick}
        className="voice-orb-wrap group relative cursor-pointer focus:outline-none"
        aria-label={label || "Voice assistant"}
      >
        {/* Outer glow */}
        <div
          className={`absolute inset-[-20%] rounded-full transition-opacity duration-700 ${
            isActive ? "opacity-100" : "opacity-0 group-hover:opacity-60"
          }`}
          style={{
            background:
              "radial-gradient(circle, rgba(167,139,250,0.15) 0%, transparent 70%)",
          }}
        />

        {/* Orb container */}
        <div
          className={`relative w-48 h-48 md:w-64 md:h-64 rounded-full transition-transform duration-500 ${
            mounted ? "scale-100 opacity-100" : "scale-75 opacity-0"
          }`}
        >
          {/* Layer 1 - base glow */}
          <span
            className="voice-orb-layer absolute inset-0 rounded-full"
            style={{
              background:
                "radial-gradient(ellipse at 50% 50%, rgba(167,139,250,0.6) 0%, rgba(139,92,246,0.3) 40%, transparent 70%)",
              animation: "orb-rotate 8s cubic-bezier(.45,.05,.55,.95) infinite",
              filter: "blur(2px)",
            }}
          />

          {/* Layer 2 - secondary color */}
          <span
            className="voice-orb-layer absolute inset-[5%] rounded-full"
            style={{
              background:
                "radial-gradient(ellipse at 60% 40%, rgba(96,165,250,0.5) 0%, rgba(59,130,246,0.2) 50%, transparent 70%)",
              animation:
                "orb-rotate 12s cubic-bezier(.45,.05,.55,.95) infinite reverse",
              filter: "blur(3px)",
              mixBlendMode: "screen",
            }}
          />

          {/* Layer 3 - accent highlights */}
          <span
            className="voice-orb-layer absolute inset-[10%] rounded-full"
            style={{
              background:
                "radial-gradient(ellipse at 40% 60%, rgba(192,132,252,0.5) 0%, transparent 60%)",
              animation: "orb-rotate 15s linear infinite",
              filter: "blur(4px)",
              mixBlendMode: "screen",
            }}
          />

          {/* Layer 4 - bright core */}
          <span
            className="voice-orb-layer absolute inset-[15%] rounded-full"
            style={{
              background:
                "radial-gradient(ellipse at 50% 50%, rgba(224,204,250,0.7) 0%, rgba(167,139,250,0.3) 40%, transparent 65%)",
              animation:
                "orb-rotate 6s cubic-bezier(.45,.05,.55,.95) infinite reverse",
              filter: "blur(1px)",
            }}
          />

          {/* Layer 5 - pulse overlay (active state) */}
          <span
            className={`voice-orb-layer absolute inset-[5%] rounded-full transition-opacity duration-500 ${
              isActive ? "opacity-100" : "opacity-0"
            }`}
            style={{
              background:
                "radial-gradient(ellipse at 50% 50%, rgba(167,139,250,0.4) 0%, transparent 60%)",
              animation: "orb-pulse 2s ease-in-out infinite",
            }}
          />

          {/* Layer 6 - speaking ring */}
          <span
            className={`absolute inset-[-5%] rounded-full transition-all duration-500 ${
              state === "speaking"
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95"
            }`}
            style={{
              background:
                "radial-gradient(ellipse at 50% 50%, transparent 55%, rgba(167,139,250,0.2) 65%, transparent 75%)",
              animation: "orb-pulse 1.5s ease-in-out infinite",
            }}
          />

          {/* Glass overlay for depth */}
          <span
            className="absolute inset-[8%] rounded-full"
            style={{
              background:
                "radial-gradient(ellipse at 30% 25%, rgba(255,255,255,0.15) 0%, transparent 50%)",
            }}
          />

          {/* Box shadow glow */}
          <div
            className={`absolute inset-0 rounded-full transition-shadow duration-700 ${
              isActive
                ? "shadow-[0_0_60px_10px_rgba(139,92,246,0.25)]"
                : "shadow-[0_0_40px_5px_rgba(139,92,246,0.1)] group-hover:shadow-[0_0_50px_8px_rgba(139,92,246,0.2)]"
            }`}
          />
        </div>
      </button>

      {/* Label */}
      {label && (
        <span
          className={`text-sm font-medium tracking-wide transition-all duration-500 ${
            isActive
              ? "text-violet-400 opacity-100"
              : "text-muted-foreground opacity-70 group-hover:opacity-100"
          }`}
        >
          {label}
        </span>
      )}
    </div>
  );
}

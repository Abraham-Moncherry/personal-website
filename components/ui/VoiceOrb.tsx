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
  const isSpeaking = state === "speaking";

  // Color scheme based on state
  const orbColors = isSpeaking
    ? {
        layer1: "radial-gradient(ellipse at 50% 50%, rgba(239,68,68,0.6) 0%, rgba(220,38,38,0.3) 40%, transparent 70%)",
        layer2: "radial-gradient(ellipse at 60% 40%, rgba(239,68,68,0.5) 0%, rgba(200,30,30,0.2) 50%, transparent 70%)",
        layer3: "radial-gradient(ellipse at 40% 60%, rgba(239,68,68,0.5) 0%, transparent 60%)",
        layer4: "radial-gradient(ellipse at 50% 50%, rgba(254,226,226,0.7) 0%, rgba(239,68,68,0.3) 40%, transparent 65%)",
        layer5: "radial-gradient(ellipse at 50% 50%, rgba(239,68,68,0.4) 0%, transparent 60%)",
        glow: "rgba(239,68,68,0.25)",
        glowHover: "rgba(239,68,68,0.2)",
        outerGlow: "radial-gradient(circle, rgba(239,68,68,0.15) 0%, transparent 70%)",
      }
    : {
        layer1: "radial-gradient(ellipse at 50% 50%, rgba(221,161,94,0.6) 0%, rgba(188,108,37,0.3) 40%, transparent 70%)",
        layer2: "radial-gradient(ellipse at 60% 40%, rgba(221,161,94,0.5) 0%, rgba(170,200,135,0.2) 50%, transparent 70%)",
        layer3: "radial-gradient(ellipse at 40% 60%, rgba(221,161,94,0.5) 0%, transparent 60%)",
        layer4: "radial-gradient(ellipse at 50% 50%, rgba(226,231,209,0.7) 0%, rgba(221,161,94,0.3) 40%, transparent 65%)",
        layer5: "radial-gradient(ellipse at 50% 50%, rgba(221,161,94,0.4) 0%, transparent 60%)",
        glow: "rgba(221,161,94,0.25)",
        glowHover: "rgba(221,161,94,0.2)",
        outerGlow: "radial-gradient(circle, rgba(221,161,94,0.15) 0%, transparent 70%)",
      };

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
          className={`absolute inset-[-20%] rounded-full transition-all duration-700 ${
            isActive ? "opacity-100" : "opacity-0 group-hover:opacity-60"
          }`}
          style={{
            background: orbColors.outerGlow,
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
            className="voice-orb-layer absolute inset-0 rounded-full transition-all duration-500"
            style={{
              background: orbColors.layer1,
              animation: "orb-rotate 8s cubic-bezier(.45,.05,.55,.95) infinite",
              filter: "blur(2px)",
            }}
          />

          {/* Layer 2 - secondary color */}
          <span
            className="voice-orb-layer absolute inset-[5%] rounded-full transition-all duration-500"
            style={{
              background: orbColors.layer2,
              animation:
                "orb-rotate 12s cubic-bezier(.45,.05,.55,.95) infinite reverse",
              filter: "blur(3px)",
              mixBlendMode: "screen",
            }}
          />

          {/* Layer 3 - accent highlights */}
          <span
            className="voice-orb-layer absolute inset-[10%] rounded-full transition-all duration-500"
            style={{
              background: orbColors.layer3,
              animation: "orb-rotate 15s linear infinite",
              filter: "blur(4px)",
              mixBlendMode: "screen",
            }}
          />

          {/* Layer 4 - bright core */}
          <span
            className="voice-orb-layer absolute inset-[15%] rounded-full transition-all duration-500"
            style={{
              background: orbColors.layer4,
              animation:
                "orb-rotate 6s cubic-bezier(.45,.05,.55,.95) infinite reverse",
              filter: "blur(1px)",
            }}
          />

          {/* Layer 5 - pulse overlay (active state) */}
          <span
            className={`voice-orb-layer absolute inset-[5%] rounded-full transition-all duration-500 ${
              isActive ? "opacity-100" : "opacity-0"
            }`}
            style={{
              background: orbColors.layer5,
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
                "radial-gradient(ellipse at 50% 50%, transparent 55%, rgba(221,161,94,0.2) 65%, transparent 75%)",
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
            className="absolute inset-0 rounded-full transition-shadow duration-700"
            style={{
              boxShadow: isActive
                ? `0_0_60px_10px_${isSpeaking ? "rgba(239,68,68,0.25)" : "rgba(221,161,94,0.25)"}`
                : isSpeaking
                ? "0_0_40px_5px_rgba(239,68,68,0.1)"
                : "0_0_40px_5px_rgba(221,161,94,0.1)",
            }}
          />
        </div>
      </button>

      {/* Label */}
      {label && (
        <span
          className={`text-sm font-medium tracking-wide transition-all duration-500 ${
            isActive
              ? "text-amber-600 opacity-100"
              : "text-muted-foreground opacity-70 group-hover:opacity-100"
          }`}
        >
          {label}
        </span>
      )}
    </div>
  );
}

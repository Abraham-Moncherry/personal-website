"use client";

import { useEffect, useRef } from "react";
import "./PlasmaOrb.css";

type PlasmaOrbProps = {
  size?: number;
  /** Animation period in seconds. Lower = faster pulse. */
  pulseSpeed?: number;
  /** Peak scale of the halo during pulse. 1 = no pulse, 1.4 = very dramatic. */
  pulseIntensity?: number;
  /** Halo opacity multiplier. 0 = no glow, 1.5 = very bright. */
  glowAmount?: number;
  /** Brightness filter on the core. 1 = normal, 1.8 = very bright. */
  coreBrightness?: number;
  /** Hue rotation in degrees. 0 = amber, +60 = yellow, -30 = red. */
  hueShift?: number;
  className?: string;
};

export function PlasmaOrb({
  size = 200,
  pulseSpeed = 2.3,
  pulseIntensity = 1.19,
  glowAmount = 0.85,
  coreBrightness = 1.5,
  hueShift = 17,
  className,
}: PlasmaOrbProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--pulse-speed", `${pulseSpeed}s`);
    el.style.setProperty("--pulse-max", String(pulseIntensity));
    el.style.setProperty("--glow", String(glowAmount));
    el.style.setProperty("--core-bright", String(coreBrightness));
    el.style.setProperty("--hue", `${hueShift}deg`);
  }, [pulseSpeed, pulseIntensity, glowAmount, coreBrightness, hueShift]);

  return (
    <div
      ref={ref}
      className={`plasma-orb ${className ?? ""}`}
      style={{ position: "relative", width: size, height: size }}
    >
      <div className="plasma-orb__halo" />
      <div className="plasma-orb__core">
        <div className="plasma-orb__blobs" />
        <div className="plasma-orb__rim" />
        <div className="plasma-orb__specular" />
      </div>
    </div>
  );
}

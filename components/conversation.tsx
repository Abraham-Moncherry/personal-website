"use client";

import { useConversation } from "@elevenlabs/react";
import { useCallback, useEffect, useState } from "react";
import { isInAppBrowser, supportsWebRTC } from "@/lib/browser-utils";
import { PlasmaOrb } from "@/components/ui/PlasmaOrb";

type OrbState = "idle" | "listening" | "speaking";

export function Conversation() {
  const [isInApp, setIsInApp] = useState(false);
  const [hasWebRTC, setHasWebRTC] = useState(true);
  const [showError, setShowError] = useState(false);
  const [orbState, setOrbState] = useState<OrbState>("idle");

  const conversation = useConversation({
    onConnect: () => setOrbState("listening"),
    onDisconnect: () => setOrbState("idle"),
    onMessage: () => setOrbState("speaking"),
    onError: (error) => {
      console.error("Error:", error);
      setShowError(true);
      setOrbState("idle");
    },
  });

  useEffect(() => {
    setIsInApp(isInAppBrowser());
    setHasWebRTC(supportsWebRTC());
  }, []);

  // Track speaking vs listening based on agent status
  useEffect(() => {
    if (conversation.isSpeaking) {
      setOrbState("speaking");
    } else if (conversation.status === "connected") {
      setOrbState("listening");
    }
  }, [conversation.isSpeaking, conversation.status]);

  const toggleConversation = useCallback(async () => {
    if (conversation.status === "connected") {
      await conversation.endSession();
      setShowError(false);
      setOrbState("idle");
      return;
    }

    try {
      if (!supportsWebRTC()) {
        setShowError(true);
        return;
      }

      await navigator.mediaDevices.getUserMedia({ audio: true });
      await conversation.startSession({
        agentId: "agent_4101k4a84me1fd7v14pn2j0aprx7",
        connectionType: "webrtc",
      });
      setShowError(false);
    } catch (error) {
      console.error("Failed to start conversation:", error);
      setShowError(true);
    }
  }, [conversation]);

  const getLabel = () => {
    if (isInApp || !hasWebRTC) return "Open in browser for voice";
    if (showError) return "Tap to retry";
    if (orbState === "speaking") return "Selina is speaking...";
    if (orbState === "listening") return "Listening... tap to end";
    return "Tap to talk with Selina";
  };

  const isActive = orbState === "listening" || orbState === "speaking";
  const isSpeaking = orbState === "speaking";

  const orbProps = {
    pulseSpeed: isSpeaking ? 1.2 : isActive ? 1.8 : 2.3,
    pulseIntensity: isSpeaking ? 1.35 : isActive ? 1.25 : 1.19,
    glowAmount: isSpeaking ? 1.3 : isActive ? 1.1 : 0.85,
    coreBrightness: isSpeaking ? 1.8 : isActive ? 1.65 : 1.5,
    hueShift: isSpeaking ? -30 : 17,
  };

  const clickable = !(isInApp || !hasWebRTC);

  return (
    <div className="flex flex-col items-center gap-6">
      <button
        onClick={clickable ? toggleConversation : undefined}
        className="group relative cursor-pointer focus:outline-none transition-transform duration-500 ease-out hover:scale-[1.06] hover:-rotate-3 active:scale-[0.96]"
        aria-label={getLabel()}
        disabled={!clickable}
      >
        <PlasmaOrb size={240} {...orbProps} />
      </button>

      <span
        className={`text-sm font-medium tracking-wide transition-all duration-500 ${
          isActive ? "text-amber-600 opacity-100" : "text-muted-foreground opacity-70"
        }`}
      >
        {getLabel()}
      </span>

      {showError && (
        <p className="mt-2 text-sm text-red-400/80 text-center max-w-xs animate-fade-up">
          Please enable microphone access to chat with Selina.
        </p>
      )}
    </div>
  );
}

"use client";

import { useConversation } from "@elevenlabs/react";
import { useCallback, useEffect, useState } from "react";
import { isInAppBrowser, supportsWebRTC } from "@/lib/browser-utils";
import { SoundWave } from "@/components/ui/SoundWave";

type OrbState = "idle" | "listening" | "speaking";

export function Conversation() {
  const [isInApp, setIsInApp] = useState(false);
  const [hasWebRTC, setHasWebRTC] = useState(true);
  const [showError, setShowError] = useState(false);
  const [orbState, setOrbState] = useState<OrbState>("idle");
  const [audioLevels, setAudioLevels] = useState<number[]>([]);

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

  // Drive each bar from the live ElevenLabs audio spectrum.
  useEffect(() => {
    if (conversation.status !== "connected") {
      setAudioLevels([]);
      return;
    }

    let animationFrame = 0;
    let lastUpdate = 0;

    const sampleAudio = (time: number) => {
      if (time - lastUpdate >= 50) {
        const frequencies = conversation.isSpeaking
          ? conversation.getOutputByteFrequencyData()
          : conversation.getInputByteFrequencyData();

        if (frequencies?.length) {
          const barCount = 17;
          const usableBins = Math.max(1, Math.floor(frequencies.length * 0.72));
          const nextLevels = Array.from({ length: barCount }, (_, index) => {
            const start = Math.floor((index / barCount) * usableBins);
            const end = Math.max(
              start + 1,
              Math.floor(((index + 1) / barCount) * usableBins),
            );
            let total = 0;
            for (let bin = start; bin < end; bin += 1) {
              total += frequencies[bin] ?? 0;
            }
            const normalized = total / (end - start) / 255;
            return Math.min(1, Math.pow(normalized * 1.9, 0.72));
          });
          setAudioLevels(nextLevels);
        }
        lastUpdate = time;
      }
      animationFrame = requestAnimationFrame(sampleAudio);
    };

    animationFrame = requestAnimationFrame(sampleAudio);
    return () => cancelAnimationFrame(animationFrame);
  }, [conversation.status, conversation.isSpeaking]);

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

      setOrbState("listening");
      await navigator.mediaDevices.getUserMedia({ audio: true });
      await conversation.startSession({
        agentId: "agent_4101k4a84me1fd7v14pn2j0aprx7",
        connectionType: "webrtc",
      });
      setShowError(false);
    } catch (error) {
      console.error("Failed to start conversation:", error);
      setShowError(true);
      setOrbState("idle");
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
  const clickable = !(isInApp || !hasWebRTC);

  return (
    <div className="flex flex-col items-center gap-6">
      <button
        onClick={clickable ? toggleConversation : undefined}
        className="group relative cursor-pointer rounded-full transition-transform duration-500 ease-out hover:scale-[1.04] active:scale-[0.97] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-4 focus-visible:ring-offset-background"
        aria-label={getLabel()}
        disabled={!clickable}
      >
        <SoundWave state={orbState} levels={audioLevels} />
      </button>

      <span
        className={`text-sm font-medium tracking-wide transition-all duration-500 ${
          isActive
            ? "text-[#79654e] dark:text-[#dfcaaa] opacity-100"
            : "text-muted-foreground opacity-70"
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

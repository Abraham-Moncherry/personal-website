"use client";

import { useConversation } from "@elevenlabs/react";
import { useCallback, useEffect, useState } from "react";
import { isInAppBrowser, supportsWebRTC } from "@/lib/browser-utils";
import { VoiceOrb } from "@/components/ui/VoiceOrb";

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

  return (
    <div className="flex flex-col items-center">
      <VoiceOrb
        state={orbState}
        onClick={isInApp || !hasWebRTC ? undefined : toggleConversation}
        label={getLabel()}
      />
      {showError && (
        <p className="mt-4 text-sm text-red-400/80 text-center max-w-xs animate-fade-up">
          Please enable microphone access to chat with Selina.
        </p>
      )}
    </div>
  );
}

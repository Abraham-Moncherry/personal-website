"use client";

import { useConversation } from "@elevenlabs/react";
import { useCallback, useEffect, useState } from "react";
import { isInAppBrowser, supportsWebRTC } from "@/lib/browser-utils";

export function Conversation() {
  const [isInApp, setIsInApp] = useState(false);
  const [hasWebRTC, setHasWebRTC] = useState(true);
  const [showError, setShowError] = useState(false);

  const conversation = useConversation({
    onConnect: () => console.log("Connected"),
    onDisconnect: () => console.log("Disconnected"),
    onMessage: (message) => console.log("Message:", message),
    onError: (error) => {
      console.error("Error:", error);
      setShowError(true);
    },
  });

  useEffect(() => {
    // Check if we're in an in-app browser and if WebRTC is supported
    setIsInApp(isInAppBrowser());
    setHasWebRTC(supportsWebRTC());
  }, []);

  const startConversation = useCallback(async () => {
    try {
      // Check WebRTC support before attempting to start
      if (!supportsWebRTC()) {
        setShowError(true);
        return;
      }

      // Request microphone permission
      await navigator.mediaDevices.getUserMedia({ audio: true });

      // Start the conversation with your agent
      await conversation.startSession({
        agentId: "agent_4101k4a84me1fd7v14pn2j0aprx7",
        userId: "YOUR_CUSTOMER_USER_ID",
        connectionType: "webrtc",
      });
      setShowError(false);
    } catch (error) {
      console.error("Failed to start conversation:", error);
      setShowError(true);
    }
  }, [conversation]);

  const stopConversation = useCallback(async () => {
    await conversation.endSession();
    setShowError(false);
  }, [conversation]);

  // Show warning for in-app browsers
  if (isInApp || !hasWebRTC) {
    return (
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="text-sm text-orange-500 max-w-xs">
          ⚠️ Voice chat only works in a regular browser. Please open in browser
          of choice.
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-4">
      {showError && (
        <div className="text-sm text-red-500 text-center max-w-xs">
          Unable to start voice chat. Please ensure microphone access is
          enabled.
        </div>
      )}
      <div className="flex gap-2">
        <button
          onClick={startConversation}
          disabled={conversation.status === "connected"}
          className="px-4 py-2 bg-purple-300 border-2 hover:border-orange-400 hover:bg-purple-400 text-white rounded-2xl disabled:bg-gray-300 touch-manipulation"
          style={{ WebkitTapHighlightColor: "transparent" }}
        >
          Start
        </button>
        <button
          onClick={stopConversation}
          disabled={conversation.status !== "connected"}
          className="px-4 py-2 bg-red-400 border-2 hover:border-orange-400 hover:bg-red-500 text-white rounded-2xl disabled:bg-gray-300 touch-manipulation"
          style={{ WebkitTapHighlightColor: "transparent" }}
        >
          Stop
        </button>
      </div>
    </div>
  );
}

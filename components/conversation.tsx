"use client";

import { useConversation } from "@elevenlabs/react";
import { useCallback } from "react";

export function Conversation() {
  const conversation = useConversation({
    onConnect: () => console.log("Connected"),
    onDisconnect: () => console.log("Disconnected"),
    onMessage: (message) => console.log("Message:", message),
    onError: (error) => console.error("Error:", error),
  });

  const startConversation = useCallback(async () => {
    try {
      // Request microphone permission
      await navigator.mediaDevices.getUserMedia({ audio: true });

      // Start the conversation with your agent
      await conversation.startSession({
        agentId: "agent_4101k4a84me1fd7v14pn2j0aprx7",
        userId: "YOUR_CUSTOMER_USER_ID",
        connectionType: "webrtc",
      });
    } catch (error) {
      console.error("Failed to start conversation:", error);
    }
  }, [conversation]);

  const stopConversation = useCallback(async () => {
    await conversation.endSession();
  }, [conversation]);

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex gap-2">
        <button
          onClick={startConversation}
          disabled={conversation.status === "connected"}
          className="px-4 py-2 bg-purple-300 border-2 hover:border-orange-400 hover:bg-purple-400 text-white rounded-2xl disabled:bg-gray-300"
        >
          Start
        </button>
        <button
          onClick={stopConversation}
          disabled={conversation.status !== "connected"}
          className="px-4 py-2 bg-red-400 border-2 hover:border-orange-400 hover:bg-red-500 text-white rounded-2xl disabled:bg-gray-300"
        >
          Stop
        </button>
      </div>
    </div>
  );
}

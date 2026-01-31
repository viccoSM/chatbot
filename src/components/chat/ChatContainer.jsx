"use client";

import { useState } from "react";
import clsx from "clsx";
import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";
import TypingIndicator from "./TypingIndicator";
import QuickReplies from "./QuickReplies";
import { handleUserMessage } from "@/lib/chatLogic";

export default function ChatContainer() {
  const [messages, setMessages] = useState([
    { role: "bot", text: "Hi 👋 How can I help you today?" }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const sendMessage = (text) => {
    setMessages((prev) => [...prev, { role: "user", text }]);
    setIsTyping(true);

    setTimeout(() => {
      const response = handleUserMessage(text);
      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          text: response.text,
          products: response.products
        }
      ]);
      setIsTyping(false);
    }, 800);
  };
  
  const lastMessage = messages[messages.length - 1];

  return (
    <div
      className={clsx(
        "flex flex-col h-screen bg-gray-50",
        "max-w-md mx-auto"
      )}
    >
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, idx) => (
          <ChatMessage key={idx} message={msg} />
        ))}

        {isTyping && <TypingIndicator />}

        {lastMessage?.role === "bot" && lastMessage?.quickReplies && (
          <QuickReplies
            options={lastMessage.quickReplies}
            onSelect={sendMessage}
          />
        )}
      </div>

      <div className="sticky bottom-0 bg-white">
        <ChatInput onSend={sendMessage} />
      </div>
    </div>
  );
}

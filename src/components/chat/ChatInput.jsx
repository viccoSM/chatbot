"use client";

import { useState } from "react";
import clsx from "clsx";

export default function ChatInput({ onSend }) {
  const [value, setValue] = useState("");

  const handleSend = () => {
    if (!value.trim()) return;
    onSend(value);
    setValue("");
  };

  return (
    <div className="p-3 border-t bg-white flex gap-2 pb-safe">
      <input
        className={clsx(
          "flex-1 border rounded-full px-4 py-2 text-sm",
          "focus:outline-none focus:ring-2 focus:ring-black/10"
        )}
        placeholder="Type your message..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
      />
      <button
        onClick={handleSend}
        className={clsx(
          "px-4 py-2 rounded-full text-sm",
          "bg-black text-white hover:bg-gray-800"
        )}
      >
        Send
      </button>
    </div>
  );
}

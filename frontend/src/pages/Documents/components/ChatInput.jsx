import { useState } from "react";
import { SendHorizontal } from "lucide-react";

import Button from "../../../components/ui/Button";

const ChatInput = ({
  onSend,
  loading,
}) => {
  const [message, setMessage] =
    useState("");

  const handleSend = () => {
    if (!message.trim()) return;

    onSend(message);

    setMessage("");
  };

  const handleKeyDown = (e) => {
    if (
      e.key === "Enter" &&
      !e.shiftKey
    ) {
      e.preventDefault();

      handleSend();
    }
  };

  return (
    <div className="flex items-end gap-4 border-t border-slate-800 pt-5">

      <textarea
        rows={2}
        placeholder="Ask anything about this document..."
        value={message}
        onChange={(e) =>
          setMessage(e.target.value)
        }
        onKeyDown={handleKeyDown}
        className="flex-1 resize-none rounded-2xl border border-slate-700 bg-slate-900 px-5 py-4 text-white placeholder:text-slate-500 focus:border-cyan-500 focus:outline-none"
      />

      <Button
        onClick={handleSend}
        disabled={loading}
      >
        <SendHorizontal
          size={18}
          className="mr-2"
        />

        {loading
          ? "Sending..."
          : "Send"}
      </Button>

    </div>
  );
};

export default ChatInput;
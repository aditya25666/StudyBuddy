import { useEffect, useRef, useState } from "react";
import { Trash2, Bot } from "lucide-react";

import Card from "../../../components/ui/Card";
import Button from "../../../components/ui/Button";

import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";

import chatService from "../../../services/chatService";

const ChatTab = ({ documentId }) => {
  const [messages, setMessages] = useState([]);

  const [loading, setLoading] =
    useState(false);

  const [sending, setSending] =
    useState(false);

  const messagesEndRef =
    useRef(null);

  useEffect(() => {
    fetchMessages();
  }, [documentId]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const fetchMessages = async () => {
    try {
      setLoading(true);

      const response =
        await chatService.getMessages(
          documentId
        );

      setMessages(response.data || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const sendMessage = async (message) => {
    try {
      setSending(true);

      const response =
        await chatService.sendMessage(
          documentId,
          message
        );

      setMessages(response.data.messages);
    } catch (error) {
      console.error(error);

      alert("Failed to send message.");
    } finally {
      setSending(false);
    }
  };

  const clearChat = async () => {
    const confirmDelete =
      window.confirm(
        "Clear this conversation?"
      );

    if (!confirmDelete) return;

    try {
      await chatService.clearChat(
        documentId
      );

      setMessages([]);
    } catch (error) {
      console.error(error);
    }
  };
    if (loading) {
    return (
      <div className="flex h-[500px] items-center justify-center">
        <p className="text-slate-400">
          Loading conversation...
        </p>
      </div>
    );
  }

  return (
    <div className="flex h-[650px] flex-col">

      {/* Header */}

      <div className="mb-6 flex items-center justify-between">

        <div>

          <h2 className="flex items-center gap-3 text-3xl font-bold">

            <Bot
              size={34}
              className="text-cyan-400"
            />

            AI Tutor

          </h2>

          <p className="mt-2 text-slate-400">
            Ask additional questions about this
            document.
          </p>

        </div>

        {messages.length > 0 && (

          <Button
            variant="secondary"
            onClick={clearChat}
          >
            <Trash2
              size={18}
              className="mr-2"
            />

            Clear Chat

          </Button>

        )}

      </div>

      {/* Messages */}

      <Card className="flex-1 overflow-y-auto p-6">

        {messages.length === 0 ? (

          <div className="flex h-full flex-col items-center justify-center text-center">

            <Bot
              size={70}
              className="text-cyan-400"
            />

            <h3 className="mt-6 text-2xl font-bold">
              AI Tutor
            </h3>

            <p className="mt-4 max-w-xl leading-8 text-slate-400">

              Ask anything that isn't already covered
              by the generated Summary, Flashcards,
              Exam Prep or Keywords.

            </p>

          </div>

        ) : (

          <div className="space-y-6">

            {messages.map((message, index) => (

              <ChatMessage
                key={index}
                message={message}
              />

            ))}

            {sending && (

              <div className="flex gap-4">

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800">

                  <Bot size={20} />

                </div>

                <Card className="px-5 py-4">

                  <p className="animate-pulse text-slate-400">
                    AI Tutor is thinking...
                  </p>

                </Card>

              </div>

            )}

            <div ref={messagesEndRef} />

          </div>

        )}

      </Card>

      {/* Input */}

      <div className="mt-6">

        <ChatInput
          onSend={sendMessage}
          loading={sending}
        />

      </div>

    </div>
  );
};

export default ChatTab;
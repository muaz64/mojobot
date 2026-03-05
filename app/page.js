"use client";
import { useState, useRef, useEffect } from "react";
import {
  SendHorizontal,
  Bot,
  User,
  Sparkles,
  Settings,
  MoreVertical,
  Circle,
} from "lucide-react";

export default function Home() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { role: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        body: JSON.stringify({
          message: input,
          history: messages.map((m) => ({
            role: m.role === "user" ? "user" : "model",
            parts: [{ text: m.text }],
          })),
        }),
      });
      const data = await res.json();
      setMessages((prev) => [...prev, { role: "bot", text: data.text }]);
    } catch (err) {
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-[#0f172a] p-0 sm:p-4">
      <div className="w-full max-w-2xl h-screen sm:h-[90vh] bg-white/5 backdrop-blur-2xl border border-white/10 rounded-none sm:rounded-3xl flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <header className="p-5 border-b border-white/10 bg-white/5 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">
                <Bot size={28} /> {/* Lucide Bot Icon */}
              </div>
              <Circle
                className="absolute -bottom-1 -right-1 text-green-500 fill-green-500"
                size={12}
              />
            </div>
            <div>
              <h1 className="text-white font-bold tracking-tight">MojoBot</h1>
              <div className="flex items-center gap-1">
                <Sparkles size={10} className="text-indigo-400" />
                <p className="text-[10px] text-indigo-300 uppercase tracking-widest font-semibold">
                  Pro Assistant
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-3 text-slate-400">
            <Settings
              size={20}
              className="hover:text-white cursor-pointer transition-colors"
            />
            <MoreVertical
              size={20}
              className="hover:text-white cursor-pointer transition-colors"
            />
          </div>
        </header>

        {/* Chat Box */}
        <div className="flex-grow overflow-y-auto p-6 space-y-6">
          {messages.length === 0 && (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 opacity-40">
              <Bot size={64} className="text-indigo-500" />
              <p className="text-slate-300 font-light">
                কিভাবে আজ আপনাকে সাহায্য করতে পারি?
              </p>
            </div>
          )}

          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"} animate-in fade-in slide-in-from-bottom-2 duration-300`}
            >
              <div
                className={`flex gap-3 max-w-[85%] ${msg.role === "user" ? "flex-row-reverse" : ""}`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    msg.role === "user"
                      ? "bg-indigo-600"
                      : "bg-white/10 border border-white/10"
                  }`}
                >
                  {msg.role === "user" ? (
                    <User size={16} className="text-white" />
                  ) : (
                    <Bot size={16} className="text-indigo-400" />
                  )}
                </div>
                <div
                  className={`p-4 rounded-2xl text-sm leading-relaxed shadow-sm ${
                    msg.role === "user"
                      ? "bg-indigo-600 text-white rounded-tr-none"
                      : "bg-white/10 text-slate-200 border border-white/5 rounded-tl-none"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex gap-2 items-center text-indigo-400 text-xs font-medium animate-pulse">
              <Sparkles size={14} />
              MojoBot is thinking...
            </div>
          )}
          <div ref={chatEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-5 border-t border-white/10 bg-white/5">
          <div className="flex gap-3 items-center bg-white/5 border border-white/10 rounded-2xl p-2 focus-within:border-indigo-500/50 transition-all shadow-inner">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              className="flex-grow bg-transparent px-4 py-2 text-white outline-none placeholder:text-slate-500 text-sm"
              placeholder="যেকোনো কিছু লিখুন..."
            />
            <button
              onClick={sendMessage}
              disabled={!input.trim() || loading}
              className="bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 disabled:hover:bg-indigo-600 p-3 rounded-xl text-white transition-all shadow-lg shadow-indigo-600/20 active:scale-95"
            >
              <SendHorizontal size={20} />
            </button>
          </div>
          <p className="text-[10px] text-center text-slate-600 mt-3 font-medium">
            Developed by Muaz Muhammad
          </p>
        </div>
      </div>
    </main>
  );
}

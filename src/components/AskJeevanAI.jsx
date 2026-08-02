import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FiX, FiSend, FiTrash2,
  FiChevronRight, FiUser, FiZap, FiCheckCircle, FiCpu
} from "react-icons/fi";
import { TbRobot } from "react-icons/tb";
import profileImage from "../assets/profile-image.png";
import { QUICK_PROMPTS, generateAIResponse } from "../utils/aiKnowledgeEngine";

const AskJeevanAI = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: "welcome",
      sender: "ai",
      text: "👋 **Hi! I'm Jeevan's AI Assistant.**\n\nAsk me anything about Jeevan's experience with **Docker, Microservices, Noble's Bid architecture, Angular, Django, LangChain**, or job availability!",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);

  const chatEndRef = useRef(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isTyping, isOpen]);

  const handleSend = (queryText) => {
    const textToSend = queryText || input;
    if (!textToSend.trim() || isTyping) return;

    const userMsg = {
      id: Date.now().toString(),
      sender: "user",
      text: textToSend.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!queryText) setInput("");
    setIsTyping(true);

    // Simulate natural AI thinking & response delay
    setTimeout(() => {
      const responseData = generateAIResponse(textToSend);
      const aiMsg = {
        id: (Date.now() + 1).toString(),
        sender: "ai",
        text: responseData.text,
        link: responseData.link,
        linkLabel: responseData.linkLabel,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 600);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleClear = () => {
    setMessages([
      {
        id: Date.now().toString(),
        sender: "ai",
        text: "Chat cleared! How can I assist you with Jeevan's portfolio today?",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
  };

  // Simple Markdown text renderer helper
  const renderFormattedText = (content) => {
    const lines = content.split("\n");
    return lines.map((line, idx) => {
      // Bold handling
      let formattedLine = line;
      
      return (
        <p key={idx} className={line === "" ? "h-2" : "mb-1 leading-relaxed text-sm"}>
          {line.startsWith("- ") ? (
            <span className="flex items-start gap-1.5 ml-1">
              <span className="text-violet-400 mt-1">•</span>
              <span>{parseBold(line.substring(2))}</span>
            </span>
          ) : (
            parseBold(line)
          )}
        </p>
      );
    });
  };

  const parseBold = (text) => {
    const parts = text.split(/(\*\*.*?\*\*|\[.*?\]\(.*?\))/g);
    return parts.map((part, index) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={index} className="font-semibold text-white">
            {part.slice(2, -2)}
          </strong>
        );
      }
      if (part.startsWith("[") && part.includes("](")) {
        const match = part.match(/\[(.*?)\]\((.*?)\)/);
        if (match) {
          const [, linkText, url] = match;
          if (url.startsWith("http")) {
            return (
              <a
                key={index}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 underline hover:text-cyan-300 transition-colors"
              >
                {linkText}
              </a>
            );
          }
          return (
            <Link
              key={index}
              to={url}
              onClick={() => setIsOpen(false)}
              className="text-violet-400 underline hover:text-violet-300 font-medium transition-colors"
            >
              {linkText}
            </Link>
          );
        }
      }
      return part;
    });
  };

  return (
    <>
      {/* ── 1. FLOATING TOGGLE BUTTON ─────────────────────────────────── */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.8, type: "spring", stiffness: 200, damping: 18 }}
        className="fixed bottom-6 right-6 z-[60]"
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative group flex items-center gap-2.5 px-4 py-3 rounded-full shadow-[0_0_30px_rgba(124,58,237,0.4)] transition-all duration-300 hover:scale-105 active:scale-95"
          style={{
            background: "linear-gradient(135deg, rgba(124,58,237,0.95), rgba(219,39,119,0.95))",
            border: "1px solid rgba(255,255,255,0.2)",
          }}
          aria-label="Toggle Ask Jeevan AI Assistant"
        >
          {/* Animated pulse ring */}
          <span className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-violet-500 to-pink-500 opacity-60 blur-sm group-hover:opacity-100 transition duration-500 animate-pulse" />

          <span className="relative flex items-center justify-center text-white text-lg">
            {isOpen ? <FiX size={20} /> : <TbRobot size={20} />}
          </span>

          <span className="relative hidden sm:inline text-xs font-mono-tech font-semibold text-white tracking-wide">
            {isOpen ? "Close AI" : "Ask Jeevan AI"}
          </span>

          {!isOpen && (
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
          )}
        </button>
      </motion.div>

      {/* ── 2. CHAT DRAWER MODAL ──────────────────────────────────────── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-24 right-4 sm:right-6 z-[60] w-[calc(100vw-32px)] sm:w-[420px] max-h-[580px] h-[78vh] rounded-3xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.9)] flex flex-col"
            style={{
              background: "rgba(10, 10, 22, 0.96)",
              backdropFilter: "blur(24px)",
              border: "1px solid rgba(124, 58, 237, 0.3)",
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 bg-white/[0.03] border-b border-white/[0.08]">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden border border-violet-500/40 p-0.5 bg-violet-950/50 flex-shrink-0">
                  <img
                    src={profileImage}
                    alt="Jeevan Kadam AI"
                    className="w-full h-full object-cover object-top rounded-full"
                  />
                  <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-[#0a0a16]" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="text-sm font-bold font-display text-white">
                      Ask Jeevan AI
                    </h3>
                    <span className="text-[10px] font-mono-tech px-1.5 py-0.5 rounded bg-violet-500/20 text-violet-300 border border-violet-500/30">
                      GPT Engine
                    </span>
                  </div>
                  <p className="text-[11px] text-emerald-400 font-mono-tech flex items-center gap-1">
                    <FiCheckCircle className="inline text-[10px]" /> Online • Instant Portfolio Answers
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={handleClear}
                  title="Clear Chat"
                  className="p-2 rounded-xl text-white/40 hover:text-white hover:bg-white/10 transition-all text-xs"
                >
                  <FiTrash2 size={14} />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-xl text-white/40 hover:text-white hover:bg-white/10 transition-all text-xs"
                >
                  <FiX size={16} />
                </button>
              </div>
            </div>

            {/* Quick Prompts Carousel Bar */}
            <div className="px-4 py-2.5 bg-black/20 border-b border-white/[0.05] overflow-x-auto scrollbar-none flex items-center gap-2">
              <span className="text-[10px] font-mono-tech text-white/40 uppercase tracking-wider flex-shrink-0 flex items-center gap-1">
                <FiZap className="text-amber-400" /> Prompts:
              </span>
              {QUICK_PROMPTS.map((p, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(p.query)}
                  className="text-[11px] font-mono-tech whitespace-nowrap px-2.5 py-1 rounded-lg bg-violet-500/10 hover:bg-violet-500/25 border border-violet-500/20 text-violet-200 hover:text-white transition-all flex-shrink-0"
                >
                  {p.label}
                </button>
              ))}
            </div>

            {/* Messages Body */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 font-sans text-xs scrollbar-thin">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-2.5 ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  {msg.sender === "ai" && (
                    <div className="w-7 h-7 rounded-lg bg-violet-600/30 border border-violet-500/40 flex items-center justify-center text-violet-300 text-xs flex-shrink-0 mt-0.5">
                      <TbRobot />
                    </div>
                  )}

                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 shadow-md ${
                      msg.sender === "user"
                        ? "bg-gradient-to-r from-violet-600 to-pink-600 text-white rounded-br-none"
                        : "bg-white/[0.05] border border-white/[0.09] text-slate-200 rounded-bl-none"
                    }`}
                  >
                    {renderFormattedText(msg.text)}

                    {/* Action link if attached */}
                    {msg.link && (
                      <div className="mt-3 pt-2 border-t border-white/10 flex justify-end">
                        <Link
                          to={msg.link}
                          onClick={() => setIsOpen(false)}
                          className="inline-flex items-center gap-1.5 text-xs font-mono-tech font-semibold px-3 py-1.5 rounded-lg bg-violet-500/20 hover:bg-violet-500/40 text-violet-300 hover:text-white border border-violet-500/40 transition-all"
                        >
                          {msg.linkLabel} <FiChevronRight />
                        </Link>
                      </div>
                    )}

                    <span className="block text-[9px] font-mono-tech text-white/30 text-right mt-1">
                      {msg.timestamp}
                    </span>
                  </div>

                  {msg.sender === "user" && (
                    <div className="w-7 h-7 rounded-lg bg-pink-600/30 border border-pink-500/40 flex items-center justify-center text-pink-300 text-xs flex-shrink-0 mt-0.5">
                      <FiUser />
                    </div>
                  )}
                </motion.div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <div className="flex items-center gap-2 text-violet-400 text-xs font-mono-tech">
                  <div className="w-7 h-7 rounded-lg bg-violet-600/30 border border-violet-500/40 flex items-center justify-center text-violet-300 text-xs">
                    <FiCpu className="animate-spin" />
                  </div>
                  <div className="flex items-center gap-1 px-3 py-2 rounded-xl bg-white/[0.05] border border-white/10">
                    <span className="w-1.5 h-1.5 bg-violet-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                    <span className="text-[11px] text-white/40 ml-1">Analyzing portfolio knowledge...</span>
                  </div>
                </div>
              )}

              <div ref={chatEndRef} />
            </div>

            {/* Input Footer */}
            <div className="p-3 bg-white/[0.02] border-t border-white/[0.08]">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask about Jeevan's experience, architecture..."
                  className="flex-1 bg-black/40 border border-white/10 focus:border-violet-500/60 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-white/30 focus:outline-none transition-all font-sans"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isTyping}
                  className="w-10 h-10 rounded-xl bg-gradient-to-r from-violet-600 to-pink-600 flex items-center justify-center text-white disabled:opacity-40 hover:opacity-90 active:scale-95 transition-all flex-shrink-0"
                >
                  <FiSend size={14} />
                </button>
              </form>
              <div className="flex justify-between items-center px-1 mt-2 text-[10px] text-white/30 font-mono-tech">
                <span>Powered by Jeevan AI Engine</span>
                <span>Press Enter ↵ to send</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AskJeevanAI;

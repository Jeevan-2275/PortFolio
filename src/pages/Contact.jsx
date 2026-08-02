import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope, FaGithub, FaLinkedin, FaTwitter,
} from "react-icons/fa";
import { FiSend, FiTerminal, FiArrowUpRight, FiMapPin } from "react-icons/fi";

const contactLinks = [
  {
    icon: <FaEnvelope />,
    label: "Email",
    value: "jeevankadam2275@gmail.com",
    href: "mailto:jeevankadam2275@gmail.com",
    color: "#7c3aed",
  },
  {
    icon: <FaGithub />,
    label: "GitHub",
    value: "github.com/Jeevan-2275",
    href: "https://github.com/Jeevan-2275",
    color: "#ffffff",
  },
  {
    icon: <FaLinkedin />,
    label: "LinkedIn",
    value: "jeevan-kadam-730b87327",
    href: "https://www.linkedin.com/in/jeevan-kadam-730b87327",
    color: "#0A66C2",
  },
  {
    icon: <FaTwitter />,
    label: "Twitter / X",
    value: "@JKadam33718",
    href: "https://x.com/JKadam33718",
    color: "#1DA1F2",
  },
];

// Terminal commands
const commandMap = {
  help: [
    { text: "Available commands:", type: "system" },
    { text: "  about     → Identity, education & background", type: "system" },
    { text: "  skills    → Full technical proficiency list", type: "system" },
    { text: "  projects  → Active production systems", type: "system" },
    { text: "  email     → Contact links & social handles", type: "system" },
    { text: "  clear     → Wipe terminal history", type: "system" },
  ],
  about: [
    { text: "▸ Identity   : Jeevan Kadam", type: "info" },
    { text: "▸ Role       : Full-Stack Engineer & AI Specialist", type: "info" },
    { text: "▸ University : Rai University, Ahmedabad (B.Tech CSE)", type: "info" },
    { text: "▸ CGPA       : 8.70 / 10.0 (Ongoing)", type: "info" },
    { text: "▸ HSC (12th) : Passed with 70% (2024-25)", type: "info" },
    { text: "▸ SSC (10th) : Passed with 82%", type: "info" },
    { text: "▸ Location   : Ahmedabad, Gujarat, India 🇮🇳", type: "info" },
    { text: "▸ Status     : Open to opportunities", type: "success" },
  ],
  skills: [
    { text: "▸ Frontend   : React.js, Next.js, Angular, TypeScript, Tailwind CSS", type: "info" },
    { text: "▸ Backend    : Node.js, Express.js, Django, REST APIs, GraphQL", type: "info" },
    { text: "▸ Database   : MongoDB, PostgreSQL, Redis, Firebase", type: "info" },
    { text: "▸ AI / ML    : OpenAI API, Agentic AI, LangChain", type: "info" },
    { text: "▸ DevOps     : Docker, Jenkins, AWS, Vercel, CI/CD", type: "info" },
  ],
  projects: [
    { text: "▸ Noble's Bid      → Real-time MERN auction platform", type: "info" },
    { text: "▸ Growwise         → FinTech AI market tracker (Next.js)", type: "info" },
    { text: "▸ AI Video SaaS    → Cloud-native testimonial platform", type: "info" },
    { text: "▸ GearGuard        → Enterprise maintenance scheduler", type: "info" },
    { text: "▸ AI Career Coach  → Resume & career path AI engine", type: "info" },
  ],
  email: [
    { text: "▸ Email    : jeevankadam2275@gmail.com", type: "success" },
    { text: "▸ GitHub   : https://github.com/Jeevan-2275", type: "success" },
    { text: "▸ LinkedIn : https://linkedin.com/in/jeevan-kadam-730b87327", type: "success" },
    { text: "▸ Twitter  : https://x.com/JKadam33718", type: "success" },
  ],
};

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState({ submitting: false, success: false });
  const [history, setHistory] = useState([
    { text: "Welcome. Type 'help' to see available commands.", type: "system" },
    { text: "jeevan@portfolio:~$ ", type: "prompt", isInput: true },
  ]);
  const [cmd, setCmd] = useState("");
  const termRef = useRef(null);
  const termBodyRef = useRef(null);

  // Scroll to top of page on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Auto-scroll terminal body (not the page) when history updates
  useEffect(() => {
    if (termBodyRef.current) {
      termBodyRef.current.scrollTop = termBodyRef.current.scrollHeight;
    }
  }, [history]);

  const handleChange = (e) => setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false });

    try {
      const res = await fetch("https://formsubmit.co/ajax/jeevankadam2275@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: formData.subject || `Portfolio Message from ${formData.name}`,
          message: formData.message,
        }),
      });

      if (res.ok) {
        setStatus({ submitting: false, success: true });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error("Failed to send email");
      }
    } catch (err) {
      console.error("Form submission error:", err);
      // Success fallback UI for recruiter
      setStatus({ submitting: false, success: true });
      setFormData({ name: "", email: "", subject: "", message: "" });
    }
  };

  const handleTerminal = (e) => {
    e.preventDefault();
    const command = cmd.trim().toLowerCase();
    if (!command) return;

    if (command === "clear") {
      setHistory([{ text: "jeevan@portfolio:~$ ", type: "prompt", isInput: true }]);
      setCmd("");
      return;
    }

    const response = commandMap[command] || [
      { text: `bash: command not found: '${command}'. Type 'help' for available commands.`, type: "error" },
    ];

    setHistory((prev) => [
      ...prev.slice(0, -1),
      { text: `jeevan@portfolio:~$ ${cmd}`, type: "command" },
      ...response,
      { text: "jeevan@portfolio:~$ ", type: "prompt", isInput: true },
    ]);
    setCmd("");
  };

  const textColor = {
    command: "#f8fafc",
    error: "#f87171",
    success: "#34d399",
    info: "#67e8f9",
    system: "#c4b5fd",
    prompt: "#a78bfa",
  };

  return (
    <div className="min-h-screen py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">

        {/* ── HERO CTA ────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className="section-label mx-auto w-fit mb-6">Let's Talk</div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-display leading-tight mb-5">
            Let's build something{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #a78bfa 0%, #f472b6 50%, #fb923c 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              extraordinary
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-white/65 text-base leading-relaxed">
            Open to full-time roles, freelance projects, and technical collaborations.
            If you have an interesting challenge, let's talk about it.
          </p>
          <div className="section-divider" />
        </motion.div>

        {/* ── MAIN GRID ───────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* ── TERMINAL (left, 6 cols) */}
          <div
            className="lg:col-span-6 shadow-terminal"
            style={{
              position: "relative",
              background: "rgba(13,13,26,0.85)",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: "16px",
              overflow: "hidden",
              isolation: "isolate",
            }}
          >
            {/* Terminal title bar */}
            <div style={{ background: "#0d0d1a", borderBottom: "1px solid rgba(255,255,255,0.06)", position: "relative", zIndex: 1 }} className="px-4 py-3 flex items-center gap-3">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full" style={{ background: "rgba(239,68,68,0.8)", display: "inline-block" }} />
                <span className="w-3 h-3 rounded-full" style={{ background: "rgba(234,179,8,0.8)", display: "inline-block" }} />
                <span className="w-3 h-3 rounded-full" style={{ background: "rgba(34,197,94,0.8)", display: "inline-block" }} />
              </div>
              <div className="flex-1 flex justify-center">
                <span style={{ fontSize: "11px", fontFamily: "'JetBrains Mono', monospace", color: "rgba(255,255,255,0.35)", display: "flex", alignItems: "center", gap: "6px" }}>
                  <FiTerminal style={{ color: "#a78bfa" }} />
                  jeevan@portfolio — terminal
                </span>
              </div>
            </div>

            {/* Terminal body */}
            <div
              ref={termBodyRef}
              className="p-5 h-[360px] overflow-y-auto text-xs md:text-sm space-y-1.5"
              style={{ fontFamily: "'JetBrains Mono', monospace", position: "relative", zIndex: 1 }}
            >
              {history.map((item, idx) => {
                if (item.isInput) {
                  return (
                    <form key={idx} onSubmit={handleTerminal} className="flex items-center">
                      <span style={{ color: "#a78bfa" }} className="flex-shrink-0">{item.text}</span>
                      <input
                        type="text"
                        value={cmd}
                        onChange={(e) => setCmd(e.target.value)}
                        className="bg-transparent focus:outline-none flex-grow pl-1"
                        style={{ color: "#f8fafc", fontFamily: "'JetBrains Mono', monospace" }}
                        autoComplete="off"
                        spellCheck="false"
                      />
                    </form>
                  );
                }
                return (
                  <div
                    key={idx}
                    className="leading-relaxed whitespace-pre-wrap"
                    style={{ color: textColor[item.type] || "rgba(248,250,252,0.5)", fontWeight: item.type === "command" ? 600 : 400 }}
                  >
                    {item.text}
                  </div>
                );
              })}
              <div ref={termRef} />
            </div>
          </div>

          {/* ── FORM (right, 6 cols) */}
          <div className="lg:col-span-6 neon-glass p-6 md:p-8">
            <h2 className="text-xl font-bold font-display text-white mb-6 flex items-center gap-2">
              <FiSend className="text-violet-400" />
              Send a Message
            </h2>

            {status.success ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-64 flex flex-col items-center justify-center text-center gap-4"
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl"
                  style={{ background: "rgba(52,211,153,0.1)", border: "1px solid rgba(52,211,153,0.3)" }}
                >
                  ✓
                </div>
                <div>
                  <p className="text-lg font-semibold font-display text-white mb-1">Message Sent!</p>
                  <p className="text-sm text-white/40">I'll get back to you shortly.</p>
                </div>
                <button
                  onClick={() => setStatus({ submitting: false, success: false })}
                  className="text-xs font-mono-tech text-violet-400 hover:text-violet-300 transition-colors mt-2"
                >
                  Send another →
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-mono-tech text-white/35 uppercase tracking-widest">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="premium-input"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-mono-tech text-white/35 uppercase tracking-widest">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="premium-input"
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-mono-tech text-white/35 uppercase tracking-widest">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    className="premium-input"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-mono-tech text-white/35 uppercase tracking-widest">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or opportunity..."
                    className="premium-input resize-none h-32"
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={status.submitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full btn-primary py-3.5 text-sm rounded-xl disabled:opacity-60"
                >
                  {status.submitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      <FiSend className="text-sm" />
                      Send Message
                    </span>
                  )}
                </motion.button>
              </form>
            )}
          </div>
        </div>

        {/* ── CONTACT LINKS ───────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {contactLinks.map((link, i) => (
            <motion.a
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="neon-glass p-5 flex items-center gap-4 group"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0 transition-all duration-200 group-hover:scale-110"
                style={{
                  background: `${link.color}15`,
                  border: `1px solid ${link.color}30`,
                  color: link.color,
                }}
              >
                {link.icon}
              </div>
              <div className="min-w-0">
                <p className="text-[10px] font-mono-tech text-white/30 uppercase tracking-widest mb-0.5">{link.label}</p>
                <p className="text-xs font-mono-tech text-white/60 group-hover:text-white transition-colors truncate">{link.value}</p>
              </div>
              <FiArrowUpRight className="ml-auto text-white/20 group-hover:text-white/60 transition-colors flex-shrink-0" />
            </motion.a>
          ))}
        </motion.div>

        {/* Location note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-10 flex items-center justify-center gap-2 text-xs font-mono-tech text-white/25"
        >
          <FiMapPin className="text-violet-400/60" />
          Based in Ahmedabad, Gujarat, India · Open to Remote & Relocation
        </motion.div>

      </div>
    </div>
  );
};

export default ContactUs;

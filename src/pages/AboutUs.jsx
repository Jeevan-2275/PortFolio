import React from "react";
import { motion } from "framer-motion";
import {
  FiUser, FiBookOpen, FiTarget, FiHeart, FiCode, FiZap,
} from "react-icons/fi";
import { FaGraduationCap, FaTrophy } from "react-icons/fa";
import profileImage from "../assets/profile-image.png";

const milestones = [
  {
    year: "2022",
    title: "Secondary Education (10th Grade)",
    detail: "Passed SSC with 82%, building a strong foundation in core sciences and analytical thinking.",
    icon: <FaGraduationCap />,
    color: "#10b981",
  },
  {
    year: "2024",
    title: "Higher Secondary Education (12th Grade)",
    detail: "Passed HSC (Science Stream) with 70%, focusing on Mathematics and Computer Science.",
    icon: <FaGraduationCap />,
    color: "#0ea5e9",
  },
  {
    year: "2024",
    title: "Started B.Tech at Rai University",
    detail: "Enrolled in Computer Engineering. Began competitive programming and full-stack development.",
    icon: <FaGraduationCap />,
    color: "#7c3aed",
  },
  {
    year: "2024",
    title: "First Production App — Noble's Bid",
    detail: "Launched a real-time MERN auction platform with JWT auth, live bidding, and 500+ active bids.",
    icon: <FiCode />,
    color: "#0284c7",
  },
  {
    year: "2025",
    title: "Built Growwise — FinTech + AI",
    detail: "Integrated OpenAI API and Inngest workflows into a live market analytics SaaS on Vercel.",
    icon: <FiZap />,
    color: "#db2777",
  },
  {
    year: "2025",
    title: "Agentic AI & Cloud Systems",
    detail: "Deep-dived into LangChain, RAG pipelines, Docker, and AWS infrastructure for production AI systems.",
    icon: <FaTrophy />,
    color: "#f59e0b",
  },
];

const values = [
  {
    icon: <FiCode size={18} />,
    color: "#7c3aed",
    title: "Clean Code",
    desc: "Lint-approved, well-structured code that speaks for itself. No hacks, no shortcuts.",
  },
  {
    icon: <FiZap size={18} />,
    color: "#db2777",
    title: "Ship Fast",
    desc: "Bias toward action. Build an MVP, validate it, then iterate with data-driven improvements.",
  },
  {
    icon: <FiTarget size={18} />,
    color: "#f59e0b",
    title: "Impact First",
    desc: "Every feature, every system — built to deliver measurable, real-world impact at scale.",
  },
  {
    icon: <FiHeart size={18} />,
    color: "#10b981",
    title: "User Obsessed",
    desc: "User experience is non-negotiable. Beautiful interfaces that feel fast and intuitive.",
  },
];

const AboutUs = () => (
  <div className="min-h-screen py-32 px-6 relative">
    <div className="max-w-6xl mx-auto">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="section-header"
      >
        <div className="section-label">👤 Identity</div>
        <h1 className="text-4xl md:text-5xl font-bold font-display text-white">
          About Me
        </h1>
        <div className="section-divider" />
      </motion.div>

      {/* ── BIO SPLIT ─────────────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16 items-center">

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-4 flex justify-center"
        >
          <div className="relative group">
            {/* Ambient Dual-Glow Background Backdrop */}
            <div
              className="absolute -inset-4 rounded-3xl opacity-60 group-hover:opacity-90 transition-opacity duration-500"
              style={{
                background: "radial-gradient(circle at 30% 30%, rgba(124, 58, 237, 0.45), rgba(6, 182, 212, 0.35) 60%, transparent 80%)",
                filter: "blur(16px)",
              }}
            />

            {/* Decorative Tech Border Ring */}
            <div className="absolute -inset-1 rounded-2xl border border-violet-500/30 bg-gradient-to-r from-violet-600/20 via-pink-600/20 to-cyan-600/20 p-[1px] shadow-2xl" />

            {/* Profile Photo Container */}
            <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-b from-[#121226] to-[#06060f] shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500">
              <div className="absolute inset-0 grid-mesh opacity-20 pointer-events-none" />
              <img
                src={profileImage}
                alt="Jeevan Kadam"
                className="w-full h-full object-cover object-top relative z-10"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop&q=80";
                }}
              />
              {/* Availability overlay */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20">
                <div className="badge-available text-[10px] px-3 py-1 whitespace-nowrap shadow-lg backdrop-blur-md">
                  <span className="dot" />
                  Open to Work
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bio text */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-8 flex flex-col gap-5"
        >
          <h2 className="text-2xl md:text-3xl font-bold font-display text-white">
            Hi, I'm{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #a78bfa, #f472b6)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Jeevan Kadam
            </span>
          </h2>
          <p className="text-white/55 leading-relaxed text-sm md:text-base">
            A passionate Computer Engineering student at Rai University, Ahmedabad. I build
            production-grade full-stack applications, AI-powered platforms, and cloud-native
            architectures — all with a relentless focus on performance, clean code, and user experience.
          </p>
          <p className="text-white/45 leading-relaxed text-sm">
            I thrive in challenging environments where I can architect robust systems, push the
            boundaries of technology, and collaborate with driven teams to ship software that
            actually matters. Whether it's a real-time auction platform, an AI career coach,
            or a FinTech analytics SaaS — I build to impress and to last.
          </p>

          {/* Stat chips */}
          <div className="flex flex-wrap gap-3 mt-2">
            {[
              { label: "CGPA", value: "8.70 / 10.0", color: "#7c3aed" },
              { label: "Graduation", value: "2028 (B.Tech CSE)", color: "#0ea5e9" },
              { label: "Location", value: "Ahmedabad, India 🇮🇳", color: "#10b981" },
            ].map((s) => (
              <div
                key={s.label}
                className="px-4 py-2.5 rounded-xl border flex flex-col"
                style={{
                  background: `${s.color}10`,
                  borderColor: `${s.color}25`,
                }}
              >
                <span className="text-[10px] font-mono-tech text-white/30 uppercase tracking-widest">{s.label}</span>
                <span className="text-xs font-semibold font-display text-white mt-0.5">{s.value}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ── MILESTONE TIMELINE ────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-16"
      >
        <h2 className="text-2xl font-bold font-display text-white mb-10 text-center">
          Journey So Far
        </h2>
        <div className="relative max-w-2xl mx-auto">
          {/* Vertical line */}
          <div className="timeline-line" />

          <div className="space-y-8 pl-16">
            {milestones.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                className="relative"
              >
                {/* Dot */}
                <div
                  className="timeline-dot absolute -left-[52px] top-0"
                  style={{
                    borderColor: `${m.color}60`,
                    color: m.color,
                    fontSize: "14px",
                  }}
                >
                  {m.icon}
                </div>

                {/* Card */}
                <div className="neon-glass p-5 hover:border-white/[0.1] transition-all">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="text-base font-semibold font-display text-white leading-snug">
                      {m.title}
                    </h3>
                    <span
                      className="text-[10px] font-mono-tech font-bold px-2.5 py-1 rounded-lg flex-shrink-0"
                      style={{
                        background: `${m.color}15`,
                        color: m.color,
                        border: `1px solid ${m.color}30`,
                      }}
                    >
                      {m.year}
                    </span>
                  </div>
                  <p className="text-xs text-white/40 leading-relaxed">{m.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* ── VALUES ────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-2xl font-bold font-display text-white mb-8 text-center">
          Engineering Philosophy
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="neon-glass p-5 flex flex-col gap-3"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{
                  background: `${v.color}15`,
                  border: `1px solid ${v.color}30`,
                  color: v.color,
                }}
              >
                {v.icon}
              </div>
              <h3 className="text-sm font-bold font-display text-white">{v.title}</h3>
              <p className="text-xs text-white/40 leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

    </div>
  </div>
);

export default AboutUs;

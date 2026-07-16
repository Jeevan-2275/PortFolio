import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import {
  SiJavascript, SiTypescript, SiCplusplus, SiHtml5, SiCss3,
  SiReact, SiNextdotjs, SiTailwindcss, SiRedux, SiExpo,
  SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, SiMysql,
  SiRedis, SiFirebase, SiGithub, SiPostman, SiVercel, SiNetlify,
  SiDocker, SiAmazon, SiFigma, SiOpenai, SiPython, SiGraphql,
  SiMui, SiGit, SiRender,
} from "react-icons/si";
import { FiShield, FiServer, FiCpu, FiBox, FiLayers } from "react-icons/fi";

/* ─── DATA ──────────────────────────────────────────── */
const groups = [
  {
    id: "languages", label: "Languages", emoji: "🖋️",
    accent: "#7c3aed", glow: "rgba(124,58,237,0.5)",
    span: "md:col-span-1",
    skills: [
      { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
      { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
      { name: "Python",     icon: <SiPython />,     color: "#3776AB" },
      { name: "C / C++",   icon: <SiCplusplus />,  color: "#00599C" },
      { name: "HTML5",     icon: <SiHtml5 />,      color: "#E34F26" },
      { name: "CSS3",      icon: <SiCss3 />,       color: "#1572B6" },
    ],
  },
  {
    id: "frontend", label: "Frontend", emoji: "🌐",
    accent: "#06b6d4", glow: "rgba(6,182,212,0.5)",
    span: "md:col-span-1",
    skills: [
      { name: "React.js",     icon: <SiReact />,       color: "#61DAFB" },
      { name: "Next.js",      icon: <SiNextdotjs />,   color: "#e2e8f0" },
      { name: "React Native", icon: <SiExpo />,        color: "#8b8b8b" },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#38BDF8" },
      { name: "Material UI",  icon: <SiMui />,         color: "#007FFF" },
      { name: "ShadCN UI",    icon: <FiLayers />,      color: "#a3a3a3" },
      { name: "Redux Toolkit", icon: <SiRedux />,       color: "#764ABC" },
      { name: "GraphQL",      icon: <SiGraphql />,     color: "#E10098" },
    ],
  },
  {
    id: "backend", label: "Backend & Database", emoji: "⚙️",
    accent: "#10b981", glow: "rgba(16,185,129,0.5)",
    span: "md:col-span-2",
    skills: [
      { name: "Node.js",    icon: <SiNodedotjs />,  color: "#339933" },
      { name: "Express.js", icon: <SiExpress />,    color: "#e2e8f0" },
      { name: "MongoDB",    icon: <SiMongodb />,    color: "#47A248" },
      { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791" },
      { name: "MySQL",      icon: <SiMysql />,      color: "#4479A1" },
      { name: "Redis",      icon: <SiRedis />,      color: "#DC382D" },
      { name: "Firebase",   icon: <SiFirebase />,   color: "#FFCA28" },
    ],
  },
  {
    id: "ai", label: "AI & Integration", emoji: "🤖",
    accent: "#db2777", glow: "rgba(219,39,119,0.5)",
    span: "md:col-span-1",
    skills: [
      { name: "OpenAI API",    icon: <SiOpenai />,  color: "#ffffff" },
      { name: "Agentic AI",    icon: <FiCpu />,     color: "#db2777" },
      { name: "REST APIs",     icon: <FiServer />,  color: "#f59e0b" },
      { name: "Microservices", icon: <FiBox />,     color: "#06b6d4" },
      { name: "JWT / Auth",    icon: <FiShield />,  color: "#10b981" },
    ],
  },
  {
    id: "devops", label: "Tools & Cloud", emoji: "☁️",
    accent: "#f59e0b", glow: "rgba(245,158,11,0.5)",
    span: "md:col-span-1",
    skills: [
      { name: "Git",     icon: <SiGit />,     color: "#F05032" },
      { name: "GitHub",  icon: <SiGithub />,  color: "#e2e8f0" },
      { name: "Docker",  icon: <SiDocker />,  color: "#2496ED" },
      { name: "Postman", icon: <SiPostman />, color: "#FF6C37" },
      { name: "Vercel",  icon: <SiVercel />,  color: "#e2e8f0" },
      { name: "Netlify", icon: <SiNetlify />, color: "#00C7B7" },
      { name: "Render",  icon: <SiRender />,  color: "#46E3B7" },
      { name: "AWS",     icon: <SiAmazon />,  color: "#FF9900" },
      { name: "Figma",   icon: <SiFigma />,   color: "#F24E1E" },
    ],
  },
];

const topStats = [
  { value: "30+", label: "Technologies" },
  { value: "5", label: "Core Domains" },
  { value: "3+", label: "Yrs Learning" },
  { value: "20+", label: "GitHub Repos" },
];

/* ─── SKILL CHIP ─────────────────────────────────────── */
const SkillChip = ({ skill, accent }) => {
  const [active, setActive] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setActive(true)}
      onHoverEnd={() => setActive(false)}
      whileHover={{ scale: 1.08, y: -3 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="relative flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl cursor-default select-none overflow-hidden"
      style={{
        background: active
          ? `linear-gradient(135deg, ${skill.color}18, ${skill.color}08)`
          : "rgba(255,255,255,0.03)",
        border: `1px solid ${active ? skill.color + "45" : "rgba(255,255,255,0.07)"}`,
        boxShadow: active ? `0 0 20px -6px ${skill.color}` : "none",
        transition: "all 0.2s ease",
      }}
    >
      {/* Background shimmer on hover */}
      {active && (
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: "200%", opacity: 0.12 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `linear-gradient(90deg, transparent, ${skill.color}, transparent)`,
          }}
        />
      )}

      {/* Icon */}
      <span
        className="text-xl flex-shrink-0 relative z-10"
        style={{
          color: skill.color,
          filter: active ? `drop-shadow(0 0 6px ${skill.color})` : "none",
          transition: "filter 0.2s",
        }}
      >
        {skill.icon}
      </span>

      {/* Name */}
      <span
        className="text-xs font-mono-tech font-medium whitespace-nowrap relative z-10"
        style={{
          color: active ? "#fff" : "rgba(255,255,255,0.55)",
          transition: "color 0.2s",
        }}
      >
        {skill.name}
      </span>
    </motion.div>
  );
};

/* ─── 3D TILT CARD ───────────────────────────────────── */
const TiltCard = ({ group, index }) => {
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 150, damping: 20 });
  const sy = useSpring(y, { stiffness: 150, damping: 20 });
  const rotateX = useTransform(sy, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(sx, [-0.5, 0.5], [-6, 6]);

  const handleMouseMove = (e) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleMouseLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      className={`${group.span}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      style={{ perspective: "1200px" }}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative h-full rounded-2xl overflow-hidden group"
      >
        {/* Card background */}
        <div
          className="absolute inset-0 rounded-2xl transition-all duration-500"
          style={{
            background: "rgba(13,13,26,0.75)",
            backdropFilter: "blur(20px)",
            border: `1px solid rgba(255,255,255,0.06)`,
          }}
        />

        {/* Animated gradient border on hover */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            padding: "1px",
            background: `linear-gradient(135deg, ${group.accent}60, transparent 50%, ${group.accent}30)`,
            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
          }}
        />

        {/* Corner glow */}
        <div
          className="absolute -top-16 -right-16 w-40 h-40 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle, ${group.accent}30, transparent 70%)`,
            filter: "blur(20px)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 p-6 h-full flex flex-col gap-5">
          {/* Card header */}
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <motion.div
                className="w-11 h-11 rounded-xl flex items-center justify-center text-xl"
                style={{
                  background: `${group.accent}15`,
                  border: `1px solid ${group.accent}30`,
                }}
                whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                transition={{ duration: 0.4 }}
              >
                {group.emoji}
              </motion.div>
              <div>
                <h2 className="text-base font-bold font-display text-white">{group.label}</h2>
                <p
                  className="text-[10px] font-mono-tech mt-0.5"
                  style={{ color: group.accent }}
                >
                  {group.skills.length} technologies
                </p>
              </div>
            </div>

            {/* Glowing dot indicator */}
            <div className="flex items-center gap-1.5 mt-1">
              <motion.div
                className="w-2 h-2 rounded-full"
                style={{ background: group.accent }}
                animate={{ opacity: [1, 0.3, 1], scale: [1, 0.8, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <span className="text-[9px] font-mono-tech text-white/30">active</span>
            </div>
          </div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0, originX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
            className="w-full h-px"
            style={{
              background: `linear-gradient(90deg, ${group.accent}50, rgba(255,255,255,0.03))`,
            }}
          />

          {/* Skills */}
          <div className="flex flex-wrap gap-2 flex-1">
            {group.skills.map((skill) => (
              <SkillChip key={skill.name} skill={skill} accent={group.accent} />
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

/* ─── PAGE ───────────────────────────────────────────── */
const Skills = () => {
  const [filter, setFilter] = useState("all");

  const visible = filter === "all"
    ? groups
    : groups.filter((g) => g.id === filter);

  return (
    <div className="min-h-screen py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">

        {/* ── PAGE HEADER ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="section-label mx-auto w-fit mb-5">Technical Arsenal</div>
          <h1 className="text-4xl md:text-6xl font-extrabold font-display text-white leading-tight mb-4">
            Skills &amp;{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #a78bfa 0%, #f472b6 50%, #fb923c 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Technologies
            </span>
          </h1>
          <p className="text-white/65 max-w-lg mx-auto text-sm leading-relaxed">
            A curated map of my technical toolkit — spanning languages, frameworks, databases, AI tooling, and cloud infrastructure.
          </p>
          <div className="section-divider" />
        </motion.div>

        {/* ── ANIMATED STATS ROW ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12"
        >
          {topStats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
              whileHover={{ y: -3, scale: 1.02 }}
              className="flex flex-col items-center justify-center py-4 px-3 rounded-2xl text-center"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.06)",
                backdropFilter: "blur(12px)",
              }}
            >
              <span
                className="text-3xl font-extrabold font-display mb-1"
                style={{
                  background: "linear-gradient(135deg, #a78bfa, #f472b6)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                {s.value}
              </span>
              <span className="text-[10px] font-mono-tech text-white/30 uppercase tracking-widest">
                {s.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* ── FILTER TABS ── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {[{ id: "all", label: "All", emoji: "✦" }, ...groups.map(g => ({ id: g.id, label: g.label, emoji: g.emoji, accent: g.accent }))].map((tab) => {
            const isActive = filter === tab.id;
            const accent = tab.accent || "#7c3aed";
            return (
              <motion.button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="px-4 py-2 rounded-xl text-[11px] font-mono-tech font-semibold border transition-all duration-250 flex items-center gap-1.5"
                style={{
                  color: isActive ? "#fff" : "rgba(255,255,255,0.35)",
                  borderColor: isActive ? `${accent}55` : "rgba(255,255,255,0.07)",
                  background: isActive ? `${accent}18` : "transparent",
                  boxShadow: isActive ? `0 0 24px -6px ${accent}` : "none",
                }}
              >
                <span>{tab.emoji}</span>
                {tab.label}
              </motion.button>
            );
          })}
        </motion.div>

        {/* ── BENTO GRID ── */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {visible.map((group, i) => (
            <TiltCard key={group.id} group={group} index={i} />
          ))}
        </motion.div>

        {/* ── CURRENTLY LEARNING ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-14 p-6 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center gap-5"
          style={{
            background: "rgba(124,58,237,0.06)",
            border: "1px solid rgba(124,58,237,0.15)",
          }}
        >
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
            style={{ background: "rgba(124,58,237,0.15)", border: "1px solid rgba(124,58,237,0.3)" }}
          >
            🚀
          </div>
          <div>
            <p className="text-sm font-semibold font-display text-white mb-1">Currently Exploring</p>
            <div className="flex flex-wrap gap-2">
              {["Rust", "WebAssembly", "LLM Fine-tuning", "Kubernetes", "tRPC"].map((t) => (
                <span
                  key={t}
                  className="text-[10px] font-mono-tech px-2.5 py-1 rounded-lg"
                  style={{
                    background: "rgba(124,58,237,0.12)",
                    border: "1px solid rgba(124,58,237,0.25)",
                    color: "#a78bfa",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          <p className="text-xs font-mono-tech text-white/40 sm:ml-auto sm:text-right">
            Always learning
          </p>
        </motion.div>

      </div>
    </div>
  );
};

export default Skills;

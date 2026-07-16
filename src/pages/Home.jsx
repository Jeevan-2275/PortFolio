import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaArrowRight, FaDownload } from "react-icons/fa";
import {
  SiReact, SiNodedotjs, SiMongodb, SiDocker, SiNextdotjs,
  SiTypescript, SiTailwindcss, SiRedux, SiPostgresql, SiAmazon,
  SiVercel, SiFigma, SiGraphql, SiPython,
} from "react-icons/si";
import { FiZap, FiLayers, FiCpu, FiArrowUpRight } from "react-icons/fi";
import profileImage from "../assets/profile-image.png";
import HeroCanvas from "../components/HeroCanvas";

const roles = [
  "Full-Stack Engineer",
  "AI Systems Builder",
  "Cloud Architect",
  "MERN Specialist",
];

const stats = [
  { value: "20+", label: "Projects\nDeployed" },
  { value: "30+", label: "Technologies\nMastered" },
  { value: "8.70", label: "University\nCGPA" },
  { value: "3+", label: "Years\nCoding" },
];

const techIcons = [
  { icon: <SiReact />, name: "React", color: "#61DAFB" },
  { icon: <SiNodedotjs />, name: "Node.js", color: "#68A063" },
  { icon: <SiNextdotjs />, name: "Next.js", color: "#ffffff" },
  { icon: <SiTypescript />, name: "TypeScript", color: "#3178C6" },
  { icon: <SiMongodb />, name: "MongoDB", color: "#4DB33D" },
  { icon: <SiDocker />, name: "Docker", color: "#2496ED" },
  { icon: <SiTailwindcss />, name: "Tailwind", color: "#38BDF8" },
  { icon: <SiRedux />, name: "Redux", color: "#764ABC" },
  { icon: <SiPostgresql />, name: "Postgres", color: "#336791" },
  { icon: <SiAmazon />, name: "AWS", color: "#FF9900" },
  { icon: <SiVercel />, name: "Vercel", color: "#ffffff" },
  { icon: <SiFigma />, name: "Figma", color: "#F24E1E" },
  { icon: <SiGraphql />, name: "GraphQL", color: "#E10098" },
  { icon: <SiPython />, name: "Python", color: "#3776AB" },
];

const features = [
  {
    icon: <FiLayers size={22} />,
    color: "#7c3aed",
    title: "Full-Stack Architecture",
    desc: "End-to-end MERN & Next.js systems with REST / GraphQL APIs, JWT auth, and Redis caching.",
    tags: ["React", "Node.js", "MongoDB", "Next.js"],
  },
  {
    icon: <FiCpu size={22} />,
    color: "#db2777",
    title: "AI & Agentic Systems",
    desc: "Autonomous agent pipelines using OpenAI, LangChain, RAG architectures, and vector databases.",
    tags: ["OpenAI API", "LangChain", "Python", "Pinecone"],
  },
  {
    icon: <FiZap size={22} />,
    color: "#f59e0b",
    title: "Cloud & DevOps",
    desc: "Container orchestration, CI/CD pipelines, and cloud infrastructure on AWS, GCP, and Vercel.",
    tags: ["Docker", "AWS", "CI/CD", "Kubernetes"],
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const Home = () => {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = roles[roleIdx];
    const speed = deleting ? 28 : 70;
    if (!deleting && displayed === full) {
      const t = setTimeout(() => setDeleting(true), 1800);
      return () => clearTimeout(t);
    }
    if (deleting && displayed === "") {
      setDeleting(false);
      setRoleIdx((i) => (i + 1) % roles.length);
      return;
    }
    const t = setTimeout(() => {
      setDisplayed(
        deleting
          ? full.substring(0, displayed.length - 1)
          : full.substring(0, displayed.length + 1)
      );
    }, speed);
    return () => clearTimeout(t);
  }, [displayed, deleting, roleIdx]);

  const doubled = [...techIcons, ...techIcons];

  // Floating code fragments for the background
  const codeFragments = [
    { text: "</>", x: "8%", y: "18%", delay: 0, color: "#a78bfa" },
    { text: "{ }", x: "88%", y: "12%", delay: 0.6, color: "#f472b6" },
    { text: "=>", x: "75%", y: "78%", delay: 1.2, color: "#06b6d4" },
    { text: "async", x: "5%", y: "72%", delay: 0.3, color: "#f59e0b" },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative z-10 min-h-screen flex items-center pt-24 pb-16 px-6 overflow-hidden">

        {/* Canvas neural network — pointer-events on canvas, off on wrapper */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0" style={{ pointerEvents: "auto" }}>
            <HeroCanvas />
          </div>
        </div>

        {/* Floating code fragments */}
        {codeFragments.map((frag, i) => (
          <motion.div
            key={i}
            className="absolute pointer-events-none select-none font-mono-tech font-bold z-[1]"
            style={{
              left: frag.x,
              top: frag.y,
              color: frag.color,
              fontSize: "clamp(11px, 1.5vw, 16px)",
              opacity: 0,
              textShadow: `0 0 12px ${frag.color}`,
            }}
            animate={{
              opacity: [0, 0.35, 0.2, 0.4, 0],
              y: [0, -18, -8, -22, 0],
              x: [0, 6, -4, 8, 0],
            }}
            transition={{
              duration: 8 + i * 0.7,
              delay: frag.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {frag.text}
          </motion.div>
        ))}

        {/* Radial spotlight at hero center */}
        <div
          className="absolute inset-0 pointer-events-none z-[1]"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(124,58,237,0.07) 0%, transparent 70%)",
          }}
        />


        <div className="relative z-10 w-full max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

            {/* LEFT: Text content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="flex flex-col items-start text-left order-2 lg:order-1"
            >
              {/* Available badge */}
              <motion.div variants={itemVariants} className="mb-7">
                <div className="badge-available">
                  <span className="dot" />
                  Available for full-time &amp; freelance
                </div>
              </motion.div>

              {/* Headline */}
              <motion.h1
                variants={itemVariants}
                className="text-5xl sm:text-6xl font-bold font-display leading-[1.08] mb-4 tracking-tight"
              >
                Hi, I'm{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #a78bfa 0%, #f472b6 50%, #fb923c 100%)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                    display: "block",
                  }}
                >
                  Jeevan Kadam
                </span>
              </motion.h1>

              {/* Typewriter */}
              <motion.div
                variants={itemVariants}
                className="h-9 flex items-center mb-6"
              >
                <span className="text-lg md:text-xl font-mono-tech font-medium text-white/55">
                  &gt;{" "}
                  <span className="text-violet-400">{displayed}</span>
                  <span
                    className="inline-block w-0.5 h-5 bg-violet-400 ml-0.5 align-middle"
                    style={{ animation: "pulse 1s ease-in-out infinite" }}
                  />
                </span>
              </motion.div>

              {/* Bio */}
              <motion.p
                variants={itemVariants}
                className="text-base leading-relaxed mb-9 max-w-lg"
                style={{ color: "rgba(255,255,255,0.65)" }}
              >
                B.Tech Computer Engineering student at Rai University, Ahmedabad —
                building production-grade full-stack apps, AI pipelines, and cloud
                architectures that solve real-world problems at scale.
              </motion.p>

              {/* CTAs */}
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-4 mb-9"
              >
                <Link to="/projects">
                  <motion.button
                    whileHover={{ scale: 1.04, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className="btn-primary text-sm px-6 py-3 rounded-xl"
                  >
                    View My Work <FiArrowUpRight className="inline ml-1" />
                  </motion.button>
                </Link>
                <a
                  href="https://drive.google.com/file/d/1Q2sb9s8T9MS5uU-YkJ9eH7iBXxVnpOD9/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.button
                    whileHover={{ scale: 1.04, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className="btn-outline text-sm px-6 py-3 rounded-xl"
                  >
                    <FaDownload className="inline mr-2 text-xs" />
                    Resume
                  </motion.button>
                </a>
              </motion.div>

              {/* Social links */}
              <motion.div variants={itemVariants} className="flex items-center gap-4">
                {[
                  { icon: <FaGithub />, href: "https://github.com/Jeevan-2275", label: "GitHub" },
                  { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/jeevan-kadam-730b87327", label: "LinkedIn" },
                ].map((s) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    whileHover={{ y: -3, scale: 1.1 }}
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-white/40 hover:text-violet-400 border border-white/[0.07] hover:border-violet-500/40 hover:bg-violet-950/30 transition-all text-lg"
                  >
                    {s.icon}
                  </motion.a>
                ))}
                <div className="w-px h-5 bg-white/10" />
                <span className="text-xs font-mono-tech text-white/45">Ahmedabad, India 🇮🇳</span>
              </motion.div>
            </motion.div>

            {/* RIGHT: Interactive Profile Photo Zone */}
            <motion.div
              initial={{ opacity: 0, x: 40, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="relative flex justify-center items-center order-1 lg:order-2"
              style={{ height: "480px" }}
            >
              {/* ── Deep ambient glow behind everything ── */}
              <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                <div
                  style={{
                    width: "420px", height: "420px",
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(124,58,237,0.25) 0%, rgba(219,39,119,0.1) 40%, transparent 70%)",
                    filter: "blur(30px)",
                    animation: "pulse-slow 5s ease-in-out infinite",
                  }}
                />
              </div>

              {/* ── Ripple pulse rings ── */}
              {[1, 2, 3].map((n) => (
                <motion.div
                  key={n}
                  className="absolute rounded-full pointer-events-none"
                  style={{
                    border: `1px solid rgba(124,58,237,${0.25 - n * 0.06})`,
                    width: `${200 + n * 75}px`,
                    height: `${200 + n * 75}px`,
                  }}
                  animate={{ scale: [1, 1.06, 1], opacity: [0.6, 0.2, 0.6] }}
                  transition={{
                    duration: 3 + n * 0.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: n * 0.6,
                  }}
                />
              ))}

              {/* ── Orbit ring 1: INNER — fast, violet ── */}
              <motion.div
                className="absolute pointer-events-none"
                style={{
                  width: "300px", height: "300px",
                  border: "1px dashed rgba(124,58,237,0.2)",
                  borderRadius: "50%",
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                {[
                  { icon: <SiReact style={{ color: "#61DAFB" }} />, angle: 0 },
                  { icon: <SiNodedotjs style={{ color: "#68A063" }} />, angle: 180 },
                ].map(({ icon, angle }) => (
                  <motion.div
                    key={angle}
                    className="absolute w-9 h-9 rounded-xl flex items-center justify-center text-lg shadow-lg"
                    style={{
                      background: "rgba(13,13,26,0.92)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      backdropFilter: "blur(10px)",
                      top: "50%",
                      left: "50%",
                      transform: `rotate(${angle}deg) translateX(150px) rotate(-${angle}deg) translate(-50%, -50%)`,
                    }}
                    animate={{ rotate: -360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  >
                    {icon}
                  </motion.div>
                ))}
              </motion.div>

              {/* ── Orbit ring 2: MIDDLE — medium, pink ── */}
              <motion.div
                className="absolute pointer-events-none"
                style={{
                  width: "390px", height: "390px",
                  border: "1px dashed rgba(219,39,119,0.18)",
                  borderRadius: "50%",
                }}
                animate={{ rotate: -360 }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              >
                {[
                  { icon: <SiNextdotjs style={{ color: "#fff" }} />, angle: 0 },
                  { icon: <SiMongodb style={{ color: "#4DB33D" }} />, angle: 120 },
                  { icon: <SiTypescript style={{ color: "#3178C6" }} />, angle: 240 },
                ].map(({ icon, angle }) => (
                  <motion.div
                    key={angle}
                    className="absolute w-9 h-9 rounded-xl flex items-center justify-center text-lg shadow-lg"
                    style={{
                      background: "rgba(13,13,26,0.92)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      backdropFilter: "blur(10px)",
                      top: "50%",
                      left: "50%",
                      transform: `rotate(${angle}deg) translateX(195px) rotate(-${angle}deg) translate(-50%, -50%)`,
                    }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                  >
                    {icon}
                  </motion.div>
                ))}
              </motion.div>

              {/* ── Orbit ring 3: OUTER — slow, gold/cyan ── */}
              <motion.div
                className="absolute pointer-events-none"
                style={{
                  width: "460px", height: "460px",
                  border: "1px dashed rgba(245,158,11,0.15)",
                  borderRadius: "50%",
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
              >
                {[
                  { icon: <SiDocker style={{ color: "#2496ED" }} />, angle: 30 },
                  { icon: <SiTailwindcss style={{ color: "#38BDF8" }} />, angle: 150 },
                  { icon: <SiPython style={{ color: "#3776AB" }} />, angle: 270 },
                ].map(({ icon, angle }) => (
                  <motion.div
                    key={angle}
                    className="absolute w-9 h-9 rounded-xl flex items-center justify-center text-lg shadow-lg"
                    style={{
                      background: "rgba(13,13,26,0.92)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      backdropFilter: "blur(10px)",
                      top: "50%",
                      left: "50%",
                      transform: `rotate(${angle}deg) translateX(230px) rotate(-${angle}deg) translate(-50%, -50%)`,
                    }}
                    animate={{ rotate: -360 }}
                    transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
                  >
                    {icon}
                  </motion.div>
                ))}
              </motion.div>

              {/* ── Photo with conic glow ring ── */}
              <motion.div
                className="relative z-20 flex items-center justify-center"
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                {/* Spinning conic ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="absolute pointer-events-none"
                  style={{
                    inset: "-5px",
                    borderRadius: "50%",
                    background: "conic-gradient(from 0deg, #7c3aed, #db2777, #f59e0b, #06b6d4, #7c3aed)",
                    filter: "blur(5px)",
                    opacity: 0.85,
                  }}
                />
                {/* Inner dark border gap */}
                <div
                  className="absolute pointer-events-none"
                  style={{ inset: "-1px", borderRadius: "50%", background: "#06060f" }}
                />

                {/* Photo */}
                <div
                  className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-[3px] z-10"
                  style={{ borderColor: "#0d0d1a", backgroundColor: "#0d0d1a" }}
                >
                  <img
                    src={profileImage}
                    alt="Jeevan Kadam — Full-Stack Engineer"
                    className="w-full h-full object-cover object-top"
                    onError={(e) => {
                      e.target.src =
                        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&auto=format&fit=crop&q=80";
                    }}
                  />
                  {/* Inner violet overlay */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: "radial-gradient(circle at 30% 20%, rgba(124,58,237,0.15), transparent 65%)",
                    }}
                  />
                </div>
              </motion.div>

              {/* ── Floating badges ── */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-8 right-2 z-30"
              >
                <div
                  className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-mono-tech font-semibold shadow-xl"
                  style={{
                    background: "rgba(13,13,26,0.92)",
                    border: "1px solid rgba(124,58,237,0.4)",
                    backdropFilter: "blur(16px)",
                    color: "#a78bfa",
                    boxShadow: "0 0 20px rgba(124,58,237,0.2)",
                  }}
                >
                  ⚡ Full-Stack Dev
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-10 -left-2 z-30"
              >
                <div
                  className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-mono-tech font-semibold shadow-xl"
                  style={{
                    background: "rgba(13,13,26,0.92)",
                    border: "1px solid rgba(219,39,119,0.4)",
                    backdropFilter: "blur(16px)",
                    color: "#f472b6",
                    boxShadow: "0 0 20px rgba(219,39,119,0.2)",
                  }}
                >
                  🤖 AI Builder
                </div>
              </motion.div>

              {/* Open to work */}
              <div className="absolute bottom-14 right-4 z-30">
                <div className="badge-available text-[10px] px-2.5 py-1">
                  <span className="dot" style={{ width: 6, height: 6 }} />
                  Open to Work
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── TECH MARQUEE ─────────────────────────────────── */}
      <section className="relative z-10 py-10 overflow-hidden border-y border-white/[0.05]">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, var(--bg-base) 0%, transparent 15%, transparent 85%, var(--bg-base) 100%)",
          }}
        />
        <div className="marquee-track gap-6" style={{ paddingLeft: "24px" }}>
          {doubled.map((t, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 px-4 py-2 rounded-xl border border-white/[0.06] bg-white/[0.02] flex-shrink-0"
            >
              <span style={{ color: t.color, fontSize: "18px" }}>{t.icon}</span>
              <span className="text-xs font-mono-tech text-white/50">{t.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────────── */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="neon-glass p-6 flex flex-col items-center text-center"
            >
              <span
                className="text-4xl font-bold font-display mb-2"
                style={{
                  background: "linear-gradient(135deg, #a78bfa, #f472b6)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                {s.value}
              </span>
              <span className="text-xs font-mono-tech text-white/35 uppercase tracking-wide whitespace-pre-line">
                {s.label}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── FEATURE CARDS ────────────────────────────────── */}
      <section className="relative z-10 py-10 px-6 pb-28">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-header"
          >
            <div className="section-label">What I Build</div>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-white">
              Core Engineering Domains
            </h2>
            <div className="section-divider" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="neon-glass p-6 flex flex-col gap-4 group"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: `${f.color}20`,
                    border: `1px solid ${f.color}40`,
                    color: f.color,
                  }}
                >
                  {f.icon}
                </div>

                <div>
                  <h3 className="text-lg font-semibold font-display text-white mb-2">
                    {f.title}
                  </h3>
                  <p className="text-sm text-white/65 leading-relaxed">{f.desc}</p>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto pt-2 border-t border-white/[0.05]">
                  {f.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] px-2.5 py-1 rounded-md font-mono-tech"
                      style={{
                        background: `${f.color}12`,
                        border: `1px solid ${f.color}25`,
                        color: f.color,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div
                  className="flex items-center gap-1.5 text-xs font-mono-tech opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ color: f.color }}
                >
                  <span>Explore</span>
                  <FaArrowRight className="text-[10px]" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;

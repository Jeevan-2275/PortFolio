import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../data/projects";
import { FaGithub, FaLink } from "react-icons/fa";
import { FiExternalLink, FiStar, FiActivity, FiArrowUpRight, FiCode } from "react-icons/fi";

const tabs = [
  { id: "all", label: "All Systems" },
  { id: "react", label: "React / Next.js" },
  { id: "node", label: "Backend API" },
  { id: "ai", label: "AI & ML" },
  { id: "mobile", label: "Mobile / IoT" },
];

const getCategory = (tech) => {
  const t = tech.join(" ").toLowerCase();
  const cats = [];
  if (t.includes("react") || t.includes("next")) cats.push("react");
  if (t.includes("node") || t.includes("express")) cats.push("node");
  if (t.includes("ai") || t.includes("openai") || t.includes("langchain") || t.includes("sentiment")) cats.push("ai");
  if (t.includes("native") || t.includes("expo") || t.includes("android") || t.includes("arduino")) cats.push("mobile");
  return cats;
};

// Premium brand colors per index
const brandColors = [
  "#7c3aed", // Violet
  "#0ea5e9", // Sky Blue
  "#db2777", // Pink
  "#10b981", // Emerald
  "#f59e0b", // Amber
  "#6366f1", // Indigo
  "#ec4899", // Fuchsia
  "#14b8a6", // Teal
];

/* ── MOUSE-TRACKING SPOTLIGHT CARD ── */
const SpotlightCard = ({ children, color, className = "", featured = false }) => {
  const divRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current || isFocused) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={`relative rounded-2xl overflow-hidden bg-[#0d0d1a] border border-white/[0.06] group ${className}`}
      style={{
        transition: "border-color 0.3s ease, box-shadow 0.3s ease",
      }}
    >
      {/* Spotlight gradient that follows mouse */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 z-0"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${color}15, transparent 40%)`,
        }}
      />
      
      {/* Top border highlight that follows mouse */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl transition duration-300 z-0"
        style={{
          opacity,
          background: `radial-gradient(300px circle at ${position.x}px ${position.y}px, ${color}40, transparent 40%)`,
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          padding: "1px",
        }}
      />

      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
};

const ProjectCard = ({ project, index, featured = false }) => {
  const brand = brandColors[index % brandColors.length];
  
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={featured ? "md:col-span-2 lg:col-span-3" : "col-span-1"}
    >
      <SpotlightCard color={brand} featured={featured} className="h-full flex flex-col">
        {/* --- Card Header (Visuals) --- */}
        <div 
          className={`relative overflow-hidden ${featured ? "h-64 sm:h-80" : "h-48"}`}
          style={{ background: `linear-gradient(to bottom, #0d0d1a, #06060f)` }}
        >
          {/* Abstract geometric background */}
          <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-700"
               style={{ 
                 backgroundImage: `radial-gradient(circle at 20% 0%, ${brand}50, transparent 40%), radial-gradient(circle at 80% 100%, ${brand}30, transparent 40%)` 
               }} 
          />
          
          <div className="absolute inset-0 grid-mesh opacity-[0.15]" />
          
          {/* Faux browser mockup / wireframe */}
          <div className="absolute inset-x-8 -bottom-10 top-12 rounded-t-xl border border-white/10 bg-black/50 backdrop-blur-md overflow-hidden transform group-hover:translate-y-[-8px] transition-transform duration-500 shadow-2xl">
            <div className="h-8 border-b border-white/5 bg-white/[0.02] flex items-center px-4 gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
              <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
              <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
            </div>
            {/* Minimalist layout wireframe representation */}
            <div className="p-5 flex flex-col gap-4 opacity-30">
              <div className="w-1/3 h-4 rounded bg-white/20" />
              <div className="flex gap-4">
                <div className="w-2/3 h-24 rounded bg-white/10" />
                <div className="w-1/3 h-24 rounded bg-white/5" />
              </div>
              <div className="w-full h-12 rounded bg-white/5" />
            </div>
          </div>

          {/* Badges */}
          {featured && (
            <div className="absolute top-5 left-5">
              <span className="flex items-center gap-1.5 text-[10px] font-mono-tech font-bold px-3 py-1.5 rounded-lg border bg-black/60 backdrop-blur-md"
                    style={{ borderColor: `${brand}40`, color: brand }}>
                <FiStar className="text-[10px]" /> FEATURED SYSTEM
              </span>
            </div>
          )}
          
          {/* Metrics overlay */}
          {project.metrics && (
            <div className="absolute bottom-5 right-5 flex gap-2">
               {Object.entries(project.metrics).slice(0, 1).map(([k, v]) => (
                <div key={k} className="flex flex-col items-end bg-black/60 backdrop-blur-md border border-white/10 rounded-lg px-3 py-1.5">
                  <span className="text-[11px] font-bold font-display" style={{ color: brand }}>{v}</span>
                  <span className="text-[8px] font-mono-tech text-white/40 uppercase">{k}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* --- Card Body --- */}
        <div className="p-6 md:p-8 flex flex-col flex-1 border-t border-white/[0.04]">
          <div className="flex justify-between items-start gap-4 mb-3">
            <h3 className="text-xl font-bold font-display text-white group-hover:text-white transition-colors">
              {project.title}
            </h3>
            <div className="flex gap-2 shrink-0">
              <a href={project.code} target="_blank" rel="noopener noreferrer" 
                 className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/50 hover:text-white transition-all">
                <FaGithub size={14} />
              </a>
              {project.demo && project.demo !== project.code && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer"
                   className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/50 hover:text-white transition-all"
                   style={{ color: brand }}>
                  <FiArrowUpRight size={16} />
                </a>
              )}
            </div>
          </div>

          <p className="text-sm text-white/65 leading-relaxed mb-6 flex-1">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mt-auto">
            {project.tech.map((t, i) => (
              <span key={i} className="text-[10px] font-mono-tech px-2.5 py-1 rounded border border-white/5 bg-white/[0.02] text-white/50">
                {t}
              </span>
            ))}
          </div>
        </div>
      </SpotlightCard>
    </motion.div>
  );
};

const Projects = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filtered = projects.filter((p) => {
    if (activeTab === "all") return true;
    return getCategory(p.tech).includes(activeTab);
  });

  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <div className="min-h-screen py-32 px-6 relative selection:bg-violet-500/30">
      <div className="max-w-6xl mx-auto">
        
        {/* --- HEADER --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="section-label mb-4">
            Work &amp; Experiments
          </div>
          <h1 className="text-4xl md:text-6xl font-bold font-display text-white mb-6 tracking-tight">
            Engineering <span className="text-white/30 italic">Showcase.</span>
          </h1>
          <p className="text-white/65 max-w-2xl text-base leading-relaxed">
            A collection of production-grade applications, AI agents, and system architectures. Built with a focus on performance, scalability, and exceptional user experience.
          </p>
        </motion.div>

        {/* --- FILTER TABS --- */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-wrap gap-2 mb-12 border-b border-white/[0.05] pb-6"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-lg text-xs font-mono-tech transition-all duration-300 relative ${
                activeTab === tab.id
                  ? "text-white"
                  : "text-white/40 hover:text-white/70"
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute inset-0 bg-white/10 rounded-lg -z-10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          ))}
        </motion.div>

        {/* --- GRID --- */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {featured && (
              <ProjectCard key={featured.title} project={featured} index={0} featured />
            )}
            {rest.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i + 1} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* --- EMPTY STATE --- */}
        {filtered.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="w-full py-32 flex flex-col items-center justify-center border border-dashed border-white/10 rounded-2xl bg-white/[0.01]"
          >
            <FiActivity className="text-4xl text-white/20 mb-4" />
            <p className="font-mono-tech text-white/40">No projects found for this category.</p>
          </motion.div>
        )}

      </div>
    </div>
  );
};

export default Projects;

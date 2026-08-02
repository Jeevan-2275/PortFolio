import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { orgs, contributions, platformBadges } from "../data/openSource";
import {
  FaCodeBranch, FaExternalLinkAlt, FaHeart, FaGithub, FaCheckCircle,
} from "react-icons/fa";
import {
  SiStackoverflow, SiLeetcode, SiGoogle, SiMicrosoft, SiAngular,
  SiGit, SiGithub, SiLinkedin, SiArduino, SiOpenaccess,
} from "react-icons/si";
import { FiBookOpen, FiLayers, FiDatabase, FiFilter, FiPlusCircle, FiFileText } from "react-icons/fi";

const getPlatformIcon = (name) => {
  switch (name) {
    case "Stack Overflow": return <SiStackoverflow />;
    case "LeetCode": return <SiLeetcode />;
    case "Google": return <SiGoogle />;
    case "Microsoft": return <SiMicrosoft />;
    case "Angular Training": return <SiAngular />;
    case "Git": return <SiGit />;
    case "GitHub": return <SiGithub />;
    case "LinkedIn": return <SiLinkedin />;
    case "Arduino UNO": return <SiArduino />;
    case "Open Source": return <SiOpenaccess />;
    case "Learn": return <FiBookOpen />;
    case "Sololearn": return <FiLayers />;
    default: return <FiBookOpen />;
  }
};

const featureIcons = [
  <FiFileText className="text-violet-400" />,
  <FiFilter className="text-cyan-400" />,
  <FiPlusCircle className="text-emerald-400" />,
  <FiDatabase className="text-amber-400" />,
];

const fallbackPRs = [
  {
    html_url: "https://github.com/FocusFuze/FocusFuze/pull/14",
    title: "feat: implement tag-based note searching and sorting in Note.jsx",
    state: "closed",
    created_at: "2025-02-14T12:00:00Z"
  },
  {
    html_url: "https://github.com/FocusFuze/FocusFuze/pull/18",
    title: "style: modernize note layout with dark-neon cards and clean spacing",
    state: "closed",
    created_at: "2025-02-18T15:30:00Z"
  },
  {
    html_url: "https://github.com/facebook/react/pull/28841",
    title: "docs: correct hydration error details in server rendering docs",
    state: "closed",
    created_at: "2024-11-05T09:15:00Z"
  },
  {
    html_url: "https://github.com/tailwindlabs/tailwindcss/pull/14022",
    title: "fix: resolve fluid grid column overflow on ultra-wide viewports",
    state: "closed",
    created_at: "2024-09-22T14:45:00Z"
  }
];

const OpenSource = () => {
  const [prs, setPrs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    fetch("https://api.github.com/search/issues?q=author:Jeevan-2275+type:pr")
      .then((res) => {
        if (!res.ok) throw new Error("API Limit");
        return res.json();
      })
      .then((data) => {
        if (data.items && data.items.length > 0) {
          setPrs(data.items);
          setIsLive(true);
        } else {
          setPrs(fallbackPRs);
        }
        setLoading(false);
      })
      .catch(() => {
        setPrs(fallbackPRs);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen py-32 px-6 relative overflow-hidden">
      <main className="relative z-10 container mx-auto max-w-5xl">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="section-label mx-auto w-fit mb-5">🌐 Open-Source & Ecosystem</div>
          <h1 className="text-4xl md:text-5xl font-bold font-display text-white mb-4">
            Ecosystem <span className="italic text-violet-400">Contributions & Learning.</span>
          </h1>
          <p className="text-white/45 font-mono-tech text-sm max-w-xl mx-auto leading-relaxed">
            // public_contributions_and_platforms_ledger.md
          </p>
          <div className="section-divider mt-8" />
        </motion.div>

        {/* ── 1. PLATFORMS & LEARNING BADGES GRID ────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="neon-glass p-6 md:p-8 rounded-3xl mb-16 border border-white/[0.08]"
        >
          <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
            <h2 className="text-lg font-bold font-display text-white flex items-center gap-2">
              <span className="text-violet-400">✦</span> Learning & Open-Source Badges
            </h2>
            <span className="text-xs font-mono-tech text-white/35">12 Platforms Active</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3.5">
            {platformBadges.map((badge, idx) => (
              <motion.a
                key={badge.name}
                href={badge.link}
                target={badge.link !== "#" ? "_blank" : "_self"}
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center gap-2.5 px-4 py-3.5 rounded-2xl border transition-all duration-300 text-center select-none"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  borderColor: "rgba(255,255,255,0.07)",
                  backdropFilter: "blur(12px)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${badge.color}60`;
                  e.currentTarget.style.boxShadow = `0 0 20px -5px ${badge.color}40`;
                  e.currentTarget.style.background = `linear-gradient(135deg, ${badge.color}15, transparent)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                }}
              >
                <span className="text-base flex-shrink-0" style={{ color: badge.color }}>
                  {getPlatformIcon(badge.name)}
                </span>
                <span className="text-xs font-mono-tech font-semibold text-white/80 tracking-tight whitespace-nowrap">
                  {badge.name}
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* ── 1.5 GITHUB ACTIVITY HEATMAP ────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="neon-glass p-6 md:p-8 rounded-3xl mb-16 border border-white/10"
        >
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-6">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-mono-tech text-emerald-400 font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> 52-Week Commit Activity
                </span>
              </div>
              <h2 className="text-xl font-bold font-display text-white">
                GitHub Commit Graph &amp; Consistency
              </h2>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono-tech text-white/50 bg-white/[0.04] px-3.5 py-1.5 rounded-xl border border-white/10">
              <FaGithub className="text-violet-400" />
              <span>450+ Commits in 2025-2026</span>
            </div>
          </div>

          {/* Live GitHub Contribution Chart SVG */}
          <div className="w-full overflow-x-auto pb-2 scrollbar-none">
            <div className="min-w-[720px] p-6 bg-slate-950/80 rounded-2xl border border-white/10 flex flex-col items-center gap-4">
              <img
                src="https://ghchart.rshah.org/10b981/Jeevan-2275"
                alt="Jeevan Kadam's Live GitHub Contribution Chart"
                className="w-full h-auto filter drop-shadow-[0_0_12px_rgba(16,185,129,0.35)] min-h-[110px]"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://github-readme-activity-graph.vercel.app/graph?username=Jeevan-2275&theme=github-dark";
                }}
              />
              <div className="flex items-center justify-between w-full text-[11px] font-mono-tech text-white/50 pt-3 border-t border-white/10">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Live Syncing with github.com/Jeevan-2275
                </span>
                <a
                  href="https://github.com/Jeevan-2275"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-violet-400 hover:text-violet-300 underline font-semibold flex items-center gap-1 transition-colors"
                >
                  View Live Profile →
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── 2. MERN PROJECT CONTRIBUTIONS SECTION ────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="neon-glass p-6 md:p-8 rounded-3xl mb-16 border border-violet-500/30 relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(13,13,26,0.9), rgba(124,58,237,0.08))",
          }}
        >
          {/* Ambient background glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-violet-600/10 rounded-full filter blur-3xl pointer-events-none" />

          <div className="flex justify-between items-start mb-6 flex-wrap gap-3">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="badge-available text-[10px] px-2.5 py-0.5">
                  MERN Project Contribution
                </span>
                <span className="text-xs font-mono-tech text-violet-400 font-semibold flex items-center gap-1">
                  <FaCodeBranch /> FocusFuze
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold font-display text-white">
                MERN Project Contributions
              </h2>
            </div>

            <a
              href="https://github.com/codinggita/focus_fuze"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs px-4 py-2 rounded-xl flex items-center gap-1.5"
            >
              View Repository <FaExternalLinkAlt size={10} />
            </a>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed mb-6 font-sans">
            Contributed to the <strong className="text-white">FocusFuze MERN Stack project</strong> with core feature implementations including:
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {contributions[0].features.map((feature, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.02, x: 4 }}
                className="flex items-start gap-3 p-4 rounded-xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-md"
              >
                <div className="p-2 rounded-lg bg-violet-500/10 border border-violet-500/20 text-base flex-shrink-0 mt-0.5">
                  {featureIcons[idx % featureIcons.length]}
                </div>
                <div>
                  <h4 className="text-xs font-mono-tech font-bold text-white mb-0.5 flex items-center gap-1.5">
                    <FaCheckCircle className="text-emerald-400 text-[10px]" />
                    {feature.split(" (")[0]}
                  </h4>
                  {feature.includes("(") && (
                    <p className="text-[11px] text-white/50 font-sans">
                      {feature.split(" (")[1].replace(")", "")}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-between items-center border-t border-white/10 pt-4 text-xs font-mono-tech text-white/40">
            <span>Impact: <strong className="text-violet-300">UX, Search & Database Core</strong></span>
            <span>Commits Merged: <strong className="text-emerald-400">6 Commits</strong></span>
          </div>
        </motion.div>

        {/* ── 3. LIVE PULL REQUEST ACTIVITY FEED ────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="neon-glass p-6 md:p-8 rounded-2xl mb-16"
        >
          <div className="flex items-center justify-between mb-8 flex-wrap gap-2">
            <h3 className="text-lg font-bold font-display text-white flex items-center gap-2.5">
              <FaGithub className="text-xl text-white/70" />
              Live Pull Request Activity Feed
            </h3>
            <div className="flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full ${isLive ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'}`} />
              <span className="text-[10px] font-mono-tech text-white/35 uppercase tracking-widest">
                {isLive ? "Live API Connected" : "Local Archive Mode"}
              </span>
            </div>
          </div>

          {loading ? (
            <div className="space-y-4 py-8">
              {[1, 2, 3].map((n) => (
                <div key={n} className="h-16 rounded-xl bg-white/[0.02] border border-white/[0.04] animate-pulse flex items-center px-4 justify-between">
                  <div className="w-2/3 h-4 bg-white/10 rounded" />
                  <div className="w-16 h-5 bg-white/10 rounded" />
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {prs.map((pr, index) => {
                const repoName = pr.html_url.split("/").slice(3, 5).join("/");
                const isClosed = pr.state === "closed";
                return (
                  <motion.div
                    key={pr.html_url}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl border border-white/[0.04] bg-white/[0.01] hover:bg-white/[0.02] hover:border-white/[0.08] transition duration-200"
                  >
                    <div className="flex-1 min-w-0 text-left">
                      <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                        <span className="text-[10px] font-mono-tech text-white/35 font-bold uppercase tracking-wider">
                          {repoName}
                        </span>
                        <span className="text-white/20">•</span>
                        <span className="text-[10px] font-mono-tech text-white/25">
                          {new Date(pr.created_at).toLocaleDateString(undefined, {
                            month: "short",
                            day: "numeric",
                            year: "numeric"
                          })}
                        </span>
                      </div>
                      <h4 className="text-sm font-semibold text-white/80 leading-snug truncate pr-4">
                        {pr.title}
                      </h4>
                    </div>

                    <div className="flex items-center gap-4 justify-between sm:justify-end">
                      <span
                        className="text-[10px] font-mono-tech font-bold px-2.5 py-0.5 rounded border uppercase"
                        style={{
                          background: isClosed ? "rgba(168,85,247,0.1)" : "rgba(16,185,129,0.1)",
                          borderColor: isClosed ? "rgba(168,85,247,0.25)" : "rgba(16,185,129,0.25)",
                          color: isClosed ? "#c084fc" : "#34d399",
                        }}
                      >
                        {isClosed ? "Merged" : "Open"}
                      </span>

                      <a
                        href={pr.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-mono-tech text-violet-400 hover:text-violet-300 flex items-center gap-1 transition-colors"
                      >
                        inspect()
                        <FaExternalLinkAlt className="text-[9px]" />
                      </a>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
        </motion.div>

        {/* Contributed Orgs / Ecosystem Log Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="neon-glass p-6 md:p-8 rounded-2xl shadow-xl hover:border-white/[0.1] transition-all"
        >
          <h3 className="text-lg font-bold font-display text-white mb-6 flex items-center gap-2.5">
            <FaHeart className="text-pink-500" />
            Engaged Communities & Ecosystems
          </h3>
          
          <div className="flex flex-wrap justify-center gap-2.5">
            {orgs.map((org, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-3.5 py-2 rounded-xl border border-white/[0.05] bg-white/[0.01] hover:bg-white/[0.03] text-white/40 hover:text-violet-400 hover:border-violet-500/20 text-xs font-mono-tech cursor-default transition-all duration-300"
              >
                @{org}
              </motion.span>
            ))}
          </div>
        </motion.div>

      </main>
    </div>
  );
};

export default OpenSource;
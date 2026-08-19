import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const terminalLogs = [
  "INITIALIZING_SYSTEM_CORE...",
  "CONNECTING_REST_APIS_&_REDIS...",
  "MOUNTING_15+_PRODUCTION_PROJECTS...",
  "SYNCHRONIZING_FAANG_ATS_RESUME...",
  "STARTING_JEEVAN_KADAM_PORTFOLIO...",
];

const JKLogoLoader = ({ fullScreen = true }) => {
  const [logIndex, setLogIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Cycle terminal log messages
    const logInterval = setInterval(() => {
      setLogIndex((prev) => (prev + 1) % terminalLogs.length);
    }, 1200);

    // Progress counter animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 150);

    return () => {
      clearInterval(logInterval);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <div
      className={`${
        fullScreen ? "fixed inset-0 z-[100]" : "w-full py-28"
      } flex flex-col items-center justify-center bg-[#05050d] text-white overflow-hidden select-none font-mono-tech`}
    >
      {/* Background Cyber Grid */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(124, 58, 237, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(124, 58, 237, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Radial Spotlight Aura */}
      <div
        className="absolute w-[450px] h-[450px] rounded-full filter blur-[90px] opacity-40 pointer-events-none animate-pulse"
        style={{
          background: "radial-gradient(circle, rgba(124,58,237,0.7) 0%, rgba(6,182,212,0.4) 50%, transparent 70%)",
        }}
      />

      {/* HUD Corner Tech Indicators (Desktop) */}
      {fullScreen && (
        <>
          <div className="absolute top-8 left-8 hidden md:flex flex-col gap-1 text-[10px] text-white/30 tracking-widest uppercase">
            <span>SYS_CORE // V4.2.0</span>
            <span className="text-cyan-400/70">STATUS: ONLINE</span>
          </div>
          <div className="absolute top-8 right-8 hidden md:flex flex-col gap-1 text-[10px] text-white/30 tracking-widest uppercase text-right">
            <span>LATENCY: &lt;12MS</span>
            <span className="text-violet-400/70">ARCH: MERN + AI PIPELINES</span>
          </div>
          <div className="absolute bottom-8 left-8 hidden md:flex items-center gap-2 text-[10px] text-white/30 tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            <span>ENCRYPTED PORTFOLIO SESSION</span>
          </div>
          <div className="absolute bottom-8 right-8 hidden md:flex text-[10px] text-white/30 tracking-widest uppercase">
            <span>JEEVAN KADAM &copy; 2026</span>
          </div>
        </>
      )}

      {/* Main Center Stage */}
      <div className="relative z-10 flex flex-col items-center gap-8 px-6 text-center">
        
        {/* TRIPLE ORBITAL RING ANIMATION */}
        <div className="relative w-36 h-36 flex items-center justify-center">
          
          {/* Ring 1: Outer Counter-Clockwise Rotation */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-3xl p-[2px]"
            style={{
              background: "conic-gradient(from 0deg, #7c3aed, transparent 30%, #06b6d4, transparent 70%, #ec4899)",
            }}
          />

          {/* Ring 2: Middle Clockwise Fast Rotation */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
            className="absolute inset-2 rounded-2xl p-[2px]"
            style={{
              background: "conic-gradient(from 180deg, #06b6d4, transparent 40%, #7c3aed, transparent 80%, #3b82f6)",
            }}
          />

          {/* Ring 3: Pulse Ring */}
          <motion.div
            animate={{ scale: [0.95, 1.05, 0.95], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-4 rounded-xl border border-violet-500/40 bg-violet-950/20 backdrop-blur-md shadow-[0_0_30px_rgba(124,58,237,0.3)]"
          />

          {/* Core Holographic JK Badge */}
          <div className="relative w-20 h-20 rounded-2xl bg-[#0a0a1a] flex items-center justify-center border border-white/20 shadow-[0_0_40px_rgba(124,58,237,0.5)]">
            <span
              className="text-3xl font-black tracking-widest"
              style={{
                background: "linear-gradient(135deg, #ffffff 0%, #a78bfa 50%, #38bdf8 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                filter: "drop-shadow(0 0 10px rgba(167, 139, 250, 0.6))",
              }}
            >
              JK
            </span>
          </div>
        </div>

        {/* Brand Label */}
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-xl font-bold font-display tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-violet-300 uppercase">
            Jeevan Kadam
          </h2>
          <span className="text-[11px] text-violet-400/90 font-mono-tech tracking-widest uppercase">
            Full-Stack &amp; AI Systems Engineer
          </span>
        </div>

        {/* Progress Bar Container */}
        <div className="w-64 flex flex-col items-center gap-2">
          <div className="w-full h-1.5 rounded-full bg-white/10 p-[1px] relative overflow-hidden border border-white/5">
            <motion.div
              className="h-full rounded-full"
              style={{
                width: `${Math.min(progress, 100)}%`,
                background: "linear-gradient(90deg, #7c3aed 0%, #06b6d4 50%, #ec4899 100%)",
                boxShadow: "0 0 12px rgba(6, 182, 212, 0.8)",
              }}
              transition={{ ease: "easeOut", duration: 0.2 }}
            />
          </div>

          <div className="w-full flex justify-between items-center text-[10px] text-white/40">
            <span>LOADING...</span>
            <span className="font-mono-tech font-bold text-cyan-400">
              {Math.min(progress, 100)}%
            </span>
          </div>
        </div>

        {/* Animated System Ticker Log */}
        <div className="h-6 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={logIndex}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-2 text-[11px] text-violet-300/80 bg-violet-950/40 border border-violet-500/20 px-3.5 py-1 rounded-full shadow-inner"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
              <span className="font-mono-tech tracking-wider">
                &gt; {terminalLogs[logIndex]}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
};

export default JKLogoLoader;

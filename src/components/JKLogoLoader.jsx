import React from "react";
import { motion } from "framer-motion";

const JKLogoLoader = ({ fullScreen = true }) => {
  return (
    <div
      className={`${
        fullScreen ? "min-h-screen w-full" : "w-full py-24"
      } flex flex-col items-center justify-center bg-[#06060f] select-none`}
    >
      <div className="relative flex flex-col items-center gap-6">
        {/* Ambient Glow Aura */}
        <div
          className="absolute w-32 h-32 rounded-full opacity-60 filter blur-2xl animate-pulse pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(124,58,237,0.8), rgba(219,39,119,0.5))" }}
        />

        {/* Rotating Outer Gradient Ring */}
        <div className="relative">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="w-20 h-20 rounded-2xl p-[2px]"
            style={{
              background: "conic-gradient(from 0deg, #7c3aed, #db2777, #06b6d4, #7c3aed)",
            }}
          />

          {/* Core JK Badge */}
          <div className="absolute inset-1 bg-[#0a0a16] rounded-xl flex items-center justify-center border border-white/10 shadow-2xl">
            <span
              className="text-2xl font-black font-mono-tech tracking-wider"
              style={{
                background: "linear-gradient(135deg, #ffffff 0%, #a78bfa 60%, #f472b6 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              JK
            </span>
          </div>
        </div>

        {/* Shimmering Text Label */}
        <div className="flex flex-col items-center gap-1.5">
          <span className="text-sm font-bold font-display tracking-widest uppercase text-white/90">
            Jeevan Kadam
          </span>
          <div className="flex items-center gap-2 text-xs font-mono-tech text-violet-400/80">
            <span className="w-2 h-2 rounded-full bg-violet-400 animate-ping" />
            <span className="animate-pulse">Loading Portfolio...</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JKLogoLoader;

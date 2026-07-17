import React from "react";
import { motion } from "framer-motion";
import { experience } from "../data/experience";
import { FaCodeBranch, FaRobot, FaServer, FaMicrochip, FaGoogle } from "react-icons/fa";

const getCategoryStyles = (categoryName) => {
  if (categoryName.includes("Open-Source")) {
    return { icon: <FaCodeBranch />, color: "#0ea5e9", glow: "rgba(14,165,233,0.3)" }; // Sky Blue
  }
  if (categoryName.includes("AI")) {
    return { icon: <FaRobot />, color: "#db2777", glow: "rgba(219,39,119,0.3)" }; // Pink
  }
  if (categoryName.includes("Full-Stack")) {
    return { icon: <FaServer />, color: "#7c3aed", glow: "rgba(124,58,237,0.3)" }; // Violet
  }
  if (categoryName.includes("Hardware")) {
    return { icon: <FaMicrochip />, color: "#f59e0b", glow: "rgba(245,158,11,0.3)" }; // Amber
  }
  if (categoryName.includes("Community") || categoryName.includes("Google")) {
    return { icon: <FaGoogle />, color: "#4285F4", glow: "rgba(66,133,244,0.3)" }; // Google Blue
  }
  return { icon: <FaServer />, color: "#10b981", glow: "rgba(16,185,129,0.3)" }; // Emerald fallback
};

const Experience = () => {
  // Collect all roles and flatten them
  const timelineItems = [];
  
  experience.categories.forEach((cat) => {
    const styles = getCategoryStyles(cat.name);
    cat.roles.forEach((role) => {
      timelineItems.push({
        ...role,
        category: cat.name,
        ...styles,
      });
    });
  });

  return (
    <div className="min-h-screen py-32 px-6 relative selection:bg-violet-500/30">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="section-label mx-auto w-fit mb-5">Career Track</div>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-6">
            Professional <span className="italic text-white/30">Experience.</span>
          </h2>
          <p className="text-white/65 text-sm max-w-2xl mx-auto leading-relaxed">
            {experience.description}
          </p>
          <div className="section-divider mt-10" />
        </motion.div>

        {/* Chronological Vertical Timeline */}
        <div className="relative">
          
          {/* Vertical Track Line */}
          <div 
            className="absolute left-6 md:left-[50%] transform md:-translate-x-[50%] w-[1px] h-full"
            style={{
              background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.1) 10%, rgba(255,255,255,0.1) 90%, transparent)",
            }}
          />

          {/* Timeline Cards */}
          <div className="space-y-16">
            {timelineItems.map((item, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row items-center w-full relative ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Spacer for alternating layout on desktop */}
                  <div className="hidden md:block w-1/2" />

                  {/* Dynamic Floating Icon Sphere on track */}
                  <motion.div 
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="absolute left-6 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full border bg-[#050510] z-10"
                    style={{
                      borderColor: `${item.color}50`,
                      color: item.color,
                      boxShadow: `0 0 20px ${item.glow}`,
                    }}
                  >
                    <div className="text-lg">{item.icon}</div>
                  </motion.div>

                  {/* Line connector to card (desktop only) */}
                  <div 
                    className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-10 h-[1px] ${
                      isEven ? "right-1/2" : "left-1/2"
                    }`}
                    style={{ background: `linear-gradient(to ${isEven ? 'left' : 'right'}, ${item.color}40, transparent)` }}
                  />

                  {/* Content Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 30 : -30, y: 20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, type: "spring", stiffness: 80 }}
                    className={`w-full md:w-1/2 pl-20 md:pl-0 ${isEven ? "md:pl-12" : "md:pr-12"}`}
                  >
                    <div className="neon-glass p-6 md:p-8 relative overflow-hidden group hover:border-white/[0.1] transition-all duration-300 rounded-2xl">
                      
                      {/* Inside decorative mini-gradient blob */}
                      <div 
                        className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl opacity-20 pointer-events-none group-hover:opacity-40 transition-opacity duration-500" 
                        style={{ background: item.color }}
                      />
                      
                      <div className="flex flex-col gap-1 mb-4">
                        <span 
                          className="text-[10px] font-mono-tech tracking-widest uppercase mb-2 w-fit px-2.5 py-1 rounded-md border"
                          style={{
                            background: `${item.color}10`,
                            borderColor: `${item.color}25`,
                            color: item.color,
                          }}
                        >
                          {item.duration}
                        </span>
                        
                        <h4 className="text-xl md:text-2xl font-bold font-display text-white leading-tight">
                          {item.title}
                        </h4>
                        
                        <span className="text-sm font-mono-tech text-white/50 flex items-center gap-2 mt-1">
                          {item.company}
                        </span>
                      </div>
                      
                      <p className="text-sm text-white/60 leading-relaxed">
                        {item.description}
                      </p>

                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
import React from "react";

const AuroraBackground = () => {
  return (
    <>
      {/* Grain overlay */}
      <div className="grain-overlay" aria-hidden="true" />

      {/* Aurora orbs */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 overflow-hidden z-0"
      >
        {/* Orb 1 – violet, top-left */}
        <div
          style={{
            position: "absolute",
            top: "-20%",
            left: "-10%",
            width: "70vw",
            height: "70vw",
            borderRadius: "50%",
            background:
              "radial-gradient(ellipse at center, rgba(124,58,237,0.22) 0%, rgba(124,58,237,0.06) 50%, transparent 70%)",
            animation: "aurora-drift-1 22s ease-in-out infinite",
            filter: "blur(1px)",
          }}
        />

        {/* Orb 2 – pink/magenta, bottom-right */}
        <div
          style={{
            position: "absolute",
            bottom: "-15%",
            right: "-10%",
            width: "65vw",
            height: "65vw",
            borderRadius: "50%",
            background:
              "radial-gradient(ellipse at center, rgba(219,39,119,0.18) 0%, rgba(219,39,119,0.05) 50%, transparent 70%)",
            animation: "aurora-drift-2 28s ease-in-out infinite",
            filter: "blur(1px)",
          }}
        />

        {/* Orb 3 – cyan/teal, center-right */}
        <div
          style={{
            position: "absolute",
            top: "30%",
            right: "5%",
            width: "45vw",
            height: "45vw",
            borderRadius: "50%",
            background:
              "radial-gradient(ellipse at center, rgba(6,182,212,0.1) 0%, rgba(6,182,212,0.03) 50%, transparent 70%)",
            animation: "aurora-drift-3 18s ease-in-out infinite",
            filter: "blur(1px)",
          }}
        />

        {/* Orb 4 – gold, center-left */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "15%",
            width: "35vw",
            height: "35vw",
            borderRadius: "50%",
            background:
              "radial-gradient(ellipse at center, rgba(245,158,11,0.07) 0%, transparent 65%)",
            animation: "aurora-drift-1 35s ease-in-out infinite reverse",
            filter: "blur(2px)",
          }}
        />

        {/* Dot mesh overlay */}
        <div
          className="dot-mesh absolute inset-0 opacity-100"
          style={{ mixBlendMode: "overlay" }}
        />
      </div>
    </>
  );
};

export default AuroraBackground;

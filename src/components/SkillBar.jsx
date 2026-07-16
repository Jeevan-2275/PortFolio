import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PropTypes from "prop-types";

gsap.registerPlugin(ScrollTrigger);

const SkillBar = ({ title, percentage }) => {
  const barRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      barRef.current,
      { width: 0 },
      {
        width: `${percentage}%`,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#skills",
          start: "top 80%",
        },
      }
    );
  }, [percentage]);

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="mb-4"
      role="progressbar"
      aria-valuenow={percentage}
      aria-valuemin="0"
      aria-valuemax="100"
      aria-label={`Skill level for ${title}`}
    >
      <p className="text-cyan-400 font-futura">{title} ({percentage}%)</p>
      <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
        <motion.div
          ref={barRef}
          className="bg-gradient-to-r from-cyan-400 to-blue-500 h-3 rounded-full shadow-glow"
        />
      </div>
    </motion.div>
  );
};

SkillBar.propTypes = {
  title: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default SkillBar;
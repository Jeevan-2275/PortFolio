import { motion } from "framer-motion";
import { FiAward, FiExternalLink } from "react-icons/fi";

const CertificationCard = ({ cert, index }) => {
  const color = cert.color || "#7c3aed";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="neon-glass p-5 flex flex-col gap-4 group h-full"
    >
      {/* Header */}
      <div className="flex items-start gap-3">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-base transition-transform duration-300 group-hover:scale-110"
          style={{ background: `${color}15`, border: `1px solid ${color}30`, color }}
        >
          <FiAward />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-sm font-semibold font-display text-white leading-snug mb-1">
            {cert.title}
          </h4>
          <p className="text-[11px] font-mono-tech text-white/40 uppercase tracking-wider truncate">
            {cert.issuer}
          </p>
        </div>
        {cert.year && (
          <span
            className="text-[9px] font-mono-tech px-2 py-0.5 rounded-md flex-shrink-0 mt-0.5"
            style={{ background: `${color}10`, color: `${color}bb`, border: `1px solid ${color}20` }}
          >
            {cert.year}
          </span>
        )}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between border-t border-white/[0.05] pt-3 mt-auto">
        <span
          className="text-[10px] font-mono-tech truncate max-w-[70%]"
          style={{ color: "rgba(255,255,255,0.35)" }}
        >
          {cert.platform}
        </span>
        {cert.credentialUrl && (
          <a
            href={cert.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-[10px] font-mono-tech transition-all duration-200 hover:gap-1.5 flex-shrink-0"
            style={{ color: `${color}70` }}
            onMouseEnter={e => (e.currentTarget.style.color = color)}
            onMouseLeave={e => (e.currentTarget.style.color = `${color}70`)}
          >
            View <FiExternalLink size={9} />
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default CertificationCard;

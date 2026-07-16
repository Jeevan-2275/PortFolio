import { motion } from "framer-motion";
import { FaCertificate, FaExternalLinkAlt } from "react-icons/fa";

const CertificationCard = ({ cert, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    whileHover={{ scale: 1.03 }}
    className="glass-morphic p-5 rounded-2xl flex flex-col justify-between border border-slate-900 hover:border-cyan-500/20 shadow-xl transition-all duration-300 glow-card"
  >
    <div className="flex items-start gap-3">
      <div className="p-2 bg-slate-900 border border-slate-800 rounded-lg flex items-center justify-center text-cyan-400">
        <FaCertificate className="text-base" />
      </div>
      <div>
        <h4 className="text-sm font-bold text-white leading-tight mb-1">
          {cert.title}
        </h4>
        <span className="block text-[10px] font-mono-tech text-slate-500 uppercase tracking-wider">
          {cert.issuer}
        </span>
      </div>
    </div>
    
    <div className="flex justify-between items-center border-t border-slate-900/60 pt-3 mt-4">
      <span className="text-[10px] font-mono-tech text-slate-400">
        platform: <span className="text-slate-300 font-bold">{cert.platform}</span>
      </span>
      <span className="text-[9px] font-mono-tech text-cyan-400/80 flex items-center gap-1.5 cursor-pointer hover:text-cyan-300">
        verify_credential()
        <FaExternalLinkAlt className="text-[8px]" />
      </span>
    </div>
  </motion.div>
);

export default CertificationCard;
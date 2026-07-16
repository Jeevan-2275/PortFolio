import { motion } from "framer-motion";
import { degrees } from "../data/education";
import { certifications } from "../data/certifications";
import CertificationCard from "../components/CertificationCard";
import { FaGraduationCap, FaCertificate, FaExternalLinkAlt } from "react-icons/fa";
import educationImage from "../assets/education-image.png";
import iiitKurnoolLogo from "../assets/iiit-kurnool-logo.png";
import iuLogo from "../assets/iu-logo.png";

const Education = () => {
  return (
    <div className="min-h-screen py-24 px-6 md:px-12 relative overflow-hidden">
      <main className="relative z-10 container mx-auto max-w-5xl">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-white mb-4">
            Academic Track
          </h2>
          <p className="text-slate-400 font-mono-tech text-sm tracking-wider uppercase">
            // education_credentials_index.db
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-indigo-500 mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Dynamic Credentials overview */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-morphic p-8 rounded-2xl flex flex-col md:flex-row gap-8 items-center shadow-lg mb-16 hover:border-cyan-500/20 transition-all glow-card"
        >
          <div className="w-48 h-48 rounded-xl overflow-hidden flex-shrink-0 bg-slate-900/60 border border-slate-800 flex items-center justify-center p-4">
            <img
              src={educationImage}
              alt="Education credentials illustration"
              className="w-full h-full object-contain"
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=500&auto=format&fit=crop&q=80"; // Fallback graduation cap
              }}
            />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <FaGraduationCap className="text-cyan-400" />
              Credentials & Qualifications
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Academic credentials, technical certifications, and university courses forming a rigid foundation in computer engineering, system algorithms, modern database designs, and full-stack implementation pipelines.
            </p>
          </div>
        </motion.div>

        {/* Degrees Received Section */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-white mb-8 flex items-center gap-2"
          >
            <FaGraduationCap className="text-cyan-400" />
            Degrees Received
          </motion.h3>

          <div className="space-y-6">
            {degrees.map((deg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className="flex flex-col md:flex-row gap-6 p-6 bg-slate-900/40 backdrop-blur-md rounded-2xl border border-slate-900 shadow-xl hover:border-cyan-500/20 transition duration-300 glow-card"
              >
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-slate-800 flex-shrink-0 bg-slate-950 flex items-center justify-center p-2">
                  <img
                    src={index === 0 ? iiitKurnoolLogo : iuLogo}
                    alt={deg.institution}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=100&auto=format&fit=crop&q=80"; // Fallback building emblem
                    }}
                  />
                </div>
                
                <div className="flex-1 text-left">
                  <div className="flex justify-between items-start gap-4 flex-wrap mb-3">
                    <div>
                      <h4 className="text-lg font-bold text-white leading-tight">
                        {deg.institution}
                      </h4>
                      <span className="text-xs font-mono-tech text-cyan-400">
                        {deg.degree}
                      </span>
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 bg-slate-950/60 border border-slate-850 text-slate-400 rounded-md font-mono-tech">
                      {deg.year}
                    </span>
                  </div>

                  <ul className="mt-4 space-y-2.5 border-t border-slate-950 pt-4">
                    {deg.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-slate-300 leading-relaxed">
                        <span className="text-cyan-400 mt-1.5 flex-shrink-0 text-[10px] font-mono-tech">&gt;</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>

                  <motion.a
                    href={deg.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-xs font-mono-tech text-cyan-400 hover:text-cyan-300 transition duration-300 cursor-pointer"
                  >
                    visit_institution()
                    <FaExternalLinkAlt className="text-[10px]" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-white mb-8 flex items-center gap-2"
          >
            <FaCertificate className="text-cyan-400" />
            Certifications List
          </motion.h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <CertificationCard key={index} cert={cert} index={index} />
            ))}
          </div>
        </div>

      </main>
    </div>
  );
};

export default Education;
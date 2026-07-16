import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const footerLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about-us" },
  { label: "Projects", path: "/projects" },
  { label: "Skills", path: "/skills" },
  { label: "Open Source", path: "/open-source" },
  { label: "Contact", path: "/contact" },
];

const socials = [
  { icon: <FaGithub />, href: "https://github.com/Jeevan-2275", label: "GitHub" },
  { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/jeevan-kadam-730b87327", label: "LinkedIn" },
  { icon: <FaTwitter />, href: "https://x.com/JKadam33718", label: "Twitter" },
  { icon: <FaEnvelope />, href: "mailto:jeevakadam2275@gmail.com", label: "Email" },
];

const Footer = () => (
  <footer className="relative mt-32 border-t border-white/[0.05]">
    {/* Top gradient fade */}
    <div
      className="absolute top-0 left-0 right-0 h-px"
      style={{
        background: "linear-gradient(90deg, transparent, rgba(124,58,237,0.5), rgba(219,39,119,0.4), transparent)",
      }}
    />

    <div className="container mx-auto px-6 py-16 max-w-6xl">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-14">
        
        {/* Brand Column */}
        <div className="flex flex-col gap-5">
          <Link to="/" className="flex items-center gap-3 w-fit group">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-sm font-mono-tech"
              style={{ background: "linear-gradient(135deg, #7c3aed, #db2777)" }}
            >
              JK
            </div>
            <span className="text-lg font-bold font-display text-white group-hover:gradient-text-vivid transition-all">
              Jeevan Kadam
            </span>
          </Link>
          <p className="text-sm text-white/40 leading-relaxed max-w-xs">
            Full-Stack Engineer & AI Integration Specialist building high-performance digital systems.
          </p>
          {/* Availability badge */}
          <div className="badge-available w-fit">
            <span className="dot" />
            Available for opportunities
          </div>
        </div>

        {/* Links Column */}
        <div>
          <p className="text-xs font-mono-tech text-white/30 uppercase tracking-widest mb-5">Navigation</p>
          <ul className="flex flex-col gap-3">
            {footerLinks.map((l) => (
              <li key={l.path}>
                <Link
                  to={l.path}
                  className="text-sm text-white/50 hover:text-violet-400 transition-colors duration-200"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Column */}
        <div>
          <p className="text-xs font-mono-tech text-white/30 uppercase tracking-widest mb-5">Connect</p>
          <div className="flex flex-col gap-3">
            <a
              href="mailto:jeevakadam2275@gmail.com"
              className="text-sm text-white/50 hover:text-violet-400 transition-colors duration-200 font-mono-tech"
            >
              jeevakadam2275@gmail.com
            </a>
            <a
              href="https://github.com/Jeevan-2275"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/50 hover:text-violet-400 transition-colors duration-200 font-mono-tech"
            >
              github.com/Jeevan-2275
            </a>
            {/* Social icons */}
            <div className="flex items-center gap-4 mt-3">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  whileHover={{ y: -3, scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-white/40 hover:text-violet-400 border border-white/[0.06] hover:border-violet-500/30 hover:bg-violet-950/30 transition-colors duration-200 text-base"
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.05] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs font-mono-tech text-white/25">
          © {new Date().getFullYear()} Jeevan Kadam · Designed & Engineered with ♥
        </p>
        <p className="text-xs font-mono-tech text-white/20">
          React · Tailwind · Framer Motion · Vite
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
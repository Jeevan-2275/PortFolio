import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about-us" },
  { name: "Skills", path: "/skills" },
  { name: "Projects", path: "/projects" },
  { name: "Experience", path: "/experience" },
  { name: "Open Source", path: "/open-source" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Floating Pill Navbar */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 22, delay: 0.1 }}
        className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4"
      >
        <div
          className={`
            hidden md:flex items-center gap-1 px-3 py-2 rounded-2xl
            transition-all duration-500
            ${scrolled
              ? "bg-[rgba(10,10,20,0.85)] backdrop-blur-2xl border border-white/[0.08] shadow-[0_8px_40px_-12px_rgba(0,0,0,0.8)]"
              : "bg-[rgba(10,10,20,0.55)] backdrop-blur-xl border border-white/[0.05]"
            }
          `}
        >
          {/* Logo */}
          <NavLink
            to="/"
            className="mr-2 flex items-center gap-2.5 px-3 py-1.5 rounded-xl group"
          >
            <motion.div
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="relative w-8 h-8 rounded-xl p-[1px] shadow-[0_0_15px_rgba(124,58,237,0.4)]"
              style={{ background: "linear-gradient(135deg, #7c3aed, #06b6d4)" }}
            >
              <div className="w-full h-full bg-[#0a0a16] rounded-[11px] flex items-center justify-center border border-white/10">
                <span className="text-[11px] font-extrabold font-mono-tech tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white via-violet-200 to-cyan-300">
                  JK
                </span>
              </div>
            </motion.div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-white group-hover:text-violet-300 font-display transition-colors leading-tight">
                Jeevan Kadam
              </span>
              <span className="text-[9px] font-mono-tech text-cyan-400/80 tracking-widest uppercase">
                Systems Architect
              </span>
            </div>
          </NavLink>

          {/* Divider */}
          <div className="w-px h-5 bg-white/10 mx-1" />

          {/* Nav Links */}
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `relative px-4 py-1.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "text-white"
                    : "text-white/50 hover:text-white/80"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-xl"
                      style={{
                        background: "linear-gradient(135deg, rgba(124,58,237,0.35), rgba(219,39,119,0.2))",
                        border: "1px solid rgba(124,58,237,0.3)",
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                </>
              )}
            </NavLink>
          ))}

          {/* Divider */}
          <div className="w-px h-5 bg-white/10 mx-1" />

          {/* CTA */}
          <Link
            to="/contact"
            className="px-4 py-1.5 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:shadow-lg"
            style={{
              background: "linear-gradient(135deg, #7c3aed, #db2777)",
              boxShadow: "0 0 0 0 rgba(124,58,237,0)",
            }}
            onMouseEnter={e => e.currentTarget.style.boxShadow = "0 4px 20px -4px rgba(124,58,237,0.6)"}
            onMouseLeave={e => e.currentTarget.style.boxShadow = "0 0 0 0 rgba(124,58,237,0)"}
          >
            Contact
          </Link>
        </div>
      </motion.header>

      {/* Mobile Navbar */}
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 22 }}
        className={`md:hidden fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[rgba(6,6,15,0.92)] backdrop-blur-xl border-b border-white/[0.06]"
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-4">
          <NavLink to="/" className="flex items-center gap-2.5">
            <div
              className="relative w-8 h-8 rounded-xl p-[1px] shadow-[0_0_15px_rgba(124,58,237,0.4)]"
              style={{ background: "linear-gradient(135deg, #7c3aed, #06b6d4)" }}
            >
              <div className="w-full h-full bg-[#0a0a16] rounded-[11px] flex items-center justify-center border border-white/10">
                <span className="text-[11px] font-extrabold font-mono-tech tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white via-violet-200 to-cyan-300">
                  JK
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-white font-display text-sm leading-tight">Jeevan Kadam</span>
              <span className="text-[9px] font-mono-tech text-cyan-400/80 tracking-widest uppercase">Engineer</span>
            </div>
          </NavLink>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-white/60 hover:text-white transition-colors"
            aria-label="Toggle navigation"
          >
            {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden border-t border-white/[0.06] bg-[rgba(6,6,15,0.98)] backdrop-blur-2xl"
            >
              <div className="px-5 py-5 flex flex-col gap-1">
                {[...navItems, { name: "Contact", path: "/contact" }].map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                        isActive
                          ? "text-violet-400 bg-violet-950/40 border border-violet-800/30"
                          : "text-white/60 hover:text-white hover:bg-white/[0.04]"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;
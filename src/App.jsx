import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { lazy, Suspense, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AuroraBackground from "./components/AuroraBackground";

const Home = lazy(() => import("./pages/Home"));
const Education = lazy(() => import("./pages/Education"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const Projects = lazy(() => import("./pages/Projects"));
const OpenSource = lazy(() => import("./pages/OpenSource"));
const Contact = lazy(() => import("./pages/Contact"));
const Skills = lazy(() => import("./pages/Skills"));
const Experience = lazy(() => import("./pages/Experience"));

const pageVariants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.25 } },
};

function App() {
  const location = useLocation();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handle = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, []);

  return (
    <div
      className="relative min-h-screen text-slate-100 selection:bg-violet-500/30 selection:text-violet-200"
      style={{ backgroundColor: "var(--bg-base)" }}
    >
      <Helmet>
        <title>Jeevan Kadam | Full-Stack Engineer & AI Systems Builder</title>
        <meta
          name="description"
          content="Portfolio of Jeevan Kadam — B.Tech Computer Engineering student and Full-Stack Engineer specializing in MERN stack, Next.js, AI integration, and cloud architectures."
        />
        <meta
          name="keywords"
          content="Jeevan Kadam, Full-Stack Engineer, MERN Stack, React, Next.js, Node.js, AI Integration, Cloud Architecture, Senior Developer Portfolio"
        />
      </Helmet>

      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] origin-[0%] z-[60]"
        style={{
          scaleX,
          background: "linear-gradient(90deg, #7c3aed, #db2777, #f59e0b)",
        }}
      />

      {/* Cursor ambient glow */}
      <div
        className="pointer-events-none fixed inset-0 z-[1] transition-all duration-500 hidden md:block"
        style={{
          background: `radial-gradient(700px at ${mousePosition.x}px ${mousePosition.y}px, rgba(124,58,237,0.05), transparent 75%)`,
        }}
      />

      {/* Aurora animated background */}
      <AuroraBackground />

      <Navbar />

      <AnimatePresence mode="wait">
        <Suspense
          fallback={
            <div className="min-h-screen flex flex-col items-center justify-center gap-5 font-mono-tech">
              <div
                className="w-10 h-10 rounded-full border-2 border-violet-500/30 border-t-violet-500 animate-spin"
              />
              <span className="text-sm text-white/30 animate-pulse">Loading...</span>
            </div>
          }
        >
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<motion.div {...pageVariants} initial="initial" animate="animate" exit="exit"><Home /></motion.div>} />
            <Route path="/education" element={<motion.div {...pageVariants} initial="initial" animate="animate" exit="exit"><Education /></motion.div>} />
            <Route path="/about-us" element={<motion.div {...pageVariants} initial="initial" animate="animate" exit="exit"><AboutUs /></motion.div>} />
            <Route path="/projects" element={<motion.div {...pageVariants} initial="initial" animate="animate" exit="exit"><Projects /></motion.div>} />
            <Route path="/open-source" element={<motion.div {...pageVariants} initial="initial" animate="animate" exit="exit"><OpenSource /></motion.div>} />
            <Route path="/contact" element={<motion.div {...pageVariants} initial="initial" animate="animate" exit="exit"><Contact /></motion.div>} />
            <Route path="/skills" element={<motion.div {...pageVariants} initial="initial" animate="animate" exit="exit"><Skills /></motion.div>} />
            <Route path="/experience" element={<motion.div {...pageVariants} initial="initial" animate="animate" exit="exit"><Experience /></motion.div>} />
          </Routes>
        </Suspense>
      </AnimatePresence>

      <Footer />
    </div>
  );
}

export default App;
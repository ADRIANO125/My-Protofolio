import React, { useState, useEffect, lazy, Suspense } from "react";
import "./App.css";
import Header from "./Pages/Header/Header";
import { FaChevronUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeProvider, useTheme } from "./contexts/ThemeContext";
import { DNA } from "react-loader-spinner";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Lazy load heavy components
const Hero = lazy(() => import("./Pages/Hero/Hero"));
const Main = lazy(() => import("./Pages/Main/Main"));
const Contact = lazy(() => import("./Pages/Contact/Contact"));
const Footer = lazy(() => import("./Pages/Footer/Footer"));
const Skills = lazy(() => import("./Pages/Skills/Skills"));
const NeonCursor = lazy(() => import("./components/NeonCursor/NeonCursor"));

// Loading component for Suspense fallbacks
const ComponentLoader = ({ className = "" }) => (
  <div className={`flex items-center justify-center p-8 ${className}`}>
    <div className="w-8 h-8 border-2 border-accent-cyan border-t-transparent rounded-full animate-spin"></div>
  </div>
);

function AppContent() {
  const { theme } = useTheme();
  const [showButton, setShowButton] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Handle scroll for back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Loading effect - reduced time for better UX
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen flex items-center justify-center bg-bg"
      >
        <DNA
          visible={true}
          height={150}
          width={150}
          ariaLabel="dna-loading"
          wrapperClass="dna-wrapper"
        />
      </motion.div>
    );
  }

  return (
    <div
      id="top"
      className="min-h-screen bg-bg text-text transition-all duration-500"
      style={{ overflowX: "hidden" }}
    >
      {/* ToastContainer على مستوى الصفحة */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme={theme === "light" ? "light" : "dark"}
      />

      {/* Neon Cursor */}
      <Suspense fallback={null}>
        <NeonCursor />
      </Suspense>

      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/20 to-accent-lemon/20 dark:from-accent-evil/20 dark:to-accent-cyan/20" />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-8 space-y-12">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Header />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass p-8 md:p-12"
          >
            <Suspense fallback={<ComponentLoader className="min-h-[400px]" />}>
              <Hero />
            </Suspense>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="glass p-8 md:p-12"
          >
            <Suspense fallback={<ComponentLoader className="min-h-[300px]" />}>
              <Skills />
            </Suspense>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="glass p-8 md:p-12"
          >
            <Suspense fallback={<ComponentLoader className="min-h-[400px]" />}>
              <Main />
            </Suspense>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="glass p-8 md:p-12"
          >
            <Suspense fallback={<ComponentLoader className="min-h-[300px]" />}>
              <Contact />
            </Suspense>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass p-6"
          >
            <Suspense fallback={<ComponentLoader />}>
              <Footer />
            </Suspense>
          </motion.div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showButton && (
          <motion.a
            href="#top"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-8 right-8 glass-card p-4 text-accent-cyan hover:text-accent-lemon dark:hover:text-accent-evil glow-hover z-50"
          >
            <FaChevronUp size={20} />
          </motion.a>
        )}
      </AnimatePresence>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;

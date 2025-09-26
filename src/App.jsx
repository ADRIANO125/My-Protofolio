import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Pages/Header/Header";
import Hero from "./Pages/Hero/Hero";
import Main from "./Pages/Main/Main";
import Contact from "./Pages/Contact/Contact";
import Footer from "./Pages/Footer/Footer";
import Skills from "./Pages/Skills/Skills";
import { FaChevronUp, FaCircle } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeProvider, useTheme } from "./contexts/ThemeContext";
import { DNA } from "react-loader-spinner";

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

  // Loading effect
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500);
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
            <Hero />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="glass p-8 md:p-12"
          >
            <Skills />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="glass p-8 md:p-12"
          >
            <Main />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="glass p-8 md:p-12"
          >
            <Contact />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass p-6"
          >
            <Footer />
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

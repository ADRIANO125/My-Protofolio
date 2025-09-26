import { useState, useEffect } from "react";
import { IoMenu } from "react-icons/io5";
import { FaMoon, FaSun } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import venomLogo from "../../assets/venom logo.jpg";
import { motion, AnimatePresence } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useTheme } from "../../contexts/ThemeContext";

function Header() {
  const { theme, toggleTheme, isLight } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Navigation items
  const navItems = [
    { name: "About", href: "#hero" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  // Close mobile menu on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) setIsMenuOpen(false);
    };

    if (isMenuOpen) {
      window.addEventListener("scroll", handleScroll);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-30"
      >
        <div className="glass-strong px-4 sm:px-6 py-4 flex items-center justify-between">
          {/* Logo with Lottie Animation */}
          <motion.div
            className="flex items-center space-x-2 sm:space-x-3"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full glass-card p-2 overflow-hidden">
              <img
                src={venomLogo}
                alt="Venom Logo"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="font-extrabold text-2xl sm:text-3xl tracking-wide text-accent-evil drop-shadow-lg">
                Venom
              </h1>
              <p className="text-xs text-muted">Developer</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <div className="glass px-4 xl:px-6 py-3 rounded-full">
              <ul className="flex space-x-4 xl:space-x-8">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <a
                      href={item.href}
                      className="text-muted hover:text-accent-cyan dark:hover:text-accent-evil transition-all duration-300 font-medium relative group text-sm xl:text-base"
                    >
                      {item.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-cyan dark:bg-accent-evil transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          {/* Tablet Navigation */}
          <div className="hidden md:flex lg:hidden items-center space-x-1">
            <div className="glass px-3 py-2 rounded-full">
              <ul className="flex space-x-3">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <a
                      href={item.href}
                      className="text-muted hover:text-accent-cyan dark:hover:text-accent-evil transition-all duration-300 font-medium relative group text-sm"
                    >
                      {item.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-cyan dark:bg-accent-evil transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          {/* Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-3">
            {/* Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="glass-card p-3 rounded-full text-accent-cyan hover:text-accent-lemon dark:hover:text-accent-evil glow-hover transition-all duration-300"
            >
              <motion.div
                initial={false}
                animate={{ rotate: isLight ? 0 : 180 }}
                transition={{ duration: 0.3 }}
              >
                {isLight ? <FaMoon size={18} /> : <FaSun size={18} />}
              </motion.div>
            </motion.button>

            {/* Mobile Menu Toggle */}
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="md:hidden glass-card p-2.5 sm:p-3 rounded-full text-accent-cyan hover:text-accent-lemon dark:hover:text-accent-evil glow-hover"
            >
              <motion.div
                animate={{ rotate: isMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {isMenuOpen ? <IoIosClose size={20} /> : <IoMenu size={20} />}
              </motion.div>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden"
            onClick={() => setIsMenuOpen(false)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 h-full w-72 max-w-[80vw] glass-strong p-4 z-50"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Mobile Menu Header */}
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full glass-card p-2 overflow-hidden">
                  <img
                    src={venomLogo}
                    alt="Venom Logo"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="hidden sm:block">
                  <h1 className="font-extrabold text-2xl sm:text-3xl tracking-wide text-accent-evil drop-shadow-lg">
                    Venom
                  </h1>
                  <p className="text-xs text-muted">Developer</p>
                </div>
              </div>

              {/* Mobile Navigation Links */}
              <ul className="space-y-3">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  >
                    <a
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="block glass-card p-3 rounded-lg text-muted hover:text-accent-cyan dark:hover:text-accent-evil transition-all duration-300 hover:translate-x-1 group"
                    >
                      <span className="text-sm font-medium group-hover:text-glow">
                        {item.name}
                      </span>
                      <div className="w-0 h-0.5 bg-accent-cyan dark:bg-accent-evil transition-all duration-300 group-hover:w-full mt-1"></div>
                    </a>
                  </motion.li>
                ))}
              </ul>

              {/* Mobile Menu Footer */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute bottom-4 left-4 right-4"
              >
                <div className="glass-card p-3 rounded-lg text-center">
                  <p className="text-xs text-muted mb-2">Theme</p>
                  <motion.button
                    onClick={toggleTheme}
                    whileTap={{ scale: 0.95 }}
                    className="w-full flex items-center justify-center gap-2 glass p-2 rounded-md 
                 text-accent-cyan hover:text-accent-purple 
                 dark:hover:text-accent-evil glow-hover transition-all text-sm"
                  >
                    {isLight ? (
                      <>
                        <FaMoon size={14} /> Dark
                      </>
                    ) : (
                      <>
                        <FaSun size={14} /> Light
                      </>
                    )}
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;

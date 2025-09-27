import React, { useState, useEffect } from "react";
import {
  FaWhatsappSquare,
  FaFacebookSquare,
  FaLinkedin,
  FaGithubSquare,
  FaDownload,
  FaCircle,
  FaBolt,
} from "react-icons/fa";
import { DiReact } from "react-icons/di";
import { DiGitBranch } from "react-icons/di";

import { MdVerified } from "react-icons/md";
import { motion, useAnimation } from "framer-motion";
import LazyDotLottie from "../../components/LazyDotLottie/LazyDotLottie";
import { useTheme } from "../../contexts/ThemeContext";
import LazyImage from "../../components/LazyImage/LazyImage";
import Avatar from "../../assets/Avatar.jpg";

function Hero() {
  const { isLight } = useTheme();
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const controls = useAnimation();

  const fullText = "Abdul Rahman Kadri";
  const roles = [
    "Front-End Developer",
    "UI/UX Visionary",
    "React Performance Expert",
    "Next.js Architect",
    "Creative Web Engineer",
    "Interactive Design Specialist",
    "Responsive Layout",
    "Modern Web Aesthetics Enthusiast",
  ];
  const [currentRole, setCurrentRole] = useState(0);

  // Typewriter effect
  useEffect(() => {
    const speed = isDeleting ? 50 : 150;
    const timeout = setTimeout(() => {
      if (!isDeleting && currentIndex < fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      } else if (isDeleting && currentIndex > 0) {
        setDisplayText(fullText.slice(0, currentIndex - 1));
        setCurrentIndex(currentIndex - 1);
      } else if (currentIndex === fullText.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (currentIndex === 0 && isDeleting) {
        setIsDeleting(false);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [currentIndex, isDeleting, fullText]);

  // Role rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  // Glitch animation trigger
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      controls.start({
        x: [0, -2, 2, -1, 1, 0],
        y: [0, 1, -1, 2, -1, 0],
        skew: [0, 1, -1, 2, -2, 0],
        transition: { duration: 0.3 },
      });
    }, 5000);
    return () => clearInterval(glitchInterval);
  }, [controls]);

  const socialLinks = [
    {
      href: "https://wa.me/201227730537",
      label: "WhatsApp",
      icon: <FaWhatsappSquare />,
      color: "hover:text-green-400",
    },
    {
      href: "https://www.facebook.com/Venom007070",
      label: "Facebook",
      icon: <FaFacebookSquare />,
      color: "hover:text-blue-400",
    },
    {
      href: "https://www.linkedin.com/in/kadri-devlife",
      label: "LinkedIn",
      icon: <FaLinkedin />,
      color: "hover:text-blue-600",
    },
    {
      href: "https://github.com/ADRIANO125",
      label: "GitHub",
      icon: <FaGithubSquare />,
      color: "hover:text-gray-400",
    },
  ];

  return (
    <div
      id="hero"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Avatar & Verification */}
          <motion.div
            className="flex flex-col sm:flex-row items-center sm:items-end gap-6 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Avatar */}
            <div className="relative group">
              <motion.div
                className="w-40 h-40 rounded-2xl glass-card p-2 glow-hover"
                whileHover={{ scale: 1.05 }}
              >
                <LazyImage
                  src={Avatar}
                  alt="Abdul Rahman Kadri"
                  className="w-full h-full rounded-xl"
                />
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1, type: "spring" }}
                  className="absolute -bottom-2 -right-2 glass-card p-2 rounded-full"
                >
                  <MdVerified className="text-accent-cyan dark:text-accent-evil text-2xl" />
                </motion.div>
              </motion.div>
            </div>

            {/* Name & Status */}
            <div className="text-center sm:text-left space-y-2">
              <motion.h1
                animate={controls}
                className="text-4xl sm:text-5xl font-bold text-glow"
              >
                {displayText}
                <span className="caret text-accent-cyan dark:text-accent-evil">
                  |
                </span>
              </motion.h1>

              <motion.div
                key={currentRole}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-xl sm:text-2xl text-accent-lemon dark:text-accent-evil font-medium"
              >
                {roles[currentRole]}
              </motion.div>

              <div className="flex items-center justify-center sm:justify-start space-x-2 text-muted">
                <div className="w-2 h-2 rounded-full bg-terminal-green animate-pulse"></div>
                <span className="text-sm">Available for freelance</span>
              </div>
            </div>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-card p-6 rounded-2xl"
          >
            <p className="text-lg text-muted leading-relaxed">
              <span className="text-accent-cyan dark:text-accent-evil font-semibold">
                Passionate
              </span>{" "}
              Front-End Developer with solid knowledge of modern web
              technologies. Focused on writing{" "}
              <span className="text-terminal-green font-medium">
                clean code
              </span>
              , building responsive and user-friendly interfaces, and creating
              high-performance web solutions that bridge{" "}
              <span className="text-accent-lemon dark:text-accent-evil font-medium">
                creativity
              </span>{" "}
              and technology.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.a
              href="/Abdulrahman_Kadri_CV.pdf"
              download="Abdulrahman_Kadri_CV.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glass-card px-8 py-4 rounded-xl text-center 
    font-semibold transition-all duration-300 flex items-center justify-center space-x-2
    bg-gradient-to-r 
    from-accent-cyan to-accent-lemon 
    dark:from-accent-evil dark:to-accent-cyan 
    text-black dark:text-white
    glow-hover"
            >
              <FaDownload className="text-current" />
              <span>Download CV</span>
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glass border-2 border-accent-cyan dark:border-accent-evil px-8 py-4 rounded-xl text-center text-accent-cyan dark:text-accent-evil font-semibold hover:bg-accent-cyan/10 dark:hover:bg-accent-evil/10 transition-all duration-300"
            >
              Let's Talk
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex justify-center sm:justify-start space-x-6"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{
                  scale: 1.2,
                  rotate: [0, -10, 10, 0],
                  transition: { duration: 0.3 },
                }}
                className={`text-3xl text-muted ${social.color} transition-all duration-300 glass-card p-3 rounded-full glow-hover`}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Side - Lottie Animation */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-md lg:max-w-lg">
            {/* Glow Effect Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-accent-cyan/20 to-accent-lemon/20 dark:from-accent-evil/20 dark:to-accent-cyan/20 rounded-full blur-3xl animate-pulse-glow"></div>

            {/* Glass Container */}
            <motion.div
              className="relative glass-card p-8 rounded-3xl"
              whileHover={{
                scale: 1.02,
                rotateY: 5,
                transition: { duration: 0.3 },
              }}
            >
              <LazyDotLottie
                src={
                  isLight
                    ? "https://lottie.host/0bdaed9f-0a6e-4ec2-b59c-fabd428cb575/sgJvyxpNQj.lottie"
                    : "https://lottie.host/7a83a65d-5fbe-4644-b14a-24d957214fbb/f8yrN8TOKh.lottie"
                }
                className="w-full h-auto"
              />
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-4 -right-4 glass-card p-3 rounded-full text-accent-cyan dark:text-accent-evil"
            >
              <DiGitBranch className="text-2xl" />
            </motion.div>

            <motion.div
              animate={{
                y: [0, 10, 0],
                x: [0, -5, 5, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute -bottom-4 -left-4 glass-card p-3 rounded-full text-terminal-green"
            >
              <DiReact className="text-xl" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;

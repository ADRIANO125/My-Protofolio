import React from "react";
import {
  FaWhatsapp,
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaHeart,
  FaCode,
  FaRocket,
  FaCoffee,
} from "react-icons/fa";
import { motion } from "framer-motion";

function Footer() {
  const socialLinks = [
    {
      name: "WhatsApp",
      href: "https://wa.me/201227730537",
      icon: <FaWhatsapp />,
      color: "text-green-400",
      hoverColor: "hover:text-green-300",
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/Venom007070",
      icon: <FaFacebookF />,
      color: "text-blue-500",
      hoverColor: "hover:text-blue-400",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/kadri-devlife",
      icon: <FaLinkedinIn />,
      color: "text-blue-600",
      hoverColor: "hover:text-blue-500",
    },
    {
      name: "GitHub",
      href: "https://github.com/ADRIANO125",
      icon: <FaGithub />,
      color: "text-gray-300",
      hoverColor: "hover:text-white",
    },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-8 md:py-16 overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute inset-0 opacity-20 md:opacity-30">
        <div className="absolute top-1/4 left-1/4 w-32 md:w-64 h-32 md:h-64 bg-accent-cyan/30 dark:bg-accent-evil/20 rounded-full blur-3xl animate-pulse-glow"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-24 md:w-48 h-24 md:h-48 bg-accent-purple/30 dark:bg-accent-cyan/20 rounded-full blur-2xl animate-pulse-glow"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-strong p-6 sm:p-8 md:p-12 rounded-2xl md:rounded-3xl mb-6 md:mb-8"
        >
          <div className="text-center mb-8 md:mb-12">
            {/* Logo/Brand */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6 md:mb-8"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-glow mb-3 md:mb-4">
                <span className="text-accent-cyan dark:text-accent-evil">
                  Abdul Rahman
                </span>{" "}
                <span className="text-accent-purple dark:text-accent-cyan">
                  Kadri
                </span>
              </h2>
              <p className="text-base md:text-lg text-muted max-w-2xl mx-auto leading-relaxed px-4">
                Passionate Frontend Developer creating stunning web experiences
                with modern technologies. Let's build something amazing
                together!
              </p>
            </motion.div>

            {/* Skills Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex justify-center items-center space-x-4 md:space-x-6 mb-8 md:mb-12"
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 10 }}
                className="glass-card p-2 md:p-3 rounded-full"
              >
                <FaCode className="text-xl md:text-2xl text-accent-cyan dark:text-accent-evil" />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.2, rotate: -10 }}
                className="glass-card p-2 md:p-3 rounded-full"
              >
                <FaRocket className="text-xl md:text-2xl text-accent-purple dark:text-accent-cyan" />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.2, rotate: 10 }}
                className="glass-card p-2 md:p-3 rounded-full"
              >
                <FaCoffee className="text-xl md:text-2xl text-terminal-green" />
              </motion.div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap justify-center items-center gap-3 md:gap-4 mb-6 md:mb-8"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.7 + index * 0.1,
                    type: "spring",
                    stiffness: 200,
                  }}
                  whileHover={{
                    scale: 1.15,
                    y: -5,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.95 }}
                  className={`glass-card p-3 md:p-4 rounded-xl text-xl md:text-2xl ${social.color} ${social.hoverColor} glow-hover transition-all duration-300`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 md:space-x-3 glass-card px-6 md:px-8 py-3 md:py-4 rounded-2xl bg-gradient-to-r from-accent-cyan/30 to-accent-purple/30 dark:from-accent-evil/20 dark:to-accent-cyan/20 glow-hover transition-all duration-300"
              >
                <span className="text-base md:text-lg font-semibold text-glow">
                  Let's Work Together
                </span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="text-accent-cyan dark:text-accent-evil"
                >
                  <FaRocket />
                </motion.div>
              </motion.a>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center"
        >
          <div className="glass p-4 md:p-6 rounded-xl md:rounded-2xl">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
              {/* Copyright Text */}
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2 text-muted text-xs md:text-sm">
                <span>© {currentYear} Abdul Rahman Kadri.</span>
                <span className="hidden sm:inline">|</span>
                <span className="flex items-center space-x-1">
                  <span>Crafted with</span>
                  <motion.span
                    animate={{
                      scale: [1, 1.3, 1],
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="text-red-500"
                  >
                    <FaHeart />
                  </motion.span>
                  <span>& React</span>
                </span>
              </div>

              {/* Status Indicator */}
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-terminal-green animate-pulse"></div>
                <span className="text-xs text-muted">Always Online</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";
import { toast } from "react-toastify";
import LazyDotLottie from "../../components/LazyDotLottie/LazyDotLottie";
import { useTheme } from "../../contexts/ThemeContext";
import { FaPaperPlane, FaUser, FaEnvelope, FaComment } from "react-icons/fa";

function Contact() {
  const { isLight } = useTheme();
  const [state, handleSubmit] = useForm("meorobzw");

  useEffect(() => {
    if (state.succeeded) {
      toast.success("Your message has been sent successfully! Thank you.", {
        toastId: "success-toast",
      });
      document.getElementById("contact-form").reset();
    }
    if (state.errors && state.errors.length > 0) {
      toast.error("Something went wrong. Please try again.", {
        toastId: "error-toast",
      });
    }
  }, [state]);

  return (
    <section id="contact" className="py-12 md:py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 md:top-32 right-10 md:right-20 w-32 md:w-40 h-32 md:h-40 bg-accent-cyan/30 rounded-full blur-3xl animate-pulse-glow"></div>
        <div
          className="absolute bottom-10 md:bottom-20 left-5 md:left-10 w-24 md:w-32 h-24 md:h-32 bg-accent-purple/30 dark:bg-accent-evil/30 rounded-full blur-2xl animate-pulse-glow"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-glow mb-4 md:mb-6"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-accent-cyan dark:text-accent-evil">
              Get In
            </span>{" "}
            <span className="glitch-text">Touch</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-6 md:mb-8 px-4"
          >
            I'm open to new opportunities and collaborations.
            <span className="text-accent-purple dark:text-accent-cyan font-semibold">
              {" "}
              Let's create
            </span>{" "}
            something amazing together!
          </motion.p>

          <motion.div
            className="w-16 md:w-24 h-1 bg-gradient-to-r from-accent-cyan to-accent-purple dark:from-accent-evil dark:to-accent-cyan mx-auto rounded-full glow"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          ></motion.div>
        </motion.div>

        {/* Contact Content */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-strong p-6 md:p-8 rounded-2xl md:rounded-3xl glow-hover"
          >
            <h3 className="text-xl md:text-2xl font-bold text-glow mb-6 md:mb-8">
              <span className="text-accent-cyan dark:text-accent-evil">
                Send
              </span>{" "}
              <span className="text-accent-purple dark:text-accent-cyan">
                Message
              </span>
            </h3>

            <form
              id="contact-form"
              onSubmit={handleSubmit}
              className="space-y-5 md:space-y-6"
            >
              {/* Name Field */}
              <div className="relative">
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-muted mb-2"
                >
                  <FaUser className="inline mr-2" />
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 md:py-4 glass rounded-xl border-2 border-transparent focus:border-accent-cyan dark:focus:border-accent-evil bg-transparent text-text placeholder-muted transition-all duration-300 focus:glow text-sm md:text-base"
                  placeholder="Your full name"
                />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                />
              </div>

              {/* Email Field */}
              <div className="relative">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-muted mb-2"
                >
                  <FaEnvelope className="inline mr-2" />
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 md:py-4 glass rounded-xl border-2 border-transparent focus:border-accent-cyan dark:focus:border-accent-evil bg-transparent text-text placeholder-muted transition-all duration-300 focus:glow text-sm md:text-base"
                  placeholder="your.email@example.com"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>

              {/* Message Field */}
              <div className="relative">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-muted mb-2"
                >
                  <FaComment className="inline mr-2" />
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  className="w-full px-4 py-3 md:py-4 glass rounded-xl border-2 border-transparent focus:border-accent-cyan dark:focus:border-accent-evil bg-transparent text-text placeholder-muted transition-all duration-300 focus:glow resize-none text-sm md:text-base"
                  placeholder="Tell me about your project or just say hello..."
                ></textarea>
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={state.submitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto mx-auto glass-card py-3 md:py-3.5 px-6 md:px-10 rounded-xl font-bold text-sm md:text-base bg-gradient-to-r from-accent-cyan to-accent-purple dark:from-accent-evil dark:to-accent-cyan text-white shadow-lg hover:shadow-xl glow-hover transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 md:space-x-3 min-w-[200px]"
                style={{
                  background: isLight
                    ? "linear-gradient(135deg, var(--accent-cyan), var(--accent-purple))"
                    : "linear-gradient(135deg, var(--accent-evil), var(--accent-cyan))",
                  color: "white",
                  textShadow: "0 1px 2px rgba(0,0,0,0.5)",
                }}
              >
                <FaPaperPlane
                  className={`text-sm md:text-base ${
                    state.submitting ? "animate-bounce" : ""
                  }`}
                />
                <span>
                  {state.submitting
                    ? "Sending..."
                    : state.succeeded
                    ? "Message Sent!"
                    : "Send Message"}
                </span>
              </motion.button>
            </form>
          </motion.div>

          {/* Lottie Animation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center items-center"
          >
            <div className="relative w-full max-w-sm md:max-w-md lg:max-w-lg">
              {/* Glow Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent-cyan/20 to-accent-purple/20 dark:from-accent-evil/20 dark:to-accent-cyan/20 rounded-full blur-3xl animate-pulse-glow"></div>

              {/* Glass Container */}
              <motion.div
                className="relative glass-card p-6 md:p-8 rounded-2xl md:rounded-3xl aspect-square flex items-center justify-center"
                whileHover={{
                  scale: 1.02,
                  rotateY: 5,
                  transition: { duration: 0.3 },
                }}
              >
                <LazyDotLottie
                  src="https://lottie.host/b35c9d98-0698-410b-940c-b7a6a32d5c9a/zwzwIquDiv.lottie"
                  className="w-full h-auto max-w-xs md:max-w-sm"
                />

                {/* Floating Elements */}
                <motion.div
                  className="absolute top-4 right-4 w-2 md:w-3 h-2 md:h-3 bg-accent-cyan dark:bg-accent-evil rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute bottom-6 left-6 w-1.5 md:w-2 h-1.5 md:h-2 bg-accent-purple dark:bg-accent-cyan rounded-full"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

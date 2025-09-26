import React, { useState, useEffect } from "react";
import { FaGithub, FaAngleRight, FaEye, FaCode, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../../contexts/ThemeContext";
import projects from "./ProjectsData";

// Categories for filtering

const categories = ["All Projects", "HTML & CSS", "JavaScript", "React"];

function Main() {
  const { isLight } = useTheme();
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All Projects");

  // Filter logic
  const filteredProjects =
    activeFilter === "All Projects"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  // Close modal with Esc key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-40 h-40 bg-accent-cyan/30 rounded-full blur-3xl animate-pulse-glow"></div>
        <div
          className="absolute bottom-40 right-10 w-32 h-32 bg-accent-lemon/30 dark:bg-accent-evil/30 rounded-full blur-2xl animate-pulse-glow"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-glow mb-6"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-accent-cyan dark:text-accent-evil">My</span>{" "}
            <span className="glitch-text">Projects</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-muted max-w-2xl mx-auto mb-8"
          >
            Explore my latest work and creative solutions. Each project
            represents a
            <span className="text-accent-lemon dark:text-accent-cyan font-semibold">
              {" "}
              unique challenge
            </span>{" "}
            and
            <span className="text-terminal-green font-semibold">
              {" "}
              innovative approach
            </span>
          </motion.p>

          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-accent-cyan to-accent-lemon dark:from-accent-evil dark:to-accent-cyan mx-auto rounded-full glow"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          ></motion.div>
        </motion.div>

        {/* Filter Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center mb-12"
        >
          <div className="glass-strong p-2 rounded-2xl">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeFilter === category
                      ? "glass-card text-accent-cyan dark:text-accent-evil glow"
                      : "text-muted hover:text-accent-cyan dark:hover:text-accent-evil"
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="glass-card overflow-hidden rounded-2xl glow-hover group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        whileHover={{ scale: 1.1 }}
                        className="glass-card p-3 rounded-full text-accent-cyan hover:text-accent-lemon dark:hover:text-accent-evil transition-colors"
                      >
                        <FaEye size={20} />
                      </motion.a>
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        whileHover={{ scale: 1.1 }}
                        className="glass-card p-3 rounded-full text-accent-cyan hover:text-accent-lemon dark:hover:text-accent-evil transition-colors"
                      >
                        <FaCode size={20} />
                      </motion.a>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="glass px-3 py-1 rounded-full text-sm font-medium text-accent-cyan dark:text-accent-evil">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-glow group-hover:text-accent-cyan dark:group-hover:text-accent-evil transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Action Button */}
                  <div className="flex items-center justify-between">
                    <motion.button
                      whileHover={{ x: 5 }}
                      className="flex items-center space-x-2 text-accent-cyan dark:text-accent-evil font-medium hover:text-accent-lemon dark:hover:text-accent-cyan transition-colors"
                    >
                      <span>View Details</span>
                      <FaAngleRight />
                    </motion.button>

                    <div className="flex space-x-2">
                      <div className="w-2 h-2 rounded-full bg-accent-cyan dark:bg-accent-evil animate-pulse"></div>
                      <div
                        className="w-2 h-2 rounded-full bg-accent-lemon dark:bg-accent-cyan animate-pulse"
                        style={{ animationDelay: "0.5s" }}
                      ></div>
                      <div
                        className="w-2 h-2 rounded-full bg-terminal-green animate-pulse"
                        style={{ animationDelay: "1s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

export default Main;

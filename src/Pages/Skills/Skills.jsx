import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGithub,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiTypescript,
  SiNextdotjs,
  SiRedux,
  SiFramer,
  SiTailwindcss,
  SiBootstrap,
  SiMui,
  SiAxios,
  SiPostman,
  SiJson,
  SiShadcnui,
} from "react-icons/si";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useTheme } from "../../contexts/ThemeContext";
import { DNA } from "react-loader-spinner";

const skillsData = [
  {
    category: "Frontend Technologies",
    skills: [
      {
        name: "HTML5",
        icon: <FaHtml5 className="text-orange-500" />,
        level: 100,
        description: "Semantic markup and accessibility standards",
      },
      {
        name: "CSS3",
        icon: <FaCss3Alt className="text-blue-500" />,
        level: 95,
        description: "Advanced layouts, animations, and responsive design",
      },
      {
        name: "JavaScript",
        icon: <FaJs className="text-yellow-400" />,
        level: 90,
        description: "ES6+, DOM manipulation, and modern features",
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className="text-blue-400" />,
        level: 85,
        description: "Type-safe development and enhanced IDE support",
      },
    ],
  },
  {
    category: "React Ecosystem",
    skills: [
      {
        name: "React.js",
        icon: <FaReact className="text-cyan-400" />,
        level: 90,
        description: "Hooks, Context API, and modern patterns",
      },
      {
        name: "Next.js",
        icon: <SiNextdotjs className="dark:text-white text-black" />,
        level: 87,
        description: "SSR, SSG, API routes, and App Router",
      },
      {
        name: "Redux",
        icon: <SiRedux className="text-purple-400" />,
        level: 82,
        description: "State management and middleware integration",
      },
      {
        name: "Framer Motion",
        icon: <SiFramer className="text-pink-400" />,
        level: 89,
        description: "Advanced animations and micro-interactions",
      },
      {
        name: "Shadcn UI",
        icon: <SiShadcnui className="dark:text-gray-500 text-gray-800" />,
        level: 87,
        description:
          "Modern, customizable React components built with Tailwind CSS",
      },
    ],
  },
  {
    category: "CSS Frameworks",
    skills: [
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-sky-400" />,
        level: 96,
        description: "Utility-first CSS and custom design systems",
      },
      {
        name: "Bootstrap",
        icon: <SiBootstrap className="text-violet-500" />,
        level: 96,
        description: "Responsive components and grid systems",
      },
      {
        name: "Material-UI",
        icon: <SiMui className="text-blue-400" />,
        level: 86,
        description: "React components and theming system",
      },
    ],
  },
  {
    category: "API & State Management",
    skills: [
      {
        name: "Context API",
        icon: <FaReact className="text-cyan-400" />,
        level: 90,
        description: "Built-in React state management for component trees",
      },
      {
        name: "Axios",
        icon: <SiAxios className="text-blue-500" />,
        level: 94,
        description: "Promise-based HTTP client for API requests",
      },
      {
        name: "Postman",
        icon: <SiPostman className="text-orange-400" />,
        level: 98,
        description: "API testing and request workflow automation",
      },
      {
        name: "JSON",
        icon: <SiJson className="text-yellow-400" />,
        level: 95,
        description: "Data interchange format for APIs and configuration",
      },
    ],
  },

  {
    category: "Development Tools",
    skills: [
      {
        name: "Git",
        icon: <FaGitAlt className="text-orange-400" />,
        level: 93,
        description: "Version control and collaborative workflows",
      },
      {
        name: "GitHub",
        icon: <FaGithub className="dark:text-gray-300" />,
        level: 91,
        description: "Repository management and CI/CD pipelines",
      },
    ],
  },
];

function Skills() {
  const { isLight } = useTheme();
  const [isLoading, setIsLoading] = useState(true);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  // All skills in one array
  const allSkills = skillsData.flatMap((category) => category.skills);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    },
  };

  if (isLoading) {
    return (
      <section id="skills" className="py-20 relative overflow-hidden">
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="glass-strong p-12 rounded-3xl flex flex-col items-center space-y-6">
            <DNA
              visible={true}
              height="80"
              width="80"
              ariaLabel="dna-loading"
              wrapperStyle={{}}
              wrapperClass="dna-wrapper"
            />
            <p className="text-lg text-muted">Loading Skills...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent-cyan/30 rounded-full blur-3xl animate-pulse-glow"></div>
        <div
          className="absolute bottom-40 right-20 w-24 h-24 bg-accent-lemon/30 dark:bg-accent-evil/30 rounded-full blur-2xl animate-pulse-glow"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/3 w-16 h-16 bg-terminal-green/20 rounded-full blur-xl animate-pulse-glow"
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
            <span className="text-accent-cyan dark:text-accent-evil">
              Technical
            </span>{" "}
            <span className="glitch-text">Skills</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-muted max-w-3xl mx-auto mb-8 leading-relaxed"
          >
            Mastering modern web technologies with passion for
            <span className="text-accent-lemon dark:text-accent-cyan font-semibold">
              {" "}
              clean code
            </span>
            ,
            <span className="text-terminal-green font-semibold">
              {" "}
              performance optimization
            </span>
            , and
            <span className="text-accent-cyan dark:text-accent-evil font-semibold">
              {" "}
              user experience
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

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 sm:gap-6"
        >
          {allSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => setHoveredSkill(skill)}
              onHoverEnd={() => setHoveredSkill(null)}
              className="group relative"
            >
              <div className="glass-card p-2 sm:p-3 text-center hover:glass-strong transition-all duration-300 glow-hover h-full flex flex-col">
                {/* Skill Icon */}
                <motion.div
                  className="text-3xl sm:text-4xl lg:text-5xl mb-2 sm:mb-3 lg:mb-4 mx-auto"
                  whileHover={{
                    rotate: [0, -10, 10, 0],
                    scale: 1.1,
                    transition: { duration: 0.4 },
                  }}
                >
                  {skill.icon}
                </motion.div>

                {/* Skill Name */}
                <h3 className="text-xs sm:text-sm lg:text-lg font-bold mb-2 sm:mb-3 text-glow group-hover:text-accent-cyan dark:group-hover:text-accent-evil transition-colors line-clamp-2">
                  {skill.name}
                </h3>

                {/* Progress Circle */}
                <div className="relative w-14 sm:w-16 lg:w-20 h-14 sm:h-16 lg:h-20 mx-auto mb-2 sm:mb-3 lg:mb-4">
                  <svg
                    className="w-full h-full transform -rotate-90"
                    viewBox="0 0 80 80"
                  >
                    <circle
                      cx="40"
                      cy="40"
                      r="35"
                      fill="none"
                      stroke="var(--glass-border)"
                      strokeWidth="6"
                    />
                    <motion.circle
                      cx="40"
                      cy="40"
                      r="35"
                      fill="none"
                      stroke="var(--accent-cyan)"
                      strokeWidth="6"
                      strokeLinecap="round"
                      strokeDasharray={219.91}
                      initial={{ strokeDashoffset: 219.91 }}
                      whileInView={{
                        strokeDashoffset: 219.91 - (219.91 * skill.level) / 100,
                      }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1.5,
                        delay: index * 0.1 + 0.5,
                        ease: "easeOut",
                      }}
                      className="drop-shadow-lg"
                      style={{
                        stroke: isLight
                          ? "var(--accent-cyan)"
                          : "var(--accent-evil)",
                      }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-sm sm:text-base lg:text-lg font-bold text-accent-cyan dark:text-accent-evil">
                      {skill.level}%
                    </span>
                  </div>
                </div>

                {/* Description - Hidden on small screens */}
                <p className="hidden lg:block text-sm text-muted leading-relaxed mt-auto line-clamp-3">
                  {skill.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // CSS Variables Integration
        bg: "var(--bg)",
        panel: "var(--panel)",
        "glass-bg": "var(--glass-bg)",
        "glass-border": "var(--glass-border)",
        "accent-lemon": "var(--accent-lemon)",
        "accent-cyan": "var(--accent-cyan)",
        "accent-purple": "var(--accent-purple)",
        "accent-evil": "var(--accent-evil)",
        "terminal-green": "var(--terminal-green)",
        text: "var(--text)",
        muted: "var(--muted)",
        glow: "var(--glow)",

        // Legacy colors for compatibility
        primary: "#2c3e50",
        secondary: "#282729",
        accent: "#657786",
        background: "#E1E8ED",
        highlight: "#AAB8C2",
      },
      animation: {
        glitch: "glitch 2s infinite",
        blink: "blink 1s infinite",
        "fade-in-up": "fadeInUp 0.6s ease-out",
        "slide-in-left": "slideInLeft 0.6s ease-out",
        "slide-in-right": "slideInRight 0.6s ease-out",
        "pulse-glow": "pulse-glow 2s infinite",
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        glass:
          "0 8px 32px var(--shadow), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
        "glass-strong":
          "0 12px 40px var(--shadow), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
        glow: "0 0 20px var(--glow)",
        "glow-strong": "0 0 30px var(--glow), 0 0 40px var(--glow)",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        xs: "0.5rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    screens: {
      xs: "475px",
      sm: "540px",
      md: "720px",
      lg: "960px",
      xl: "1140px",
      "2xl": "1320px",
    },
  },
  plugins: [],
};

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          framer: ["framer-motion"],
          lottie: ["@lottiefiles/dotlottie-react"],
          icons: [
            "react-icons/fa",
            "react-icons/si",
            "react-icons/di",
            "react-icons/md",
          ],
          formspree: ["@formspree/react"],
          toastify: ["react-toastify"],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
    target: "esnext",
    minify: "esbuild",
  },
  optimizeDeps: {
    include: ["react", "react-dom", "framer-motion"],
  },
  performance: {
    hints: "warning",
    maxAssetSize: 512000,
    maxEntrypointSize: 512000,
  },
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "/aubj/",
  server: {
    host: "::",
    port: 8080,
    allowedHosts: ["disha.amarujaladigital.com"],
    hmr: {
      protocol: 'wss',
      host: 'disha.amarujaladigital.com',
      clientPort: 443,
      path: 'aubj/',
      overlay: false,
    },
  },
  preview: {
    port: 8080,
    host: true,
    allowedHosts: ["disha.amarujaladigital.com"],
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime", "@tanstack/react-query", "@tanstack/query-core"],
  },
}));

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
  build: {
    outDir: 'dist',
    // Ensure clean builds
    emptyOutDir: true,
    // Reduce chunking for better compatibility
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  }
});
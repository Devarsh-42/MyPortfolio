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
    assetsDir: 'assets',
    emptyOutDir: true,
    // Add sourcemap for better debugging
    sourcemap: true,
    // Minify the output
    minify: 'terser',
    // Configure rollup options
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
});
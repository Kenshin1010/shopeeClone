import { defineConfig } from "vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import legacy from "@vitejs/plugin-legacy";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { visualizer } from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({}),
    legacy({
      targets: ["defaults", "not IE 11"],
    }),
    visualizer(),
  ],
  optimizeDeps: {
    exclude: ["js-big-decimal"],
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, "/src"),
    },
  },
});

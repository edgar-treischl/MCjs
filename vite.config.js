import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.js"),
      name: "MCjs", // global variable for UMD
      fileName: (format) => `mcjs.${format}.js`,
      formats: ["es", "umd"] // build both ES and UMD
    },
    rollupOptions: {
      // Don't bundle Chart.js — it's a peer dependency
      external: ["chart.js"],
      output: {
        globals: {
          "chart.js": "Chart"
        }
      }
    }
  }
});

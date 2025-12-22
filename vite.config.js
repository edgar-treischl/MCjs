import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.js"),
      name: "MCjs",
      fileName: (format) => `MCjs.${format}.js`,
      formats: ["es"] // ES module
    },
    rollupOptions: {
      // externalize Chart.js if you want docs to use CDN
      external: ["chart.js"],
      output: {
        globals: {
          "chart.js": "Chart"
        }
      }
    }
  }
});

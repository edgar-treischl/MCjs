import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.js"),
      name: "MCjs",
      // Always output a predictable filename
      fileName: () => "index.es.js",
      formats: ["es"]
    },
    rollupOptions: {
      // externalize Chart.js (loaded via CDN or peer dep)
      external: ["chart.js"],
      output: {
        globals: {
          "chart.js": "Chart"
        }
      }
    }
  }
});

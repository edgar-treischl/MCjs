import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.js"),
      name: "MCjs",
      fileName: () => "index.es.js",
      formats: ["es"]
    },
    rollupOptions: {
      external: ["chart.js"], // good, avoids bundling Chart.js
      output: {
        globals: {
          "chart.js": "Chart"
        }
      }
    }
  }
});

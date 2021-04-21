import { defineConfig } from "vite";
import path from "path";

const libEntryPath = path.resolve(__dirname, "src/main.tsx");
const outputDir = path.resolve(__dirname, "dist");

export default defineConfig({
  mode: "development",
  logLevel: "warn",
  clearScreen: false,
  build: {
    outDir: outputDir,
    sourcemap: true,
    minify: false,
    emptyOutDir: false,
    lib: {
      entry: libEntryPath,
      name: "motif",
      formats: ["es", "cjs", "umd"],
    },
    rollupOptions: {},
    brotliSize: false,
  },
});

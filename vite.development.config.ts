import { defineConfig } from "vite";
import path from "path";

const libEntryPath = path.resolve(__dirname, "src/main.tsx");
const outputDir = path.resolve(__dirname, "dist");

export default defineConfig({
  mode: "development",
  logLevel: "info",
  clearScreen: false,
  build: {
    outDir: outputDir,
    sourcemap: true,
    minify: false,
    emptyOutDir: false,
    lib: {
      entry: libEntryPath,
      formats: ["es", "cjs", "umd"],
      name: "motif",
    },
    // rollupOptions: {
    //   input: libEntryPath,
    //   output: {
    //     dir: outputDir,
    //     name: "MyBundle",
    //     format: "umd",
    //   },
    // },
    brotliSize: false,
  },
});

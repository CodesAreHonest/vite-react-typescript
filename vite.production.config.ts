import { defineConfig } from "vite";
import path from "path";

const libEntryPath = path.resolve(__dirname, "src/main.tsx");
const outputDir = path.resolve(__dirname, "dist");

export default defineConfig({
  mode: "production",
  logLevel: "info",
  clearScreen: false,
  build: {
    outDir: outputDir,
    sourcemap: false,
    minify: "terser",
    emptyOutDir: false,
    lib: {
      entry: libEntryPath,
      formats: ["es", "cjs", "umd"],
      name: "test",
      fileName: "test",
    },
    brotliSize: true,
    chunkSizeWarningLimit: 1000,
    terserOptions: {
      ecma: 5,
      ie8: false,
      keep_classnames: false,
      keep_fnames: false,
      mangle: true,
      compress: true,
      sourceMap: false,
      safari10: false,
    },
  },
});

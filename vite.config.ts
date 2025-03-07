import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [react()],
  base: "/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 8080,
    host: true,
  },
  define: {
    'process.env.SANITY_TOKEN': JSON.stringify(process.env.SANITY_TOKEN),
    'process.env.SANITY_PROJECT_ID': JSON.stringify('9uqjt3zf')
  }
});
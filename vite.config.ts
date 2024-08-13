import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import EnvironmentPlugin from "vite-plugin-environment";
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      components: path.resolve(__dirname, "./src/components/"),
      services: path.resolve(__dirname, "./src/services/")
    }
  },
  plugins: [react(), EnvironmentPlugin("all", { prefix: "REACT_APP_" })],
  server: {
    port: 3000,
    open: true
  }
});

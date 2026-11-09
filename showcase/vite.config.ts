import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  base: "/naman-nitika-wedding/",
  build: {
    outDir: "../deploy",
    emptyOutDir: true,
    assetsDir: "spa",
  },
});

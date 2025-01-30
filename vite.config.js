// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react-swc";
// import tailwindcss from "@tailwindcss/vite";
// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react(), tailwindcss()],
// });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ["path", "fs", "os", "url", "source-map-js"],
  },
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
});

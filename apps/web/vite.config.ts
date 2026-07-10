import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({

  base: "/pthatn.github.io/",

  plugins: [
    react()
  ],

  server: {
    port: 5173
  }

});

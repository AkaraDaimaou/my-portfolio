import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // Ensures correct asset paths in deployment
  build: {
    outDir: "dist" // Ensures the build goes to 'dist' folder
  }
});

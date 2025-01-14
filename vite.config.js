import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import legacy from '@vitejs/plugin-legacy';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [
    react(),
    legacy(),
    svgr(),
  ],
  build: {
    outDir: 'dist',
    minify: {
      terserOptions: {
        compress: {
          drop_console: true,
        },
      },
    },
  },
});
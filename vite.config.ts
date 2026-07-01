/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  base: '/soundwave/',
  plugins: [react(), tailwindcss()],
  test: {
    environment: 'jsdom',
    environmentOptions: {
      jsdom: { url: 'http://localhost:3000/soundwave/' },
    },
    setupFiles: './src/setupTests.ts',
    globals: true,
  },
});

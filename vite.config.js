import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Relative base ('./') keeps asset URLs portable across GitHub Pages,
// Netlify, Vercel, or any static host without extra config.
export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    target: 'es2020',
    outDir: 'dist',
    sourcemap: false,
    chunkSizeWarningLimit: 1200,
  },
})

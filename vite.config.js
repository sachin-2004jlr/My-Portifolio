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
    rollupOptions: {
      output: {
        // Split the framework + animation library into cacheable vendor
        // chunks so app-code edits don't bust their long-term cache.
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          motion: ['framer-motion'],
        },
      },
    },
  },
})

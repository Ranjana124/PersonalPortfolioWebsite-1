import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
      "@assets": resolve(__dirname, "./public")
    },
  },
  server: {
    host: '0.0.0.0',
    port: 5000,
    allowedHosts: ['localhost', '.replit.dev', '.janeway.replit.dev'],
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          motion: ['framer-motion'],
          ui: ['lucide-react']
        }
      }
    },
    chunkSizeWarningLimit: 1000
  }
})
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      },
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Split React and ReactDOM into a separate chunk
          react: ['react', 'react-dom'],
          // Split vendor libraries (add more as needed)
          vendor: [
            '@reduxjs/toolkit',
            'react-redux',
            'react-router-dom',
            '@headlessui/react',
            '@tabler/icons-react',
            'framer-motion',
            'gsap',
            'motion',
            'ogl',
            // add other large libraries here
          ],
        },
      },
    },
  },
}); 
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()], // Boshqa babel plugins QO‘SHMANG!
  build: {
    outDir: 'dist',
  },
  base: '/',
})

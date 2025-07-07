// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // <-- build natijasi shu papkaga yoziladi
  },
  base: '/', // <-- kerakli bo‘lsa: deploy qayerda boshlanishi
})

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// 👇 Diagnostika funksiyasi
function checkViteConfig() {
  try {
    const basePath = '/';
    if (typeof basePath !== 'string') {
      throw new Error(`❌ ERROR in vite.config.js: 'base' must be a string. Got: ${typeof basePath}`);
    }

    const outDirPath = 'dist';
    if (!outDirPath || typeof outDirPath !== 'string') {
      throw new Error(`❌ ERROR in vite.config.js: 'outDir' must be a non-empty string.`);
    }

    console.log('✅ vite.config.js configuration looks valid.\n');
  } catch (err) {
    console.error('\n❌ Vite config validation failed:');
    console.error(err.message);
    process.exit(1); // Stop build
  }
}

// 👇 Tekshirishni ishga tushuramiz
checkViteConfig();

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
  },
});

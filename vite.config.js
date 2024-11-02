// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'monaco-editor': 'monaco-editor/min/vs/editor/editor.main.js'
    }
  },
  optimizeDeps: {
    include: ['@monaco-editor/react', 'monaco-editor']
  },
});

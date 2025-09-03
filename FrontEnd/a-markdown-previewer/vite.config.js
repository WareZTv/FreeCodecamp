import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/FreeCodecamp/FrontEnd/a-markdown-previewer/',
  build: {
    outDir: '../a-markdown-previewer-dist',
    emptyOutDir: true
  }
})


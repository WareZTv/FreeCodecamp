import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/FreeCodecamp/FrontEnd/random-quote-machine/',
  build: {
    outDir: '../random-quote-machine-dist',
    emptyOutDir: true
  }
})
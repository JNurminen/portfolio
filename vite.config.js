import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // GitHub Pages julkaisee sivun osoitteeseen jnurminen.github.io/portfolio/
  base: '/portfolio/',
  plugins: [react(), tailwindcss()],
})

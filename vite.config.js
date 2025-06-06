import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/poojitha-portfolio/', // 👈 change to your GitHub repo name
  plugins: [react()]
})

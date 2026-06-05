import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/self-info/',
  plugins: [vue()],
  server: {
    port: 6600,
  },
})
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      app: '/src/1-app',
      pages: '/src/2-pages',
      widgets: '/src/3-widgets',
      features: '/src/4-features',
      entities: '/src/5-entities',
      shared: '/src/6-shared',
    }
  }
})

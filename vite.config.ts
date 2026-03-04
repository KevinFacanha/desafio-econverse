import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/products': {
        target: 'https://app.econverse.com.br',
        changeOrigin: true,
        rewrite: () =>
          '/teste-front-end/junior/tecnologia/lista-produtos/produtos.json',
      },
    },
  },
})

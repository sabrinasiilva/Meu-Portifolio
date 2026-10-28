import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// O site fica em sabrinasiilva.github.io/Meu-Portifolio/
export default defineConfig({
  base: '/Meu-Portifolio/',
  plugins: [react(), tailwindcss()],
  build: {
    rolldownOptions: {
      input: {
        main: 'index.html',
        co2bank: 'co2bank.html',
      },
    },
  },
})

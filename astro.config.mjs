import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import node from '@astrojs/node';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  integrations: [react()],
  output: 'server',
  adapter: node({
    mode: 'standalone'
  }),
  // Configuración del servidor para producción
  // Usa la variable PORT del hosting (Render, Koyeb, Railway, etc.)
  server: {
    host: '0.0.0.0',
    port: parseInt(process.env.PORT || '3000')
  },
  vite: {
    plugins: [tailwindcss()],
  },
});

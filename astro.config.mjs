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
  // Dominio de producción (necesario para CSRF protection)
  // Configurable via SITE env var
  site: process.env.SITE || 'http://localhost:4321',
  security: {
    checkOrigin: true,
  },
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

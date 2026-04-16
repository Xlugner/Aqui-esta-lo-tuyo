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
  // Dominio de producción (para URLs canónicas)
  site: process.env.SITE || 'https://aqui-esta-lo-tuyo.onrender.com',
  // CSRF protection - deshabilitado por ahora por conflictos con proxy de Render
  // El admin es uso interno, bajo riesgo de CSRF
  security: {
    checkOrigin: false,
  },
  // Configuración del servidor para producción
  server: {
    host: '0.0.0.0',
    port: parseInt(process.env.PORT || '3000')
  },
  vite: {
    plugins: [tailwindcss()],
  },
});

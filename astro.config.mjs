import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import cloudflare from '@astrojs/cloudflare';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  integrations: [react()],
  output: 'server',
  adapter: cloudflare({
    imageService: 'cloudflare',
  }),
  // Configuración especial para Cloudflare Pages
  build: {
    client: './dist/client',
    server: './dist/_worker.js',
  },
  // Dominio de producción (para URLs canónicas)
  site: process.env.SITE || 'https://aqui-esta-lo-tuyo.pages.dev',
  vite: {
    plugins: [tailwindcss()],
  },
});

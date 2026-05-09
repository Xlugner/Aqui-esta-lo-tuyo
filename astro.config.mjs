import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import cloudflare from '@astrojs/cloudflare';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  integrations: [react()],
  output: 'server',
  adapter: cloudflare({
    imageService: 'cloudflare',
    // Deshabilitar sesiones en local (funciona en Cloudflare)
    mode: process.env.NODE_ENV === 'production' ? 'advanced' : 'directory',
  }),
  // Dominio de producción (para URLs canónicas)
  site: process.env.SITE || 'https://aqui-esta-lo-tuyo.pages.dev',
  // Cloudflare no necesita las config de servidor específicas
  vite: {
    plugins: [tailwindcss()],
  },
});

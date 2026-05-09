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
  site: process.env.SITE || 'https://aqui-esta-lo-tuyo.workers.dev',
  vite: {
    plugins: [tailwindcss()],
  },
});

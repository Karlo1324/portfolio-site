import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://portfolio-site-ix68.vercel.app', // 👈 Paste your live Vercel URL here
  integrations: [tailwind()],
});
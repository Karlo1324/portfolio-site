import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // Replace with your actual live deployment URL or custom domain
  site: 'https://karlsgallery.com', 
  integrations: [tailwind()],
});
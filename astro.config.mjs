import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://jjonnela.github.io',
  base: '/kuljetus',
  integrations: [tailwind()]
});
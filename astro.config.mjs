import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  alias: {
    '@layouts': './src/layouts',
    "@MainLayout": ["src/layouts/Layout.astro"],
    '@components': './src/components',
    '@pages': './src/pages',
    '@assets': './src/assets',
    "@services/*": ["src/services/*"]
  }
});

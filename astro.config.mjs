// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import react from '@astrojs/react';
import sanity from '@sanity/astro';
import tailwind from '@astrojs/tailwind';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  integrations: [
   sanity({
      projectId: 'c526691m',
      dataset: 'production',
      useCdn: false,
      apiVersion: "2024-12-10",
      studioBasePath: "/studio"
    }),
    react(),
    tailwind(),
    icon(),
  ],

  adapter: netlify(),
});
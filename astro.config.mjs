// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

import icon from 'astro-icon';

import sanity from '@sanity/astro';

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
  ]
});
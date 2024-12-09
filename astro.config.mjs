// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

import icon from 'astro-icon';

import sanity from '@sanity/astro';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    tailwind(),
    icon(),
    sanity({
      projectId: 'urbixpo6',
      dataset: 'production',
      apiVersion: "2024-12-09",
      // Set useCdn to false if you're building statically.
      useCdn: false,
      // Access the Studio on your.url/admin
      studioBasePath: '/admin',
    }),
  ]
});
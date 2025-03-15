// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import netlify from '@astrojs/netlify';
import react from '@astrojs/react';
import sanity from '@sanity/astro';

import tailwindcss from '@tailwindcss/vite';

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
    icon(),
  ],

  image: {
    domains: ['cdn.sanity.io'],
    remotePatterns: [{ protocol: "https" }],
  },

  // transition: {
  //   // Disable transitions for specific routes
  //   exclude: ['/blog/[slug]']
  // },
  output: "server",

  adapter: netlify({
    imageCDN: false,
  }),

  vite: {
    plugins: [tailwindcss()],
  },
});
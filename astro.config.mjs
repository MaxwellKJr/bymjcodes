// @ts-check
import netlify from "@astrojs/netlify";
import react from "@astrojs/react";
import sanity from "@sanity/astro";
import tailwindcss from "@tailwindcss/vite";
import { imageService } from "@unpic/astro/service";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

import sentry from "@sentry/astro";

// https://astro.build/config
export default defineConfig({
  site: "https://bymjcodes.com",
  prefetch: true,
  integrations: [sanity({
    projectId: "c526691m",
    dataset: "production",
    useCdn: false,
    apiVersion: "2024-12-10",
    studioBasePath: "/studio"
  }), react(),
  icon(), sentry({
    project: "javascript-astro",
    org: "maxwell-kapezi-jr",
    authToken: process.env.SENTRY_AUTH_TOKEN,
  })
  ],
  image: {
    domains: ["cdn.sanity.io"],
    remotePatterns: [{ protocol: "https" }],
    service: imageService({
      placeholder: "blurhash",
      layout: "fixed"
    })
  },

  // transition: {
  //   // Disable transitions for specific routes
  //   exclude: ['/blog/[slug]']
  // },
  output: "static",

  adapter: netlify({
    imageCDN: false
  }),

  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      exclude: ['@sanity/studio'],
    },
    ssr: {
      noExternal: ['@sanity/studio'],
    },
  }
});
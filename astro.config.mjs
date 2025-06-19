// @ts-check
import { defineConfig } from "astro/config";
import icon from "astro-icon";
import { imageService } from "@unpic/astro/service";
import netlify from "@astrojs/netlify";
import react from "@astrojs/react";
import sanity from "@sanity/astro";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://bymjcodes.com",
  prefetch: {
    prefetchAll: true
  },
  integrations: [
    sanity({
      projectId: "c526691m",
      dataset: "production",
      useCdn: false,
      apiVersion: "2024-12-10",
      studioBasePath: "/studio"
    }),
    react(),
    icon() // https://astro-icon.vercel.app/
  ],
  // experimental: {
  //   responsiveImages: true
  // },
  image: {
    domains: ["cdn.sanity.io"],
    remotePatterns: [{ protocol: "https" }],
    // experimentalLayout: "constrained",
    service: imageService({
      placeholder: "dominantColor",
      layout: "constrained"
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
    plugins: [tailwindcss()]
  }
});

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      white: "#ebebeb",
      black: "#121212",
      h1: "#ff0098",
      h2: "#ff006675",
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#ff0098",
        secondary: "#ff006675",
        "secondary-light": "#ffdaea",
        "secondary-lighter": "#fff4f8",
        "secondary-dark": "#301622",
        "secondary-white": "#8f8f8f",
        "secondary-white-lighter": "#C8C8C8FF",
        "background-light": "#ebebeb",
        "background-dark": "#121212",
        "card-background": "rgba(0, 0, 0, 0.562)",
        "card-border": "#000000",
      },
      fontFamily: {
        odibee: ["Odibee Sans", "sans-serif"],
      },
      backgroundImage: {
        "js-blob": "url('/js.png')",
      },
    },
  },
  plugins: [],
};

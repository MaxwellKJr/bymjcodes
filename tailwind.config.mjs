/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      keyframes: {
        line: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" }
        },
        glitch: {
          "0%, 100%": { transform: "translate(0)" },
          "33%": { transform: "translateX(-2px)" },
          "66%": { transform: "translateY(4px)" }
        }
      },
      // TODO: Fix the half-baked glitch effect
      animation: {
        line: "line 1s ease-in-out forwards",
        glitch: "glitch 240ms infinite",
        "glitch-delayed-1": "glitch 300ms infinite 100ms text-primary",
        "glitch-delayed-2": "glitch 300ms infinite 150ms text-secondary"
      },
      colors: {
        primary: "#ff0098",
        secondary: "#ff006675",
        "secondary-light": "#ffdaea",
        "secondary-lighter": "#fff4f8",
        "secondary-dark": "#301622",
        "secondary-white": "#8f8f8f",
        "secondary-white-lighter": "#C8C8C8FF",
        "background-light": "#FAFAFAFF",
        "background-dark": "#121212",
        "card-dark": "#000000",
        "card-light": "#ffffff",
        "card-border": "#000000",
        white: "#ebebeb",
        black: "#121212",
        h1: "#ff0098",
        h2: "#ff006675"
      },
      backgroundImage: {
        "js-blob": "url('/js.png')"
      },
      fontFamily: {
        "libre-baskerville": ["Libre Baskerville", "serif"],
        poppins: ["Poppins", "sans-serif"],
        "fira-code": ["Fira Code", "monospace"]
      }
    }
  },
  plugins: []
};

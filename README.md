<p align="center">
  <a href="https://bymjcodes.com/">
    <img alt="MJ Codes logo" src="https://bymjcodes.com/icon.png" width="32" />
  </a>
</p>
<h2 align="center">MJ Codes Presents:</h2>
<h1 align="center">
   <strong>Programmer's Starter Blog</strong>
</h1>

## Tech Stack 🛠️

### Outline

- [Astro](https://astro.build) for static site generation (SSG)
- [Tailwind CSS](https://tailwindcss.com) for styling
- [Sanity](https://sanity.io) for the content management system (CMS)

This website was built with [Astro](https://astro.build), a static site generator (framework) for content-driven websites.

## Why Astro?

Well, the previous iterations of this website were built using GatsbyJS, which was a SSG first framework and I loved how fast my website was. When I looked at Astro, I saw that it had SSG-first approach as well which is what I wanted.

Not only was it fast, Gatsby had one of the best plugin ecosystem for a JavaScript I have seen. Even Next.js doesn't come close. Astro has its own "plugin" system, which allows integrations from different frameworks such as React, Vue, Svelte, Solid in my case, I used React components to handle state changes in some parts of this site, such as [Services](https://bymjcodes.com/services) toggler system.

When I first started off as a programmer, I didn't know that I would one day need to have a portfolio to showcase my work. I have made four iterations of the same website (this being the forth) and last two were built with [GatsbyJS](https://www.gatsbyjs.com), a [React](https://react.dev) based framework.

# Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

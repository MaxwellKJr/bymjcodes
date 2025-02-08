import { c as createComponent, r as renderTemplate, d as addAttribute, h as renderScript, b as createAstro, m as maybeRenderHead, a as renderComponent, e as renderTransition, g as renderHead, f as renderSlot } from './astro/server_csNxp0Ix.mjs';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './_astro_assets_BQcmC9T4.mjs';
import 'clsx';
/* empty css                         */
import { $ as $$Icon } from './Heading_CHp9YzOe.mjs';
import { jsx } from 'react/jsx-runtime';
import { Sun, Moon } from 'lucide-react';
import { useState, useEffect } from 'react';
/* empty css                        */

const $$Astro$3 = createAstro();
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "/Users/maxwellkjr/Projects/bymjcodes/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/maxwellkjr/Projects/bymjcodes/node_modules/astro/components/ClientRouter.astro", void 0);

const $$Astro$2 = createAstro();
const $$SocialLinks = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SocialLinks;
  const Links = [
    {
      name: "GitHub",
      url: "https://github.com/MaxwellKJr",
      icon: "ri:github-fill",
      title: "GitHub"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/maxwellKJr",
      icon: "ri:linkedin-box-fill",
      title: "LinkedIn"
    },
    {
      name: "Gmail",
      url: "mailto:maxwellkjr@gmail.com",
      icon: "ri:mail-line",
      title: "Gmail"
    },
    {
      name: "Facebook",
      url: "https://facebook.com/maxwellkjnr",
      icon: "ri:facebook-circle-fill",
      title: "Facebook"
    },
    {
      name: "Threads",
      url: "https://threads.net/@maxwellkjnr",
      icon: "ri:threads-line",
      title: "Threads"
    },
    {
      name: "Instagram",
      url: "https://instagram.com/maxwellkjnr",
      icon: "ri:instagram-line",
      title: "Instagram"
    },
    {
      name: "Twitter",
      url: "https://twitter.com/maxwellKJr",
      icon: "ri:twitter-x-fill",
      title: "Twitter"
    },
    // {
    //   name: "TikTok",
    //   url: "https://tiktok.com/@maxwellkjr",
    //   icon: "ri:tiktok-fill",
    //   title: "TikTok",
    // },
    {
      name: "WhatsApp",
      url: "https://wa.me/265992800255",
      icon: "ri:whatsapp-line",
      title: "WhatsApp"
    }
  ];
  const layouts = {
    flex: "flex justify-center items-center gap-4",
    grid: "lg:grid-cols-2 lg:gap-0 hidden lg:grid mb-4",
    "cols-3": "grid grid-cols-3 gap-4"
  };
  const { layout } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ul${addAttribute(layouts[layout], "class")}> ${Links.map((link) => renderTemplate`<li class="w-full h-full"${addAttribute(link.title, "title")}> <a class="flex flex-col items-center justify-start w-full p-2 text-xs uppercase hover:text-primary text-secondary-white transition-all duration-300 hover:-translate-y-2"${addAttribute(link.url, "href")} target="_blank"${addAttribute(link.title, "title")}> ${renderComponent($$result, "Icon", $$Icon, { "name": link.icon, "size": 22 })} </a> </li>`)} </ul>`;
}, "/Users/maxwellkjr/Projects/bymjcodes/src/components/contacts/SocialLinks.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="hidden lg:block lg:border-t-[1px] lg:border-secondary-white w-full mx-auto py-2"> <small class="block text-center text-secondary-white">&copy; ${(/* @__PURE__ */ new Date()).getFullYear()} MJ Codes</small> </div>`;
}, "/Users/maxwellkjr/Projects/bymjcodes/src/components/navigation/Footer.astro", void 0);

const $$Astro$1 = createAstro();
const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Navbar;
  const links = [
    {
      name: "Home",
      route: "/",
      title: "Home",
      icon: "ri:home-6-fill"
    },
    {
      name: "About",
      route: "/about",
      title: "Know me",
      icon: "ri:user-3-fill"
    },
    {
      name: "Services",
      route: "/services",
      title: "What I offer",
      icon: "ri:money-dollar-box-line"
    },
    {
      name: "Blog",
      route: "/blog",
      title: "Read something",
      icon: "ri:newspaper-line"
    },
    {
      name: "Projects",
      route: "/projects",
      title: "See my work",
      icon: "ri:macbook-line"
    }
  ];
  const currentPath = Astro2.url.pathname;
  return renderTemplate`${maybeRenderHead()}<nav class="text-black dark:text-white backdrop-blur-md bg-background-white/50 dark:bg-background-dark/50 lg:bg-background-white dark:lg:bg-background-dark lg:backdrop-blur-none fixed bottom-0 left-0 w-full lg:h-screen lg:w-[12vw] border-t-[1px] lg:border-t-0 lg:border-r-[1px] border-primary lg:min-h-screen z-[1000] flex-1 overflow-hidden"> <div class="flex flex-col items-center justify-between h-full"> <!-- Logo --> <!-- TODO: Create an interactive area/playground for the logo --> <a href="/" title="Maxwell Kapezi Jr 🚀" class="flex-col items-center justify-center hidden w-full py-4 lg:flex group"> ${renderComponent($$result, "Image", $$Image, { "src": "/icon.png", "alt": "MJ Codes logo", "width": 200, "height": 200, "loading": "eager", "class": "w-10 h-10 transition-all duration-300 animate-pulse hover:animate-bounce group-hover-translate-x-4 group-hover:-translate-y-2" })} <!-- <small
        class="transition-all duration-300 font-odibee text-primary group-hover:opacity-20 group-hover:translate-y-2 group-hover:animate-pulse"
        >MJ Codes</small
      > --> </a> <!-- Page Links --> <ul class="flex items-center w-full gap-0 mx-auto lg:flex-col justify-evenly"> ${links.map((link) => {
    const isActive = link.route === "/" && currentPath === "/" || link.route !== "/" && currentPath.startsWith(link.route);
    return renderTemplate`<li class="w-full h-full"${addAttribute(link.title, "title")}> <a${addAttribute(`hover:text-primary hover:bg-secondary-light dark:hover:bg-secondary-dark flex flex-col lg:flex-row justify-center items-center w-full transition-all duration-300 p-4 lg:p-4 capitalize text-[11px] lg:text-xs xl:text-[13px] px-2  m-0 group  ${isActive ? "text-primary font-medium" : ""}`, "class")}${addAttribute(link.route, "href")}> ${renderComponent($$result, "Icon", $$Icon, { "name": link.icon, "size": 20, "class": `lg:hidden mb-1 group-hover:text-primary duration-300 ${isActive ? "text-primary" : "dark:text-white text-black"}` })} ${link.name} </a> </li>`;
  })} </ul> <!-- Social Links --> <div class="w-full mx-auto"> ${renderComponent($$result, "SocialLinks", $$SocialLinks, { "layout": "grid" })} ${renderComponent($$result, "Footer", $$Footer, {})} </div> </div> </nav>`;
}, "/Users/maxwellkjr/Projects/bymjcodes/src/components/navigation/Navbar.astro", void 0);

const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) {
        return savedTheme;
      }
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    return "dark";
  });
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return /* @__PURE__ */ jsx(
    "button",
    {
      onClick: toggleTheme,
      className: "p-2 rounded-xl dark:bg-secondary-dark bg-background-light transition-all duration-300 border-[1px] dark:border-secondary-dark border-white lg:ml-4 hover:scale-90 active:scale-90 shadow-md dark:shadow-md dark:shadow-primary",
      "aria-label": `Switch to ${theme === "dark" ? "light" : "dark"} mode`,
      children: theme === "dark" ? /* @__PURE__ */ jsx(Sun, { className: "w-6 h-6 text-primary" }) : /* @__PURE__ */ jsx(Moon, { className: "w-6 h-6 text-secondary-white" })
    }
  );
};

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title,
    description = "Maxwell Kapezi Jr's official website to showcase his software development journey and share the few things he knows.",
    siteUrl = "https://bymjcodes.netlify.app",
    image
  } = Astro2.props;
  return renderTemplate`<html lang="en" class="dark"${addAttribute(renderTransition($$result, "smooz4hq", "none", "root"), "data-astro-transition-scope")}> <head><meta charset="UTF-8"><meta name="description"${addAttribute(description, "content")}><meta name="title"${addAttribute(`${title} | MJ Codes \u{1F680}`, "content")}><meta name="description"${addAttribute(description, "content")}><meta name="image"${addAttribute(image, "content")}><meta property="og:title"${addAttribute(`${title} | MJ Codes \u{1F680}`, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(image, "content")}><meta property="og:url"${addAttribute(siteUrl, "content")}><meta property="og:type" content="website"><meta name="twitter:title"${addAttribute(`${title} | MJ Codes \u{1F680}`, "content")}><meta name="twitter:description"${addAttribute(description, "content")}><meta name="twitter:card" content="summary"><meta name="twitter:image"${addAttribute(image, "content")}><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/icon.png"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${`${title} | MJ Codes \u{1F680}`}</title>${renderHead()}</head> <body class="relative flex flex-col overflow-x-hidden font-sans text-black lg:flex-row min-w-screen dark:bg-background-dark bg-background-light dark:text-white"> ${renderComponent($$result, "Navbar", $$Navbar, {})} <a href="/" class="absolute w-10 h-10 transition-all duration-300 lg:hidden top-4 left-4 animate-pulse"> ${renderComponent($$result, "Image", $$Image, { "src": "/icon.png", "alt": "MJ Codes logo", "width": 200, "height": 200, "loading": "lazy" })} </a> <div class="fixed bottom-[15vh] right-[5%] lg:top-4 lg:left-[12vw] lg:bottom-auto lg:right-auto z-50"> ${renderComponent($$result, "ThemeToggler", ThemeToggle, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/navigation/ThemeToggler", "client:component-export": "default" })} </div> <main class="px-4 lg:m-10 lg:px-[15vw] w-full lg:w-[85vw] lg:mx-auto xl:w-[95vw] max-w-screen-xl mx-auto z-auto"> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "ClientRouter", $$ClientRouter, {})} </body></html>`;
}, "/Users/maxwellkjr/Projects/bymjcodes/src/layouts/Layout.astro", "self");

export { $$Layout as $, $$SocialLinks as a };

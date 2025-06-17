import { b as createAstro, c as createComponent, d as addAttribute, h as renderScript, a as renderTemplate, m as maybeRenderHead, r as renderComponent, s as spreadAttributes, u as unescapeHTML, g as renderHead, f as renderSlot, e as renderTransition } from './astro/server_lUFmIoAw.mjs';
import 'kleur/colors';
/* empty css                         */
import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import { $ as $$Image } from './_astro_assets_BQvMC574.mjs';
import 'clsx';
import { a as $$Icon } from './Heading_C7YNBBUg.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { Sun, Moon, Type, ALargeSmall } from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';
import { map } from 'nanostores';
/* empty css                        */

const $$Astro$b = createAstro("https://bymjcodes.com");
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "/Users/maxwellkjr/Projects/bymjcodes/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/maxwellkjr/Projects/bymjcodes/node_modules/astro/components/ClientRouter.astro", void 0);

const $$Astro$a = createAstro("https://bymjcodes.com");
const $$SocialLinks = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
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
    // {
    //   name: "Threads",
    //   url: "https://threads.net/@maxwellkjnr",
    //   icon: "ri:threads-line",
    //   title: "Threads"
    // },
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
    },
    {
      name: "Lichess",
      url: "https://lichess.org/@/PlayerOneMw",
      icon: "ri:chess-line",
      title: "Lichess"
    }
  ];
  const layouts = {
    flex: "flex justify-center items-center gap-4",
    grid: "lg:grid-cols-2 lg:gap-0 hidden lg:grid mb-4",
    "cols-3": "grid grid-cols-3 gap-4"
  };
  const { layout } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ul${addAttribute(layouts[layout], "class")}> ${Links.map((link) => renderTemplate`<li class="h-full w-full"${addAttribute(link.title, "title")}> <a class="hover:text-primary text-secondary-white flex w-full flex-col items-center justify-start p-2 text-xs uppercase transition-all duration-400 hover:-translate-y-2"${addAttribute(link.url, "href")} target="_blank"${addAttribute(link.title, "title")}> ${renderComponent($$result, "Icon", $$Icon, { "name": link.icon, "size": 22 })} </a> </li>`)} </ul>`;
}, "/Users/maxwellkjr/Projects/bymjcodes/src/components/contacts/SocialLinks.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="lg:border-secondary-white mx-auto hidden w-full py-2 lg:block lg:border-t-[1px]"> <small class="text-secondary-white block text-center">&copy; ${(/* @__PURE__ */ new Date()).getFullYear()} MJ Codes</small> </div>`;
}, "/Users/maxwellkjr/Projects/bymjcodes/src/components/navigation/Footer.astro", void 0);

const $$Astro$9 = createAstro("https://bymjcodes.com");
const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
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
  return renderTemplate`${maybeRenderHead()}<nav class="bg-background-light/50 dark:bg-background-dark/50 lg:bg-background-white dark:lg:bg-background-dark border-primary fixed bottom-0 left-0 z-[1000] w-full flex-1 overflow-hidden border-t-[1px] text-black backdrop-blur-xl lg:h-screen lg:min-h-screen lg:w-[12vw] lg:border-t-0 lg:border-r-[1px] lg:backdrop-blur-none dark:text-white"> <div class="flex h-full flex-col items-center justify-between"> <!-- Logo --> <!-- TODO: Create an interactive area/playground for the logo --> <a href="/" title="Maxwell Kapezi Jr 🚀" class="group hidden w-full flex-col items-center justify-center py-4 lg:flex"> ${renderComponent($$result, "Image", $$Image, { "src": "/icon.png", "alt": "MJ Codes logo", "width": 200, "height": 200, "loading": "eager", "class": "group-hover-translate-x-4 h-10 w-10 animate-pulse transition-all duration-400 group-hover:-translate-y-2 hover:animate-bounce" })} <!-- <small
        class="transition-all duration-400 font-odibee text-primary group-hover:opacity-20 group-hover:translate-y-2 group-hover:animate-pulse"
        >MJ Codes</small
      > --> </a> <!-- Page Links --> <ul class="mx-auto flex w-full items-center justify-evenly gap-0 lg:flex-col"> ${links.map((link) => {
    const isActive = link.route === "/" && currentPath === "/" || link.route !== "/" && currentPath.startsWith(link.route);
    return renderTemplate`<li class="h-full w-full"${addAttribute(link.title, "title")}> <a${addAttribute(`hover:text-primary hover:bg-secondary-light dark:hover:bg-secondary-dark focus:text-primary focus:bg-secondary-light dark:focus:bg-secondary-dark group m-0 flex w-full flex-col items-center justify-center p-4 px-2 text-[11px] capitalize transition-all duration-400 lg:flex-row lg:p-4 lg:text-xs xl:text-[13px] ${isActive ? "text-primary font-medium" : ""}`, "class")}${addAttribute(link.route, "href")}> ${renderComponent($$result, "Icon", $$Icon, { "name": link.icon, "size": 20, "class": `group-hover:text-primary group-focus:text-primary mb-1 duration-400 lg:hidden ${isActive ? "text-primary" : "text-black dark:text-white"}` })} ${link.name} </a> </li>`;
  })} </ul> <!-- Social Links --> <div class="mx-auto w-full"> ${renderComponent($$result, "SocialLinks", $$SocialLinks, { "layout": "grid" })} ${renderComponent($$result, "Footer", $$Footer, {})} </div> </div> </nav>`;
}, "/Users/maxwellkjr/Projects/bymjcodes/src/components/navigation/Navbar.astro", void 0);

const ThemeToggler = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "dark";
    const savedTheme = localStorage.getItem("theme");
    return savedTheme || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  });
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return /* @__PURE__ */ jsx(
    "button",
    {
      type: "button",
      onClick: toggleTheme,
      className: "dark:bg-secondary-dark bg-background-light dark:border-secondary-dark dark:shadow-primary rounded-xl border-[1px] border-white p-2 shadow-md transition-all duration-400 hover:scale-90 hover:cursor-pointer active:scale-90 lg:ml-4 dark:shadow-md",
      "aria-label": `Switch to ${theme === "dark" ? "light" : "dark"} mode`,
      children: theme === "dark" ? /* @__PURE__ */ jsx(Sun, { className: "text-primary h-6 w-6" }) : /* @__PURE__ */ jsx(Moon, { className: "text-secondary-white h-6 w-6" })
    }
  );
};

const fontSettings = map({
  fontFamily: "Fira Code",
  textSize: "16px",
  lineHeight: "1.5rem"
});
const updateFontFamily = (newFont) => {
  fontSettings.setKey("fontFamily", newFont);
  localStorage.setItem("userFontFamily", newFont);
};
const updateTextSize = (newSize) => {
  fontSettings.setKey("textSize", newSize);
  localStorage.setItem("userTextSize", newSize);
};
const updateLineHeight = (newHeight) => {
  fontSettings.setKey("lineHeight", newHeight);
  localStorage.setItem("userLineHeight", newHeight);
};
const initializeFontSettings = () => {
  const savedFont = localStorage.getItem("userFontFamily");
  const savedSize = localStorage.getItem("userTextSize");
  const savedLineHeight = localStorage.getItem("userLineHeight");
  if (savedFont) {
    fontSettings.setKey("fontFamily", savedFont);
  }
  if (savedSize) {
    fontSettings.setKey("textSize", savedSize);
  }
  if (savedLineHeight) {
    fontSettings.setKey("lineHeight", savedLineHeight);
  }
};

const fonts = ["Fira Code", "Poppins", "Libre Baskerville"];
const textSizes = ["14px", "16px", "18px", "20px"];
const lineHeights = {
  "14px": "1.25rem",
  "16px": "1.5rem",
  "18px": "1.75rem",
  "20px": "2rem"
};
const getInitialState = () => ({
  fontFamily: "Fira Code",
  textSize: "16px"
});
function FontSettingsButtons() {
  const { fontFamily: initialFont, textSize: initialSize } = getInitialState();
  const [fontFamily, setFontFamily] = useState(initialFont);
  const [textSize, setTextSize] = useState(initialSize);
  const updateStyles = useCallback(
    (font, size, height) => {
      if (typeof window === "undefined") return;
      requestAnimationFrame(() => {
        document.documentElement.style.setProperty("--font-family", font);
        document.documentElement.style.setProperty("--text-size", size);
        document.documentElement.style.setProperty("--line-height", height);
      });
    },
    []
  );
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedFont = window.localStorage.getItem(
        "userFontFamily"
      );
      const savedSize = window.localStorage.getItem(
        "userTextSize"
      );
      if (savedFont && fonts.includes(savedFont)) {
        setFontFamily(savedFont);
        updateStyles(savedFont, textSize, lineHeights[textSize]);
      }
      if (savedSize && textSizes.includes(savedSize)) {
        setTextSize(savedSize);
        updateStyles(fontFamily, savedSize, lineHeights[savedSize]);
      }
    }
    initializeFontSettings();
    const unsubscribe = fontSettings.subscribe(
      ({ fontFamily: newFont, textSize: newSize, lineHeight }) => {
        if (fonts.includes(newFont)) {
          setFontFamily(newFont);
        }
        if (textSizes.includes(newSize)) {
          setTextSize(newSize);
        }
        updateStyles(newFont, newSize, lineHeight);
      }
    );
    return () => {
      unsubscribe();
    };
  }, [updateStyles, fontFamily, textSize]);
  const handleFontChange = useCallback(
    (e) => {
      const newFont = e.target.value;
      updateFontFamily(newFont);
      updateStyles(newFont, textSize, lineHeights[textSize]);
    },
    [textSize, updateStyles]
  );
  const handleSizeChange = useCallback(
    (e) => {
      const newSize = e.target.value;
      updateTextSize(newSize);
      updateLineHeight(lineHeights[newSize]);
      updateStyles(fontFamily, newSize, lineHeights[newSize]);
    },
    [fontFamily, updateStyles]
  );
  const fontToggle = useCallback(() => {
    const currentIndex = fonts.indexOf(fontFamily);
    const newFont = fonts[(currentIndex + 1) % fonts.length];
    updateFontFamily(newFont);
    updateStyles(newFont, textSize, lineHeights[textSize]);
  }, [fontFamily, textSize, updateStyles]);
  const fontSizeToggle = useCallback(() => {
    const currentIndex = textSizes.indexOf(textSize);
    const newSize = textSizes[(currentIndex + 1) % textSizes.length];
    updateTextSize(newSize);
    updateLineHeight(lineHeights[newSize]);
    updateStyles(fontFamily, newSize, lineHeights[newSize]);
  }, [fontFamily, textSize, updateStyles]);
  return /* @__PURE__ */ jsxs("div", { className: "font-settings-container", id: "font-settings", children: [
    /* @__PURE__ */ jsx("span", { className: "hidden lg:flex items-center text-lg font-light text-secondary-white mb-4", children: "Reading Preferences" }),
    /* @__PURE__ */ jsxs("div", { className: "font-settings", children: [
      /* @__PURE__ */ jsxs("div", { className: "hidden lg:flex gap-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "setting-group", children: [
          /* @__PURE__ */ jsx(Type, { className: "text-secondary-white" }),
          /* @__PURE__ */ jsxs(
            "select",
            {
              id: "font-family",
              className: "font-family-select",
              value: fontFamily,
              onChange: handleFontChange,
              children: [
                /* @__PURE__ */ jsx("option", { value: "Fira Code", children: "Monospace" }),
                /* @__PURE__ */ jsx("option", { value: "Poppins", children: "Sans Serif" }),
                /* @__PURE__ */ jsx("option", { value: "Libre Baskerville", children: "Serif" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "setting-group", children: [
          /* @__PURE__ */ jsx(ALargeSmall, { className: " text-secondary-white" }),
          /* @__PURE__ */ jsxs("select", { id: "text-size", value: textSize, onChange: handleSizeChange, children: [
            /* @__PURE__ */ jsx("option", { value: "14px", children: "0.5pt" }),
            /* @__PURE__ */ jsx("option", { value: "16px", children: "1pt" }),
            /* @__PURE__ */ jsx("option", { value: "18px", children: "1.5pt" }),
            /* @__PURE__ */ jsx("option", { value: "20px", children: "2pt" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:hidden gap-5", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            id: "font-toggle",
            type: "button",
            onClick: fontToggle,
            className: "py-1 px-3 rounded-xl dark:bg-secondary-dark bg-background-light transition-all duration-400 border-[1px] dark:border-secondary-dark border-white lg:ml-4 hover:scale-90 active:scale-90 shadow-md dark:shadow-md dark:shadow-primary text-xl text-secondary-white dark:text-secondary-white",
            title: "Toggle font",
            children: /* @__PURE__ */ jsx("span", { children: "T" })
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            id: "font-size-toggle",
            type: "button",
            onClick: fontSizeToggle,
            className: "p-2 rounded-xl dark:bg-secondary-dark bg-background-light transition-all duration-400 border-[1px] dark:border-secondary-dark border-white lg:ml-4 hover:scale-90 active:scale-90 shadow-md dark:shadow-md dark:shadow-primary text-xl text-secondary-white dark:text-secondary-white",
            title: "Toggle font size",
            children: /* @__PURE__ */ jsx(ALargeSmall, { className: "text-xl text-secondary-white" })
          }
        )
      ] })
    ] })
  ] });
}

const $$Astro$8 = createAstro("https://bymjcodes.com");
const $$OpenGraphArticleTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$OpenGraphArticleTags;
  const { publishedTime, modifiedTime, expirationTime, authors, section, tags } = Astro2.props.openGraph.article;
  return renderTemplate`${publishedTime ? renderTemplate`<meta property="article:published_time"${addAttribute(publishedTime, "content")}>` : null}${modifiedTime ? renderTemplate`<meta property="article:modified_time"${addAttribute(modifiedTime, "content")}>` : null}${expirationTime ? renderTemplate`<meta property="article:expiration_time"${addAttribute(expirationTime, "content")}>` : null}${authors ? authors.map((author) => renderTemplate`<meta property="article:author"${addAttribute(author, "content")}>`) : null}${section ? renderTemplate`<meta property="article:section"${addAttribute(section, "content")}>` : null}${tags ? tags.map((tag) => renderTemplate`<meta property="article:tag"${addAttribute(tag, "content")}>`) : null}`;
}, "/Users/maxwellkjr/Projects/bymjcodes/node_modules/astro-seo/src/components/OpenGraphArticleTags.astro", void 0);

const $$Astro$7 = createAstro("https://bymjcodes.com");
const $$OpenGraphBasicTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$OpenGraphBasicTags;
  const { openGraph } = Astro2.props;
  return renderTemplate`<meta property="og:title"${addAttribute(openGraph.basic.title, "content")}><meta property="og:type"${addAttribute(openGraph.basic.type, "content")}><meta property="og:image"${addAttribute(openGraph.basic.image, "content")}><meta property="og:url"${addAttribute(openGraph.basic.url || Astro2.url.href, "content")}>`;
}, "/Users/maxwellkjr/Projects/bymjcodes/node_modules/astro-seo/src/components/OpenGraphBasicTags.astro", void 0);

const $$Astro$6 = createAstro("https://bymjcodes.com");
const $$OpenGraphImageTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$OpenGraphImageTags;
  const { image } = Astro2.props.openGraph.basic;
  const { secureUrl, type, width, height, alt } = Astro2.props.openGraph.image;
  return renderTemplate`<meta property="og:image:url"${addAttribute(image, "content")}>${secureUrl ? renderTemplate`<meta property="og:image:secure_url"${addAttribute(secureUrl, "content")}>` : null}${type ? renderTemplate`<meta property="og:image:type"${addAttribute(type, "content")}>` : null}${width ? renderTemplate`<meta property="og:image:width"${addAttribute(width, "content")}>` : null}${height ? renderTemplate`<meta property="og:image:height"${addAttribute(height, "content")}>` : null}${alt ? renderTemplate`<meta property="og:image:alt"${addAttribute(alt, "content")}>` : null}`;
}, "/Users/maxwellkjr/Projects/bymjcodes/node_modules/astro-seo/src/components/OpenGraphImageTags.astro", void 0);

const $$Astro$5 = createAstro("https://bymjcodes.com");
const $$OpenGraphOptionalTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$OpenGraphOptionalTags;
  const { optional } = Astro2.props.openGraph;
  return renderTemplate`${optional.audio ? renderTemplate`<meta property="og:audio"${addAttribute(optional.audio, "content")}>` : null}${optional.description ? renderTemplate`<meta property="og:description"${addAttribute(optional.description, "content")}>` : null}${optional.determiner ? renderTemplate`<meta property="og:determiner"${addAttribute(optional.determiner, "content")}>` : null}${optional.locale ? renderTemplate`<meta property="og:locale"${addAttribute(optional.locale, "content")}>` : null}${optional.localeAlternate?.map((locale) => renderTemplate`<meta property="og:locale:alternate"${addAttribute(locale, "content")}>`)}${optional.siteName ? renderTemplate`<meta property="og:site_name"${addAttribute(optional.siteName, "content")}>` : null}${optional.video ? renderTemplate`<meta property="og:video"${addAttribute(optional.video, "content")}>` : null}`;
}, "/Users/maxwellkjr/Projects/bymjcodes/node_modules/astro-seo/src/components/OpenGraphOptionalTags.astro", void 0);

const $$Astro$4 = createAstro("https://bymjcodes.com");
const $$ExtendedTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$ExtendedTags;
  const { props } = Astro2;
  return renderTemplate`${props.extend.link?.map((attributes) => renderTemplate`<link${spreadAttributes(attributes)}>`)}${props.extend.meta?.map(({ content, httpEquiv, media, name, property }) => renderTemplate`<meta${addAttribute(name, "name")}${addAttribute(property, "property")}${addAttribute(content, "content")}${addAttribute(httpEquiv, "http-equiv")}${addAttribute(media, "media")}>`)}`;
}, "/Users/maxwellkjr/Projects/bymjcodes/node_modules/astro-seo/src/components/ExtendedTags.astro", void 0);

const $$Astro$3 = createAstro("https://bymjcodes.com");
const $$TwitterTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$TwitterTags;
  const { card, site, title, creator, description, image, imageAlt } = Astro2.props.twitter;
  return renderTemplate`${card ? renderTemplate`<meta name="twitter:card"${addAttribute(card, "content")}>` : null}${site ? renderTemplate`<meta name="twitter:site"${addAttribute(site, "content")}>` : null}${title ? renderTemplate`<meta name="twitter:title"${addAttribute(title, "content")}>` : null}${image ? renderTemplate`<meta name="twitter:image"${addAttribute(image, "content")}>` : null}${imageAlt ? renderTemplate`<meta name="twitter:image:alt"${addAttribute(imageAlt, "content")}>` : null}${description ? renderTemplate`<meta name="twitter:description"${addAttribute(description, "content")}>` : null}${creator ? renderTemplate`<meta name="twitter:creator"${addAttribute(creator, "content")}>` : null}`;
}, "/Users/maxwellkjr/Projects/bymjcodes/node_modules/astro-seo/src/components/TwitterTags.astro", void 0);

const $$Astro$2 = createAstro("https://bymjcodes.com");
const $$LanguageAlternatesTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$LanguageAlternatesTags;
  const { languageAlternates } = Astro2.props;
  return renderTemplate`${languageAlternates.map((alternate) => renderTemplate`<link rel="alternate"${addAttribute(alternate.hrefLang, "hreflang")}${addAttribute(alternate.href, "href")}>`)}`;
}, "/Users/maxwellkjr/Projects/bymjcodes/node_modules/astro-seo/src/components/LanguageAlternatesTags.astro", void 0);

const $$Astro$1 = createAstro("https://bymjcodes.com");
const $$SEO = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SEO;
  Astro2.props.surpressWarnings = true;
  function validateProps(props) {
    if (props.openGraph) {
      if (!props.openGraph.basic || (props.openGraph.basic.title ?? void 0) == void 0 || (props.openGraph.basic.type ?? void 0) == void 0 || (props.openGraph.basic.image ?? void 0) == void 0) {
        throw new Error(
          "If you pass the openGraph prop, you have to at least define the title, type, and image basic properties!"
        );
      }
    }
    if (props.title && props.openGraph?.basic.title) {
      if (props.title == props.openGraph.basic.title && !props.surpressWarnings) {
        console.warn(
          "WARNING(astro-seo): You passed the same value to `title` and `openGraph.optional.title`. This is most likely not what you want. See docs for more."
        );
      }
    }
    if (props.openGraph?.basic?.image && !props.openGraph?.image?.alt && !props.surpressWarnings) {
      console.warn(
        "WARNING(astro-seo): You defined `openGraph.basic.image`, but didn't define `openGraph.image.alt`. This is strongly discouraged.'"
      );
    }
  }
  validateProps(Astro2.props);
  let updatedTitle = "";
  if (Astro2.props.title) {
    updatedTitle = Astro2.props.title;
    if (Astro2.props.titleTemplate) {
      updatedTitle = Astro2.props.titleTemplate.replace(/%s/g, updatedTitle);
    }
  } else if (Astro2.props.titleDefault) {
    updatedTitle = Astro2.props.titleDefault;
  }
  const baseUrl = Astro2.site ?? Astro2.url;
  const defaultCanonicalUrl = new URL(Astro2.url.pathname + Astro2.url.search, baseUrl);
  return renderTemplate`${updatedTitle ? renderTemplate`<title>${unescapeHTML(updatedTitle)}</title>` : null}${Astro2.props.charset ? renderTemplate`<meta${addAttribute(Astro2.props.charset, "charset")}>` : null}<link rel="canonical"${addAttribute(Astro2.props.canonical || defaultCanonicalUrl.href, "href")}>${Astro2.props.description ? renderTemplate`<meta name="description"${addAttribute(Astro2.props.description, "content")}>` : null}<meta name="robots"${addAttribute(`${Astro2.props.noindex ? "noindex" : "index"}, ${Astro2.props.nofollow ? "nofollow" : "follow"}`, "content")}>${Astro2.props.openGraph && renderTemplate`${renderComponent($$result, "OpenGraphBasicTags", $$OpenGraphBasicTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.optional && renderTemplate`${renderComponent($$result, "OpenGraphOptionalTags", $$OpenGraphOptionalTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.image && renderTemplate`${renderComponent($$result, "OpenGraphImageTags", $$OpenGraphImageTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.article && renderTemplate`${renderComponent($$result, "OpenGraphArticleTags", $$OpenGraphArticleTags, { ...Astro2.props })}`}${Astro2.props.twitter && renderTemplate`${renderComponent($$result, "TwitterTags", $$TwitterTags, { ...Astro2.props })}`}${Astro2.props.extend && renderTemplate`${renderComponent($$result, "ExtendedTags", $$ExtendedTags, { ...Astro2.props })}`}${Astro2.props.languageAlternates && renderTemplate`${renderComponent($$result, "LanguageAlternatesTags", $$LanguageAlternatesTags, { ...Astro2.props })}`}`;
}, "/Users/maxwellkjr/Projects/bymjcodes/node_modules/astro-seo/src/SEO.astro", void 0);

const websiteName = "MJ Codes 🚀";
const websiteDescription = "Maxwell Kapezi Jr's official website to showcase his software development journey and share the few things he knows.";
const websiteUrl = "https://bymjcodes.com";

const $$Astro = createAstro("https://bymjcodes.com");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title,
    description = websiteDescription,
    siteUrl = websiteUrl,
    image,
    type = "website"
  } = Astro2.props;
  console.log(title);
  const currentPath = Astro2.url.pathname;
  currentPath.split("/");
  return renderTemplate`<html lang="en" class="dark"${addAttribute(renderTransition($$result, "smooz4hq", "none", "root"), "data-astro-transition-scope")}> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">${renderComponent($$result, "SEO", $$SEO, { "title": `${title} | ${websiteName}`, "description": description, "openGraph": {
    basic: {
      title: `${title} | ${websiteName}`,
      type,
      image,
      url: siteUrl
    },
    optional: {
      description,
      siteName: "MJ Codes"
    }
  }, "twitter": {
    creator: "@maxwellkjr",
    title,
    description,
    image,
    site: siteUrl
  }, "extend": {
    // extending the default link tags
    link: [{ rel: "icon", href: "/icon.png" }],
    // extending the default meta tags
    meta: [
      {
        name: "twitter:image",
        content: image
      },
      { name: "twitter:title", content: `${title} | ${websiteName}` },
      { name: "twitter:description", content: description }
    ]
  } })}${renderComponent($$result, "ClientRouter", $$ClientRouter, {})}${renderHead()}</head> <body class="from-background-light via-background-light to-secondary-light dark:from-background-dark dark:via-background-dark dark:to-secondary-dark relative flex min-h-screen min-w-screen flex-col overflow-x-hidden bg-gradient-to-br text-black antialiased lg:flex-row dark:text-white"> ${renderComponent($$result, "Navbar", $$Navbar, {})} <a href="/" class="absolute top-4 left-4 h-10 w-10 animate-pulse transition-all duration-400 lg:hidden"> ${renderComponent($$result, "Image", $$Image, { "src": "/icon.png", "alt": "MJ Codes logo", "width": 200, "height": 200, "loading": "lazy" })} </a> <div class="fixed right-[5%] bottom-[15vh] z-50 lg:top-4 lg:right-auto lg:bottom-auto lg:left-[12vw]"> <div class="flex flex-col items-center justify-center gap-5"> <div${addAttribute(`lg:hidden ${currentPath.startsWith("/blog/") ? "block" : "hidden"}`, "class")}> ${renderComponent($$result, "FontSettingsButtons", FontSettingsButtons, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/settings/FontSettingsButtons", "client:component-export": "default" })} </div> ${renderComponent($$result, "ThemeToggler", ThemeToggler, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/navigation/ThemeToggler", "client:component-export": "default" })} </div> </div> <main class="z-auto mx-auto w-full max-w-screen-xl px-4 lg:m-10 lg:mx-auto lg:w-[85vw] lg:px-[15vw] xl:w-[95vw]"> ${renderSlot($$result, $$slots["default"])} </main> </body></html>`;
}, "/Users/maxwellkjr/Projects/bymjcodes/src/layouts/Layout.astro", "self");

export { $$Layout as $, FontSettingsButtons as F, $$SocialLinks as a, websiteDescription as w };

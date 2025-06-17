import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, r as renderComponent, e as renderTransition, j as createTransitionScope, a as renderTemplate } from './astro/server_lUFmIoAw.mjs';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import { $ as $$Image } from './_astro_assets_BQvMC574.mjs';
import { $ as $$Button } from './Button_Bstx8eWd.mjs';
import { $ as $$Flex } from './Flex_BTSBLKOr.mjs';
import { c as urlForProjectImage, d as urlForPostImage, $ as $$Pill, a as $$FormattedDate, b as $$EstimatedTimeToRead } from './urlForImage_BQUT5nh2.mjs';
import { $ as $$Heading, a as $$Icon } from './Heading_C7YNBBUg.mjs';
import { $ as $$Text } from './Text_QFSl4ObJ.mjs';
/* empty css                        */

const $$Astro = createAstro("https://bymjcodes.com");
const prerender = false;
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Card;
  const {
    href,
    title,
    mainImage,
    description,
    publishedAt,
    categories,
    isProject = false,
    projectUrl,
    githubUrl,
    body
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="dark:bg-card-dark bg-card-light hover:border-primary dark:hover:border-primary dark:border-card-dark border-card-light z-10 inline-block h-fit rounded-xl border-[0.5px] transition-all duration-400 hover:scale-95"${addAttribute(renderTransition($$result, "bmxrwhcs", "fade", ""), "data-astro-transition-scope")}> <a${addAttribute(isProject ? `${projectUrl}` : `${href}`, "href")}${addAttribute(isProject ? "_blank" : "_self", "target")}> ${renderComponent($$result, "Image", $$Image, { "src": isProject ? urlForProjectImage(mainImage.asset) : urlForPostImage(mainImage.asset), "alt": mainImage.alt, "width": 500, "height": 250, "loading": "eager", "class": isProject ? "w-full" : "rounded-t-xl w-full shadow-xl", "title": title, "aria-placeholder": "blur", "data-astro-transition-persist": createTransitionScope($$result, "uflbqter") })} <div class="w-full p-4"> ${renderComponent($$result, "Heading", $$Heading, { "text": title, "size": "md", "color": "text-primary" })} <div> ${renderComponent($$result, "Flex", $$Flex, { "direction": "row", "justify": "between", "align": "center" }, { "default": ($$result2) => renderTemplate` <div class="flex items-center"> ${isProject && renderTemplate`<span class="text-secondary-white mr-1 text-sm">
🚀 Deployed on
</span>`} <div class="flex items-center"> ${!isProject && renderTemplate`<span class="text-secondary-white mr-1"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "ri:calendar-line" })} </span>`} ${renderComponent($$result2, "FormattedDate", $$FormattedDate, { "unformattedDate": publishedAt })} </div> </div> ${!isProject ? renderTemplate`${renderComponent($$result2, "EstimatedTimeToRead", $$EstimatedTimeToRead, { "body": body })}` : renderTemplate`<div></div>`}` })} </div> <div class="border-secondary-white mt-4 mb-2 border-y-[0.5px] py-1"> ${renderComponent($$result, "Text", $$Text, { "text": description, "size": "md", "className": "text-sm lg:text-base" })} ${isProject && renderTemplate`${renderComponent($$result, "Flex", $$Flex, { "direction": "row", "gap": "0", "wrap": "wrap", "className": "my-2" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Button", $$Button, { "text": "See Project", "link": projectUrl, "variant": "primary", "icon": "ri:external-link-line", "className": "mr-4", "blank": true })} ${githubUrl && renderTemplate`${renderComponent($$result2, "Button", $$Button, { "text": "GitHub", "link": githubUrl, "variant": "secondary", "icon": "ri:github-fill", "blank": true })}`}` })}`} </div> <ul class="flex w-full flex-wrap gap-2 pt-2"> ${categories.map((category) => renderTemplate`${renderComponent($$result, "Pill", $$Pill, { "text": category.title, "variant": "secondary" })}`)} </ul> </div> </a> </li>`;
}, "/Users/maxwellkjr/Projects/bymjcodes/src/components/cards/Card.astro", "self");

const $$file = "/Users/maxwellkjr/Projects/bymjcodes/src/components/cards/Card.astro";
const $$url = undefined;

export { $$Card as default, $$file as file, prerender, $$url as url };

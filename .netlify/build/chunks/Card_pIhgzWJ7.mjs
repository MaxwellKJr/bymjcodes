import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, e as renderTransition, a as renderComponent, b as createAstro, F as Fragment } from './astro/server_csNxp0Ix.mjs';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './_astro_assets_BQcmC9T4.mjs';
import { c as urlForProjectImage, d as urlForPostImage, $ as $$Pill, a as $$FormattedDate, b as $$EstimatedTimeToRead } from './Pill_C8yKRPun.mjs';
import { a as $$Heading, $ as $$Icon } from './Heading_CHp9YzOe.mjs';
import { $ as $$Text } from './Text_snHlS4ri.mjs';
import { $ as $$Flex } from './Flex_DciET9uk.mjs';
import { $ as $$Button } from './Button_C4BeDMfL.mjs';
/* empty css                        */

const $$Astro = createAstro();
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
  return renderTemplate`${maybeRenderHead()}<li class="dark:bg-card-dark bg-card-light z-10 rounded-xl hover:scale-95 transition-all duration-300 border-[0.5px] hover:border-primary dark:hover:border-primary dark:border-card-dark border-card-light inline-block h-fit"${addAttribute(renderTransition($$result, "bmxrwhcs", "fade", ""), "data-astro-transition-scope")}> <a${addAttribute(isProject ? `${projectUrl}` : `${href}`, "href")}${addAttribute(isProject ? "_blank" : "_self", "target")}> ${renderComponent($$result, "Image", $$Image, { "src": isProject ? urlForProjectImage(mainImage.asset) : urlForPostImage(mainImage.asset), "alt": mainImage.alt, "width": 500, "height": 250, "loading": "eager", "class": isProject ? "w-full" : "rounded-t-xl w-full shadow-xl", "title": title, "aria-placeholder": "blur" })} <div class="w-full p-4"> ${renderComponent($$result, "Heading", $$Heading, { "text": title, "size": "md", "color": "text-primary" })} <div> ${renderComponent($$result, "Flex", $$Flex, { "direction": "row", "justify": "between", "align": "center" }, { "default": ($$result2) => renderTemplate` <div class="flex items-center"> ${isProject && renderTemplate`<span class="text-sm text-secondary-white mr-1">🚀 Deployed on</span>`} <div class="flex items-center"> ${!isProject && renderTemplate`<span class="text-secondary-white mr-1">${renderComponent($$result2, "Icon", $$Icon, { "name": "ri:calendar-line" })}</span>`}${renderComponent($$result2, "FormattedDate", $$FormattedDate, { "unformattedDate": publishedAt })} </div> </div> ${!isProject ? renderTemplate`${renderComponent($$result2, "EstimatedTimeToRead", $$EstimatedTimeToRead, { "body": body })}` : renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {})}`}` })} </div> <hr class="h-[1px] text-primary my-2 opacity-60"> ${renderComponent($$result, "Text", $$Text, { "text": description, "size": "sm" })} ${isProject && renderTemplate`${renderComponent($$result, "Flex", $$Flex, { "direction": "row", "gap": "0", "wrap": "wrap", "className": "mt-2 mb-6" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Button", $$Button, { "text": "See Project", "link": projectUrl, "variant": "primary", "icon": "ri:external-link-line", "className": "mr-4", "blank": true })} ${githubUrl && renderTemplate`${renderComponent($$result2, "Button", $$Button, { "text": "GitHub", "link": githubUrl, "variant": "secondary", "icon": "ri:github-fill", "blank": true })}`}` })}`} <hr class="h-[1px] text-primary my-2 opacity-60"> <ul class="flex flex-wrap w-full pt-2 gap-2"> ${categories.map((category) => renderTemplate`${renderComponent($$result, "Pill", $$Pill, { "text": category.title, "variant": "secondary" })}`)} </ul> </div> </a> </li>`;
}, "/Users/maxwellkjr/Projects/bymjcodes/src/components/cards/Card.astro", "self");

const $$file = "/Users/maxwellkjr/Projects/bymjcodes/src/components/cards/Card.astro";
const $$url = undefined;

export { $$Card as default, $$file as file, prerender, $$url as url };

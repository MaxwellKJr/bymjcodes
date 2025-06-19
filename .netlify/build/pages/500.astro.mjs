import '../chunks/page-ssr_b58HPW9V.mjs';
import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BdfX4GWh.mjs';
import 'kleur/colors';
import { $ as $$Button } from '../chunks/Button_B-NMQlhd.mjs';
import { $ as $$Heading } from '../chunks/Heading_B8jn2LWn.mjs';
import { $ as $$Text } from '../chunks/Text_aj2-pkf0.mjs';
import { $ as $$Layout, w as websiteDescription } from '../chunks/Layout_CEgIuDrX.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://bymjcodes.com");
const prerender = false;
const $$500 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$500;
  const errorMessage = "Internal Server Error! \u{1F62D}";
  const errorDescription = "Sorry, something went wrong on our end. Please try again later.";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "500 | Internal Server Error!", "description": websiteDescription, "siteUrl": "https://bymjcodes.com", "image": "/mjk.jpg" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="flex h-screen flex-col items-center justify-center lg:h-[80vh]"> ${renderComponent($$result2, "Heading", $$Heading, { "text": errorMessage, "size": "xl", "color": "text-primary" })} ${renderComponent($$result2, "Text", $$Text, { "text": errorDescription })} <!-- <Text text={error instanceof Error ? error.message : "Unknown error"} /> --> ${renderComponent($$result2, "Button", $$Button, { "text": "Go Back Home", "variant": "secondary", "className": "mt-4", "link": "/" })} </section> ` })}`;
}, "/Users/maxwellkjr/Projects/bymjcodes/src/pages/500.astro", void 0);

const $$file = "/Users/maxwellkjr/Projects/bymjcodes/src/pages/500.astro";
const $$url = "/500";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$500,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

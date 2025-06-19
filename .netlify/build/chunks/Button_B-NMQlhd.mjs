import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, r as renderComponent, a as renderTemplate } from './astro/server_BdfX4GWh.mjs';
import 'kleur/colors';
import { a as $$Icon } from './Heading_B8jn2LWn.mjs';
/* empty css                        */

const $$Astro = createAstro("https://bymjcodes.com");
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Button;
  const { text, link, variant, blank = false, icon, className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(link, "href")}${addAttribute(`btn btn-${variant} ${className}`, "class")}${addAttribute(blank ? "_blank" : "_self", "target")} data-astro-cid-5sjhwv6c> ${text} ${icon && renderTemplate`<span class="ml-2" data-astro-cid-5sjhwv6c> ${renderComponent($$result, "Icon", $$Icon, { "name": icon, "size": 20, "data-astro-cid-5sjhwv6c": true })} </span>`} </a> <!-- TODO: Refactor this so that it uses Tailwind --> `;
}, "/Users/maxwellkjr/Projects/bymjcodes/src/components/buttons/Button.astro", void 0);

export { $$Button as $ };

import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, f as renderSlot, b as createAstro } from './astro/server_csNxp0Ix.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const $$Flex = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Flex;
  const { direction, align, justify, gap = 2, wrap, className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`flex flex-${direction} items-${align} justify-${justify} gap-${gap} ${wrap === "nowrap" ? "flex-nowrap" : `flex-${wrap}`} ${className}`, "class")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/Users/maxwellkjr/Projects/bymjcodes/src/components/layouts/Flex.astro", void 0);

export { $$Flex as $ };

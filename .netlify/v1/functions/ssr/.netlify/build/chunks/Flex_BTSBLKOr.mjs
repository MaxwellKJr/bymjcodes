import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, f as renderSlot, a as renderTemplate } from './astro/server_lUFmIoAw.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://bymjcodes.com");
const $$Flex = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Flex;
  const { direction, align, justify, gap = 2, wrap, className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`flex flex-${direction} items-${align} justify-${justify} gap-${gap} ${wrap === "nowrap" ? "flex-nowrap" : `flex-${wrap}`} ${className}`, "class")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/Users/maxwellkjr/Projects/bymjcodes/src/components/layouts/Flex.astro", void 0);

export { $$Flex as $ };

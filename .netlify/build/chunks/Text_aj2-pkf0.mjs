import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, a as renderTemplate } from './astro/server_BdfX4GWh.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://bymjcodes.com");
const $$Text = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Text;
  const { text, size = "md", className } = Astro2.props;
  const sizes = {
    xs: "text-xs",
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg"
  };
  const completeClass = `
  ${sizes[size]}
  dark:text-white
  text-black
  opacity-80
  ${className}
`;
  return renderTemplate`${maybeRenderHead()}<p${addAttribute(completeClass, "class")}>${text}</p>`;
}, "/Users/maxwellkjr/Projects/bymjcodes/src/components/typography/Text.astro", void 0);

export { $$Text as $ };

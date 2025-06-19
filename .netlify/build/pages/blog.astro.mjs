import '../chunks/page-ssr_b58HPW9V.mjs';
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute, e as renderTransition } from '../chunks/astro/server_BdfX4GWh.mjs';
import 'kleur/colors';
import $$Card from '../chunks/Card_BLFwQYKu.mjs';
import { $ as $$CardsLayout, a as $$LoadingSkeleton } from '../chunks/CardsLayout_CTUYqHGP.mjs';
import { $ as $$Heading } from '../chunks/Heading_B8jn2LWn.mjs';
import { $ as $$Layout } from '../chunks/Layout_CEgIuDrX.mjs';
import { l as loadQuery, a as POSTS_QUERY } from '../chunks/queries_D-Vdgm4F.mjs';
/* empty css                                */
export { renderers } from '../renderers.mjs';

const prerender = false;
const $$Blog = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await loadQuery({
    query: POSTS_QUERY
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Blog", "description": `See Maxwell Kapezi Jr's "take" on tech, software and its development, and probably rants about AI.`, "siteUrl": "https://bymjcodes.com/blog", "image": "/mjk.jpg" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="w-full lg:min-h-[89vh]"${addAttribute(renderTransition($$result2, "hfz6eqam", "fade", ""), "data-astro-transition-scope")}> <div class="container m-auto flex h-full flex-col justify-center py-24"> <div class="text-center lg:text-left"> ${renderComponent($$result2, "Heading", $$Heading, { "text": "Read Something", "size": "lg" })} </div> ${renderComponent($$result2, "CardsLayout", $$CardsLayout, {}, { "default": async ($$result3) => renderTemplate`${posts.data && posts.data.map((post) => renderTemplate`${renderComponent($$result3, "Card", $$Card, { "title": post.title, "mainImage": post.mainImage, "description": post.description, "publishedAt": post.publishedAt, "categories": post.categories, "href": `/blog/${post.slug.current}`, "body": post.body, "server:defer": true, "server:component-directive": "defer", "server:component-path": "@/components/cards/Card.astro", "server:component-export": "default" }, { "fallback": async ($$result4) => renderTemplate`${renderComponent($$result4, "LoadingSkeleton", $$LoadingSkeleton, { "slot": "fallback" })}` })}`)}` })} </div> </section> ` })}`;
}, "/Users/maxwellkjr/Projects/bymjcodes/src/pages/blog.astro", "self");

const $$file = "/Users/maxwellkjr/Projects/bymjcodes/src/pages/blog.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Blog,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

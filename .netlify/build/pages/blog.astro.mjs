import '../chunks/page-ssr_b58HPW9V.mjs';
import { c as createComponent, m as maybeRenderHead, r as renderComponent, a as renderTemplate, d as addAttribute, e as renderTransition } from '../chunks/astro/server_lUFmIoAw.mjs';
import 'kleur/colors';
import { $ as $$Heading } from '../chunks/Heading_C7YNBBUg.mjs';
import { l as loadQuery, a as POSTS_QUERY } from '../chunks/queries_D-Vdgm4F.mjs';
import { $ as $$LoadingSkeleton } from '../chunks/LoadingSkeleton_mYrfM3ay.mjs';
import $$Card from '../chunks/Card_DhEx1tAe.mjs';
/* empty css                                */
import { $ as $$Layout } from '../chunks/Layout_D_eMMPrV.mjs';
export { renderers } from '../renderers.mjs';

const $$BlogCards = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await loadQuery({
    query: POSTS_QUERY
  });
  return renderTemplate`${maybeRenderHead()}<ul class="grid grid-cols-1 gap-10 py-4 transition-all duration-400 ease-in-out sm:grid-cols-2"> ${posts.data && posts.data.map((post) => renderTemplate`${renderComponent($$result, "Card", $$Card, { "title": post.title, "mainImage": post.mainImage, "description": post.description, "publishedAt": post.publishedAt, "categories": post.categories, "href": `/blog/${post.slug.current}`, "body": post.body, "server:defer": true, "server:component-directive": "defer", "server:component-path": "@/components/cards/Card.astro", "server:component-export": "default" }, { "fallback": async ($$result2) => renderTemplate`${renderComponent($$result2, "LoadingSkeleton", $$LoadingSkeleton, { "slot": "fallback" })}` })}`)} </ul>`;
}, "/Users/maxwellkjr/Projects/bymjcodes/src/layouts/BlogCards.astro", "self");

const prerender = false;
const $$Blog = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Blog", "description": `See Maxwell Kapezi Jr's "take" on Tech, software and its development, and probably rants about AI.`, "siteUrl": "https://bymjcodes.com/blog", "image": "/mjk.jpg" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="w-full lg:min-h-[89vh]"${addAttribute(renderTransition($$result2, "hfz6eqam", "fade", ""), "data-astro-transition-scope")}> <div class="container m-auto flex h-full flex-col justify-center py-24"> <div class="text-center lg:text-left"> ${renderComponent($$result2, "Heading", $$Heading, { "text": "Read Something", "size": "lg" })} </div> ${renderComponent($$result2, "BlogCards", $$BlogCards, {})} </div> </section> ` })}`;
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

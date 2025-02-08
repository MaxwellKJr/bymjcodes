import '../chunks/page-ssr_DBXUfJbU.mjs';
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, d as addAttribute, e as renderTransition } from '../chunks/astro/server_csNxp0Ix.mjs';
import 'kleur/colors';
import { a as $$Heading } from '../chunks/Heading_CHp9YzOe.mjs';
import { $ as $$Layout } from '../chunks/Layout_BUsLZyR_.mjs';
import { l as loadQuery, a as POSTS_QUERY } from '../chunks/queries_oOkjulPx.mjs';
import $$Card from '../chunks/Card_pIhgzWJ7.mjs';
/* empty css                                */
export { renderers } from '../renderers.mjs';

const prerender = false;
const $$Blog = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await loadQuery({
    query: POSTS_QUERY
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Blog", "description": `Maxwell Kapezi Jr's "take" on Tech, software and its development, and probably rants about AI.`, "siteUrl": "https://bymjcodes.netlify.app/blog/" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="lg:min-h-[89vh]
  w-full"${addAttribute(renderTransition($$result2, "hfz6eqam", "fade", ""), "data-astro-transition-scope")}> <div class="container flex flex-col justify-center h-full py-24 m-auto"> <div class="text-center lg:text-left"> ${renderComponent($$result2, "Heading", $$Heading, { "text": "Read Something", "size": "lg" })} </div> <ul class="py-4 grid grid-cols-1 gap-10 lg:grid-cols-2 transition-all duration-300 ease-in-out"> ${posts.data && posts.data.map((post) => renderTemplate`${renderComponent($$result2, "Card", $$Card, { "title": post.title, "mainImage": post.mainImage, "description": post.description, "publishedAt": post.publishedAt, "categories": post.categories, "href": `/blog/${post.slug.current}`, "body": post.body, "server:defer": true, "server:component-directive": "defer", "server:component-path": "@/components/cards/Card.astro", "server:component-export": "default" })}`)} </ul> </div> </section> ` })}`;
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

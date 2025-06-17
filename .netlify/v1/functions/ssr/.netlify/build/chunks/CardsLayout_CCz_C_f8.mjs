import { c as createComponent, m as maybeRenderHead, r as renderComponent, a as renderTemplate } from './astro/server_lUFmIoAw.mjs';
import 'kleur/colors';
import { l as loadQuery, b as POSTS_QUERY } from './queries_B0Anz8mF.mjs';
import { $ as $$LoadingSkeleton } from './LoadingSkeleton_mYrfM3ay.mjs';
import $$Card from './Card_DhEx1tAe.mjs';
/* empty css                        */

const prerender = false;
const $$CardsLayout = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await loadQuery({
    query: POSTS_QUERY
  });
  return renderTemplate`${maybeRenderHead()}<ul class="grid grid-cols-1 gap-10 py-4 transition-all duration-400 ease-in-out sm:grid-cols-2"> ${posts.data && posts.data.map((post) => renderTemplate`${renderComponent($$result, "Card", $$Card, { "title": post.title, "mainImage": post.mainImage, "description": post.description, "publishedAt": post.publishedAt, "categories": post.categories, "href": `/blog/${post.slug.current}`, "body": post.body, "server:defer": true, "server:component-directive": "defer", "server:component-path": "@/components/cards/Card.astro", "server:component-export": "default" }, { "fallback": async ($$result2) => renderTemplate`${renderComponent($$result2, "LoadingSkeleton", $$LoadingSkeleton, { "slot": "fallback" })}` })}`)} </ul>`;
}, "/Users/maxwellkjr/Projects/bymjcodes/src/layouts/CardsLayout.astro", "self");

const $$file = "/Users/maxwellkjr/Projects/bymjcodes/src/layouts/CardsLayout.astro";
const $$url = undefined;

export { $$CardsLayout as default, $$file as file, prerender, $$url as url };

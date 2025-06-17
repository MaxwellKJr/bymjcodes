import '../chunks/page-ssr_b58HPW9V.mjs';
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute, e as renderTransition } from '../chunks/astro/server_lUFmIoAw.mjs';
import 'kleur/colors';
import $$Card from '../chunks/Card_DhEx1tAe.mjs';
import { $ as $$LoadingSkeleton } from '../chunks/LoadingSkeleton_mYrfM3ay.mjs';
import { $ as $$Heading } from '../chunks/Heading_C7YNBBUg.mjs';
import { $ as $$Layout } from '../chunks/Layout_D_eMMPrV.mjs';
import { l as loadQuery, b as PROJECTS_QUERY } from '../chunks/queries_D-Vdgm4F.mjs';
/* empty css                                */
export { renderers } from '../renderers.mjs';

const prerender = false;
const $$Projects = createComponent(async ($$result, $$props, $$slots) => {
  const projects = await loadQuery({
    query: PROJECTS_QUERY
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Projects", "description": "See Maxwell Kapezi Jr's work and works-in-progress he has been working on over the years.", "siteUrl": "https://bymjcodes.com/projects", "image": "/mjk.jpg" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="w-full lg:min-h-[89vh]"${addAttribute(renderTransition($$result2, "4yufxtte", "fade", ""), "data-astro-transition-scope")}> <div class="container m-auto flex h-full flex-col justify-center py-24"> <div class="text-center lg:text-left"> ${renderComponent($$result2, "Heading", $$Heading, { "text": "My Work", "size": "lg" })} </div> <ul class="grid grid-cols-1 gap-10 py-4 transition-all duration-400 ease-in-out sm:grid-cols-2 lg:gap-6"> ${projects.data && projects.data.map((project) => renderTemplate`${renderComponent($$result2, "Card", $$Card, { "title": project.title, "mainImage": project.mainImage, "description": project.description, "publishedAt": project.publishedAt, "categories": project.categories, "isProject": true, "href": `/projects/${project.slug.current}`, "projectUrl": project.projectUrl, "githubUrl": project.githubUrl, "server:defer": true, "server:component-directive": "defer", "server:component-path": "@/components/cards/Card.astro", "server:component-export": "default" }, { "fallback": async ($$result3) => renderTemplate`${renderComponent($$result3, "LoadingSkeleton", $$LoadingSkeleton, { "slot": "fallback" })}` })}`)} </ul> </div> </section> ` })}`;
}, "/Users/maxwellkjr/Projects/bymjcodes/src/pages/projects.astro", "self");

const $$file = "/Users/maxwellkjr/Projects/bymjcodes/src/pages/projects.astro";
const $$url = "/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Projects,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

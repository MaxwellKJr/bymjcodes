import '../chunks/page-ssr_DBXUfJbU.mjs';
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, d as addAttribute, e as renderTransition } from '../chunks/astro/server_csNxp0Ix.mjs';
import 'kleur/colors';
import $$Card from '../chunks/Card_pIhgzWJ7.mjs';
import { $ as $$Layout } from '../chunks/Layout_BUsLZyR_.mjs';
import { l as loadQuery, b as PROJECTS_QUERY } from '../chunks/queries_oOkjulPx.mjs';
import { a as $$Heading } from '../chunks/Heading_CHp9YzOe.mjs';
import { Suspense } from 'react';
/* empty css                                */
export { renderers } from '../renderers.mjs';

const prerender = false;
const $$Projects = createComponent(async ($$result, $$props, $$slots) => {
  const projects = await loadQuery({
    query: PROJECTS_QUERY
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Projects", "description": "See Maxwell Kapezi Jr's work and works-in-progress he has been working on over the years.", "siteUrl": "https://bymjcodes.netlify.app/projects/" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="lg:min-h-[89vh]
  w-full"${addAttribute(renderTransition($$result2, "4yufxtte", "fade", ""), "data-astro-transition-scope")}> <div class="container flex flex-col justify-center h-full py-24 m-auto"> <div class="text-center lg:text-left"> ${renderComponent($$result2, "Heading", $$Heading, { "text": "My Work", "size": "lg" })} </div> <ul class="grid grid-cols-1 gap-10 lg:gap-6 py-4 lg:grid-cols-2 transition-all duration-300 ease-in-out"> ${projects.data && projects.data.map((project) => renderTemplate`${renderComponent($$result2, "Suspense", Suspense, { "fallback": "Loading Projects..." }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Card", $$Card, { "title": project.title, "mainImage": project.mainImage, "description": project.description, "publishedAt": project.publishedAt, "categories": project.categories, "isProject": true, "href": `/projects/${project.slug.current}`, "projectUrl": project.projectUrl, "githubUrl": project.githubUrl, "server:defer": true, "server:component-directive": "defer", "server:component-path": "@/components/cards/Card.astro", "server:component-export": "default" })} ` })}`)} </ul> </div> </section> ` })}`;
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

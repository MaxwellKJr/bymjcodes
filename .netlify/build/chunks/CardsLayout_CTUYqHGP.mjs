import { c as createComponent, m as maybeRenderHead, a as renderTemplate, f as renderSlot } from './astro/server_BdfX4GWh.mjs';
import 'kleur/colors';
import 'clsx';

const $$LoadingSkeleton = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="animate-pulse"> <div class="dark:bg-secondary-dark h-64 rounded-xl bg-gray-200"></div> <div class="mt-4 space-y-3"> <div class="dark:bg-secondary-dark h-4 rounded-xl bg-gray-200"></div> <div class="dark:bg-secondary-dark h-4 w-3/4 rounded-xl bg-gray-200"></div> <div class="dark:bg-secondary-dark h-4 w-1/2 rounded-xl bg-gray-200"></div> </div> </div>`;
}, "/Users/maxwellkjr/Projects/bymjcodes/src/components/misc/LoadingSkeleton.astro", void 0);

const $$CardsLayout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<ul class="grid grid-cols-1 gap-10 py-4 sm:grid-cols-2"> ${renderSlot($$result, $$slots["default"])} </ul>`;
}, "/Users/maxwellkjr/Projects/bymjcodes/src/layouts/CardsLayout.astro", void 0);

export { $$CardsLayout as $, $$LoadingSkeleton as a };

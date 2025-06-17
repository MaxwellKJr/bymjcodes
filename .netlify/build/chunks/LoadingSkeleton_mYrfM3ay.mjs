import { c as createComponent, m as maybeRenderHead, a as renderTemplate } from './astro/server_lUFmIoAw.mjs';
import 'kleur/colors';
import 'clsx';

const $$LoadingSkeleton = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="animate-pulse"> <div class="dark:bg-secondary-dark h-64 rounded-lg bg-gray-200"></div> <div class="mt-4 space-y-3"> <div class="dark:bg-secondary-dark h-4 rounded bg-gray-200"></div> <div class="dark:bg-secondary-dark h-4 w-3/4 rounded bg-gray-200"></div> <div class="dark:bg-secondary-dark h-4 w-1/2 rounded bg-gray-200"></div> </div> </div>`;
}, "/Users/maxwellkjr/Projects/bymjcodes/src/components/misc/LoadingSkeleton.astro", void 0);

export { $$LoadingSkeleton as $ };

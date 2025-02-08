import imageUrlBuilder from '@sanity/image-url';
import { s as sanityClient } from './_sanity_client_fIYNuKS7.mjs';
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as createAstro, d as addAttribute } from './astro/server_csNxp0Ix.mjs';
import 'kleur/colors';
import 'clsx';
import { format } from 'date-fns';

const imageBuilder = imageUrlBuilder(sanityClient);
function urlForImage(source) {
  return imageBuilder.image(source).auto("format").quality(90).url();
}
function urlForPostImage(source) {
  return imageBuilder.image(source).auto("format").width(500).height(250).maxHeight(250).quality(100).url();
}
function urlForProjectImage(source) {
  return imageBuilder.image(source).auto("format").quality(100).url();
}

const $$Astro$2 = createAstro();
const $$FormattedDate = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$FormattedDate;
  const { unformattedDate, dateFormat = "MMMM dd, yyyy" } = Astro2.props;
  const formattedDate = format(new Date(unformattedDate), dateFormat);
  return renderTemplate`${maybeRenderHead()}<span class="text-sm text-secondary-white">${formattedDate}</span>`;
}, "/Users/maxwellkjr/Projects/bymjcodes/src/components/misc/FormattedDate.astro", void 0);

const $$Astro$1 = createAstro();
const $$EstimatedTimeToRead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$EstimatedTimeToRead;
  const extractPlainText = (documentBody) => {
    if (!documentBody?.length) return "";
    return documentBody.map((block) => {
      if (!block?.children?.length) return "";
      return block.children.map((child) => child?.text || "").join(" ");
    }).filter((text) => text !== "").join(" ");
  };
  const estimateReadingTime = (text) => {
    const wordsPerMinute = 200;
    const words = text.split(/\s+/).filter(Boolean);
    const readingTime2 = Math.ceil(words.length / wordsPerMinute);
    return `\u23F1\uFE0F ${readingTime2} min read`;
  };
  const { body } = Astro2.props;
  const plainText = extractPlainText(body);
  const readingTime = estimateReadingTime(plainText);
  return renderTemplate`${maybeRenderHead()}<small class="text-sm text-secondary-white my-1">${readingTime}</small>`;
}, "/Users/maxwellkjr/Projects/bymjcodes/src/components/misc/EstimatedTimeToRead.astro", void 0);

const $$Astro = createAstro();
const $$Pill = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Pill;
  const { text, variant } = Astro2.props;
  const variants = {
    primary: "bg-primary text-white",
    secondary: "bg-secondary text-white",
    tertiary: "dark:bg-background-light bg-background-dark dark:text-black text-white"
  };
  const completeClass = `
  ${variants[variant]}
  px-4
  py-[1px]
  rounded-full
  mx-1
  font-regular
  text-center
  capitalize
`;
  return renderTemplate`${maybeRenderHead()}<small${addAttribute(completeClass, "class")}>${text}</small>`;
}, "/Users/maxwellkjr/Projects/bymjcodes/src/components/misc/Pill.astro", void 0);

export { $$Pill as $, $$FormattedDate as a, $$EstimatedTimeToRead as b, urlForProjectImage as c, urlForPostImage as d, urlForImage as u };

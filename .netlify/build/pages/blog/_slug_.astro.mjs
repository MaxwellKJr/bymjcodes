import '../../chunks/page-ssr_b58HPW9V.mjs';
import { b as createAstro, c as createComponent, m as maybeRenderHead, s as spreadAttributes, f as renderSlot, a as renderTemplate, r as renderComponent, d as addAttribute } from '../../chunks/astro/server_BdfX4GWh.mjs';
import 'kleur/colors';
import { $ as $$Image } from '../../chunks/Source_CYXqOE2o.mjs';
import { $ as $$Flex } from '../../chunks/Flex_D9v7d06d.mjs';
import { u as urlForImage, $ as $$Pill, a as $$FormattedDate, b as $$EstimatedTimeToRead } from '../../chunks/urlForImage_YYycrnbl.mjs';
import { LIST_NEST_MODE_HTML, isPortableTextToolkitList, isPortableTextListItemBlock, isPortableTextToolkitSpan, isPortableTextBlock, isPortableTextToolkitTextNode, nestLists, buildMarksTree } from '@portabletext/toolkit';
import 'clsx';
import { $ as $$Layout, F as FontSettingsButtons } from '../../chunks/Layout_CEgIuDrX.mjs';
import { a as $$Icon, $ as $$Heading } from '../../chunks/Heading_B8jn2LWn.mjs';
import { l as loadQuery, P as POST_QUERY } from '../../chunks/queries_D-Vdgm4F.mjs';
export { renderers } from '../../renderers.mjs';

function isComponent(it) {
  return typeof it === "function";
}
function mergeComponents(components, overrides) {
  const cmps = { ...components };
  for (const [key, override] of Object.entries(overrides)) {
    const current = components[key];
    const value = !current || isComponent(override) || isComponent(current) ? override : {
      ...current,
      ...override
    };
    cmps[key] = value;
  }
  return cmps;
}

const getTemplate = (prop, type) => `PortableText [components.${prop}] is missing "${type}"`;
const unknownTypeWarning = (type) => getTemplate("type", type);
const unknownMarkWarning = (markType) => getTemplate("mark", markType);
const unknownBlockWarning = (style) => getTemplate("block", style);
const unknownListWarning = (listItem) => getTemplate("list", listItem);
const unknownListItemWarning = (listStyle) => getTemplate("listItem", listStyle);
const getWarningMessage = (nodeType, type) => {
  const fncs = {
    block: unknownBlockWarning,
    list: unknownListWarning,
    listItem: unknownListItemWarning,
    mark: unknownMarkWarning,
    type: unknownTypeWarning
  };
  return fncs[nodeType](type);
};
function printWarning(message) {
  console.warn(message);
}

const key = Symbol("astro-portabletext");
function usePortableText(node) {
  if (!(key in globalThis)) {
    throw new Error(`PortableText "context" has not been initialised`);
  }
  return globalThis[key](node);
}

const $$Astro$9 = createAstro("https://bymjcodes.com");
const $$Block = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Block;
  const props = Astro2.props;
  const { node, index, isInline, ...attrs } = props;
  const styleIs = (style) => style === node.style;
  const { getUnknownComponent } = usePortableText(node);
  const UnknownStyle = getUnknownComponent();
  return renderTemplate`${styleIs("h1") ? renderTemplate`${maybeRenderHead()}<h1${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</h1>` : styleIs("h2") ? renderTemplate`<h2${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</h2>` : styleIs("h3") ? renderTemplate`<h3${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</h3>` : styleIs("h4") ? renderTemplate`<h4${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</h4>` : styleIs("h5") ? renderTemplate`<h5${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</h5>` : styleIs("h6") ? renderTemplate`<h6${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</h6>` : styleIs("blockquote") ? renderTemplate`<blockquote${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</blockquote>` : styleIs("normal") ? renderTemplate`<p${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</p>` : renderTemplate`${renderComponent($$result, "UnknownStyle", UnknownStyle, { ...props }, { "default": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["default"])}` })}`}`;
}, "/Users/maxwellkjr/Projects/bymjcodes/node_modules/astro-portabletext/components/Block.astro", void 0);

const $$HardBreak = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<br>`;
}, "/Users/maxwellkjr/Projects/bymjcodes/node_modules/astro-portabletext/components/HardBreak.astro", void 0);

const $$Astro$8 = createAstro("https://bymjcodes.com");
const $$List = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$List;
  const { node, index, isInline, ...attrs } = Astro2.props;
  const listItemIs = (listItem) => listItem === node.listItem;
  return renderTemplate`${listItemIs("menu") ? renderTemplate`${maybeRenderHead()}<menu${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</menu>` : listItemIs("number") ? renderTemplate`<ol${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</ol>` : renderTemplate`<ul${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</ul>`}`;
}, "/Users/maxwellkjr/Projects/bymjcodes/node_modules/astro-portabletext/components/List.astro", void 0);

const $$Astro$7 = createAstro("https://bymjcodes.com");
const $$ListItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$ListItem;
  const { node, index, isInline, ...attrs } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</li>`;
}, "/Users/maxwellkjr/Projects/bymjcodes/node_modules/astro-portabletext/components/ListItem.astro", void 0);

const $$Astro$6 = createAstro("https://bymjcodes.com");
const $$Mark = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Mark;
  const props = Astro2.props;
  const { node, index, isInline, ...attrs } = props;
  const markTypeIs = (markType) => markType === node.markType;
  const { getUnknownComponent } = usePortableText(node);
  const UnknownMarkType = getUnknownComponent();
  return renderTemplate`${markTypeIs("code") ? renderTemplate`${maybeRenderHead()}<code${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</code>` : markTypeIs("em") ? renderTemplate`<em${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</em>` : markTypeIs("link") ? renderTemplate`<a${addAttribute(node.markDef.href, "href")}${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</a>` : markTypeIs("strike-through") ? renderTemplate`<del${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</del>` : markTypeIs("strong") ? renderTemplate`<strong${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</strong>` : markTypeIs("underline") ? renderTemplate`<span style="text-decoration: underline;"${spreadAttributes(attrs)}>${renderSlot($$result, $$slots["default"])}</span>` : renderTemplate`${renderComponent($$result, "UnknownMarkType", UnknownMarkType, { ...props }, { "default": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["default"])}` })}`}`;
}, "/Users/maxwellkjr/Projects/bymjcodes/node_modules/astro-portabletext/components/Mark.astro", void 0);

const $$Astro$5 = createAstro("https://bymjcodes.com");
const $$Text = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Text;
  const { node } = Astro2.props;
  return renderTemplate`${node.text}`;
}, "/Users/maxwellkjr/Projects/bymjcodes/node_modules/astro-portabletext/components/Text.astro", void 0);

const $$UnknownBlock = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<p data-portabletext-unknown="block">${renderSlot($$result, $$slots["default"])}</p>`;
}, "/Users/maxwellkjr/Projects/bymjcodes/node_modules/astro-portabletext/components/UnknownBlock.astro", void 0);

const $$UnknownList = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<ul data-portabletext-unknown="list">${renderSlot($$result, $$slots["default"])}</ul>`;
}, "/Users/maxwellkjr/Projects/bymjcodes/node_modules/astro-portabletext/components/UnknownList.astro", void 0);

const $$UnknownListItem = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<li data-portabletext-unknown="listitem">${renderSlot($$result, $$slots["default"])}</li>`;
}, "/Users/maxwellkjr/Projects/bymjcodes/node_modules/astro-portabletext/components/UnknownListItem.astro", void 0);

const $$UnknownMark = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<span data-portabletext-unknown="mark">${renderSlot($$result, $$slots["default"])}</span>`;
}, "/Users/maxwellkjr/Projects/bymjcodes/node_modules/astro-portabletext/components/UnknownMark.astro", void 0);

const $$Astro$4 = createAstro("https://bymjcodes.com");
const $$UnknownType = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$UnknownType;
  const { node, isInline } = Astro2.props;
  const warning = getWarningMessage("type", node._type);
  return renderTemplate`${isInline ? renderTemplate`${maybeRenderHead()}<span style="display:none" data-portabletext-unknown="type">${warning}</span>` : renderTemplate`<div style="display:none" data-portabletext-unknown="type">${warning}</div>`}`;
}, "/Users/maxwellkjr/Projects/bymjcodes/node_modules/astro-portabletext/components/UnknownType.astro", void 0);

const $$Astro$3 = createAstro("https://bymjcodes.com");
const $$PortableText$1 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$PortableText$1;
  const {
    value,
    components: componentOverrides = {},
    listNestingMode = LIST_NEST_MODE_HTML,
    onMissingComponent = true
  } = Astro2.props;
  const components = mergeComponents(
    {
      type: {},
      unknownType: $$UnknownType,
      block: {
        h1: $$Block,
        h2: $$Block,
        h3: $$Block,
        h4: $$Block,
        h5: $$Block,
        h6: $$Block,
        blockquote: $$Block,
        normal: $$Block
      },
      unknownBlock: $$UnknownBlock,
      list: {
        bullet: $$List,
        number: $$List,
        menu: $$List
      },
      unknownList: $$UnknownList,
      listItem: {
        bullet: $$ListItem,
        number: $$ListItem,
        menu: $$ListItem
      },
      unknownListItem: $$UnknownListItem,
      mark: {
        code: $$Mark,
        em: $$Mark,
        link: $$Mark,
        "strike-through": $$Mark,
        strong: $$Mark,
        underline: $$Mark
      },
      unknownMark: $$UnknownMark,
      text: $$Text,
      hardBreak: $$HardBreak
    },
    componentOverrides
  );
  const noop = () => {
  };
  const missingComponentHandler = ((handler) => {
    if (typeof handler === "function") {
      return handler;
    }
    return !handler ? noop : printWarning;
  })(onMissingComponent);
  const asComponentProps = (node, index, isInline) => ({
    node,
    index,
    isInline
  });
  const provideComponent = (nodeType, type, fallbackComponent) => {
    const component = ((component2) => {
      return component2[type] || component2;
    })(components[nodeType]);
    if (isComponent(component)) {
      return component;
    }
    missingComponentHandler(getWarningMessage(nodeType, type), {
      nodeType,
      type
    });
    return fallbackComponent;
  };
  const cachedNodes = /* @__PURE__ */ new WeakMap();
  let fallbackRenderOptions;
  const portableTextRender = (options, isInline) => {
    if (!fallbackRenderOptions) {
      throw new Error(
        "[PortableText portableTextRender] fallbackRenderOptions is undefined"
      );
    }
    return function renderNode(node, index) {
      const renderOptions = { ...fallbackRenderOptions, ...options ?? {} };
      function run(handler, props) {
        if (!isComponent(handler)) {
          throw new Error(
            `[PortableText render] No handler found for node type ${node._type}.`
          );
        }
        return handler(props);
      }
      if (isPortableTextToolkitList(node)) {
        const UnknownComponent2 = components.unknownList ?? $$UnknownList;
        cachedNodes.set(node, { Default: $$List, Unknown: UnknownComponent2 });
        return run(renderOptions.list, {
          Component: provideComponent("list", node.listItem, UnknownComponent2),
          props: asComponentProps(node, index, false),
          children: node.children?.map(portableTextRender(options, false))
        });
      }
      if (isPortableTextListItemBlock(node)) {
        const { listItem, ...blockNode } = node;
        const isStyled = node.style && node.style !== "normal";
        node.children = isStyled ? renderNode(blockNode, index) : buildMarksTree(node);
        const UnknownComponent2 = components.unknownListItem ?? $$UnknownListItem;
        cachedNodes.set(node, { Default: $$ListItem, Unknown: UnknownComponent2 });
        return run(renderOptions.listItem, {
          Component: provideComponent(
            "listItem",
            node.listItem,
            UnknownComponent2
          ),
          props: asComponentProps(node, index, false),
          children: isStyled ? node.children : node.children.map(portableTextRender(options, true))
        });
      }
      if (isPortableTextToolkitSpan(node)) {
        const UnknownComponent2 = components.unknownMark ?? $$UnknownMark;
        cachedNodes.set(node, { Default: $$Mark, Unknown: UnknownComponent2 });
        return run(renderOptions.mark, {
          Component: provideComponent("mark", node.markType, UnknownComponent2),
          props: asComponentProps(node, index, true),
          children: node.children?.map(portableTextRender(options, true))
        });
      }
      if (isPortableTextBlock(node)) {
        node.style ??= "normal";
        node.children = buildMarksTree(node);
        const UnknownComponent2 = components.unknownBlock ?? $$UnknownBlock;
        cachedNodes.set(node, { Default: $$Block, Unknown: UnknownComponent2 });
        return run(renderOptions.block, {
          Component: provideComponent("block", node.style, UnknownComponent2),
          props: asComponentProps(node, index, false),
          children: node.children.map(portableTextRender(options, true))
        });
      }
      if (isPortableTextToolkitTextNode(node)) {
        const isHardBreak = "\n" === node.text;
        const props = asComponentProps(node, index, true);
        if (isHardBreak) {
          return run(renderOptions.hardBreak, {
            Component: isComponent(components.hardBreak) ? components.hardBreak : $$HardBreak,
            props
          });
        }
        return run(renderOptions.text, {
          Component: isComponent(components.text) ? components.text : $$Text,
          props
        });
      }
      const UnknownComponent = components.unknownType ?? $$UnknownType;
      return run(renderOptions.type, {
        Component: provideComponent("type", node._type, UnknownComponent),
        props: asComponentProps(
          node,
          index,
          isInline ?? false
          /* default to block */
        )
      });
    };
  };
  globalThis[key] = (node) => {
    return {
      getDefaultComponent: provideDefaultComponent.bind(null, node),
      getUnknownComponent: provideUnknownComponent.bind(null, node),
      render: (options) => node.children?.map(portableTextRender(options))
    };
  };
  const provideDefaultComponent = (node) => {
    const DefaultComponent = cachedNodes.get(node)?.Default;
    if (DefaultComponent) return DefaultComponent;
    if (isPortableTextToolkitList(node)) return $$List;
    if (isPortableTextListItemBlock(node)) return $$ListItem;
    if (isPortableTextToolkitSpan(node)) return $$Mark;
    if (isPortableTextBlock(node)) return $$Block;
    if (isPortableTextToolkitTextNode(node)) {
      return "\n" === node.text ? $$HardBreak : $$Text;
    }
    return $$UnknownType;
  };
  const provideUnknownComponent = (node) => {
    const UnknownComponent = cachedNodes.get(node)?.Unknown;
    if (UnknownComponent) return UnknownComponent;
    if (isPortableTextToolkitList(node)) {
      return components.unknownList ?? $$UnknownList;
    }
    if (isPortableTextListItemBlock(node)) {
      return components.unknownListItem ?? $$UnknownListItem;
    }
    if (isPortableTextToolkitSpan(node)) {
      return components.unknownMark ?? $$UnknownMark;
    }
    if (isPortableTextBlock(node)) {
      return components.unknownBlock ?? $$UnknownBlock;
    }
    if (!isPortableTextToolkitTextNode(node)) {
      return components.unknownType ?? $$UnknownType;
    }
    throw new Error(
      `[PortableText getUnknownComponent] Unable to provide component with node type ${node._type}`
    );
  };
  const blocks = Array.isArray(value) ? value : [value];
  const nodes = nestLists(blocks, listNestingMode);
  const render = (options) => {
    fallbackRenderOptions = options;
    return portableTextRender(options);
  };
  const hasTypeSlot = Astro2.slots.has("type");
  const hasBlockSlot = Astro2.slots.has("block");
  const hasListSlot = Astro2.slots.has("list");
  const hasListItemSlot = Astro2.slots.has("listItem");
  const hasMarkSlot = Astro2.slots.has("mark");
  const hasTextSlot = Astro2.slots.has("text");
  const hasHardBreakSlot = Astro2.slots.has("hardBreak");
  const createSlotRenderer = (slotName) => Astro2.slots.render.bind(Astro2.slots, slotName);
  return renderTemplate`${(() => {
    const renderNode = (slotRenderer) => {
      return ({ Component, props, children }) => slotRenderer?.([{ Component, props, children }]) ?? renderTemplate`${renderComponent($$result, "Component", Component, { ...props }, { "default": ($$result2) => renderTemplate`${children}` })}`;
    };
    return nodes.map(
      render({
        type: renderNode(hasTypeSlot ? createSlotRenderer("type") : void 0),
        block: renderNode(
          hasBlockSlot ? createSlotRenderer("block") : void 0
        ),
        list: renderNode(hasListSlot ? createSlotRenderer("list") : void 0),
        listItem: renderNode(
          hasListItemSlot ? createSlotRenderer("listItem") : void 0
        ),
        mark: renderNode(hasMarkSlot ? createSlotRenderer("mark") : void 0),
        text: renderNode(hasTextSlot ? createSlotRenderer("text") : void 0),
        hardBreak: renderNode(
          hasHardBreakSlot ? createSlotRenderer("hardBreak") : void 0
        )
      })
    );
  })()}`;
}, "/Users/maxwellkjr/Projects/bymjcodes/node_modules/astro-portabletext/components/PortableText.astro", void 0);

const $$Astro$2 = createAstro("https://bymjcodes.com");
const $$PortableTextImage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$PortableTextImage;
  const { asset, alt } = Astro2.props.node;
  const url = urlForImage(asset);
  const webpUrl = urlForImage(asset);
  return renderTemplate`${maybeRenderHead()}<picture> <source${addAttribute(webpUrl, "srcset")} type="image/webp"> <img class="responsive__img"${addAttribute(url, "src")}${addAttribute(alt, "alt")}> </picture>`;
}, "/Users/maxwellkjr/Projects/bymjcodes/src/components/sanity/PortableTextImage.astro", void 0);

const $$Astro$1 = createAstro("https://bymjcodes.com");
const $$PortableText = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PortableText;
  const { portableText } = Astro2.props;
  const components = {
    type: {
      image: $$PortableTextImage
    }
  };
  return renderTemplate`${renderComponent($$result, "PortableTextInternal", $$PortableText$1, { "value": portableText, "components": components })}`;
}, "/Users/maxwellkjr/Projects/bymjcodes/src/components/sanity/PortableText.astro", void 0);

const $$Astro = createAstro("https://bymjcodes.com");
const prerender = false;
async function getStaticPaths() {
  const { data: posts } = await loadQuery({
    query: `*[_type == "post"]`
  });
  return posts.map(({ slug }) => {
    return {
      params: {
        slug: slug.current
      }
    };
  });
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { params } = Astro2;
  const { data: post } = await loadQuery({
    query: POST_QUERY,
    params
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": post.title, "description": post.description, "siteUrl": `https://bymjcodes.com/blog/${post.slug.current}`, "image": urlForImage(post.mainImage.asset), "type": "article" }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<article class="relative w-full"> <div class="relative m-auto max-w-lg pt-36 pb-64 lg:mx-auto lg:w-[85vw] lg:pt-28 lg:pb-28"> <div class="flex w-full flex-wrap items-center justify-end gap-2 transition-all duration-400"> ${post.categories && post.categories.map((category) => renderTemplate`${renderComponent($$result2, "Pill", $$Pill, { "text": category.title, "variant": "tertiary" })}`)} </div> ${renderComponent($$result2, "Image", $$Image, { "src": urlForImage(post.mainImage.asset), "alt": post.mainImage.alt, "layout": "fixed", "placeholder": "blurhash", "loading": "eager", "class": "my-4 w-full rounded-xl shadow-lg shadow-black/50 transition-all duration-400" })} <div class="hidden transition-all duration-400 lg:block"> ${renderComponent($$result2, "FontSettingsButtons", FontSettingsButtons, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/settings/FontSettingsButtons", "client:component-export": "default" })} </div> <!-- TODO: Make this stick on scroll rather than fixed --> <div class="dark:bg-background-dark/50 bg-background-light/50 fixed top-0 left-0 z-10 mx-auto w-full rounded-b-xl p-2 shadow-sm backdrop-blur-xl transition-all duration-400 lg:left-1/2 lg:w-1/2 lg:-translate-x-1/2 lg:shadow-none"> <div class="flex items-center gap-4"> <a href="/blog"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "material-symbols-light:arrow-left-alt-rounded", "size": 40, "class": "text-primary transition-all duration-400 hover:translate-x-3 hover:text-black dark:hover:text-white" })} </a> <div class="w-full"> ${renderComponent($$result2, "Heading", $$Heading, { "text": post.title, "size": "md", "color": "text-primary", "className": "block w-[85%] overflow-hidden text-nowrap text-ellipsis whitespace-nowrap lg:w-full" })} <div class="pr-14 lg:pr-0"> ${renderComponent($$result2, "Flex", $$Flex, { "direction": "row", "justify": "between", "align": "center" }, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "FormattedDate", $$FormattedDate, { "unformattedDate": post.publishedAt })} ${renderComponent($$result3, "EstimatedTimeToRead", $$EstimatedTimeToRead, { "body": post.body, "className": "pr-2" })} ` })} </div> </div> </div> </div> <br> <div class="portable-text-body"> ${renderComponent($$result2, "PortableText", $$PortableText, { "portableText": post.body })} </div> </div> </article> ` })} `;
}, "/Users/maxwellkjr/Projects/bymjcodes/src/pages/blog/[slug].astro", void 0);

const $$file = "/Users/maxwellkjr/Projects/bymjcodes/src/pages/blog/[slug].astro";
const $$url = "/blog/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

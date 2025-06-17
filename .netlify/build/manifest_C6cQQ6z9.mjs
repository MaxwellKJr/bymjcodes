import '@astrojs/internal-helpers/path';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_HEADER, i as decodeKey } from './chunks/astro/server_lUFmIoAw.mjs';
import 'clsx';
import 'cookie';
import 'es-module-lexer';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from IANA HTTP Status Code Registry
  // https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  PAYMENT_REQUIRED: 402,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  NOT_ACCEPTABLE: 406,
  PROXY_AUTHENTICATION_REQUIRED: 407,
  REQUEST_TIMEOUT: 408,
  CONFLICT: 409,
  GONE: 410,
  LENGTH_REQUIRED: 411,
  PRECONDITION_FAILED: 412,
  CONTENT_TOO_LARGE: 413,
  URI_TOO_LONG: 414,
  UNSUPPORTED_MEDIA_TYPE: 415,
  RANGE_NOT_SATISFIABLE: 416,
  EXPECTATION_FAILED: 417,
  MISDIRECTED_REQUEST: 421,
  UNPROCESSABLE_CONTENT: 422,
  LOCKED: 423,
  FAILED_DEPENDENCY: 424,
  TOO_EARLY: 425,
  UPGRADE_REQUIRED: 426,
  PRECONDITION_REQUIRED: 428,
  TOO_MANY_REQUESTS: 429,
  REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
  UNAVAILABLE_FOR_LEGAL_REASONS: 451,
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
  HTTP_VERSION_NOT_SUPPORTED: 505,
  VARIANT_ALSO_NEGOTIATES: 506,
  INSUFFICIENT_STORAGE: 507,
  LOOP_DETECTED: 508,
  NETWORK_AUTHENTICATION_REQUIRED: 511
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/maxwellkjr/Projects/bymjcodes/","cacheDir":"file:///Users/maxwellkjr/Projects/bymjcodes/node_modules/.astro/","outDir":"file:///Users/maxwellkjr/Projects/bymjcodes/dist/","srcDir":"file:///Users/maxwellkjr/Projects/bymjcodes/src/","publicDir":"file:///Users/maxwellkjr/Projects/bymjcodes/public/","buildClientDir":"file:///Users/maxwellkjr/Projects/bymjcodes/dist/","buildServerDir":"file:///Users/maxwellkjr/Projects/bymjcodes/.netlify/build/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"about/my-skills/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about/my-skills","isIndex":false,"type":"page","pattern":"^\\/about\\/my-skills\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}],[{"content":"my-skills","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about/my-skills.astro","pathname":"/about/my-skills","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"about/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"services/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/services","isIndex":false,"type":"page","pattern":"^\\/services\\/?$","segments":[[{"content":"services","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/services.astro","pathname":"/services","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.DlXkxCA4.js"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.DlXkxCA4.js"}],"styles":[{"type":"external","src":"/_astro/about.Can1HGMD.css"},{"type":"inline","content":"@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0;mix-blend-mode:plus-lighter}to{opacity:1;mix-blend-mode:plus-lighter}}@keyframes astroFadeOut{0%{opacity:1;mix-blend-mode:plus-lighter}to{opacity:0;mix-blend-mode:plus-lighter}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n"}],"routeData":{"route":"/blog/[slug]","isIndex":false,"type":"page","pattern":"^\\/blog\\/([^/]+?)\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/blog/[slug].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.DlXkxCA4.js"}],"styles":[{"type":"external","src":"/_astro/about.Can1HGMD.css"},{"type":"inline","content":":root{--primary-color: #ff0098;--primary-white: #ebebeb;--primary-black: #111111}.btn[data-astro-cid-5sjhwv6c]{display:inline-flex;width:140px;height:40px;justify-content:center;align-items:center;z-index:1;position:relative;transition:all ease-in-out .3s;border-radius:1em}.btn-primary[data-astro-cid-5sjhwv6c]{background:var(--primary-color);color:var(--primary-white);position:relative}.btn-primary[data-astro-cid-5sjhwv6c]:after{background:var(--primary-white);position:absolute;content:\"\";left:0;top:0;width:0;height:100%;z-index:-1;transition:all ease-in-out .3s;border-radius:1em}.btn-primary[data-astro-cid-5sjhwv6c]:hover{color:var(--primary-black);border-radius:1em}.btn-primary[data-astro-cid-5sjhwv6c]:hover:after{width:100%;text-decoration:none;border-radius:1em}.btn-secondary[data-astro-cid-5sjhwv6c]{background:var(--primary-white);color:var(--primary-black)}.btn-secondary[data-astro-cid-5sjhwv6c]:after{background:var(--primary-color);position:absolute;content:\"\";left:0;top:0;width:15%;height:100%;z-index:-1;transition:all ease-in-out .3s;border-radius:1em 0 0 1em}.btn-secondary[data-astro-cid-5sjhwv6c]:hover{color:var(--primary-white)}.btn-secondary[data-astro-cid-5sjhwv6c]:hover:after{width:100%;text-decoration:none;border-radius:1em}\n@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0;mix-blend-mode:plus-lighter}to{opacity:1;mix-blend-mode:plus-lighter}}@keyframes astroFadeOut{0%{opacity:1;mix-blend-mode:plus-lighter}to{opacity:0;mix-blend-mode:plus-lighter}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n"}],"routeData":{"route":"/blog","isIndex":false,"type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog.astro","pathname":"/blog","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.DlXkxCA4.js"}],"styles":[{"type":"inline","content":":root{--primary-color: #ff0098;--primary-white: #ebebeb;--primary-black: #111111}.btn[data-astro-cid-5sjhwv6c]{display:inline-flex;width:140px;height:40px;justify-content:center;align-items:center;z-index:1;position:relative;transition:all ease-in-out .3s;border-radius:1em}.btn-primary[data-astro-cid-5sjhwv6c]{background:var(--primary-color);color:var(--primary-white);position:relative}.btn-primary[data-astro-cid-5sjhwv6c]:after{background:var(--primary-white);position:absolute;content:\"\";left:0;top:0;width:0;height:100%;z-index:-1;transition:all ease-in-out .3s;border-radius:1em}.btn-primary[data-astro-cid-5sjhwv6c]:hover{color:var(--primary-black);border-radius:1em}.btn-primary[data-astro-cid-5sjhwv6c]:hover:after{width:100%;text-decoration:none;border-radius:1em}.btn-secondary[data-astro-cid-5sjhwv6c]{background:var(--primary-white);color:var(--primary-black)}.btn-secondary[data-astro-cid-5sjhwv6c]:after{background:var(--primary-color);position:absolute;content:\"\";left:0;top:0;width:15%;height:100%;z-index:-1;transition:all ease-in-out .3s;border-radius:1em 0 0 1em}.btn-secondary[data-astro-cid-5sjhwv6c]:hover{color:var(--primary-white)}.btn-secondary[data-astro-cid-5sjhwv6c]:hover:after{width:100%;text-decoration:none;border-radius:1em}\n"},{"type":"external","src":"/_astro/about.Can1HGMD.css"},{"type":"inline","content":"@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0;mix-blend-mode:plus-lighter}to{opacity:1;mix-blend-mode:plus-lighter}}@keyframes astroFadeOut{0%{opacity:1;mix-blend-mode:plus-lighter}to{opacity:0;mix-blend-mode:plus-lighter}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n"}],"routeData":{"route":"/projects","isIndex":false,"type":"page","pattern":"^\\/projects\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects.astro","pathname":"/projects","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.DlXkxCA4.js"}],"styles":[{"type":"inline","content":"body{margin:0;padding:0}\n"}],"routeData":{"type":"page","isIndex":false,"route":"/studio/[...params]","pattern":"^\\/studio(?:\\/(.*?))?\\/?$","segments":[[{"content":"studio","dynamic":false,"spread":false}],[{"content":"...params","dynamic":true,"spread":true}]],"params":["...params"],"component":"node_modules/@sanity/astro/dist/studio/studio-route.astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"external","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.DlXkxCA4.js"}],"styles":[],"routeData":{"route":"/studio/[...path]","isIndex":false,"type":"page","pattern":"^\\/studio(?:\\/(.*?))?\\/?$","segments":[[{"content":"studio","dynamic":false,"spread":false}],[{"content":"...path","dynamic":true,"spread":true}]],"params":["...path"],"component":"src/pages/studio/[...path].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://bymjcodes.com","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/maxwellkjr/Projects/bymjcodes/src/pages/about/my-skills.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/about/my-skills@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/Users/maxwellkjr/Projects/bymjcodes/src/pages/about.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/about@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/maxwellkjr/Projects/bymjcodes/src/layouts/BlogCards.astro",{"propagation":"in-tree","containsHead":false}],["/Users/maxwellkjr/Projects/bymjcodes/src/pages/blog.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/maxwellkjr/Projects/bymjcodes/src/pages/projects.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/projects@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/maxwellkjr/Projects/bymjcodes/src/pages/services.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/services@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/maxwellkjr/Projects/bymjcodes/node_modules/@sanity/astro/dist/studio/studio-route.astro",{"propagation":"none","containsHead":true}],["/Users/maxwellkjr/Projects/bymjcodes/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/maxwellkjr/Projects/bymjcodes/src/pages/404.astro",{"propagation":"in-tree","containsHead":true}],["/Users/maxwellkjr/Projects/bymjcodes/src/pages/blog/[slug].astro",{"propagation":"in-tree","containsHead":true}],["/Users/maxwellkjr/Projects/bymjcodes/src/layouts/Layout.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/404@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/maxwellkjr/Projects/bymjcodes/src/components/cards/Card.astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/about/my-skills@_@astro":"pages/about/my-skills.astro.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/blog/[slug]@_@astro":"pages/blog/_slug_.astro.mjs","\u0000@astro-page:src/pages/blog@_@astro":"pages/blog.astro.mjs","\u0000@astro-page:src/pages/projects@_@astro":"pages/projects.astro.mjs","\u0000@astro-page:src/pages/services@_@astro":"pages/services.astro.mjs","\u0000@astro-page:node_modules/@sanity/astro/dist/studio/studio-route@_@astro":"pages/studio/_---params_.astro.mjs","\u0000@astro-page:src/pages/studio/[...path]@_@astro":"pages/studio/_---path_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_C6cQQ6z9.mjs","/Users/maxwellkjr/Projects/bymjcodes/src/components/cards/Card.astro":"chunks/Card_DhEx1tAe.mjs","/Users/maxwellkjr/Projects/bymjcodes/node_modules/unstorage/drivers/fs-lite.mjs":"chunks/fs-lite_COtHaKzy.mjs","/Users/maxwellkjr/Projects/bymjcodes/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_D6gmTrqE.mjs","@/components/settings/FontSettingsButtons":"_astro/FontSettingsButtons.6g9Hiial.js","@/components/navigation/AboutSectionsToggler":"_astro/AboutSectionsToggler.deoBWzq-.js","@/components/navigation/ServicesSectionToggler":"_astro/ServicesSectionToggler.9D9f8PWp.js","@/components/navigation/ThemeToggler":"_astro/ThemeToggler.DbfglYmd.js","@astrojs/react/client.js":"_astro/client.rgNtCUbn.js","/Users/maxwellkjr/Projects/bymjcodes/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts":"_astro/ClientRouter.astro_astro_type_script_index_0_lang.DX0F14C8.js","astro:scripts/page.js":"_astro/page.DlXkxCA4.js","/Users/maxwellkjr/Projects/bymjcodes/node_modules/sanity/lib/_chunks-es/resources2.mjs":"_astro/resources2.DMKxiyHz.js","/Users/maxwellkjr/Projects/bymjcodes/node_modules/sanity/lib/_chunks-es/resources.mjs":"_astro/resources.D26RUhUi.js","/Users/maxwellkjr/Projects/bymjcodes/node_modules/sanity/lib/_chunks-es/resources4.mjs":"_astro/resources4.Bdv1HBfI.js","/Users/maxwellkjr/Projects/bymjcodes/node_modules/sanity/lib/_chunks-es/resources3.mjs":"_astro/resources3.3sfSJGhy.js","/Users/maxwellkjr/Projects/bymjcodes/node_modules/sanity/lib/_chunks-es/ViteDevServerStopped.mjs":"_astro/ViteDevServerStopped.C0jiGoek.js","/Users/maxwellkjr/Projects/bymjcodes/node_modules/@sanity/client/dist/_chunks-es/stegaEncodeSourceMap.js":"_astro/stegaEncodeSourceMap.C4HMQiAN.js","/Users/maxwellkjr/Projects/bymjcodes/node_modules/@sanity/ui/dist/_chunks-es/refractor.mjs":"_astro/refractor.DtCe2qV6.js","/Users/maxwellkjr/Projects/bymjcodes/node_modules/sanity/lib/_chunks-es/index3.mjs":"_astro/index3.DLreXSv9.js","/Users/maxwellkjr/Projects/bymjcodes/node_modules/sanity/lib/_chunks-es/resources5.mjs":"_astro/resources5.CWLwA7Rt.js","/Users/maxwellkjr/Projects/bymjcodes/node_modules/sanity/lib/_chunks-es/index.mjs":"_astro/index.2UDWXLF7.js","/Users/maxwellkjr/Projects/bymjcodes/node_modules/sanity/lib/_chunks-es/index2.mjs":"_astro/index2.Bm5ByAGH.js","/Users/maxwellkjr/Projects/bymjcodes/node_modules/@sanity/astro/dist/studio/studio-component":"_astro/studio-component.Bp3fQ6uW.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/mjk.CcdzaHOE.jpg","/_astro/about.Can1HGMD.css","/_astro/my-skills.pELTZKYJ.css","/favicon.svg","/icon.png","/js.png","/mjk.jpg","/_astro/AboutSectionsToggler.deoBWzq-.js","/_astro/ClientRouter.astro_astro_type_script_index_0_lang.DX0F14C8.js","/_astro/FontSettingsButtons.6g9Hiial.js","/_astro/ServicesSectionToggler.9D9f8PWp.js","/_astro/ThemeToggler.DbfglYmd.js","/_astro/ViteDevServerStopped.C0jiGoek.js","/_astro/browser.CA2_pdbV.js","/_astro/client.8F9TbAk7.js","/_astro/client.rgNtCUbn.js","/_astro/createLucideIcon.UsRTNzIR.js","/_astro/index.2UDWXLF7.js","/_astro/index.C1SLTdIO.js","/_astro/index.hIESyhSu.js","/_astro/index2.Bm5ByAGH.js","/_astro/index3.DLreXSv9.js","/_astro/jsx-runtime.D_zvdyIk.js","/_astro/page.DlXkxCA4.js","/_astro/proxy.DEBSlF0B.js","/_astro/refractor.DtCe2qV6.js","/_astro/resources.D26RUhUi.js","/_astro/resources2.DMKxiyHz.js","/_astro/resources3.3sfSJGhy.js","/_astro/resources4.Bdv1HBfI.js","/_astro/resources5.CWLwA7Rt.js","/_astro/stegaEncodeSourceMap.C4HMQiAN.js","/_astro/studio-component.Bp3fQ6uW.js","/_astro/studio-component.DNFUiiNK.js","/_astro/page.DlXkxCA4.js","/404.html","/about/my-skills/index.html","/about/index.html","/services/index.html","/index.html"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[["@/components/cards/Card.astro","Card"]],"key":"dtQRM988a+P3/ON/0qKZ/g6z/XxNVVYZdAIa7Cuf9Fw=","sessionConfig":{"driver":"fs-lite","options":{"base":"/Users/maxwellkjr/Projects/bymjcodes/node_modules/.astro/sessions"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/fs-lite_COtHaKzy.mjs');

export { manifest };

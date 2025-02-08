import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'es-module-lexer';
import { N as NOOP_MIDDLEWARE_HEADER, i as decodeKey } from './chunks/astro/server_csNxp0Ix.mjs';
import 'clsx';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
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

const manifest = deserializeManifest({"hrefRoot":"file:///Users/maxwellkjr/Projects/bymjcodes/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"about/my-skills/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about/my-skills","isIndex":false,"type":"page","pattern":"^\\/about\\/my-skills\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}],[{"content":"my-skills","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about/my-skills.astro","pathname":"/about/my-skills","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"about/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"services/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/services","isIndex":false,"type":"page","pattern":"^\\/services\\/?$","segments":[[{"content":"services","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/services.astro","pathname":"/services","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"[data-astro-image]{width:100%;height:auto;-o-object-fit:var(--fit);object-fit:var(--fit);-o-object-position:var(--pos);object-position:var(--pos);aspect-ratio:var(--w) / var(--h)}[data-astro-image=responsive]{max-width:calc(var(--w) * 1px);max-height:calc(var(--h) * 1px)}[data-astro-image=fixed]{width:calc(var(--w) * 1px);height:calc(var(--h) * 1px)}\n"}],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/studio-route.CTvPEBax.css"},{"type":"external","src":"/_astro/about.BirLy7N7.css"},{"type":"inline","content":"@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0;mix-blend-mode:plus-lighter}to{opacity:1;mix-blend-mode:plus-lighter}}@keyframes astroFadeOut{0%{opacity:1;mix-blend-mode:plus-lighter}to{opacity:0;mix-blend-mode:plus-lighter}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n[data-astro-image]{width:100%;height:auto;-o-object-fit:var(--fit);object-fit:var(--fit);-o-object-position:var(--pos);object-position:var(--pos);aspect-ratio:var(--w) / var(--h)}[data-astro-image=responsive]{max-width:calc(var(--w) * 1px);max-height:calc(var(--h) * 1px)}[data-astro-image=fixed]{width:calc(var(--w) * 1px);height:calc(var(--h) * 1px)}\n"}],"routeData":{"route":"/blog/[slug]","isIndex":false,"type":"page","pattern":"^\\/blog\\/([^/]+?)\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/blog/[slug].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/studio-route.CTvPEBax.css"},{"type":"external","src":"/_astro/about.BirLy7N7.css"},{"type":"inline","content":"[data-astro-image]{width:100%;height:auto;-o-object-fit:var(--fit);object-fit:var(--fit);-o-object-position:var(--pos);object-position:var(--pos);aspect-ratio:var(--w) / var(--h)}[data-astro-image=responsive]{max-width:calc(var(--w) * 1px);max-height:calc(var(--h) * 1px)}[data-astro-image=fixed]{width:calc(var(--w) * 1px);height:calc(var(--h) * 1px)}\n:root{--primary-color: #ff0098;--primary-white: #ebebeb;--primary-black: #111111}.btn[data-astro-cid-5sjhwv6c]{display:inline-flex;width:140px;height:40px;justify-content:center;align-items:center;z-index:1;position:relative;transition:all ease-in-out .3s;border-radius:1em}.btn-primary[data-astro-cid-5sjhwv6c]{background:var(--primary-color);color:var(--primary-white);position:relative}.btn-primary[data-astro-cid-5sjhwv6c]:after{background:var(--primary-white);position:absolute;content:\"\";left:0;top:0;width:0;height:100%;z-index:-1;transition:all ease-in-out .3s;border-radius:1em}.btn-primary[data-astro-cid-5sjhwv6c]:hover{color:var(--primary-black);border-radius:1em}.btn-primary[data-astro-cid-5sjhwv6c]:hover:after{width:100%;text-decoration:none;border-radius:1em}.btn-secondary[data-astro-cid-5sjhwv6c]{background:var(--primary-white);color:var(--primary-black)}.btn-secondary[data-astro-cid-5sjhwv6c]:after{background:var(--primary-color);position:absolute;content:\"\";left:0;top:0;width:15%;height:100%;z-index:-1;transition:all ease-in-out .3s;border-radius:1em 0 0 1em}.btn-secondary[data-astro-cid-5sjhwv6c]:hover{color:var(--primary-white)}.btn-secondary[data-astro-cid-5sjhwv6c]:hover:after{width:100%;text-decoration:none;border-radius:1em}\n@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0;mix-blend-mode:plus-lighter}to{opacity:1;mix-blend-mode:plus-lighter}}@keyframes astroFadeOut{0%{opacity:1;mix-blend-mode:plus-lighter}to{opacity:0;mix-blend-mode:plus-lighter}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n"}],"routeData":{"route":"/blog","isIndex":false,"type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog.astro","pathname":"/blog","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/studio-route.CTvPEBax.css"},{"type":"external","src":"/_astro/about.BirLy7N7.css"},{"type":"inline","content":"[data-astro-image]{width:100%;height:auto;-o-object-fit:var(--fit);object-fit:var(--fit);-o-object-position:var(--pos);object-position:var(--pos);aspect-ratio:var(--w) / var(--h)}[data-astro-image=responsive]{max-width:calc(var(--w) * 1px);max-height:calc(var(--h) * 1px)}[data-astro-image=fixed]{width:calc(var(--w) * 1px);height:calc(var(--h) * 1px)}\n:root{--primary-color: #ff0098;--primary-white: #ebebeb;--primary-black: #111111}.btn[data-astro-cid-5sjhwv6c]{display:inline-flex;width:140px;height:40px;justify-content:center;align-items:center;z-index:1;position:relative;transition:all ease-in-out .3s;border-radius:1em}.btn-primary[data-astro-cid-5sjhwv6c]{background:var(--primary-color);color:var(--primary-white);position:relative}.btn-primary[data-astro-cid-5sjhwv6c]:after{background:var(--primary-white);position:absolute;content:\"\";left:0;top:0;width:0;height:100%;z-index:-1;transition:all ease-in-out .3s;border-radius:1em}.btn-primary[data-astro-cid-5sjhwv6c]:hover{color:var(--primary-black);border-radius:1em}.btn-primary[data-astro-cid-5sjhwv6c]:hover:after{width:100%;text-decoration:none;border-radius:1em}.btn-secondary[data-astro-cid-5sjhwv6c]{background:var(--primary-white);color:var(--primary-black)}.btn-secondary[data-astro-cid-5sjhwv6c]:after{background:var(--primary-color);position:absolute;content:\"\";left:0;top:0;width:15%;height:100%;z-index:-1;transition:all ease-in-out .3s;border-radius:1em 0 0 1em}.btn-secondary[data-astro-cid-5sjhwv6c]:hover{color:var(--primary-white)}.btn-secondary[data-astro-cid-5sjhwv6c]:hover:after{width:100%;text-decoration:none;border-radius:1em}\n@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0;mix-blend-mode:plus-lighter}to{opacity:1;mix-blend-mode:plus-lighter}}@keyframes astroFadeOut{0%{opacity:1;mix-blend-mode:plus-lighter}to{opacity:0;mix-blend-mode:plus-lighter}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n"}],"routeData":{"route":"/projects","isIndex":false,"type":"page","pattern":"^\\/projects\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects.astro","pathname":"/projects","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/studio-route.CTvPEBax.css"},{"type":"inline","content":"body{margin:0;padding:0}\n"}],"routeData":{"type":"page","isIndex":false,"route":"/studio/[...params]","pattern":"^\\/studio(?:\\/(.*?))?\\/?$","segments":[[{"content":"studio","dynamic":false,"spread":false}],[{"content":"...params","dynamic":true,"spread":true}]],"params":["...params"],"component":"node_modules/@sanity/astro/dist/studio/studio-route.astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"external","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/maxwellkjr/Projects/bymjcodes/src/pages/about/my-skills.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/about/my-skills@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/Users/maxwellkjr/Projects/bymjcodes/src/pages/about.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/about@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/maxwellkjr/Projects/bymjcodes/src/pages/blog.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/maxwellkjr/Projects/bymjcodes/src/pages/projects.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/projects@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/maxwellkjr/Projects/bymjcodes/src/pages/services.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/services@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/maxwellkjr/Projects/bymjcodes/node_modules/@sanity/astro/dist/studio/studio-route.astro",{"propagation":"none","containsHead":true}],["/Users/maxwellkjr/Projects/bymjcodes/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/maxwellkjr/Projects/bymjcodes/src/pages/blog/[slug].astro",{"propagation":"in-tree","containsHead":true}],["/Users/maxwellkjr/Projects/bymjcodes/src/layouts/Layout.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/maxwellkjr/Projects/bymjcodes/src/components/cards/Card.astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/about/my-skills@_@astro":"pages/about/my-skills.astro.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/blog/[slug]@_@astro":"pages/blog/_slug_.astro.mjs","\u0000@astro-page:src/pages/blog@_@astro":"pages/blog.astro.mjs","\u0000@astro-page:src/pages/projects@_@astro":"pages/projects.astro.mjs","\u0000@astro-page:src/pages/services@_@astro":"pages/services.astro.mjs","\u0000@astro-page:node_modules/@sanity/astro/dist/studio/studio-route@_@astro":"pages/studio/_---params_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_CrNZ0h6O.mjs","/Users/maxwellkjr/Projects/bymjcodes/src/components/cards/Card.astro":"chunks/Card_pIhgzWJ7.mjs","/Users/maxwellkjr/Projects/bymjcodes/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_D0IRrku0.mjs","@/components/navigation/AboutSectionsToggler":"_astro/AboutSectionsToggler.PBdX797c.js","@/components/navigation/ServicesSectionToggler":"_astro/ServicesSectionToggler.CZiECwGs.js","@/components/navigation/ThemeToggler":"_astro/ThemeToggler.De6a8AIY.js","@astrojs/react/client.js":"_astro/client.DN66T_XL.js","/Users/maxwellkjr/Projects/bymjcodes/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts":"_astro/ClientRouter.astro_astro_type_script_index_0_lang.BScVxmeO.js","/Users/maxwellkjr/Projects/bymjcodes/node_modules/sanity/lib/_chunks-es/resources.mjs":"_astro/resources.qYnkU0pc.js","/Users/maxwellkjr/Projects/bymjcodes/node_modules/sanity/lib/_chunks-es/resources3.mjs":"_astro/resources3.CzyVTivp.js","/Users/maxwellkjr/Projects/bymjcodes/node_modules/sanity/lib/_chunks-es/resources2.mjs":"_astro/resources2.ZMZl87Bz.js","/Users/maxwellkjr/Projects/bymjcodes/node_modules/sanity/lib/_chunks-es/ViteDevServerStopped.mjs":"_astro/ViteDevServerStopped.BIRizVxK.js","/Users/maxwellkjr/Projects/bymjcodes/node_modules/@sanity/client/dist/_chunks-es/stegaEncodeSourceMap.js":"_astro/stegaEncodeSourceMap.a4dxEphx.js","/Users/maxwellkjr/Projects/bymjcodes/node_modules/sanity/lib/_chunks-es/resources4.mjs":"_astro/resources4.CV3gaJVr.js","/Users/maxwellkjr/Projects/bymjcodes/node_modules/sanity/lib/_chunks-es/index3.mjs":"_astro/index3.DP4sKID1.js","/Users/maxwellkjr/Projects/bymjcodes/node_modules/sanity/lib/_chunks-es/index.mjs":"_astro/index.SsPhxwZ7.js","/Users/maxwellkjr/Projects/bymjcodes/node_modules/sanity/lib/_chunks-es/index2.mjs":"_astro/index2.aF2mYAjT.js","/Users/maxwellkjr/Projects/bymjcodes/node_modules/@sanity/astro/dist/studio/studio-component":"_astro/studio-component.DRH4Wonh.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/mjk.CcdzaHOE.jpg","/_astro/about.BirLy7N7.css","/_astro/studio-route.CTvPEBax.css","/favicon.svg","/icon.png","/js.png","/_astro/AboutSectionsToggler.PBdX797c.js","/_astro/ClientRouter.astro_astro_type_script_index_0_lang.BScVxmeO.js","/_astro/ServicesSectionToggler.CZiECwGs.js","/_astro/ThemeToggler.De6a8AIY.js","/_astro/ViteDevServerStopped.BIRizVxK.js","/_astro/browser.CRtKG5s2.js","/_astro/client.DN66T_XL.js","/_astro/client.b8e7hcR9.js","/_astro/createLucideIcon.DdXrP5OZ.js","/_astro/index.9KBFB2eE.js","/_astro/index.KB549VjX.js","/_astro/index.SsPhxwZ7.js","/_astro/index2.aF2mYAjT.js","/_astro/index3.DP4sKID1.js","/_astro/jsx-runtime.D_zvdyIk.js","/_astro/resources.qYnkU0pc.js","/_astro/resources2.ZMZl87Bz.js","/_astro/resources3.CzyVTivp.js","/_astro/resources4.CV3gaJVr.js","/_astro/stegaEncodeSourceMap.a4dxEphx.js","/_astro/studio-component.C0b7EJNL.js","/_astro/studio-component.DRH4Wonh.js","/about/my-skills/index.html","/about/index.html","/services/index.html","/index.html"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[["@/components/cards/Card.astro","Card"]],"key":"AMbuRSM/UqYo2nzgymBYzC+iVixP3sQ4VY+rneFIpFk="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };

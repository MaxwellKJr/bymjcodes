import { b as createAstro, c as createComponent, m as maybeRenderHead, s as spreadAttributes, a as renderTemplate } from './astro/server_BdfX4GWh.mjs';
import { inferImageDimensions, transformProps, transformSourceProps } from '@unpic/core';
import { getProviderForUrl, transformUrl } from 'unpic';
import { getPixels } from '@unpic/pixels';
import { i as imageConfig } from './_astro_assets_B8CH9-Az.mjs';
import { g as getDefaultImageCdn, a as getEndpointOptions } from './utils_aGetP8J4.mjs';
import 'clsx';

const specialBackgrounds = ["blurhash", "dominantColor", "lqip"];
function isValidUrl(url) {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}
async function getBackground(props) {
  if (props.background === "none") {
    return;
  }
  if (!specialBackgrounds.includes(props.background ?? "")) {
    return props.background;
  }
  let aspectRatio = props.aspectRatio;
  if (!aspectRatio) {
    if (props.width && props.height) {
      aspectRatio = props.height / props.width;
    } else {
      aspectRatio = 1;
    }
  }
  const cdn = getProviderForUrl(props.src) ?? props.fallback;
  if (!cdn) {
    return;
  }
  const bgImgProps = {
    url: props.src,
    width: 12,
    height: 12 * aspectRatio,
    fallback: props.fallback,
    cdn
  };
  if (!cdn) {
    return;
  }
  if (props.background === "lqip") {
    const lowUrl2 = transformUrl(
      bgImgProps,
      props.operations,
      props.options
    )?.toString();
    if (!lowUrl2) {
      return;
    }
    if (!isValidUrl(lowUrl2)) {
      return;
    }
    const response = await fetch(lowUrl2, {
      headers: {
        Accept: "image/webp,*/*"
      }
    });
    const contentType = response.headers.get("Content-Type");
    const blob = await response.blob();
    const buffer = Buffer.from(await blob.arrayBuffer());
    return "data:" + contentType + ";base64," + buffer.toString("base64");
  }
  const lowUrl = transformUrl(
    {
      ...bgImgProps,
      width: 100,
      height: 100 * aspectRatio
    },
    props.operations,
    props.options
  )?.toString();
  if (!lowUrl) {
    return;
  }
  if (!isValidUrl(lowUrl)) {
    return;
  }
  const pixels = await getPixels(lowUrl);
  if (!pixels) {
    return;
  }
  const data = Uint8ClampedArray.from(pixels.data);
  const { blurhashToDataUri, rgbColorToCssString, getDominantColor } = await import('@unpic/placeholder');
  if (props.background === "blurhash") {
    const { encode } = await import('blurhash');
    const blurhash = encode(data, pixels.width, pixels.height, 4, 3);
    return blurhashToDataUri(blurhash);
  }
  if (props.background === "dominantColor") {
    return rgbColorToCssString(getDominantColor(data));
  }
}

const $$Astro$1 = createAstro("https://bymjcodes.com");
const $$Image = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Image;
  const { placeholder, ...props } = Astro2.props;
  let imgProps;
  if (typeof props.src === "object") {
    imgProps = {
      ...props,
      src: props.src.src,
      ...inferImageDimensions(props, props.src)
    };
  } else {
    imgProps = {
      ...props
    };
  }
  const config = imageConfig.service?.config;
  imgProps.layout ||= config?.layout;
  imgProps.background ||= placeholder ?? config?.placeholder;
  imgProps.background = await getBackground(imgProps);
  if (!imgProps.cdn && !imgProps.fallback) {
    imgProps.fallback = getDefaultImageCdn(config);
  }
  if (imgProps.cdn === "astro" || imgProps.fallback === "astro") {
    imgProps.options = getEndpointOptions(imageConfig, imgProps.options);
  }
  return renderTemplate`${maybeRenderHead()}<img${spreadAttributes(transformProps(imgProps))}>`;
}, "/Users/maxwellkjr/Projects/bymjcodes/node_modules/@unpic/astro/src/Image.astro", void 0);

const $$Astro = createAstro("https://bymjcodes.com");
const $$Source = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Source;
  const props = Astro2.props;
  let sourceProps;
  if (typeof props.src === "object") {
    sourceProps = {
      ...props,
      src: props.src.src,
      ...inferImageDimensions(props, props.src)
    };
  } else {
    sourceProps = props;
  }
  const config = imageConfig.service?.config;
  sourceProps.layout ||= config?.layout;
  if (!sourceProps.cdn && !sourceProps.fallback) {
    sourceProps.fallback = getDefaultImageCdn(config);
  }
  if (sourceProps.cdn === "astro" || sourceProps.fallback === "astro") {
    sourceProps.options = getEndpointOptions(imageConfig, sourceProps.options);
  }
  return renderTemplate`${maybeRenderHead()}<source${spreadAttributes(transformSourceProps(sourceProps))}>`;
}, "/Users/maxwellkjr/Projects/bymjcodes/node_modules/@unpic/astro/src/Source.astro", void 0);

export { $$Image as $ };

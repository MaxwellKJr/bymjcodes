import { transformProps, normalizeImageType, getSrcSetEntries, inferImageDimensions } from '@unpic/core';
import { transformUrl } from 'unpic';
import { env } from 'node:process';

function getDefaultService() {
  if (env.NETLIFY || env.NETLIFY_LOCAL || "Netlify" in globalThis) {
    return "netlify";
  }
  if (env.VERCEL || env.NOW_BUILDER) {
    return "vercel";
  }
  return "astro";
}
function getCdn(imageConfig) {
  if (!imageConfig.fallbackService || imageConfig.fallbackService === "sharp" || imageConfig.fallbackService === "squoosh") {
    return getDefaultService();
  }
  return imageConfig.fallbackService;
}
function getTransformOptions(options, unpicConfig) {
  const cdn = getCdn(unpicConfig);
  const { widths: breakpoints, densities, ...transform } = options;
  if (typeof options.src !== "string") {
    return {
      cdn,
      ...transform,
      ...inferImageDimensions(options, options.src),
      url: options.src.src
    };
  } else {
    return {
      cdn,
      ...transform,
      url: options.src
    };
  }
}
const service = {
  getSrcSet(options, imageConfig) {
    const attributes = options.format ? { type: normalizeImageType(options.format) } : void 0;
    const transformOptions = getTransformOptions(
      options,
      imageConfig.service.config
    );
    const cdnOptions = getEndpointOptions(imageConfig);
    const entries = getSrcSetEntries({
      ...transformOptions,
      options: cdnOptions,
      src: transformOptions.url
    });
    return entries.map(({ width, height }) => ({
      transform: {
        ...options,
        width: Number(width),
        height: Number(height)
      },
      descriptor: `${width}w`,
      attributes
    }));
  },
  validateOptions(options) {
    if (options.densities) {
      console.warn(
        "The densities option is not supported by the unpic image service"
      );
    }
    return options;
  },
  getURL(options, imageConfig) {
    const transformOptions = getTransformOptions(
      options,
      imageConfig.service.config
    );
    transformOptions.cdnOptions = getEndpointOptions(
      imageConfig,
      transformOptions.cdnOptions
    );
    return transformUrl(transformOptions)?.toString() ?? "";
  },
  getHTMLAttributes(options, imageConfig) {
    const transformOptions = getTransformOptions(
      options,
      imageConfig.service.config
    );
    const { src, srcset, ...props } = transformProps({
      ...transformOptions,
      src: transformOptions.url.toString()
    });
    return props;
  }
};

function getDefaultImageCdn(config) {
  if (config?.fallbackService === "squoosh" || config?.fallbackService === "sharp") {
    return "astro";
  }
  return config.fallbackService ?? getDefaultService();
}
function getEndpointOptions(imageConfig, options = {}) {
  options.astro ??= {};
  options.astro.endpoint = typeof imageConfig?.endpoint === "object" ? (
    // The astro types are wrong here
    imageConfig?.endpoint?.route
  ) : imageConfig?.endpoint;
  return options;
}

export { getEndpointOptions as a, getDefaultImageCdn as g, service as s };

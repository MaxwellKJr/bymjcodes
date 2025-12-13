import { createImageUrlBuilder, type SanityImageSource } from "@sanity/image-url";
import { sanityClient } from "sanity:client";

export const imageBuilder = createImageUrlBuilder(sanityClient);

export function urlForImage(source: SanityImageSource) {
  return imageBuilder.image(source).auto("format").quality(90).url();
}

export function urlForPostImage(source: SanityImageSource) {
  return imageBuilder
    .image(source)
    .auto("format")
    .width(500)
    .height(250)
    .maxHeight(250)
    .quality(50)
    .url();
}

export function urlForProjectImage(source: SanityImageSource) {
  return imageBuilder.image(source).auto("format").quality(50).url();
}

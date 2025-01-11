import type { SanityAsset } from '@sanity/image-url/lib/types/types';
import imageUrlBuilder from "@sanity/image-url";
import { sanityClient } from 'sanity:client';

export const imageBuilder = imageUrlBuilder(sanityClient);

export function urlForImage(source: SanityAsset) {
  return imageBuilder
  .image(source)
  .auto('format')
  .quality(90)
  .url();
}

export function urlForPostImage(source: SanityAsset) {
  return imageBuilder
  .image(source)
  .auto('format')
  .width(500)
  .height(250)
  .maxHeight(250)
  .quality(100)
  .url();
}

export function urlForProjectImage(source: SanityAsset) {
  return imageBuilder
  .image(source)
  .auto('format')
  .quality(100)
  .url();
}
import type { SanityDocument } from "@sanity/client";
import type { Category } from "./Category";

export default interface Post extends SanityDocument {
  title: string;
  slug: {
    current: string;
  };
  author?: {
    name: string;
    image: string;
  };
  description: string;
  mainImage: {
    alt: string;
    asset: {
      _ref: string;
    };
  };
  categories: Category[];
  publishedAt: string;
  body: [object];
}
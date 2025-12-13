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
      _id: string;
      url: string;
    metadata: {
      dimensions: {
        width: number;
        height: number;
      }
    }
    };
  };
  categories: Category[];
  publishedAt: string;
  body: object[];
}

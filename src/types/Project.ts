import type { Category } from "./Category";
import type { SanityDocument } from "@sanity/client";

export default interface Project extends SanityDocument {
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
    };
  };
  projectUrl: string;
  githubUrl?: string | null;
  categories: Category[];
  publishedAt: string;
  body: object[];
}

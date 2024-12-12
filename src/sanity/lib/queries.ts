import groq from "groq";

export const POSTS_QUERY = groq`*[_type == "post" && defined(slug)]{
  _id,
  title,
  description,
  slug,
  publishedAt,
  body,
  "categories": categories[]->{
    _id,
    title,
    slug
  },
  "author": author->{
    _id,
    name,
    bio,
    "image": image.asset->url
  },
  mainImage {
    asset->{
      _id,
      url
    },
    alt
  }
}`;

export const POST_QUERY = groq`*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  description,
  slug,
  publishedAt,
  body,
  "categories": categories[]->{
    _id,
    title,
    slug
  },
  "author": author->{
    _id,
    name,
    bio,
    "image": image.asset->url
  },
  mainImage {
    asset->{
      _id,
      url
    },
    alt
  }
}`;

export const PROJECTS_QUERY = groq`*[_type == "project" && defined(slug)] | order(publishedAt desc){
  _id,
  title,
  description,
  slug,
  publishedAt,
  body,
  "authors": authors[]->{
    _id,
    name,
    bio,
    "image": image.asset->url
  },
  projectUrl,
  githubUrl,
  "categories": categories[]->{
    _id,
    title,
    slug
  },
  "tags": tags[],
  mainImage {
    asset->{
      _id,
      url
    },
    alt
  }
}`;
import { s as sanityClient } from './_sanity_client_fIYNuKS7.mjs';
import groq from 'groq';

async function loadQuery({
  query,
  params
}) {
  const { result } = await sanityClient.fetch(
    query,
    params ?? {},
    { filterResponse: false }
  );
  return {
    data: result
  };
}

const POSTS_QUERY = groq`*[_type == "post" && defined(slug)]  | order(publishedAt desc) {
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
const POST_QUERY = groq`*[_type == "post" && slug.current == $slug][0]{
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
const PROJECTS_QUERY = groq`*[_type == "project" && defined(slug)] | order(publishedAt desc){
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

export { POST_QUERY as P, POSTS_QUERY as a, PROJECTS_QUERY as b, loadQuery as l };

import { theme } from 'https://themer.sanity.build/api/hues?default=lightest:f9e2ed;darkest:120c0f&primary=e93395';

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schema } from "./src/sanity/schemaTypes/index";

export default defineConfig({
  theme,
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET,
  plugins: [structureTool()],
  schema
});

import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { dispatchesSchema } from "./schemas/dispatches";

const dispatches = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/dispatches" }),
  schema: dispatchesSchema,
});

export const collections = { dispatches };

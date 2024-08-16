// 1. Import utilities from `astro:content`
import { rssSchema } from "@astrojs/rss";
import { z, defineCollection } from "astro:content";
// 2. Define your collection(s)
const learnCollection = defineCollection({
  schema: rssSchema,
});

const lf08Collection = defineCollection({
  schema: rssSchema,
});
const lf07Collection = defineCollection({
  schema: rssSchema,
});
const lf06Collection = defineCollection({
  schema: rssSchema,
});
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  learn: learnCollection,
  lf08: lf08Collection,
  lf07: lf07Collection,
  lf06: lf06Collection,
};

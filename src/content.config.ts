
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const articles = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/articles",
  }),

  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    category: z.enum([
      "یادگیری ریاضی",
      "راهنمای والدین",
      "راهنمای دانش‌آموزان",
    ]),
    cover: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  articles,
};

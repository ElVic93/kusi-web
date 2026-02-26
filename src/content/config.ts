// src/content/config.ts
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(), // convierte "2024-03-20" => Date
    tags: z.array(z.string()).default([]),
    lang: z.enum(["en", "es"]).default("en"),
    coverImage: z.string().optional(),
    canonical: z.string().optional(),
  }),
});

export const collections = { blog };
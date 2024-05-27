import * as z from "zod";

const imageSchema = z.object({
  asset: z.object({
    _ref: z.string(),
  }),
  _type: z.string(),
});

const slugSchema = z.object({
  current: z.string(),
});

export const seoSchema = z.object({
  title: z.string(),
  description: z.string(),
  image: imageSchema,
  noindex: z.boolean(),
});

export const pageBuilderSchema = z.any();

export const pageTypeValidator = z.object({
  title: z.string(),
  slug: slugSchema,
  excerpt: z.string(),
  featuredImage: imageSchema,
  pageBuilder: pageBuilderSchema,
  seo: seoSchema,
});

import * as z from "zod";

const imageSchema = z
  .object({
    asset: z.object({
      _ref: z.string(),
    }),
  })
  .nullable();

const slugSchema = z.object({
  current: z.string(),
});

export const seoSchema = z
  .object({
    title: z.string(),
    description: z.string(),
    image: imageSchema,
    noindex: z.boolean(),
  })
  .nullable();

export const pageBuilderSchema = z.any();

export const siteSettingsValidator = z.object({
  siteTitle: z.string(),
  description: z.string().nullable(),
  siteSEOSettings: z.string().nullable(),
  contactEmail: z.string().nullable(),
  contactPhone: z.string().nullable(),
  socialMedia: z.object({
    facebook: z.string().nullable(),
    instagram: z.string().nullable(),
    twitter: z.string().nullable(),
    linkedin: z.string().nullable(),
  }),
  logo: imageSchema,
});

export const homeTypeValidator = z.object({
  title: z.string(),
  excerpt: z.string().nullable(),
  pageBuilder: pageBuilderSchema,
  seo: seoSchema,
});

export const pageTypeValidator = z.object({
  title: z.string(),
  slug: slugSchema,
  excerpt: z.string(),
  featuredImage: imageSchema,
  pageBuilder: pageBuilderSchema,
  seo: seoSchema,
});

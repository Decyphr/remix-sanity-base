import { defineField, defineType } from "sanity";

export const seoType = defineType({
  name: "seo",
  title: "SEO",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Meta Title",
      description:
        "Leave empty to use the page title. (60 characters max. Optimized length: 50-60 characters)",
      type: "string",
      validation: (Rule) =>
        Rule.max(60).warning("Meta Title should be under 60 characters."),
    }),
    defineField({
      name: "description",
      title: "Meta Description",
      description:
        "Leave empty to use the page excerpt. (160 characters max. Optimized length: 140-160 characters)",
      type: "text",
      validation: (Rule) =>
        Rule.max(160).warning(
          "Meta Description should be under 160 characters."
        ),
    }),
    defineField({
      name: "keywords",
      title: "Keywords",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    }),
    defineField({
      name: "image",
      title: "Meta Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "noindex",
      title: "No Index",
      type: "boolean",
      description: "Prevent search engines from indexing this page.",
    }),
  ],
});

import { defineField, defineType } from "sanity";

export const seoType = defineType({
  name: "seo",
  title: "SEO",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title for SEO & Social Sharing",
      description:
        "Make it as enticing as possible to convert users in social feeds and Google searches. Ideally between 15 and 70 characters.",
      type: "string",
      validation: (Rule) =>
        Rule.max(70).warning(
          "Title should be no more than 70 characters long."
        ),
    }),
    defineField({
      name: "description",
      title: "Short paragraph for SEO & Social Sharing (Meta Description)",
      description:
        "⚡ Optional but highly encouraged as it'll help you convert more visitors from Google & social. Ideally between 70 and 160 characters.",
      type: "text",
      validation: (Rule) =>
        Rule.max(160).warning(
          "Description should be no more than 160 characters."
        ),
    }),
    defineField({
      name: "image",
      title: "Social Sharing Image",
      description:
        "⚡ Optional but highly encouraged for increasing conversion rates for links to this page shared in social media.",
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

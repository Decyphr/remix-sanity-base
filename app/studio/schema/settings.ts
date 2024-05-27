import { defineField, defineType } from "sanity";

export const settingsType = defineType({
  name: "settings",
  title: "Settings",
  type: "document",
  groups: [
    {
      title: "General",
      name: "general",
    },
    {
      title: "SEO",
      name: "seo",
    },
    {
      title: "Social Media",
      name: "socialMedia",
    },
  ],
  fields: [
    defineField({
      name: "siteTitle",
      type: "string",
      group: "general",
    }),
    defineField({
      name: "description",
      title: "Site Description",
      type: "text",
      group: "general",
    }),
    defineField({
      name: "logo",
      title: "Site Logo",
      type: "image",
      group: "general",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "contactEmail",
      title: "Contact Email",
      type: "string",
      group: "general",
    }),
    defineField({
      name: "contactPhone",
      title: "Contact Phone",
      type: "string",
      group: "general",
    }),
    defineField({
      name: "socialMedia",
      title: "Social Media Links",
      type: "object",
      group: "socialMedia",
      fields: [
        defineField({
          name: "facebook",
          title: "Facebook",
          type: "url",
        }),
        defineField({
          name: "twitter",
          title: "Twitter",
          type: "url",
        }),
        defineField({
          name: "instagram",
          title: "Instagram",
          type: "url",
        }),
        defineField({
          name: "linkedin",
          title: "LinkedIn",
          type: "url",
        }),
      ],
    }),
    defineField({
      name: "siteSEOSettings",
      type: "seo",
      group: "seo",
    }),
  ],
});

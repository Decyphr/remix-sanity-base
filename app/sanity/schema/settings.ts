import { defineField, defineType } from "sanity";

export const settingsSchema = defineType({
  name: "settings",
  title: "Settings",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "siteTitle",
      type: "string",
    }),
  ],
  preview: {
    select: {
      title: "title",
      artist: "siteTitle",
    },
  },
});

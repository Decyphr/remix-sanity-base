import { defineField, defineType } from "sanity";

export const homeSchema = defineType({
  name: "home",
  title: "Home",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
  ],
});

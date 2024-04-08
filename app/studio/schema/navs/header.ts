import { defineField, defineType } from "sanity";

export const headerNavigationType = defineType({
  name: "headerNavigation",
  title: "Header Navigation",
  type: "document",
  fields: [
    defineField({
      name: "items",
      title: "Navigation Items",
      type: "array",
      of: [{ type: "navItem" }],
    }),
  ],
});

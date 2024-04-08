import { defineField, defineType } from "sanity";

export const footerNavigationType = defineType({
  name: "footerNavigation",
  title: "Footer Navigation",
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

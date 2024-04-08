import { defineField, defineType } from "sanity";

export const auxiliaryNavigationType = defineType({
  name: "auxiliaryNavigation",
  title: "Auxiliary Navigation",
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

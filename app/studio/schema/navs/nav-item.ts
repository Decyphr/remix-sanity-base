import { LinkIcon } from "lucide-react";
import { defineField, defineType } from "sanity";

export const navItemType = defineType({
  name: "navItem",
  title: "Navigation Item",
  icon: LinkIcon,
  type: "object",
  fields: [
    defineField({
      name: "navLink",
      title: "Navigation Link",
      type: "link",
    }),
    defineField({
      name: "children",
      title: "Sub-items",
      type: "array",
      of: [{ type: "navItem" }],
      // You could use validation here to limit the depth of nesting if necessary
    }),
  ],
  preview: {
    select: {
      title: "navLink.text",
      url: "navLink.url",
      internalLink: "navLink.internalLink.slug.current",
      isExternalLink: "navLink.isExternalLink",
    },
    prepare({ title, url, internalLink, isExternalLink }) {
      const subtitle =
        isExternalLink && url
          ? url
          : internalLink
          ? `/${internalLink}`
          : "No link provided!";

      return {
        title: title || "No Link Text Provided!",
        subtitle,
      };
    },
  },
});

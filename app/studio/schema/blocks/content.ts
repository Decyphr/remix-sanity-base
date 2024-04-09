import { AlignLeftIcon } from "lucide-react";
import { UrlRule, defineField, defineType } from "sanity";

export const contentBlockType = defineType({
  name: "contentBlock",
  title: "Content Block",
  type: "document",
  icon: AlignLeftIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "array",
      of: [
        {
          type: "block",
          marks: {
            // Define decorators like bold, italic, etc.
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
            ],
            // Incorporating the custom Link object
            annotations: [
              {
                name: "link",
                type: "object",
                title: "Link",
                fields: [
                  defineField({
                    name: "text",
                    title: "Text",
                    type: "string",
                  }),
                  defineField({
                    name: "isExternalLink",
                    title: "External Link",
                    type: "boolean",
                    initialValue: false,
                  }),
                  defineField({
                    name: "url",
                    title: "URL",
                    type: "url",
                    hidden: ({ parent }) => !parent?.isExternalLink,
                    validation: (rule: UrlRule) =>
                      rule.uri({
                        allowRelative: true, // Allow relative URLs for internal links
                        scheme: ["http", "https", "mailto", "tel"], // Extend with any schemes you need
                      }),
                  }),
                  defineField({
                    name: "newTab",
                    title: "Open in new tab",
                    type: "boolean",
                    initialValue: true,
                    hidden: ({ parent }) => !parent?.isExternalLink,
                  }),
                  defineField({
                    name: "internalLink",
                    title: "Internal Link",
                    type: "reference",
                    hidden: ({ parent }) => parent?.isExternalLink,
                    to: [{ type: "page" }], // Assuming you have a 'page' schema
                    // Optionally add a description or validation here
                  }),
                ],
              },
            ],
          },
        },
        {
          // You can add other types like images here if needed
          type: "image",
          options: { hotspot: true },
        },
      ],
    }),
  ],
});

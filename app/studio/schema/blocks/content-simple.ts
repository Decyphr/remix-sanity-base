import { UrlRule, defineArrayMember, defineField, defineType } from "sanity";

export const blockContentSimpleType = defineType({
  title: "Block Content Simple",
  name: "blockContentSimple",
  type: "array",
  of: [
    defineArrayMember({
      title: "Block",
      type: "block",
      // Styles let you set what your user can mark up blocks with. These
      // correspond with HTML tags, but you can set any title or value
      // you want and decide how you want to deal with it where you want to
      // use your content.
      styles: [{ title: "Normal", value: "normal" }],
      lists: [],
      // Marks let you mark up inline text in the block editor.
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting by editors.
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
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
                name: "url",
                title: "URL",
                type: "url",
                options: {
                  validation: (rule: UrlRule) =>
                    rule.uri({
                      allowRelative: true, // Allows for internal links
                      scheme: ["http", "https", "mailto", "tel"],
                    }),
                },
              }),
              defineField({
                name: "internalLink",
                title: "Internal Link",
                type: "reference",
                to: [{ type: "page" }], // Reference to your internal page schema
              }),
            ],
          },
        ],
      },
    }),
  ],
});

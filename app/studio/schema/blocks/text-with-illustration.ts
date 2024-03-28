import { ImageIcon } from "lucide-react";
import { defineField, defineType } from "sanity";

export const textWithIllustrationType = defineType({
  name: "textWithIllustration",
  type: "object",
  title: "Text with Illustration",
  icon: ImageIcon,
  fields: [
    defineField({
      name: "heading",
      type: "string",
    }),
    defineField({
      name: "excerpt",
      type: "blockContentSimple",
    }),
    defineField({
      name: "image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Alternative text",
          validation: (rule) => rule.required(),
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "heading",
      image: "image",
    },
    prepare({ title, image }) {
      return {
        title: title || "Untitled",
        subtitle: "Text with Illustration",
        media: image || ImageIcon,
      };
    },
  },
});

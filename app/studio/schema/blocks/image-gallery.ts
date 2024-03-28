// imageGallery.js

import { ImagesIcon } from "lucide-react";
import { defineField, defineType } from "sanity";

export const imageGalleryType = defineType({
  name: "gallery",
  type: "object",
  title: "Gallery",
  icon: ImagesIcon,
  fields: [
    {
      name: "heading",
      type: "string",
    },
    {
      name: "excerpt",
      type: "blockContentSimple",
    },
    {
      name: "images",
      type: "array",
      of: [
        defineField({
          name: "image",
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alternative text",
            },
          ],
        }),
      ],
      options: {
        layout: "grid",
      },
    },
  ],
  preview: {
    select: {
      title: "heading",
    },
    prepare({ title }) {
      return {
        title: title || "Untitled",
        subtitle: "Image Gallery",
      };
    },
  },
});

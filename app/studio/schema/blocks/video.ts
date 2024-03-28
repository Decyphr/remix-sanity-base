import { PlayCircleIcon } from "lucide-react";
import { defineField, defineType } from "sanity";

export const videoType = defineType({
  name: "video",
  type: "object",
  icon: PlayCircleIcon,
  fields: [
    defineField({
      name: "heading",
      type: "string",
    }),
    defineField({
      name: "url",
      type: "string",
      title: "URL",
    }),
  ],
  preview: {
    select: {
      title: "heading",
    },
    prepare({ title }) {
      return {
        title: title || "Untitled",
        subtitle: "Video",
      };
    },
  },
});

import { FileTextIcon } from "lucide-react";
import { defineArrayMember, defineField, defineType } from "sanity";

export const homeType = defineType({
  name: "home",
  title: "Home",
  type: "document",
  groups: [
    {
      title: "Content",
      name: "content",
    },
    {
      title: "SEO",
      name: "seo",
    },
  ],
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "excerpt",
      type: "text",
    }),
    defineField({
      name: "pageBuilder",
      type: "array",
      title: "Page builder",
      group: "content",
      of: [
        defineArrayMember({
          name: "hero",
          type: "hero",
        }),
        defineArrayMember({
          name: "contentBlock",
          type: "contentBlock",
        }),
        defineArrayMember({
          name: "gallery",
          type: "gallery",
        }),
        defineArrayMember({
          name: "form",
          type: "form",
        }),
        defineArrayMember({
          name: "video",
          type: "video",
        }),
        defineArrayMember({
          name: "callToAction",
          type: "reference",
          icon: FileTextIcon,
          to: [{ type: "page" }],
        }),
      ],
    }),
    defineField({
      name: "seo",
      type: "seo",
      group: "seo",
    }),
  ],
});

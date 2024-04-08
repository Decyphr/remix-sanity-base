import { FileTextIcon } from "lucide-react";
import { defineArrayMember, defineField, defineType } from "sanity";

export const pageType = defineType({
  name: "page",
  title: "Pages",
  type: "document",
  icon: FileTextIcon,
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
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
    }),
    defineField({
      name: "excerpt",
      type: "text",
    }),
    defineField({
      name: "featuredImage",
      title: "Featured Image",
      type: "image",
      options: {
        hotspot: true,
      },
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
  ],
  preview: {
    select: {
      title: "title",
      slug: "slug",
      image: "featuredImage",
    },
    prepare({ title, slug, image }) {
      return {
        title: title || "Untitled Page",
        subtitle: `/${slug.current}` || "No slug",
        image: image.asset || FileTextIcon,
      };
    },
  },
});

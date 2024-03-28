import { AlignLeftIcon } from "lucide-react";
import { defineField, defineType } from "sanity";

export const formType = defineType({
  name: "form",
  type: "object",
  icon: AlignLeftIcon,
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
      name: "form",
      type: "string",
      description: "Select form type",
      options: {
        list: ["newsletter", "contact"], // update this list with the forms you want to support
      },
    }),
  ],
  preview: {
    select: {
      title: "heading",
      form: "form",
    },
    prepare({ title, form }) {
      return {
        title: title || "Untitled",
        subtitle: form ? `Form (${form})` : "Form",
      };
    },
  },
});

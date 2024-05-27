import { presentationTool } from "@sanity/presentation";
import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { SANITY_STUDIO_BASEPATH } from "~/lib/constants";
import { locate } from "~/studio/presentation/locate";
import { projectDetails } from "~/studio/project-details";
import schema from "~/studio/schema";
import { defaultDocumentNode, structure } from "~/studio/structure";

export const config = defineConfig({
  ...projectDetails(),
  name: "sanity-remix",
  title: "Sanity Remix",
  plugins: [
    structureTool({ structure, defaultDocumentNode }),
    presentationTool({
      previewUrl: {
        previewMode: {
          enable: "/resources/preview",
        },
      },
      resolve: {
        locations: locate,
      },
    }),
    visionTool(),
  ],
  basePath: SANITY_STUDIO_BASEPATH,
  schema: {
    types: schema,
  },
});

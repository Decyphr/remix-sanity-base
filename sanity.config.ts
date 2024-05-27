import { presentationTool } from "@sanity/presentation";
import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import {
  SANITY_STUDIO_BASEPATH,
  SANITY_STUDIO_PREVIEW_PATH,
} from "~/lib/constants";
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
          enable: SANITY_STUDIO_PREVIEW_PATH,
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

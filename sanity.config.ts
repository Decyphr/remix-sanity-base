import { presentationTool } from "@sanity/presentation";
import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

import { Logo } from "~/studio/plugins/studio-logo/logo";
import { locate } from "~/studio/presentation/locate";
import { frontendUrl, projectDetails } from "~/studio/project-details";
import schema from "~/studio/schema";
import { defaultDocumentNode, structure } from "~/studio/structure";

export const config = defineConfig({
  ...projectDetails(),
  name: "sanity-remix",
  title: "Sanity Remix",
  plugins: [
    structureTool({ structure, defaultDocumentNode }),
    presentationTool({
      previewUrl: frontendUrl,
      resolve: {
        locations: locate,
      },
    }),
    visionTool(),
  ],
  basePath: `/studio`,
  schema: {
    types: schema,
  },
  studio: {
    components: {
      logo: Logo,
    },
  },
});

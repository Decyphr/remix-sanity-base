import { presentationTool } from "@sanity/presentation";
import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

import { Logo } from "~/sanity/plugins/studio-logo/logo";
import { locate } from "~/sanity/presentation/locate";
import { frontendUrl, projectDetails } from "~/sanity/project-details";
import schema from "~/sanity/schema";
import { defaultDocumentNode, structure } from "~/sanity/structure";

export const config = defineConfig({
  ...projectDetails(),
  name: "sanity-remix",
  title: "Sanity Remix",
  plugins: [
    structureTool({ structure, defaultDocumentNode }),
    presentationTool({
      previewUrl: frontendUrl,
      locate,
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

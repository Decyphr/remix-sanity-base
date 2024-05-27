import { createClient } from "@sanity/client";

import { apiVersion, dataset, projectId } from "~/studio/project-details";

export const viewClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token: process.env.SANITY_READ_TOKEN,
});

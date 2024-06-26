import { createClient } from "@sanity/client";
import { apiVersion, dataset, projectId } from "~/studio/project-details";

// Do not import this into client-side components unless lazy-loaded
export const client = createClient({
  projectId,
  dataset,
  useCdn: true,
  apiVersion,
});

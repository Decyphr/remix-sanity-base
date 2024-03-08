const { SANITY_PROJECT_ID, SANITY_DATASET, SANITY_API_VERSION } = ENV;

export const projectId = SANITY_PROJECT_ID!;
export const dataset = SANITY_DATASET!;
export const apiVersion = SANITY_API_VERSION ?? `2024-02-13`;

export const projectDetails = () => ({
  projectId,
  dataset,
  apiVersion,
});

// Enable stega on production deploys, but NOT the non-production domain
// Allow the production Studio to access non-production domains cross-origin

// This is used to enable stega on any URL except this one
// TODO - change this to production URL
export const PRODUCTION_URL = "https://sanity-remix-template.sanity.build";

export const frontendUrl = ENV.SANITY_FRONTEND_URL ?? "http://localhost:3333";

// This is the Studio URL that will be allowed to access the front end URL
export const studioUrl = ENV.SANITY_URL ?? "http://localhost:3333";
export const stegaEnabled = ENV.SANITY_STUDIO_STEGA_ENABLED === "true";

// If any of these values are missing, throw errors as the app requires them
if (!projectId) throw new Error("Missing SANITY_PROJECT_ID in .env");
if (!dataset) throw new Error("Missing SANITY_DATASET in .env");
if (!apiVersion) throw new Error("Missing SANITY_API_VERSION in .env");
if (!frontendUrl) throw new Error("Missing SANITY_FRONTEND_URL in .env");
if (!studioUrl) throw new Error("Missing SANITY_URL in .env");

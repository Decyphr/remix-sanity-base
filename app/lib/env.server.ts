import { z } from "zod";

const schema = z.object({
  NODE_ENV: z.enum(["production", "development", "test"] as const),
  SANITY_PROJECT_ID: z.string(),
  SANITY_DATASET: z.string(),
  SANITY_API_VERSION: z.string(),
  SANITY_FRONTEND_URL: z.string(),
  SANITY_URL: z.string(),
  SANITY_STUDIO_STEGA_ENABLED: z.string(),
  SANITY_READ_TOKEN: z.string().optional(),
  SANITY_WRITE_TOKEN: z.string().optional(),
});

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof schema> {}
  }
}

export function init() {
  const parsed = schema.safeParse(process.env);

  if (parsed.success === false) {
    console.error(
      "❌ Invalid environment variables:",
      parsed.error.flatten().fieldErrors
    );

    throw new Error("Invalid environment variables");
  }
}

/**
 * This is used in both `entry.server.ts` and `root.tsx` to ensure that
 * the environment variables are set and globally available before the app is
 * started.
 *
 * NOTE: Do *not* add any environment variables in here that you do not wish to
 * be included in the client.
 * @returns all public ENV variables
 */
export function getEnv() {
  return {
    SANITY_PROJECT_ID: process.env.SANITY_PROJECT_ID,
    SANITY_DATASET: process.env.SANITY_DATASET,
    SANITY_API_VERSION: process.env.SANITY_API_VERSION,
    SANITY_FRONTEND_URL: process.env.SANITY_FRONTEND_URL,
    SANITY_URL: process.env.SANITY_URL,
    SANITY_STUDIO_STEGA_ENABLED: process.env.SANITY_STUDIO_STEGA_ENABLED,
  };
}

type ENV = ReturnType<typeof getEnv>;

declare global {
  var ENV: ENV; // eslint-disable-line no-var
  interface Window {
    ENV: ENV;
  }
}

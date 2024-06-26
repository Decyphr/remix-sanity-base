import { vitePlugin as remix } from "@remix-run/dev";
import { installGlobals } from "@remix-run/node";
import { flatRoutes } from "remix-flat-routes";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

installGlobals();

const MODE = process.env.NODE_ENV;

const isStorybook = process.argv[1]?.includes("storybook");

export default defineConfig({
  server: {
    port: Number(process.env.PORT) ?? 3333,
  },
  build: {
    cssMinify: MODE === "production",
    rollupOptions: {
      external: [/node:.*/, "stream", "crypto", "fsevents"],
    },
  },
  plugins: [
    // only use remix plugin if not running storybook
    !isStorybook &&
      remix({
        // ignore all files in routes folder to prevent
        // default remix convention from picking up routes
        routes: async (defineRoutes) => {
          return flatRoutes("routes", defineRoutes, {
            ignoredRouteFiles: [
              ".*",
              "**/*.css",
              "**/*.test.{js,jsx,ts,tsx}",
              "**/__*.*",
              // This is for server-side utilities you want to colocate next to
              // your routes without making an additional directory.
              // If you need a route that includes "server" or "client" in the
              // filename, use the escape brackets like: my-route.[server].tsx
              "**/*.server.*",
              "**/*.client.*",
            ],
          });
        },
      }),
    tsconfigPaths(),
  ],
});

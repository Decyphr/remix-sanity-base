import type { LoaderFunctionArgs } from "@remix-run/node";
import { json, Outlet, useLoaderData } from "@remix-run/react";
import { VisualEditing } from "@sanity/visual-editing/remix";
import { ExitPreview } from "~/components/exit-preview";
import { loadQueryOptions } from "~/studio/load-query-options.server";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const { preview } = await loadQueryOptions(request.headers);

  return json({
    sanity: { preview },
  });
};

export default function Website() {
  const { sanity } = useLoaderData<typeof loader>();

  return (
    <>
      {/* TODO: <Header home={home} theme={theme} /> */}
      <Outlet />
      {/* TODO: <Footer home={home} /> */}
      {sanity.preview ? (
        <>
          <VisualEditing />
          <ExitPreview />
        </>
      ) : null}
    </>
  );
}

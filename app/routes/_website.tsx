import type { LoaderFunctionArgs } from "@remix-run/node";
import { json, Outlet, useLoaderData } from "@remix-run/react";
import { VisualEditing } from "@sanity/visual-editing/remix";
import { ExitPreview } from "~/components/exit-preview";
import { siteSettingsValidator } from "~/lib/validators";
import { loadQueryOptions } from "~/studio/load-query-options.server";
import { loadQuery } from "~/studio/loader.server";
import { SITE_SETTINGS_QUERY } from "~/studio/queries";
import { SiteSettingsType } from "~/types";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const { preview, options } = await loadQueryOptions(request.headers);

  const query = SITE_SETTINGS_QUERY;
  const initial = await loadQuery<SiteSettingsType>(query, {}, options).then(
    (res) => ({
      ...res,
      data: res.data ? siteSettingsValidator.parse(res.data) : null,
    })
  );

  return json({
    initial,
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

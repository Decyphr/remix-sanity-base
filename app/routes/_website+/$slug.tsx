import { LoaderFunctionArgs, MetaFunction, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";
import { GeneralErrorBoundary } from "~/components/error-boundary";
import PageBuilder from "~/components/page-builder";
import { pageTypeValidator } from "~/lib/validators";
import type { loader as layoutLoader } from "~/routes/_website";
import { loadQueryOptions } from "~/studio/load-query-options.server";
import { loadQuery } from "~/studio/loader.server";
import { PAGE_QUERY } from "~/studio/queries";
import type { PageType } from "~/types";

export async function loader({ params, request }: LoaderFunctionArgs) {
  invariant(params.slug, "No slug provided.");

  const { options } = await loadQueryOptions(request.headers);

  const query = PAGE_QUERY;
  const queryParams = { slug: params.slug };
  const initial = await loadQuery<PageType>(query, queryParams, options).then(
    (res) => ({
      ...res,
      data: res.data ? pageTypeValidator.parse(res.data) : null,
    })
  );

  if (!initial.data) {
    throw new Response("Not found", { status: 404 });
  }

  return json({ data: initial.data });
}

export const meta: MetaFunction<
  typeof loader,
  {
    "routes/_website": typeof layoutLoader;
  }
> = ({ data, matches }) => {
  const layoutData = matches.find(
    (match) => match.id === `routes/_website`
  )?.data;
  const siteSettings = layoutData ? layoutData.initial.data : null;

  const pageTitle = data?.data.seo?.title ?? data?.data.title ?? "";

  const title = [pageTitle, siteSettings?.siteTitle]
    .filter(Boolean)
    .join(" | ");

  const description =
    data?.data.seo?.description ?? siteSettings?.description ?? "";

  return [{ title, description }];
};

export default function DefaultPageRoute() {
  const { data } = useLoaderData<typeof loader>();

  return (
    <div>
      <h1 className="text-xl">{data.title}</h1>
      <p>{data.excerpt}</p>
      <PageBuilder blocks={data.pageBuilder} />
    </div>
  );
}

export function ErrorBoundary() {
  return <GeneralErrorBoundary />;
}

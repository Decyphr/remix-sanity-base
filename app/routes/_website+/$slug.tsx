import { LoaderFunctionArgs, MetaFunction, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";
import PageBuilder from "~/components/page-builder";
import { pageTypeValidator } from "~/lib/validators";
import { loadQueryOptions } from "~/studio/load-query-options.server";
import { loadQuery } from "~/studio/loader.server";
import { PAGE_QUERY } from "~/studio/queries";
import type { PageType } from "~/types";

export async function loader({ params, request }: LoaderFunctionArgs) {
  invariant(params.slug, "No slug provided.");

  const { options } = await loadQueryOptions(request.headers);

  const query = PAGE_QUERY;
  const initial = await loadQuery<PageType>(
    query,
    { slug: params.slug },
    options
  ).then((res) => ({
    ...res,
    data: res.data ? pageTypeValidator.parse(res.data) : null,
  }));

  if (!initial.data) {
    throw new Response("Not found", { status: 404 });
  }

  return json({ data: initial.data });
}

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
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

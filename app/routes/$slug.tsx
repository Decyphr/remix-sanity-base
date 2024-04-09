import { LoaderFunctionArgs, MetaFunction, json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { useQuery } from "@sanity/react-loader";
import invariant from "tiny-invariant";
import { loadQuery } from "~/studio/loader.server";
import { PAGE_QUERY } from "~/studio/queries";
import type { PageType } from "~/types";

export async function loader({ params }: LoaderFunctionArgs) {
  invariant(params.slug, "No slug provided.");
  const initial = await loadQuery<PageType>(PAGE_QUERY, { slug: params.slug });

  return json({ initial, query: PAGE_QUERY, params: { slug: params.slug } });
}

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function DefaultPageRoute() {
  const { initial, query, params } = useLoaderData<typeof loader>();
  const { data, loading, error } = useQuery<typeof initial.data>(
    query,
    params,
    {
      // @ts-expect-error - pages
      initial,
    }
  );

  if (error) {
    throw error;
  } else if (loading && !data) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return (
      <div>
        Add homepage content in the <Link to="/studio">Sanity Studio</Link>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-xl">{data.title}</h1>
      <p>{data.excerpt}</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

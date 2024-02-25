import { json, type MetaFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { useQuery } from "@sanity/react-loader";
import { loadQuery } from "~/sanity/loader.server";
import { HOME_QUERY } from "~/sanity/queries";
import { Home } from "~/types";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader = async () => {
  const initial = await loadQuery<Home>(HOME_QUERY);

  return json({ initial, query: HOME_QUERY, params: {} });
};

export default function Index() {
  const { initial, query, params } = useLoaderData<typeof loader>();
  const { data, loading, error } = useQuery<typeof initial.data>(
    query,
    params,
    {
      // @ts-expect-error - home
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
        Add homepage content at <Link to="/studio"></Link>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-xl">{data.title}</h1>
    </div>
  );
}

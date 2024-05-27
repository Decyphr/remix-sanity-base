import { LoaderFunctionArgs, type MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Button } from "~/components/ui/button";
import { homeTypeValidator } from "~/lib/validators";
import type { loader as layoutLoader } from "~/routes/_website";
import { loadQueryOptions } from "~/studio/load-query-options.server";
import { loadQuery } from "~/studio/loader.server";
import { HOME_QUERY } from "~/studio/queries";
import type { HomeType } from "~/types";

export const meta: MetaFunction<
  typeof loader,
  {
    "routes/_website": typeof layoutLoader;
  }
> = ({ matches }) => {
  const layoutData = matches.find(
    (match) => match.id === `routes/_website`
  )?.data;
  const siteSettings = layoutData ? layoutData.initial.data : null;
  const title = [siteSettings?.siteTitle].filter(Boolean).join(" | ");

  return [{ title }];
};

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const { options } = await loadQueryOptions(request.headers);
  const query = HOME_QUERY;
  const queryParams = {};
  const initial = await loadQuery<HomeType>(query, queryParams, options).then(
    (res) => ({
      ...res,
      data: res.data ? homeTypeValidator.parse(res.data) : null,
    })
  );

  if (!initial.data) {
    throw new Response("Not found", { status: 404 });
  }

  return { data: initial.data };
};

export default function Homepage() {
  const { data } = useLoaderData<typeof loader>();

  return (
    <div>
      <h1 className="text-xl">{data.title}</h1>
      <Button>Styled Button</Button>
    </div>
  );
}

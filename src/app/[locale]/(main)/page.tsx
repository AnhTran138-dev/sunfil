import { QUERYKEYS } from "@/lib/query-key";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { getQueryClient } from "@/lib/get-query-client";
import { getProducts } from "@/features/product/action";
import HomePage from "@/components/local/home-screen/home-page";
import { Locale } from "next-intl";
import { setRequestLocale } from "next-intl/server";

type Props = {
  params: Promise<{ locale: Locale }>;
};

export default async function Home({ params }: Props) {
  const queryClient = getQueryClient();
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  const data = await queryClient.fetchQuery({
    queryKey: [QUERYKEYS.product],
    queryFn: getProducts,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <HomePage products={data.value.items} />
    </HydrationBoundary>
  );
}

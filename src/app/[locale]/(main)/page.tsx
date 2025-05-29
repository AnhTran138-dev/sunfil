import { QUERYKEYS } from "@/lib/query-key";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { getQueryClient } from "@/lib/get-query-client";
import { getProducts } from "@/features/product/action";
import HomePage from "@/components/local/home-screen/home-page";

export default async function Home() {
  const queryClient = getQueryClient();

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

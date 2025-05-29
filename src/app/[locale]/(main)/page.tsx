import { QUERYKEYS } from "@/lib/query-key";
// import { getProducts } from "./action";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { getQueryClient } from "@/lib/get-query-client";
import { getProducts } from "@/features/product/action";

export default async function Home() {
  const queryClient = getQueryClient();

  // Prefetch data if needed
  const data = await queryClient.fetchQuery({
    queryKey: [QUERYKEYS.product],
    queryFn: getProducts,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {/* <HomePage products={data.value.items} /> */}
    </HydrationBoundary>
  );
}

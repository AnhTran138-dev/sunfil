import HomeClient from "@/components/screens/home-page/home-client";
import { getCategories } from "@/features/category/action";
import {
  getManyProducts,
  getProduct,
  getProducts,
} from "@/features/product/action";
import { getQueryClient } from "@/lib/get-query-client";
import { QUERYKEYS } from "@/lib/query-key";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import React from "react";

export default async function HomePage() {
  const queryClient = getQueryClient();

  await Promise.all([
    queryClient.prefetchQuery({
      queryKey: [QUERYKEYS.product.listAll],
      queryFn: () => getProducts(),
    }),
    queryClient.prefetchQuery({
      queryKey: [QUERYKEYS.product.findOne],
      queryFn: () => getProduct(),
    }),
    queryClient.prefetchQuery({
      queryKey: [QUERYKEYS.product.getMany],
      queryFn: () => getManyProducts(),
    }),
    queryClient.prefetchQuery({
      queryKey: [QUERYKEYS.categories.listAll],
      queryFn: () => getCategories(),
    }),
  ]);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <HomeClient />
    </HydrationBoundary>
  );
}

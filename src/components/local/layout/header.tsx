import { getQueryClient } from "@/lib/get-query-client";
import { QUERYKEYS } from "@/lib/query-key";

import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { VStack } from "@/components/global/atoms/vstack";
import { TopBanner } from "./top-banner";
import { getProducts } from "@/features/product/action";
import { getCategories } from "@/features/category/action";
import UtilityHeader from "./utility-header";
import NavMenu from "./nav-menu";

export async function Header() {
  const queryClient = getQueryClient();

  const categoriesData = await queryClient.fetchQuery({
    queryKey: [QUERYKEYS.categories],
    queryFn: getCategories,
  });

  const productsData = await queryClient.fetchQuery({
    queryKey: [QUERYKEYS.product],
    queryFn: getProducts,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <header>
        <TopBanner />

        {/* Header */}
        <VStack className=" py-4 px-10 shadow-sm">
          <UtilityHeader />
          <NavMenu
            categories={categoriesData.value.items}
            products={productsData.value.items}
          />
        </VStack>
      </header>
    </HydrationBoundary>
  );
}

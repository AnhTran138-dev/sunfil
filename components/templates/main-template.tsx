import React from "react";

import Footer from "../organisms/layout/footer";
import Header from "../organisms/layout/header";
import DynamicBreadcrumb from "../organisms/breadcrumb/dynamic";
import Container from "../atomic/container";
import { getQueryClient } from "@/lib/get-query-client";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { getCategories } from "@/features/category/action";
import { QUERYKEYS } from "@/lib/query-key";

interface MainTemplateProps {
  children: React.ReactNode;
}

export default async function MainTemplate({ children }: MainTemplateProps) {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: [QUERYKEYS.categories.listAll],
    queryFn: () => getCategories(),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <Container>
            <DynamicBreadcrumb />
          </Container>
          {children}
        </main>
        <Footer />
      </div>
    </HydrationBoundary>
  );
}

"use client";

import React from "react";
import FilterProduct from "./filter-product";
import { VStack } from "@/components/atomic/vstack";
import { Typography } from "@/components/atomic/typography";
import ProductList from "./product-list";
import SortProduct from "./sort-product";
import FilterSheet from "./filter-sheet";
import { useProductsQuery } from "@/features/product/hooks/use-product";
import { useTranslations } from "next-intl";

const ProductsSection = () => {
  const t = useTranslations("Button");
  const { data: products, isLoading } = useProductsQuery();

  return (
    <React.Fragment>
      <div className="col-span-10 xl:col-span-2 lg:col-span-3 ">
        <FilterProduct />
      </div>

      <VStack className="col-span-10 xl:col-span-8 lg:col-span-7 w-full">
        <div className="flex items-center justify-between w-full">
          <FilterSheet />
          <div>
            <Typography
              fontWeight="bold"
              variant="description"
              className="hidden xl:block"
            >
              {t("list_products")}
            </Typography>
          </div>
          <SortProduct />
        </div>
        <ProductList products={products?.value.items} isLoading={isLoading} />
      </VStack>
    </React.Fragment>
  );
};

export default ProductsSection;

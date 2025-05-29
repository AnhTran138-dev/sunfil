"use client";

import React from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Typography } from "@/components/global/atoms/typography";
import { HStack } from "@/components/global/atoms/hstack";
import { VStack } from "@/components/global/atoms/vstack";
import FeatureSection from "./feature-section";
import JumbotronSection from "./jumbotron-section";
import BannerSection from "./banner-section";
import { ProductsResponse } from "@/features/product/models/products.reponse";
import { CategoriesResponse } from "@/features/category/models/categories.reponse";
import CarouselProductsBanner from "./carousel-products-banner";
import FilterProduct from "./filter-product";
import SortProduct from "./sort-product";
import ProductList from "./product-list";

interface HomePageProps {
  products?: ProductsResponse[];
  categories?: CategoriesResponse[];
}

const HomePage: React.FC<HomePageProps> = ({ products }) => {
  const isMobile = useIsMobile();

  return (
    <>
      <div className="container mx-auto px-10 py-8">
        <section className="rounded-2xl bg-primary overflow-hidden">
          {!isMobile && <BannerSection />}
          <CarouselProductsBanner products={products} />
        </section>

        <section className="grid grid-cols-10 gap-4 mt-8">
          <div className="col-span-10 md:col-span-2 ">
            <FilterProduct />
          </div>

          {/* Product List */}
          <VStack className="col-span-10 md:col-span-8 ">
            <HStack className="w-full">
              <Typography fontWeight="bold" variant="description">
                Danh sách sản phẩm
              </Typography>
              <SortProduct />
            </HStack>
            <ProductList products={products} />
          </VStack>
        </section>

        <section className="py-10">
          <FeatureSection />
        </section>
      </div>
      <section className="container mx-auto px-10 py-8 bg-primary/20 border-dotted border border-primary">
        <JumbotronSection />
      </section>
    </>
  );
};

export default HomePage;

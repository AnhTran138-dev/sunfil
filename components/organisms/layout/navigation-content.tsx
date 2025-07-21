"use client";

import { useCategories } from "@/features/category/hooks/use-category";
import React from "react";
import NavItem from "./nav-item";
import { useProductManyQuery } from "@/features/product/hooks/use-product";
import CardProduct from "@/components/molecules/card/card-product";
import { ChevronsRight } from "lucide-react";
import { useTranslations } from "next-intl";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const NavigationContent = () => {
  const t = useTranslations("Menu");
  const { data: categories } = useCategories();
  const { data: products } = useProductManyQuery();
  const [isActive, setIsActive] = React.useState<number | null>(null);

  return (
    <div className="bg-gray-50 p-4 rounded-lg shadow-md border border-blue-200 flex ">
      <div>
        {categories?.value.items.map((category) => (
          <NavItem
            key={category.id}
            title={category.name}
            image={category.image}
            isBorderRadius={false}
            isActive={isActive === category.id}
            onClick={() => setIsActive(category.id)}
          />
        ))}
      </div>
      <div>
        <div className="grid grid-cols-3 gap-4 ml-4">
          {categories?.value.items.slice(0, 6).map((category) => (
            <NavItem
              key={category.id}
              title={category.name}
              image={category.image}
              hasIcon={false}
            />
          ))}
        </div>
        <div className="ml-4 mt-4 justify-between flex items-center">
          <h3 className="text-sm xl:text-lg font-semibold">{t("title")}</h3>
          <button className="flex items-center text-sm xl:text-md">
            <span className="text-blue-500 hover:underline">
              {t("see_all")}
            </span>
            <ChevronsRight className="inline ml-1 text-blue-500" />
          </button>
        </div>
        <div className="ml-4">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="w-[24rem] lg:w-[40rem] xl:w-full">
              {products?.value.items.map((product) => (
                <CarouselItem
                  key={product.id}
                  className="basis-full sm:basis-1/2 md:basis-1/2 lg:basis-1/3 xl:basis-1/5"
                >
                  <CardProduct
                    className="w-46"
                    size="sm"
                    key={product.id}
                    id={product.id}
                    title={product.name}
                    price={product.price}
                    image={product.image}
                    isHotDeal={product.isHotDeal}
                    category={product.category}
                    discountPercentage={product.discountPercentage}
                    isShowBuyButton={true}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default NavigationContent;

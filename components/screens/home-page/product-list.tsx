import CardProduct from "@/components/molecules/card/card-product";
import { Skeleton } from "@/components/ui/skeleton";
import { ProductsResponse } from "@/features/product/models/products.reponse";
import { useIsMobile } from "@/hooks/use-mobile";
import { Package } from "lucide-react";
import { useTranslations } from "next-intl";
import React from "react";

interface ProductListProps {
  products?: ProductsResponse[];
  isLoading?: boolean;
}

const ProductList: React.FC<ProductListProps> = ({ products, isLoading }) => {
  const isMobile = useIsMobile();
  const t = useTranslations("Menu");
  if (isLoading) {
    return (
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 gap-4">
        {Array.from({ length: isMobile ? 4 : 12 }).map((_, index) => (
          <Skeleton
            key={index}
            className="h-96 w-72 rounded-xl border border-gray-200 dark:border-gray-700 box-shadow-md"
          />
        ))}
      </section>
    );
  }

  if (!products || products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[90vh] w-full">
        <div className="p-3 rounded-full bg-background border shadow-sm">
          <Package className="h-10 w-10 text-muted-foreground" />
        </div>
        <h3 className="text-xl font-semibold mt-4">{t("empty")}</h3>
        <p className="text-muted-foreground mb-4">{t("subtitle")}</p>
      </div>
    );
  }

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 gap-4">
      {products.map((item) => (
        <CardProduct
          key={item.id}
          id={item.id}
          title={item.name}
          price={item.price}
          image={item.image}
          isHotDeal={item.isHotDeal}
          category={item.category}
          discountPercentage={item.discountPercentage}
          isShowHotDeal
        />
      ))}
    </section>
  );
};

export default ProductList;

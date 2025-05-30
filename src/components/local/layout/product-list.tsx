"use client";

import CardProduct from "@/components/global/organisms/card-product";
import { ProductsResponse } from "@/features/product/models/products.reponse";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { CategoryGrid } from "./category-grid";
import { CategoriesResponse } from "@/features/category/models/categories.reponse";

interface ProductListProps {
  products: ProductsResponse[];
  categories: CategoriesResponse[];
  selectedCategoryType: string | null;
}

export function ProductList({
  products,
  categories,
  selectedCategoryType,
}: ProductListProps) {
  const t = useTranslations("Menu");
  const filteredProducts = selectedCategoryType
    ? products.filter(
        (product) => product.categoryType === selectedCategoryType
      )
    : products;

  // Giới hạn chỉ hiển thị tối đa 5 sản phẩm
  const displayProducts = filteredProducts.slice(0, 5);

  return (
    <div className="flex-1 p-4">
      <div className="mb-6">
        <CategoryGrid categories={categories} />
      </div>
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-gray-900">{t("title")}</h3>
        <div className="gap-2 flex items-center cursor-pointer">
          <span className="text-sm text-primary">{t("see_all")}</span>
          <Image
            src="double-arrow.svg"
            alt="double-arrow"
            width={16}
            height={16}
          />
        </div>
      </div>

      {displayProducts.length > 0 ? (
        <div className="grid grid-cols-5 gap-3">
          {displayProducts.map((product) => (
            <CardProduct
              key={product.id}
              id={product.id}
              title={product.name}
              price={product.price}
              image={product.image}
              isHotDeal={product.isHotDeal}
              category={product.category}
              discountPercentage={product.discountPercentage}
              isShowBuyButton
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-8 text-gray-500">{t("empty")}</div>
      )}
    </div>
  );
}

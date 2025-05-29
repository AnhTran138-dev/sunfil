import CardProduct from "@/components/global/organisms/card-product";
import { ProductsResponse } from "@/features/product/models/products.reponse";
import React from "react";

interface ProductListProps {
  products?: ProductsResponse[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  if (!products || products.length === 0) {
    return <p>No products available.</p>;
  }

  return (
    <section className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
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

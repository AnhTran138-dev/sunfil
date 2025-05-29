import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React from "react";
import CardProduct from "@/components/global/organisms/card-product";
import { ProductsResponse } from "@/features/product/models/products.reponse";

interface CarouselProductsBannerProps {
  products?: ProductsResponse[];
}

const CarouselProductsBanner: React.FC<CarouselProductsBannerProps> = ({
  products,
}) => {
  return (
    <div className="container mx-auto px-10 py-8">
      <Carousel
        className="w-full relative"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {products?.map((product) => (
            <CarouselItem
              key={product.id}
              className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
            >
              <div className="p-1">
                <CardProduct
                  key={product.id}
                  category={product.category}
                  id={product.id}
                  image={product.image}
                  price={product.price}
                  title={product.name}
                  discountPercentage={product.discountPercentage}
                  isHotDeal={product.isHotDeal}
                  isShowHotDeal
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          className="absolute -left-3 top-1/2 -translate-y-1/2 shadow-2xl"
          style={{
            backgroundColor: "#CDE4FE",
            color: "blue",
          }}
        />
        <CarouselNext
          className="absolute -right-3 top-1/2 -translate-y-1/2 shadow-2xl"
          style={{
            backgroundColor: "#CDE4FE",
            color: "blue",
          }}
        />
      </Carousel>
    </div>
  );
};

export default CarouselProductsBanner;

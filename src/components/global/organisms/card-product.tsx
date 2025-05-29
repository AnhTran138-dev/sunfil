"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { formatPrice } from "@/lib/utils";
import React from "react";
import { HStack } from "../atoms/hstack";
import ImageCallBack from "../atoms/image";
import { Typography } from "../atoms/typography";
import IconTextBadge from "../molecules/icon-text-badge";

interface CardProductProps {
  id?: number;
  image?: string;
  title?: string;
  category?: string;
  isHotDeal?: boolean;
  price?: number;
  discountPercentage?: number;
  isShowHotDeal?: boolean;
  isShowBuyButton?: boolean;
  onBuy?: () => void;
  onClick?: () => void;
}

const CardProduct: React.FC<CardProductProps> = ({
  id,
  image,
  title,
  category,
  isHotDeal = false,
  price,
  discountPercentage,
  isShowHotDeal = false,
  isShowBuyButton = false,
  onBuy,
  onClick,
}) => {
  return (
    <Card
      key={id}
      data-testid="card-product"
      data-id={id}
      onClick={onClick}
      className="cursor-pointer hover:shadow-lg transition-shadow duration-300"
    >
      <ImageCallBack image={image} title={title} />
      <CardContent>
        <div>
          {isHotDeal && isShowHotDeal && (
            <IconTextBadge
              icon={<span className="text-red-500">🔥</span>}
              text="Giá cực sốc"
              colorText="rose"
              fontWeight="semibold"
            />
          )}
        </div>
        <Typography
          variant="title"
          size="md"
          fontWeight="semibold"
          className="line-clamp-2 mt-2"
          data-testid="product-title"
        >
          {title} - {category}
        </Typography>

        <Typography className="mt-4" color="destructive">
          {formatPrice(price || 0)}
        </Typography>
        <HStack gap="gap-2" align="start" justify="start">
          <Typography color="muted" decoration="line-through">
            {formatPrice(price || 0)}
          </Typography>
          <Typography color="destructive">-{discountPercentage}%</Typography>
        </HStack>
      </CardContent>
      {!isShowBuyButton && (
        <CardFooter>
          <Button
            className="w-full bg-primary/10 hover:bg-primary/30"
            onClick={onBuy}
          >
            <span className="text-primary">Mua ngay</span>
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};

export default CardProduct;

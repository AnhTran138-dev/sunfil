"use client";

import ImageCallBack from "@/components/atomic/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { cn, formatPrice } from "@/lib/utils";
import React from "react";
import IconTextBadge from "../icon-text-badge";
import { Typography } from "@/components/atomic/typography";
import { HStack } from "@/components/atomic/hstack";
import { useTranslations } from "next-intl";

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
  className?: string;
  onBuy?: () => void;
  onClick?: () => void;
  size?: "sm" | "md" | "lg";
}

interface SizeConfig {
  imageSize: "sm" | "md" | "lg";
  titleSize: PrivimitedSize;
  priceSize: PrivimitedSize;
  discountSize: PrivimitedSize;
}

type PrivimitedSize =
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "xs"
  | null
  | undefined;

const SIZE_CONFIG: Record<string, SizeConfig> = {
  sm: {
    imageSize: "sm",
    titleSize: "sm",
    priceSize: "sm",
    discountSize: "xs",
  },
  md: {
    imageSize: "md",
    titleSize: "md",
    priceSize: "lg",
    discountSize: "md",
  },
  lg: {
    imageSize: "lg",
    titleSize: "xl",
    priceSize: "xl",
    discountSize: "lg",
  },
};

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
  className,
  onBuy,
  onClick,
  size = "md",
}) => {
  const { imageSize, titleSize, priceSize, discountSize } = SIZE_CONFIG[size];
  const t = useTranslations("Button");
  return (
    <Card
      key={id}
      data-testid="card-product"
      data-id={id}
      onClick={onClick}
      className={cn(
        "cursor-pointer hover:shadow-lg transition-shadow duration-300 ",
        className
      )}
    >
      <ImageCallBack image={image} title={title} size={imageSize} />
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
          size={titleSize}
          fontWeight="semibold"
          className="line-clamp-2 mt-2"
          data-testid="product-title"
        >
          {title} - {category}
        </Typography>

        <Typography className="mt-4" color="destructive" size={priceSize}>
          {formatPrice(price || 0)}
        </Typography>
        <HStack gap="gap-2" align="start" justify="start">
          <Typography
            className=""
            color="muted"
            decoration="line-through"
            size={discountSize}
          >
            {formatPrice(price || 0)}
          </Typography>
          <Typography color="destructive" size={discountSize}>
            -{discountPercentage}%
          </Typography>
        </HStack>
      </CardContent>
      {!isShowBuyButton && (
        <CardFooter>
          <Button
            className="w-full bg-primary/10 hover:bg-primary/30"
            onClick={onBuy}
          >
            <span className="text-primary">{t("buy_now")}</span>
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};

export default CardProduct;

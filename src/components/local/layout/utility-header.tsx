"use client";

import { HStack } from "@/components/global/atoms/hstack";
import { IconButton } from "@/components/global/atoms/icon-text-button";
import LocaleSwitcher from "@/components/global/molecules/locale-switcher";
import { SearchInput } from "@/components/global/molecules/search-input";
import { useIsMobile } from "@/hooks/use-mobile";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import MobileMenuSheet from "./mobile-menu-sheet";
import CardProduct from "@/components/global/organisms/card-product";
import ProductJson from "@/lib/seeds/product.json";
import { BadgeIcon } from "@/components/global/molecules/bagde-icon";

const UtilityHeader = () => {
  const [isHovered, setIsHovered] = React.useState(false);
  const product = ProductJson.value.items[0];
  const t = useTranslations("SearchInput");
  const btn = useTranslations("Button");
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="container mx-auto">
        {/* Top row: Menu - Logo - Cart */}
        <HStack className="py-4" justify="between">
          <MobileMenuSheet />

          <Link href="/" className="flex-1 flex justify-center">
            <Image
              src="logo.svg"
              alt="Logo"
              width={120}
              height={86}
              className="object-contain hover:cursor-pointer"
              draggable={false}
              unoptimized={true}
            />
          </Link>

          <IconButton
            variant="ghost"
            iconLeft={
              <BadgeIcon
                icon={
                  <Image
                    src="icons/cart.svg"
                    alt="Cart"
                    width={24}
                    height={24}
                  />
                }
                count={2}
              />
            }
            className="text-gray-600"
          >
            <span className="text-sm hidden">{btn("shopping_cart")}</span>
          </IconButton>
        </HStack>

        {/* Search bar below logo */}
        <div className="pb-4">
          <SearchInput
            className="w-full border-primary border rounded-full"
            placeholder={t("placeholder")}
          />
        </div>
      </div>
    );
  }

  // Desktop layout
  return (
    <HStack className="container mx-auto py-4">
      <Link href="/">
        <Image
          src="logo.svg"
          alt="Logo"
          width={200}
          height={144}
          className="object-contain hover:cursor-pointer"
          draggable={false}
          unoptimized={true}
        />
      </Link>

      <SearchInput
        className="w-full max-w-xl lg:max-w-sm transition-all duration-300 border-primary border rounded-full"
        placeholder={t("placeholder")}
      />

      <HStack>
        <LocaleSwitcher />

        <div className="relative" onMouseEnter={() => setIsHovered(true)}>
          <IconButton
            variant="ghost"
            iconLeft={
              <BadgeIcon
                icon={
                  <Image
                    src="icons/cart.svg"
                    alt="Cart"
                    width={24}
                    height={24}
                  />
                }
                count={2}
              />
            }
            className="text-gray-600"
          >
            <span className="text-sm">{btn("shopping_cart")}</span>
          </IconButton>

          <div className="absolute top-12 right-0 z-40 ">
            {isHovered && (
              <div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <CardProduct
                  id={product.id}
                  title={product.name}
                  image={product.image}
                  price={product.price}
                  category={product.category}
                  isHotDeal={product.isHotDeal}
                  discountPercentage={product.discountPercentage}
                />
              </div>
            )}
          </div>
        </div>

        <IconButton
          variant="ghost"
          iconLeft={
            <Image
              src="user-circle-fill.svg"
              alt="User Circle"
              width={24}
              height={24}
            />
          }
          className="text-gray-600"
        >
          <span className="text-sm">{btn("account")}</span>
        </IconButton>
      </HStack>
    </HStack>
  );
};

export default UtilityHeader;

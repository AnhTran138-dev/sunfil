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

const UtilityHeader = () => {
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
              <Image src="icons/cart.svg" alt="Cart" width={24} height={24} />
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

        <IconButton
          variant="ghost"
          iconLeft={
            <Image src="icons/cart.svg" alt="Cart" width={24} height={24} />
          }
          className="text-gray-600"
        >
          <span className="text-sm">{btn("shopping_cart")}</span>
        </IconButton>

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

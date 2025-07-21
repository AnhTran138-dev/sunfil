"use client";

import Container from "@/components/atomic/container";
import { HStack } from "@/components/atomic/hstack";
import { IconButton } from "@/components/atomic/icon-text-button";
import LocaleSwitcher from "@/components/atomic/locale-switcher";
import { BadgeIcon } from "@/components/molecules/bagde-icon";
import { SearchInput } from "@/components/molecules/search-input";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { ChevronDown, Menu } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useRouter } from "next/navigation";
import MenuSheet from "./sheet/menu-sheet";
import Link from "next/link";
import { useProductQuery } from "@/features/product/hooks/use-product";
import CardProduct from "@/components/molecules/card/card-product";
import NavigationContent from "./navigation-content";
import React from "react";

interface NavigationItem {
  setHoveredItem: React.Dispatch<React.SetStateAction<string | null>>;
  hoveredItem: string | null;
}

interface MenuItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
  className?: string;
}

export const Navigation: React.FC<NavigationItem> = ({
  setHoveredItem,
  hoveredItem,
}) => {
  const router = useRouter();
  const { data } = useProductQuery();
  const [open, setOpen] = React.useState(false);

  const t = useTranslations("SearchInput");
  const btn = useTranslations("Button");
  const isMobile = useIsMobile();

  const rightMenuItems: MenuItem[] = [
    { label: btn("about_us"), href: "/about" },
    { label: btn("post"), href: "/post" },
    { label: btn("catalog"), href: "/catalog" },
    { label: btn("contact_us"), href: "/contact" },
  ];
  const leftMenuItems: MenuItem[] = [
    { label: btn("support"), href: "/support", icon: "/icons/clock.svg" },
    {
      label: btn("free_shipping"),
      href: "/shipping",
      icon: "/icons/hand-money.svg",
    },
    {
      label: btn("fast_delivery"),
      href: "/delivery",
      icon: "/icons/truck_fill.svg",
    },
    {
      label: btn("return_policy"),
      href: "/return",
      icon: "/icons/refresh-circle.svg",
    },
  ];

  return (
    <nav className="relative bg-background z-40 flex flex-col gap-4">
      <Container className="flex items-center justify-between py-2 ">
        <MenuSheet className="flex md:hidden" />

        {/* Logo */}
        <Image
          src="/logo.svg"
          alt="Logo"
          width={isMobile ? 100 : 220}
          height={isMobile ? 100 : 220}
          className="cursor-pointer object-cover w-32 xl:w-"
          onClick={() => router.replace("/")}
        />

        <div className="hidden md:flex w-full md:max-w-sm sm:max-w-md max-w-sm xl:max-w-2xl">
          <SearchInput
            className="w-full transition-all duration-300 border-primary border rounded-full"
            placeholder={t("placeholder")}
          />
        </div>

        {/* User Menu */}
        <HStack>
          <LocaleSwitcher
            label="Select Language"
            className="hover:bg-blue-100 border-none hidden sm:block"
          />

          <IconButton
            onMouseEnter={() => setHoveredItem("cart")}
            onMouseLeave={() => setHoveredItem(null)}
            onClick={() => setOpen((prev) => !prev)}
            value={open ? "Close" : "Open"}
            size="sm"
            variant="ghost"
            iconLeft={
              <BadgeIcon
                icon={
                  <Image
                    src="/icons/cart.svg"
                    alt="Cart"
                    width={24}
                    height={24}
                  />
                }
                count={2}
              />
            }
            className="text-gray-600 hover:bg-blue-100"
          >
            <span className="text-sm hidden lg:flex">
              {btn("shopping_cart")}
            </span>
          </IconButton>
          {hoveredItem === "cart" && (
            <div
              className="absolute right-10 md:right-28 lg:right-40 top-8 mt-2 w-64 py-4"
              onMouseEnter={() => setHoveredItem("cart")}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {/* Cart content goes here */}
              {data && data.value ? (
                <CardProduct
                  key={data.value.id}
                  id={data.value.id}
                  title={data.value.name}
                  price={data.value.price}
                  image={data.value.image}
                  isHotDeal={data.value.isHotDeal}
                  category={data.value.category}
                  discountPercentage={data.value.discountPercentage}
                  isShowHotDeal
                />
              ) : (
                <div className="p-4 bg-white shadow-lg rounded-lg border border-blue-200">
                  <p>Your cart is empty.</p>
                </div>
              )}
            </div>
          )}

          <IconButton
            variant="ghost"
            size="sm"
            iconLeft={
              <Image
                src="/icons/user-circle-fill.svg"
                alt="User Circle"
                width={24}
                height={24}
              />
            }
            className="text-gray-600 hover:bg-blue-100 hidden sm:flex"
          >
            <span className="text-sm hidden lg:flex">{btn("account")}</span>
          </IconButton>
        </HStack>
      </Container>

      <Container className=" items-center justify-between py-2 hidden sm:flex">
        <HStack className="w-full">
          <HStack className="gap-0">
            <IconButton
              iconLeft={<Menu />}
              iconRight={<ChevronDown />}
              onMouseEnter={() => setHoveredItem("category")}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {btn("category")}
            </IconButton>

            {hoveredItem === "category" && (
              <div
                className="absolute left-10 top-28 py-6"
                onMouseEnter={() => setHoveredItem("category")}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {/* Cart content goes here */}
                <NavigationContent />
              </div>
            )}

            {rightMenuItems.map((item) => (
              <Button
                key={item.label}
                variant="ghost"
                className="hover:bg-blue-100 py-0 px-2"
              >
                <Link href={item.href}>{item.label}</Link>
              </Button>
            ))}
          </HStack>
          <HStack className="gap-0">
            {leftMenuItems.map((item) => (
              <IconButton
                key={item.label}
                variant="ghost"
                className="hover:bg-blue-100 py-0 px-1"
                iconLeft={
                  item.icon ? (
                    <Image
                      src={item.icon as string}
                      alt={item.label}
                      width={20}
                      height={20}
                    />
                  ) : null
                }
              >
                <Link href={item.href} className="hidden xl:block">
                  {item.label}
                </Link>
              </IconButton>
            ))}
          </HStack>
        </HStack>
      </Container>
    </nav>
  );
};

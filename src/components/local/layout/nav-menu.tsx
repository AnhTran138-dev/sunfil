"use client";

import { HStack } from "@/components/global/atoms/hstack";
import { Menu } from "lucide-react";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
// import CategoriesMenu from "./categories-menu";
import { useTranslations } from "next-intl";
import { CategoriesResponse } from "@/features/category/models/categories.reponse";
import { ProductsResponse } from "@/features/product/models/products.reponse";
import { IconButton } from "@/components/global/atoms/icon-text-button";
import Image from "next/image";
import { useIsMobile } from "@/hooks/use-mobile";

interface FeatureMenu {
  title: string;
  href: string;
  icon: React.ReactNode;
}

interface NavigationMenu {
  title: string;
  href: string;
}

interface NavMenuProps {
  categories?: CategoriesResponse[];
  products?: ProductsResponse[];
}

const NavMenu = ({ categories, products }: NavMenuProps) => {
  const isMobile = useIsMobile();
  const t = useTranslations("Button");

  const navigationMenu: NavigationMenu[] = [
    { title: t("about_us"), href: "/about-us" },
    { title: t("post"), href: "/blog" },
    { title: t("catalog"), href: "/catalog" },
    { title: t("contact_us"), href: "/contact" },
  ];

  const featureMenu: FeatureMenu[] = [
    {
      title: t("support"),
      href: "/support",
      icon: (
        <Image src="icons/clock.svg" alt="User Circle" width={24} height={24} />
      ),
    },
    {
      title: t("free_shipping"),
      href: "/shipping",
      icon: (
        <Image
          src="icons/hand-money.svg"
          alt="Hand Money"
          width={24}
          height={24}
        />
      ),
    },
    {
      title: t("fast_delivery"),
      href: "/fast-delivery",
      icon: (
        <Image src="icons/truck_fill.svg" alt="Truck" width={24} height={24} />
      ),
    },
    {
      title: t("return_policy"),
      href: "/return-policy",
      icon: (
        <Image
          src="icons/refresh-circle.svg"
          alt="Refresh"
          width={24}
          height={24}
        />
      ),
    },
  ];

  if (isMobile) return null;

  return (
    <div className="container mx-auto flex items-center justify-between flex-wrap ">
      <NavigationMenu>
        <NavigationMenuList className="gap-0.5">
          <NavigationMenuItem>
            <NavigationMenuTrigger
              className="gap-2 border border-primary"
              classNameIcon="text-primary "
            >
              <Menu className="size-4 text-primary" />
              <span className="text-primary">{t("list_products")}</span>
            </NavigationMenuTrigger>
            <NavigationMenuContent
              className="z-20"
              style={{
                width: "1200px",
                boxShadow: "initial",
              }}
            >
              <div>CategoriesMenu</div>
              {/* <CategoriesMenu products={products} categories={categories} /> */}
            </NavigationMenuContent>
          </NavigationMenuItem>

          {navigationMenu.map((item) => (
            <NavigationMenuItem key={item.title}>
              <Link href={item.href} passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {item.title}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      <HStack className="gap-0.5 flex-wrap">
        {featureMenu.map((item) => (
          <IconButton
            iconLeft={item.icon}
            key={item.title}
            variant="ghost"
            className="flex items-center text-foreground font-semibold"
          >
            {item.title}
          </IconButton>
        ))}
      </HStack>
    </div>
  );
};

export default NavMenu;

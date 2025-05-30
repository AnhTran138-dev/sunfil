"use client";

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
import { useTranslations } from "next-intl";
import { CategoriesResponse } from "@/features/category/models/categories.reponse";
import { ProductsResponse } from "@/features/product/models/products.reponse";
import { IconButton } from "@/components/global/atoms/icon-text-button";
import Image from "next/image";
import { useIsMobile } from "@/hooks/use-mobile";
import { ProductList } from "./product-list";
import { CategoryList } from "@/components/global/molecules/category-list";

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

  const [selectedCategoryType, setSelectedCategoryType] = React.useState<
    string | null
  >(null);

  const handleCategoryHover = (categoryType: string | null) => {
    setSelectedCategoryType(categoryType);
  };

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
        <Image src="icons/clock.svg" alt="User Circle" width={20} height={20} />
      ),
    },
    {
      title: t("free_shipping"),
      href: "/shipping",
      icon: (
        <Image
          src="icons/hand-money.svg"
          alt="Hand Money"
          width={20}
          height={20}
        />
      ),
    },
    {
      title: t("fast_delivery"),
      href: "/fast-delivery",
      icon: (
        <Image src="icons/truck_fill.svg" alt="Truck" width={20} height={20} />
      ),
    },
    {
      title: t("return_policy"),
      href: "/return-policy",
      icon: (
        <Image
          src="icons/refresh-circle.svg"
          alt="Refresh"
          width={20}
          height={20}
        />
      ),
    },
  ];

  if (isMobile) return null;

  return (
    <div className="container mx-auto flex items-center justify-between flex-wrap ">
      <div className="flex items-center gap-2">
        <NavigationMenu>
          <NavigationMenuList className="gap-0.5">
            <NavigationMenuItem>
              <NavigationMenuTrigger
                className="gap-2 "
                classNameIcon="text-white "
                style={{
                  backgroundColor: "#2563eb",
                }}
              >
                <Menu className="size-4 text-white" />
                <span className="text-white">{t("list_products")}</span>
              </NavigationMenuTrigger>
              <NavigationMenuContent className="z-20">
                {}
                <div className="flex w-[1200px] bg-white rounded-lg shadow-lg border border-gray-200">
                  {categories && (
                    <CategoryList
                      categories={categories}
                      onCategoryHover={handleCategoryHover}
                    />
                  )}
                  {products && (
                    <ProductList
                      categories={categories || []}
                      products={products}
                      selectedCategoryType={selectedCategoryType}
                    />
                  )}
                </div>
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
      </div>

      <div className="gap-0.5 flex-wrap flex">
        {featureMenu.map((item) => (
          <IconButton
            iconLeft={item.icon}
            key={item.title}
            variant="ghost"
            className="flex items-center text-foreground font-semibold px-2 gap-1"
          >
            <span className="hover:text-primary">{item.title}</span>
          </IconButton>
        ))}
      </div>
    </div>
  );
};

export default NavMenu;

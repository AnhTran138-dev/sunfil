import React from "react";
import { NavigationItem, NavSheetItem } from "./nav-sheet-item";
import { useTranslations } from "next-intl";
import {
  BookImage,
  Clipboard,
  Clock,
  DollarSign,
  RefreshCcw,
  SmartphoneNfc,
  SquareMenu,
  Truck,
  User,
} from "lucide-react";
import { useCategories } from "@/features/category/hooks/use-category";
import { useNavigation } from "@/hooks/use-navigation";

const NavSheetContent = () => {
  const { expandedItems, toggleSubmenu } = useNavigation();
  const t = useTranslations("Button");
  const { data } = useCategories();

  const navigationItems: NavigationItem[] = [
    {
      title: t("about_us"),
      icon: User,
      href: "/about",
    },
    {
      title: t("post"),
      icon: Clipboard,
      href: "/post",
    },
    {
      title: t("catalog"),
      icon: BookImage,
      href: "/catalog",
    },
    {
      title: t("contact_us"),
      icon: SmartphoneNfc,
      href: "/contact",
    },
    {
      title: t("category"),
      icon: SquareMenu,
      href: "/category",

      submenu:
        data?.value.items.map((category) => ({
          title: category.name,
          href: `/category/${category.type}`,
        })) || [],
    },
    {
      title: t("support"),
      icon: Clock,
      href: "/support",
    },
    {
      title: t("free_shipping"),
      icon: DollarSign,
      href: "/shipping",
    },
    {
      title: t("fast_delivery"),
      icon: Truck,
      href: "/delivery",
    },
    {
      title: t("return_policy"),
      icon: RefreshCcw,
      href: "/return",
    },
  ];

  return (
    <div>
      {navigationItems.map((item, index) => (
        <NavSheetItem
          key={index}
          item={item}
          index={index}
          onItemClick={() => console.log("Item clicked:", item)}
          isExpanded={expandedItems.includes(index)}
          onToggleExpand={() => toggleSubmenu(index)}
        />
      ))}
    </div>
  );
};

export default NavSheetContent;

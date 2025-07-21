"use client";

import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import React from "react";
import {
  BreadcrumbNav,
  type BreadcrumbSegment,
} from "../../molecules/breadcrumb-nav";

interface DynamicBreadcrumbProps {
  className?: string;
}

const ignoredSegments = ["(main)", "(auth)", "(dashboard)"];

const DynamicBreadcrumb: React.FC<DynamicBreadcrumbProps> = ({ className }) => {
  const pathname = usePathname();
  const r = useTranslations("route");

  const routeLabels: Record<string, string> = {
    "": r("home"),
    about: r("about"),
    contact: r("contact"),
    post: r("post"),
    catalog: r("catalog"),
    support: r("support"),
    shipping: r("shipping"),
    delivery: r("delivery"),
    return: r("return"),
  };

  const pathSegments = pathname
    .split("/")
    .filter(Boolean)
    .filter((segment) => segment !== "en" && segment !== "vi");

  const segments: BreadcrumbSegment[] = [{ label: r("home"), href: "/" }];
  let currentPath = "";

  pathSegments.forEach((segment, index) => {
    // Bỏ qua các segment được nhóm
    if (ignoredSegments.includes(segment)) return;

    currentPath += `/${segment}`;
    const label =
      routeLabels[segment] ||
      segment.charAt(0).toUpperCase() + segment.slice(1);

    // Segment cuối cùng không có href
    const isLast = index === pathSegments.length - 1;
    segments.push({
      label,
      href: isLast ? undefined : currentPath,
    });
  });

  return <BreadcrumbNav segments={segments} className={className} />;
};

export default DynamicBreadcrumb;

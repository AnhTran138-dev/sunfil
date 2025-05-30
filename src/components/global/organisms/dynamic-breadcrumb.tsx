"use client";

import { usePathname } from "next/navigation";
import {
  BreadcrumbNav,
  type BreadcrumbSegment,
} from "../molecules/breadcrumb-nav";

// Mapping các route paths thành labels tiếng Việt
const routeLabels: Record<string, string> = {
  "": "Trang chủ",
  "about-us": "Giới thiệu",
  blog: "Blog",
  catalog: "Danh mục",
  "san-pham": "Sản phẩm",
  "lien-he": "Liên hệ",
  "tai-khoan": "Tài khoản",
  "gio-hang": "Giỏ hàng",
  "thanh-toan": "Thanh toán",
};

// Các route được nhóm (như (main)) sẽ bị bỏ qua
const ignoredSegments = ["(main)", "(auth)", "(dashboard)"];

interface DynamicBreadcrumbProps {
  className?: string;
  customSegments?: BreadcrumbSegment[];
}

export function DynamicBreadcrumb({
  className,
  customSegments,
}: DynamicBreadcrumbProps) {
  const pathname = usePathname();

  // Nếu có custom segments thì sử dụng
  if (customSegments) {
    return <BreadcrumbNav segments={customSegments} className={className} />;
  }

  // Tạo segments từ pathname
  const pathSegments = pathname
    .split("/")
    .filter(Boolean)
    .filter((segment) => segment !== "en" && segment !== "vi");

  const segments: BreadcrumbSegment[] = [{ label: "Trang chủ", href: "/" }];

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
}

"use client";

import type React from "react";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface BreadcrumbItemProps {
  href?: string;
  children: React.ReactNode;
  isLast?: boolean;
  className?: string;
}

export function BreadcrumbItem({
  href,
  children,
  isLast = false,
  className,
}: BreadcrumbItemProps) {
  const content = (
    <span
      className={cn(
        "text-sm transition-colors duration-200",
        isLast
          ? "text-blue-600 font-medium"
          : "text-gray-500 hover:text-gray-700",
        className
      )}
    >
      {children}
    </span>
  );

  return (
    <div className="flex items-center">
      {href && !isLast ? (
        <Link href={href} className="hover:underline">
          {content}
        </Link>
      ) : (
        content
      )}
      {!isLast && <ChevronRight className="w-4 h-4 text-gray-400 mx-2" />}
    </div>
  );
}

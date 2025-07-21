"use client";

import { cn } from "@/lib/utils";
import { BreadcrumbItem } from "../atomic/breadcrumb-item";

export interface BreadcrumbSegment {
  label: string;
  href?: string;
}

interface BreadcrumbNavProps {
  segments: BreadcrumbSegment[];
  className?: string;
}

export function BreadcrumbNav({ segments, className }: BreadcrumbNavProps) {
  if (segments.length === 0) return null;

  return (
    <nav
      className={cn("flex items-center py-4", className)}
      aria-label="Breadcrumb"
    >
      {segments.map((segment, index) => (
        <BreadcrumbItem
          key={index}
          href={segment.href}
          isLast={index === segments.length - 1}
        >
          {segment.label}
        </BreadcrumbItem>
      ))}
    </nav>
  );
}

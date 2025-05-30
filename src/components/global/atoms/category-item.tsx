"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { CategoriesResponse } from "@/features/category/models/categories.reponse";

interface CategoryItemProps {
  category: CategoriesResponse;
  isActive: boolean;
  onHover: () => void;
  onLeave: () => void;
}

export function CategoryItem({
  category,
  isActive,
  onHover,
  onLeave,
}: CategoryItemProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all duration-300 ease-in-out relative",
        "hover:bg-blue-50 hover:shadow-md",
        isActive && "bg-blue-50 shadow-md transform scale-105"
      )}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {isActive && (
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600 rounded-l-lg"></div>
      )}

      <div className="relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
        <Image
          src={category.image || "/placeholder.svg"}
          alt={category.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="flex-1">
        <h3
          className={cn(
            "font-medium text-gray-900 transition-colors duration-200",
            isActive && "text-blue-600"
          )}
        >
          {category.name}
        </h3>
      </div>

      <ChevronRight
        className={cn(
          "w-4 h-4 text-gray-400 transition-colors duration-200",
          isActive && "text-blue-600"
        )}
      />
    </div>
  );
}

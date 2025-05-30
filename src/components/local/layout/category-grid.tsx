"use client";

import { CategoriesResponse } from "@/features/category/models/categories.reponse";
import Image from "next/image";

interface CategoryGridProps {
  categories: CategoriesResponse[];
}

export function CategoryGrid({ categories }: CategoryGridProps) {
  const displayCategories = categories.slice(0, 6);

  const gridItems = [...displayCategories];
  while (gridItems.length < 6) {
    gridItems.push({
      id: gridItems.length,
      name: "Bộ lọc gió",
      image: "/placeholder.svg?height=40&width=40",
      type: "placeholder",
    });
  }

  return (
    <div className="rounded-lg p-4 ">
      <div className="grid grid-cols-3 gap-4">
        {gridItems.map((category) => (
          <div
            key={category.id.toString()}
            className="flex items-center gap-3 p-2 bg-white rounded-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
          >
            <div className="relative w-10 h-10 flex-shrink-0">
              <Image
                src={category.image || "/placeholder.svg?height=40&width=40"}
                alt={category.name}
                fill
                className="object-contain"
              />
            </div>
            <span className="text-sm font-medium text-gray-700 truncate">
              {category.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

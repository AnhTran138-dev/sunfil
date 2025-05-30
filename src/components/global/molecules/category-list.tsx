"use client";

import { CategoriesResponse } from "@/features/category/models/categories.reponse";
import { useState } from "react";
import { CategoryItem } from "../atoms/category-item";

interface CategoryListProps {
  categories: CategoriesResponse[];
  onCategoryHover: (categoryType: string | null) => void;
}

export function CategoryList({
  categories,
  onCategoryHover,
}: CategoryListProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const handleCategoryHover = (categoryType: string) => {
    setActiveCategory(categoryType);
    onCategoryHover(categoryType);
  };

  const handleCategoryLeave = () => {
    setActiveCategory(null);
    onCategoryHover(null);
  };

  return (
    <div className="w-64 p-4">
      <div className="space-y-2">
        {categories.map((category) => (
          <CategoryItem
            key={category.id}
            category={category}
            isActive={activeCategory === category.type}
            onHover={() => handleCategoryHover(category.type)}
            onLeave={handleCategoryLeave}
          />
        ))}
      </div>
    </div>
  );
}

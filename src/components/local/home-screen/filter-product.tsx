"use client";

import { HStack } from "@/components/global/atoms/hstack";
import { Typography } from "@/components/global/atoms/typography";
import { FilterSection } from "@/components/global/molecules/filter-section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";
import { Filter } from "lucide-react";
import { useTranslations } from "next-intl";
import React from "react";

const filterData = {
  categories: [
    {
      id: "air-filter",
      label: "Lọc gió động cơ - Air Filter",
      count: 24,
      checked: true,
    },
    {
      id: "fuel-filter",
      label: "Lọc Nhiên Liệu - Fuel Filter",
      count: 24,
      checked: true,
    },
    { id: "oil-filter", label: "Bộ lọc dầu", count: 24, checked: true },
    {
      id: "uncategorized",
      label: "Chưa phân loại",
      count: 24,
      checked: false,
    },
    { id: "other", label: "Khác", count: 24, checked: false },
  ],
  priceRanges: [
    { id: "under-100k", label: "Dưới 100.000 đ", checked: false },
    { id: "100k-300k", label: "100.000 đ - 300.000 đ", checked: false },
    { id: "300k-500k", label: "300.000 đ - 500.000 đ", checked: false },
    { id: "over-500k", label: "Trên 500.000 đ", checked: false },
  ],
  brands: [
    { id: "asakashi", label: "Asakashi", count: 24, checked: false },
    { id: "bosch", label: "Bosch", count: 24, checked: false },
    { id: "hyundai", label: "Hyundai", count: 24, checked: false },
  ],
  years: [
    { id: "2021", label: "2021", count: 24, checked: false },
    { id: "2020", label: "2020", count: 24, checked: false },
    { id: "2019", label: "2019", count: 24, checked: false },
    { id: "2018", label: "2018", count: 24, checked: false },
  ],
  origins: [
    { id: "germany", label: "Đức", count: 24, checked: false },
    { id: "japan", label: "Nhật Bản", count: 24, checked: false },
    { id: "china", label: "Trung Quốc", count: 24, checked: false },
  ],
};

const FilterProduct = () => {
  const isMobile = useIsMobile();
  const t = useTranslations("FilterProducts");
  const [filters, setFilters] = React.useState(filterData);

  const handleToggle = (
    section: keyof typeof filters,
    id: string,
    checked: boolean
  ) => {
    setFilters((prev) => ({
      ...prev,
      [section]: prev[section].map((item) =>
        item.id === id ? { ...item, checked } : item
      ),
    }));
  };

  const FilterContent = () => (
    <>
      <FilterSection
        title={t("category")}
        items={filters.categories}
        onToggle={(id, checked) => handleToggle("categories", id, checked)}
      />

      <FilterSection
        title={t("price_range")}
        items={filters.priceRanges}
        onToggle={(id, checked) => handleToggle("priceRanges", id, checked)}
      />

      <FilterSection
        title={t("brand")}
        items={filters.brands}
        onToggle={(id, checked) => handleToggle("brands", id, checked)}
      />

      <FilterSection
        title={t("manufacture_year")}
        items={filters.years}
        onToggle={(id, checked) => handleToggle("years", id, checked)}
      />

      <FilterSection
        title={t("origin")}
        items={filters.origins}
        onToggle={(id, checked) => handleToggle("origins", id, checked)}
      />
    </>
  );

  // Mobile version with Sheet popup
  if (isMobile) {
    return (
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" className="w-full">
            <Filter className="w-4 h-4 mr-2" />
            {t("filter")}
          </Button>
        </SheetTrigger>
        <SheetContent side="bottom" className="h-[80vh]">
          <SheetHeader>
            <SheetTitle>
              <HStack justify="start" gap="gap-1">
                <div className="w-5 h-5 text-blue-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M10 14L4 5V3H20V5L14 14V20L10 22V14Z" />
                  </svg>
                </div>
                <Typography fontWeight="semibold" size="lg" color="primary">
                  {t("filter")}
                </Typography>
              </HStack>
            </SheetTitle>
          </SheetHeader>
          <div className="mt-6 overflow-y-auto px-10">
            <FilterContent />
          </div>
        </SheetContent>
      </Sheet>
    );
  }

  // Desktop version with Card
  return (
    <Card>
      <CardHeader>
        <HStack justify="start" gap="gap-1">
          <div className="w-5 h-5 text-blue-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M10 14L4 5V3H20V5L14 14V20L10 22V14Z" />
            </svg>
          </div>
          <Typography fontWeight="semibold" size="lg" color="primary">
            {t("filter")}
          </Typography>
        </HStack>
      </CardHeader>
      <CardContent>
        <FilterContent />
      </CardContent>
    </Card>
  );
};

export default FilterProduct;

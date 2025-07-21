"use client";

import { HStack } from "@/components/atomic/hstack";
import { Typography } from "@/components/atomic/typography";
import { FilterGroup, FilterOption } from "@/components/molecules/filter-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import React from "react";

const SortProduct = () => {
  const t = useTranslations("SortProducts");
  const filterOptions: FilterOption[] = [
    { value: "related", label: t("relevance") },
    { value: "bestselling", label: t("best_selling") },
    { value: "newest", label: t("newest") },
    { value: "featured", label: t("featured") },
  ];

  const [selectedFilters, setSelectedFilters] = React.useState<string[]>([
    "related",
  ]);

  return (
    <div>
      <HStack gap="gap-2" justify="end" align="center">
        <Typography className="px-4 hidden xl:block">{t("sort_by")}</Typography>
        <div className="hidden sm:block">
          <FilterGroup
            options={filterOptions}
            value={selectedFilters}
            onValueChange={setSelectedFilters}
          />
        </div>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder={t("price") + ":"} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="desc">
              {t("low")} <ArrowRight /> {t("high")}
            </SelectItem>
            <SelectItem value="asc">
              {t("high")} <ArrowRight /> {t("low")}
            </SelectItem>
          </SelectContent>
        </Select>
      </HStack>
    </div>
  );
};

export default SortProduct;

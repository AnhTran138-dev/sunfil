"use client";

import { HStack } from "@/components/global/atoms/hstack";
import { Typography } from "@/components/global/atoms/typography";
import {
  FilterGroup,
  FilterOption,
} from "@/components/global/molecules/filter-group";
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
    <HStack gap="gap-2">
      <Typography className="px-4">{t("sort_by")}</Typography>
      <FilterGroup
        options={filterOptions}
        value={selectedFilters}
        onValueChange={setSelectedFilters}
      />

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
  );
};

export default SortProduct;

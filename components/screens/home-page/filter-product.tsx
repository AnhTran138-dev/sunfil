"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useTranslations } from "next-intl";
import React from "react";
import { HStack } from "@/components/atomic/hstack";
import { Typography } from "@/components/atomic/typography";
import FilterContent from "./filter-content";

const FilterProduct = () => {
  const t = useTranslations("FilterProducts");
  return (
    <React.Fragment>
      <Card className="hidden lg:block">
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
    </React.Fragment>
  );
};

export default FilterProduct;

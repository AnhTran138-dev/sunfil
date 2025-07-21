"use client";

import { HStack } from "@/components/atomic/hstack";
import { Typography } from "@/components/atomic/typography";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import React from "react";
import FilterContent from "./filter-content";
import { useTranslations } from "next-intl";

const FilterSheet = () => {
  const t = useTranslations("FilterProducts");

  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger className="flex items-center justify-center w-full border border-gray-300 rounded-md p-2 hover:bg-gray-100 transition-colors">
          <div className="w-5 h-5 text-blue-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M10 14L4 5V3H20V5L14 14V20L10 22V14Z" />
            </svg>
          </div>
          {/* <p className="text-primary font-semibold"> {t("filter")}</p> */}
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
    </div>
  );
};

export default FilterSheet;

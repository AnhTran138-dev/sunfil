import React from "react";
import { FilterSection } from "./filter-section";
import { useTranslations } from "next-intl";
import { useProductParamsStore } from "@/stores/use-params";
import { FilterGroup } from "@/components/molecules/filter-group";

interface FilterData {
  categories: { id: string; label: string; checked: boolean }[];
  priceRanges: { id: string; label: string; checked: boolean }[];
  brands: { id: string; label: string; checked: boolean }[];
  years: { id: string; label: string; checked: boolean }[];
  origins: { id: string; label: string; checked: boolean }[];
}

interface UpdatedFilters {
  id: string;
  label: string;
  checked: boolean;
}

const FilterContent = () => {
  const filterData: FilterData = {
    categories: [
      {
        id: "air-filter",
        label: "Lọc gió động cơ - Air Filter",
        checked: false,
      },
      {
        id: "fuel-filter",
        label: "Lọc Nhiên Liệu - Fuel Filter",
        checked: false,
      },
      {
        id: "oil-filter",
        label: "Bộ lọc dầu",
        checked: false,
      },
      {
        id: "uncategorized",
        label: "Chưa phân loại",
        checked: false,
      },
      {
        id: "other",
        label: "Khác",
        checked: false,
      },
    ],
    priceRanges: [
      { id: "under-100k", label: "Dưới 100.000 đ", checked: false },
      { id: "100k-300k", label: "100.000 đ - 300.000 đ", checked: false },
      { id: "300k-500k", label: "300.000 đ - 500.000 đ", checked: false },
      { id: "over-500k", label: "Trên 500.000 đ", checked: false },
    ],
    brands: [
      {
        id: "asakashi",
        label: "Asakashi",
        checked: false,
      },
      {
        id: "bosch",
        label: "Bosch",

        checked: false,
      },
      {
        id: "hyundai",
        label: "Hyundai",
        checked: false,
      },
    ],
    years: [
      {
        id: "2021",
        label: "2021",
        checked: false,
      },
      {
        id: "2020",
        label: "2020",
        checked: false,
      },
      {
        id: "2019",
        label: "2019",
        checked: false,
      },
      {
        id: "2018",
        label: "2018",
        checked: false,
      },
    ],
    origins: [
      {
        id: "germany",
        label: "Đức",
        checked: false,
      },
      {
        id: "japan",
        label: "Nhật Bản",
        checked: false,
      },
      {
        id: "china",
        label: "Trung Quốc",
        checked: false,
      },
    ],
  };
  const sp = useTranslations("SortProducts");
  const t = useTranslations("FilterProducts");
  const { setParams } = useProductParamsStore();
  const [filters, setFilters] = React.useState<FilterData>(filterData);
  const [selectedFilters, setSelectedFilters] = React.useState<string[]>([
    "related",
  ]);

  const filterOptions: FilterOption[] = [
    { value: "related", label: sp("relevance") },
    { value: "bestselling", label: sp("best_selling") },
    { value: "newest", label: sp("newest") },
    { value: "featured", label: sp("featured") },
  ];

  const handleToggle = (
    section: keyof typeof filters,
    id: string,
    checked: boolean
  ) => {
    const updatedSection: UpdatedFilters[] = filters[section].map((item) =>
      item.id === id ? { ...item, checked } : item
    );
    setFilters((prev) => ({
      ...prev,
      [section]: updatedSection,
    }));

    const selectedFilters: FilterOption[] = [];

    updatedSection.forEach((item) => {
      if (item.checked) {
        selectedFilters.push({ value: item.id, label: item.label });
      }
    });

    setParams({
      filter: selectedFilters,
    });
  };

  return (
    <React.Fragment>
      <div className="block lg:hidden ">
        <FilterGroup
          options={filterOptions}
          value={selectedFilters}
          onValueChange={setSelectedFilters}
        />
      </div>
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
    </React.Fragment>
  );
};

export default FilterContent;

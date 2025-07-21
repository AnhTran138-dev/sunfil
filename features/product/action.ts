"use server";

import productJson from "@/lib/seeds/product.json";
import { ProductsResponse } from "./models/products.reponse";
import { ProductRequest } from "./models/products.request";

export const getProduct = async (): Promise<RootResponse<ProductsResponse>> => {
  await new Promise((r) => setTimeout(r, 1000));
  const product = productJson[0];
  return {
    isSuccess: true,
    message: "Fetched",
    value: product as ProductsResponse,
  };
};

export const getManyProducts = async (): Promise<
  RootResponse<Pagination<ProductsResponse>>
> => {
  await new Promise((r) => setTimeout(r, 1000));
  const data = productJson.slice(0, 5);
  return {
    isSuccess: true,
    message: "Fetched",
    value: {
      items: data as ProductsResponse[],
      pageSize: 5,
      pageNumber: 1,
      totalItems: data.length,
      hasNext: false,
    },
  };
};

export const getProducts = async (
  params?: Partial<ProductRequest>
): Promise<RootResponse<Pagination<ProductsResponse>>> => {
  await new Promise((r) => setTimeout(r, 1000));

  let data = [...productJson];

  if (!params) {
    data = data.slice(0, 12);

    return {
      isSuccess: true,
      message: "Fetched",
      value: {
        items: data as ProductsResponse[],
        pageSize: 10,
        pageNumber: 1,
        totalItems: data.length,
        hasNext: false,
      },
    };
  }

  if (params.search) {
    data = data.filter((item) =>
      item.name.toLowerCase().includes(params.search!.toLowerCase())
    );
  }

  if (params.filter?.length) {
    const filterGroups = groupFiltersByField(params.filter);

    data = data.filter((item) => {
      return Object.entries(filterGroups).every(([field, matchFns]) => {
        return matchFns.some((match) =>
          match(item[field as keyof typeof item])
        );
      });
    });
  }

  data = data.slice(0, 12);
  const result: RootResponse<Pagination<ProductsResponse>> = {
    isSuccess: true,
    message: "Fetched",
    value: {
      items: data as ProductsResponse[],
      pageSize: params.pageSize ?? 12,
      pageNumber: params.pageNumber ?? 1,
      totalItems: data.length,
      hasNext: false,
    },
  };

  return result;
};

const groupFiltersByField = (filters: FilterOption[]) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const grouped: Record<string, ((item: any) => boolean)[]> = {};

  for (const f of filters) {
    const config = FILTER_CONFIG[f.value];
    if (!config) continue;

    const key = config.field as string;
    if (!grouped[key]) grouped[key] = [];
    grouped[key].push(config.match);
  }

  return grouped;
};

const FILTER_CONFIG: Record<
  string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  { field: keyof (typeof productJson)[0]; match: (itemValue: any) => boolean }
> = {
  // Category filters
  "air-filter": { field: "categoryType", match: (v) => v === "air" },
  "fuel-filter": { field: "categoryType", match: (v) => v === "fuel" },
  "oil-filter": { field: "categoryType", match: (v) => v === "oil" },

  // Price range
  "under-100k": { field: "price", match: (v) => v < 100000 },
  "100k-300k": { field: "price", match: (v) => v >= 100000 && v <= 300000 },
  "300k-500k": { field: "price", match: (v) => v > 300000 && v <= 500000 },
  "over-500k": { field: "price", match: (v) => v > 500000 },

  // Brand
  asakashi: { field: "brand", match: (v) => v === "asakashi" },
  bosch: { field: "brand", match: (v) => v === "bosch" },
  hyundai: { field: "brand", match: (v) => v === "hyundai" },

  // Year
  "2021": { field: "year", match: (v) => v === 2021 },
  "2020": { field: "year", match: (v) => v === 2020 },
  "2019": { field: "year", match: (v) => v === 2019 },
  "2018": { field: "year", match: (v) => v === 2018 },

  // Origin
  germany: { field: "origin", match: (v) => v === "germany" },
  japan: { field: "origin", match: (v) => v === "japan" },
  china: { field: "origin", match: (v) => v === "china" },
};

import categoriesJson from "@/lib/seeds/category.json";
import { CategoriesResponse } from "./models/categories.reponse";

export const getCategories = async (): Promise<
  RootResponse<Pagination<CategoriesResponse>>
> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const result = {
    message: "Categories fetched successfully",
    isSuccess: true,
    value: {
      items: categoriesJson as CategoriesResponse[],
      pageSize: 10,
      pageNumber: 1,
      totalItems: categoriesJson.length,
      hasNext: false,
    },
  } as RootResponse<Pagination<CategoriesResponse>>;

  return result;
};

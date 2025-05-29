import categoriesJson from "@/lib/seeds/category.json";
import { CategoriesResponse } from "./models/categories.reponse";

export const getCategories = async (): Promise<
  RootResponse<Pagination<CategoriesResponse>>
> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return categoriesJson;
};

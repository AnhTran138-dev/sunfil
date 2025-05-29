"use server";

import productJson from "@/lib/seeds/product.json";
import { ProductsResponse } from "./models/products.reponse";

export const getProducts = async (): Promise<
  RootResponse<Pagination<ProductsResponse>>
> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return productJson;
};

import { useQuery } from "@tanstack/react-query";
import { QUERYKEYS } from "@/lib/query-key";
import { getManyProducts, getProduct, getProducts } from "../action";
import { useProductParamsStore } from "@/stores/use-params";

export const useProductsQuery = () => {
  const { params } = useProductParamsStore();

  return useQuery({
    queryKey: [QUERYKEYS.product.listAll, params],
    queryFn: () => getProducts(params),
  });
};

export const useProductQuery = () => {
  return useQuery({
    queryKey: [QUERYKEYS.product.findOne],
    queryFn: () => getProduct(),
  });
};

export const useProductManyQuery = () => {
  return useQuery({
    queryKey: [QUERYKEYS.product.getMany],
    queryFn: () => getManyProducts(),
  });
};

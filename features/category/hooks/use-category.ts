import { QUERYKEYS } from "@/lib/query-key";
import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../action";

export const useCategories = () => {
  return useQuery({
    queryKey: [QUERYKEYS.categories.listAll],
    queryFn: getCategories,
  });
};

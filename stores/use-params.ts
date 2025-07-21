import { ProductRequest } from "@/features/product/models/products.request";
import { create } from "zustand";

interface ParamsStore<T> {
  params: T;
  setParams: (params: T) => void;
  resetParams: () => void;
}

export const createParamsStore = <T>() =>
  create<ParamsStore<T>>((set) => ({
    params: {} as T,
    setParams: (params: T) => set({ params }),
    resetParams: () => set({ params: {} as T }),
  }));

export const useProductParamsStore = createParamsStore<ProductRequest>();

import { create } from "zustand";

type SearchParamStore<T extends Record<string, string | undefined>> = T & {
  setParam: <K extends keyof T>(key: K, value: T[K]) => void;
};

export function createSearchParamStore<
  T extends Record<string, string | undefined>
>(defaultValues: T) {
  return create<SearchParamStore<T>>((set) => {
    const initialValues: T = Object.fromEntries(
      Object.entries(defaultValues).map(([key, defaultValue]) => {
        if (typeof window !== "undefined") {
          const params = new URLSearchParams(window.location.search);
          const value = params.get(key);
          return [key, value ?? defaultValue];
        }
        return [key, defaultValue];
      })
    ) as T;

    return {
      ...initialValues,
      setParam: (key, value) => {
        set((prev) => {
          const newState = { ...prev, [key]: value };
          const searchParams = new URLSearchParams(window.location.search);
          if (value !== undefined) {
            searchParams.set(key as string, value);
          } else {
            searchParams.delete(key as string);
          }
          const newUrl = `${
            window.location.pathname
          }?${searchParams.toString()}`;
          window.history.replaceState(null, "", newUrl);
          return newState;
        });
      },
    };
  });
}

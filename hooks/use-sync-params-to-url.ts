"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";

type Primitive = string | number | boolean | null | undefined;

function serializeValue(value: Primitive | object): string {
  if (value === null || value === undefined) return "";
  if (typeof value === "object") return JSON.stringify(value);
  return String(value);
}

export function useSyncParamsToUrl<T extends Record<string, unknown>>(
  useCustomParams: () => { params: T }
) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { params } = useCustomParams();

  useEffect(() => {
    const currentParams = new URLSearchParams(searchParams.toString());
    const nextParams = new URLSearchParams();

    (Object.entries(params) as [keyof T, T[keyof T]][]).forEach(
      ([key, value]) => {
        if (value !== null && value !== undefined && value !== "") {
          nextParams.set(String(key), serializeValue(value));
        }
      }
    );

    const currentUrl = `${pathname}?${currentParams.toString()}`;
    const nextUrl = `${pathname}?${nextParams.toString()}`;

    if (currentUrl !== nextUrl) {
      router.push(nextUrl, { scroll: false });
    }
  }, [params, router, searchParams, pathname]);
}

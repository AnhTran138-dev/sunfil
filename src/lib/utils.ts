import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number): string {
  if (typeof price !== "number" || isNaN(price)) {
    throw new Error("Invalid price value");
  }

  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(price);
}

export function styleSheet<T extends Record<string, React.CSSProperties>>(
  styles: T
): T {
  return styles;
}

export function calulateDiscountedPrice(
  price: number,
  discountPercentage: number
): number {
  if (typeof price !== "number" || typeof discountPercentage !== "number") {
    throw new Error("Invalid price or discount percentage");
  }
  return price - (price * discountPercentage) / 100;
}

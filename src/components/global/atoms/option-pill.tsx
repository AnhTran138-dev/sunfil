"use client";

import type * as React from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface OptionPillProps {
  children: React.ReactNode;
  isSelected?: boolean;
  onClick?: () => void;
  className?: string;
}

export function OptionPill({
  children,
  isSelected = false,
  onClick,
  className,
}: OptionPillProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 overflow-hidden",
        "border-2 bg-white hover:bg-gray-50",
        // "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
        isSelected
          ? "border-blue-500 text-blue-600"
          : "border-gray-200 text-gray-700 hover:border-gray-300",
        className
      )}
    >
      {children}

      {/* Đường kẻ xéo ở góc phải trên */}
      <div
        className={cn(
          "absolute top-0 right-0 w-4 h-4",
          isSelected ? "block" : "hidden"
        )}
      >
        <div
          className="absolute top-1 -right-2 w-10 h-4 bg-blue-500 transform origin-top-right translate-x-1 translate-y-2 rotate-45"
          style={{ zIndex: 1 }}
        />
        <Check
          className="size-2 text-white absolute right-0.5 top-0.5 "
          style={{ zIndex: 10 }}
          strokeWidth={3}
        />
      </div>

      {/* Dấu tick đè lên đường kẻ */}
      {/* {isSelected && (
        <div className="absolute top-[1px] right-[1px] size-3 rounded-full flex items-center justify-center">
        </div>
      )} */}
    </button>
  );
}

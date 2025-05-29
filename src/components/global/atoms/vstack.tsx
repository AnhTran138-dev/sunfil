import * as React from "react";
import { cn } from "@/lib/utils";

type VStackProps = React.HTMLAttributes<HTMLDivElement> & {
  gap?: string;
  align?: "start" | "center" | "end" | "stretch" | "baseline";
  justify?: "start" | "center" | "end" | "between" | "around" | "evenly";
};

export function VStack({
  className,
  gap = "gap-4",
  align = "start",
  justify = "start",
  children,
  ...props
}: VStackProps) {
  return (
    <div
      className={cn(
        "flex flex-col w-full",
        `items-${align}`,
        `justify-${justify}`,
        gap,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

import * as React from "react";
import { cn } from "@/lib/utils";

type HStackProps = React.HTMLAttributes<HTMLDivElement> & {
  gap?: string;
  align?: "start" | "center" | "end" | "stretch" | "baseline";
  justify?: "start" | "center" | "end" | "between" | "around" | "evenly";
};

export function HStack({
  className,
  gap = "gap-2",
  align = "center",
  justify = "between",
  children,
  ...props
}: HStackProps) {
  return (
    <div
      className={cn(
        "flex flex-row ",
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

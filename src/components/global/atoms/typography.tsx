"use client";

import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { motion } from "framer-motion";
import { ComponentProps, ElementType } from "react";

export const typographyVariants = cva("", {
  variants: {
    variant: {
      heading: "text-4xl font-bold",
      title: "text-3xl font-semibold",
      subtitle: "text-2xl font-medium text-muted-foreground",
      description: "text-base text-muted-foreground",
      caption: "text-sm text-muted-foreground",
      overline: "text-xs uppercase tracking-wider",
    },
    size: {
      xs: "text-xs",
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
    },
    fontWeight: {
      light: "font-light",
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
    color: {
      default: "text-foreground",
      primary: "text-primary",
      secondary: "text-secondary",
      muted: "text-muted-foreground",
      destructive: "text-destructive",
      accent: "text-accent",
      success: "text-success",
      warning: "text-warning",
      rose: "text-rose-900",
    },
    decoration: {
      none: "",
      underline: "underline",
      "line-through": "line-through",
    },
  },
  defaultVariants: {
    variant: "description",
    color: "default",
    decoration: "none",
  },
});

// 👇 Props type
export type TypographyVariantProps = VariantProps<typeof typographyVariants>;

type TypographyProps = ComponentProps<typeof motion.div> &
  TypographyVariantProps & {
    as?: ElementType;
  };

export const Typography = ({
  variant,
  size,
  fontWeight,
  color,
  as: Component = "p",
  decoration,
  className,
  ...props
}: TypographyProps) => {
  const MotionComponent = motion(Component);

  return (
    <MotionComponent
      className={cn(
        typographyVariants({
          variant,
          size,
          fontWeight,
          color,
          decoration,
        }),
        className
      )}
      {...props}
    />
  );
};

import { cn } from "@/lib/utils";
import React from "react";
import { Typography, TypographyVariantProps } from "../atoms/typography";

interface IconTextBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
  text?: string;
  variant?: TypographyVariantProps["variant"];
  size?: TypographyVariantProps["size"];
  fontWeight?: TypographyVariantProps["fontWeight"];
  colorText?: TypographyVariantProps["color"];
  decoration?: TypographyVariantProps["decoration"];
  className?: string;
}

const IconTextBadge: React.FC<IconTextBadgeProps> = ({
  icon,
  text,
  className,
  variant = "description",
  size = "sm",
  fontWeight = "normal",
  colorText,
  decoration = "none",
  ...props
}) => {
  return (
    <div
      className={cn(
        "rounded-full bg-gradient-to-br from-yellow-100 to-yellow-600 w-fit px-3 py-1 flex items-center gap-2",
        className
      )}
      {...props}
    >
      <span>{icon}</span>
      <Typography
        variant={variant}
        size={size}
        fontWeight={fontWeight}
        color={colorText ?? undefined}
        decoration={decoration}
      >
        {text}
      </Typography>
    </div>
  );
};

export default IconTextBadge;

import * as React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type IconButtonProps = React.ComponentProps<typeof Button> & {
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  children: React.ReactNode;
};

export function IconButton({
  iconLeft,
  iconRight,
  variant = "default",
  size,
  children,
  className,
  ...props
}: IconButtonProps) {
  let textColor = "";

  switch (variant) {
    case "default":
      textColor = "text-white";
      break;
    case "destructive":
      textColor = "text-white";
      break;
    case "outline":
      textColor = "text-secondary-foreground";
      break;
    case "secondary":
      textColor = "text-secondary-foreground";
      break;
    case "ghost":
      textColor = "text-accent-foreground";
      break;
    case "link":
      textColor = "text-primary";
      break;
    default:
      textColor = "text-foreground";
      break;
  }

  return (
    <Button
      className={cn("inline-flex items-center gap-2", className)}
      variant={variant}
      size={size}
      data-slot="icon-button"
      {...props}
    >
      {iconLeft && (
        <span className={cn("shrink-0", textColor)}>{iconLeft}</span>
      )}
      <span className={textColor}>{children}</span>
      {iconRight && (
        <span className={cn("shrink-0", textColor)}>{iconRight}</span>
      )}
    </Button>
  );
}

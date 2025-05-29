import { cn } from "@/lib/utils";
import { type LucideIcon } from "lucide-react";

interface BadgeIconProps {
  icon: LucideIcon;
  count?: number;
  className?: string;
  badgeClassName?: string;
  iconClassName?: string;
}

export function BadgeIcon({
  icon: Icon,
  count,
  className,
  badgeClassName,
  iconClassName,
}: BadgeIconProps) {
  return (
    <div className={cn("relative", className)}>
      <Icon className={cn("size-6", iconClassName)} />
      {typeof count === "number" && count > 0 && (
        <span
          className={cn(
            "absolute -top-1 -right-2 inline-flex items-center justify-center text-xs font-semibold text-white bg-red-500 rounded-full min-w-[1rem] h-4 px-[6px]",
            badgeClassName
          )}
        >
          {count}
        </span>
      )}
    </div>
  );
}

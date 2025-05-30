import { cn } from "@/lib/utils";

interface BadgeIconProps {
  icon: React.ReactNode;
  count?: number;
  className?: string;
  badgeClassName?: string;
}

export function BadgeIcon({
  icon,
  count,
  className,
  badgeClassName,
}: BadgeIconProps) {
  return (
    <div className={cn("relative", className)}>
      {icon}
      {typeof count === "number" && count > 0 && (
        <span
          className={cn(
            "absolute -top-1 -right-1 inline-flex items-center justify-center text-xs font-semibold text-white bg-red-500 rounded-full min-w-[1rem] h-4 ",
            badgeClassName
          )}
        >
          {count}
        </span>
      )}
    </div>
  );
}

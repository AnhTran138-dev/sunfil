"use client";

import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import type React from "react";
import { useState } from "react";

interface NavItemProps {
  image?: string;
  title?: string;
  isActive?: boolean;
  onClick?: () => void;
  isHovered?: boolean;
  isBorderRadius?: boolean;
  hasIcon?: boolean;
  className?: string;
}

const NavItem: React.FC<NavItemProps> = ({
  image,
  title,
  isActive = false,
  hasIcon = true,
  isBorderRadius = true,
  onClick,
  className = "",
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn(
        "group relative flex items-center p-4  cursor-pointer h-fit",
        "bg-white",
        "transition-all duration-300 ease-out",
        "hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50",
        "hover:shadow-lg hover:shadow-blue-100/50",
        "hover:-translate-y-0.5",
        isBorderRadius ? "rounded-xl" : "rounded-none",
        isActive
          ? "bg-blue-50 border-l-4 border-blue-500 shadow-md"
          : "hover:border-l-4 hover:border-blue-300",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          onClick?.();
        }
      }}
    >
      {/* Background glow effect */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400/0 to-indigo-400/0 group-hover:from-blue-400/5 group-hover:to-indigo-400/5 transition-all duration-300" />

      {/* Image container with zoom effect */}
      {image && (
        <div className="relative flex-shrink-0 mr-4 overflow-hidden rounded-lg bg-white group-hover:shadow-md transition-all duration-300 hidden lg:flex">
          <div className="transform transition-transform duration-300 ease-out group-hover:scale-110">
            <Image
              src={image || "/placeholder.svg"}
              alt={title || "Navigation Item"}
              width={48}
              height={48}
              className="object-cover"
            />
          </div>
        </div>
      )}

      {/* Content */}
      <div className=" flex-1 relative z-10">
        {title && (
          <h3
            className={cn(
              "text-xs xl:text-sm font-semibold transition-all duration-200",
              isActive
                ? "text-blue-700"
                : "text-gray-800 group-hover:text-blue-700",
              "group-hover:translate-x-1"
            )}
          >
            {title}
          </h3>
        )}
      </div>

      {/* Enhanced chevron with animation */}
      <div className="relative flex-shrink-0 ml-3">
        {hasIcon && (
          <ChevronRight
            className={`
            w-5 h-5 transition-all duration-300 ease-out
            ${
              isActive
                ? "text-blue-600"
                : "text-gray-400 group-hover:text-blue-600"
            }
            ${isHovered ? "transform translate-x-1 scale-110" : ""}
          `}
          />
        )}

        {/* Animated background circle */}
      </div>
    </div>
  );
};

export default NavItem;

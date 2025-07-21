"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { type Locale, useLocale } from "next-intl";
import Image from "next/image";
import type React from "react";
import { useState, useTransition, useRef, useEffect } from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

interface LocaleSwitcherProps {
  label: string;
  className?: string;
  side?: "left" | "right" | "top" | "bottom";
}

const LocaleSwitcher: React.FC<LocaleSwitcherProps> = ({
  label,
  className,
  side = "bottom",
}) => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const getLocaleDisplay = (loc: string) => {
    return {
      code: loc.toUpperCase(),
      flag: loc === "vi" ? "VN" : "UK",
      name: loc === "vi" ? "Tiếng Việt" : "English",
    };
  };

  const currentLocaleDisplay = getLocaleDisplay(locale);

  const onChange = (nextLocale: string) => {
    setIsOpen(false);
    startTransition(() => {
      router.replace(pathname, {
        locale: nextLocale as Locale,
      });
    });
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <Button
        aria-label={label}
        onClick={() => setIsOpen(!isOpen)}
        variant="outline"
        disabled={isPending}
        className={cn("hover:cursor-pointer", className)}
      >
        <div className="flex items-center gap-2">
          <Image
            src={`/lang/flag_${currentLocaleDisplay.flag}.svg`}
            alt={`${locale} flag`}
            width={20}
            height={20}
            draggable={false}
            unoptimized={true}
            className="size-5 object-cover rounded-sm"
          />
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            {currentLocaleDisplay.code}
          </span>
        </div>
      </Button>

      {/* Custom Dropdown */}
      {isOpen && (
        <div
          className={cn(
            `
          absolute top-full mt-1 min-w-full w-[160px]
          bg-background rounded-lg overflow-hidden
          py-2 z-40
          animate-in fade-in-0 zoom-in-95 duration-100
          shadow-lg border border-gray-200 dark:border-gray-700
        `,
            side === "left" && "left-0",
            side === "right" && "right-0",
            side === "top" && "-top-32 right-0",
            side === "bottom" && "top-full"
          )}
        >
          {routing.locales.map((loc) => {
            const localeDisplay = getLocaleDisplay(loc);
            const isSelected = loc === locale;

            return (
              <button
                key={loc}
                onClick={() => onChange(loc)}
                className={`
                  w-full flex items-center gap-3 px-3 py-2
                  text-left text-sm
                  hover:bg-gray-50 dark:hover:bg-gray-700
                  transition-colors duration-150 
                  ${
                    isSelected
                      ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                      : "text-gray-700 dark:text-gray-300"
                  }
                `}
              >
                <Image
                  src={`/lang/flag_${localeDisplay.flag}.svg`}
                  alt={`${loc} flag`}
                  width={20}
                  height={20}
                  draggable={false}
                  unoptimized={true}
                  className="size-5 object-cover rounded-sm"
                />
                <div className="flex flex-col">
                  <span className="font-medium">{localeDisplay.code}</span>
                  <span className="text-xs opacity-70">
                    {localeDisplay.name}
                  </span>
                </div>
                {isSelected && (
                  <div className="ml-auto size-2 bg-blue-500 rounded-full" />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default LocaleSwitcher;

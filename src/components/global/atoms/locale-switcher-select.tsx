"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { Locale, useLocale } from "next-intl";
import Image from "next/image";
import React, { useTransition } from "react";

interface LocaleSwitcherSelectProps {
  defaultLocale?: string;
  label: string;
  children?: React.ReactNode;
}

const LocaleSwitcherSelect: React.FC<LocaleSwitcherSelectProps> = ({
  defaultLocale,
  label,
}) => {
  const locale = useLocale();

  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();

  const onSelectChange = (nextLocale: string) => {
    startTransition(() => {
      router.replace(pathname, {
        locale: nextLocale as Locale,
      });
    });
  };

  return (
    <Select
      defaultValue={defaultLocale}
      onValueChange={onSelectChange}
      disabled={isPending}
    >
      <SelectTrigger aria-label={label}>
        <Image
          src={`/flag_${locale == "vi" ? "VN" : "UK"}.svg`}
          alt={`${locale} flag`}
          width={24}
          height={24}
          draggable={false}
          unoptimized={true}
        />
        <SelectValue />
      </SelectTrigger>
      <SelectContent align="end">
        {routing.locales.map((locale) => (
          <SelectItem key={locale} value={locale}>
            {locale.toUpperCase()}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default LocaleSwitcherSelect;

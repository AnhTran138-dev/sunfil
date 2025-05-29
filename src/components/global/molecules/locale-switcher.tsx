"use client";

import React from "react";
import LocaleSwitcherSelect from "../atoms/locale-switcher-select";
import { useLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import Image from "next/image";
import { HStack } from "../atoms/hstack";

const LocaleSwitcher = () => {
  const locale = useLocale();

  return (
    <HStack justify="start" align="center" gap="gap-1">
      <LocaleSwitcherSelect defaultLocale={locale} label="Select Language">
        {routing.locales.map((loc) => (
          <option key={loc} value={loc}>
            {loc.toUpperCase()}
          </option>
        ))}
      </LocaleSwitcherSelect>
    </HStack>
  );
};

export default LocaleSwitcher;

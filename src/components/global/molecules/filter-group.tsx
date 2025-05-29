"use client";

import { OptionPill } from "../atoms/option-pill";

export interface FilterOption {
  value: string;
  label: string;
}

interface FilterGroupProps {
  options: FilterOption[];
  value?: string[];
  onValueChange?: (value: string[]) => void;
  className?: string;
  isMultiple?: boolean;
}

export function FilterGroup({
  options,
  value = [],
  onValueChange,
  className,
  isMultiple = true,
}: FilterGroupProps) {
  const handleOptionClick = (optionValue: string) => {
    if (!onValueChange) return;

    let newValue: string[];

    if (isMultiple) {
      newValue = value.includes(optionValue)
        ? value.filter((v) => v !== optionValue)
        : [...value, optionValue];
    } else {
      newValue = value.includes(optionValue) ? [] : [optionValue];
    }

    onValueChange(newValue);
  };

  return (
    <div className={`flex gap-2 flex-wrap ${className}`}>
      {options.map((option) => (
        <OptionPill
          key={option.value}
          isSelected={value.includes(option.value)}
          onClick={() => handleOptionClick(option.value)}
        >
          {option.label}
        </OptionPill>
      ))}
    </div>
  );
}

"use client";

import { Search, Camera } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import React from "react";
import useDebounce from "@/hooks/use-debounce";

interface SearchInputProps {
  placeholder?: string;
  className?: string;
  onSearchClick?: (value: string) => void;
  onSearchChange?: (value: string) => void;
  onCameraClick?: () => void;
}

export function SearchInput({
  placeholder = "Tìm sản phẩm",
  className = "",
  onSearchClick,
  onCameraClick,
}: SearchInputProps) {
  const [value, setValue] = React.useState("");
  const valueDebounced = useDebounce(value, 300);

  React.useEffect(() => {
    onSearchClick?.(valueDebounced);
  }, [valueDebounced, onSearchClick]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
  };

  return (
    <div className={`relative flex items-center ${className}`}>
      <Input
        type="text"
        placeholder={placeholder}
        className="pr-20 h-12 rounded-full border-gray-300"
        value={value}
        onChange={handleChange}
      />
      <div className="absolute right-1 flex items-center gap-1 ">
        <Button
          variant="ghost"
          size="icon"
          className="size-8 rounded-full"
          onClick={onCameraClick}
        >
          <Camera className="h-4 w-4 text-gray-500" />
        </Button>
        <Button
          className="h-8 w-12 rounded-full bg-primary hover:bg-blue-700"
          onClick={() => onSearchClick?.(valueDebounced)}
        >
          <Search className="size-4 text-white" />
        </Button>
      </div>
    </div>
  );
}

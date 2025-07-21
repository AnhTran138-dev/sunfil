"use client";

import { useState } from "react";

export function useNavigation() {
  const [open, setOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const toggleSubmenu = (index: number) => {
    setExpandedItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const openSheet = () => setOpen(true);
  const closeSheet = () => setOpen(false);

  return {
    open,
    setOpen,
    expandedItems,
    toggleSubmenu,
    openSheet,
    closeSheet,
  };
}

"use client";

import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

export interface SubMenuItem {
  title: string;
  href: string;
  icon?: LucideIcon;
}

interface SubMenuItemProps {
  item: SubMenuItem;
  onItemClick: () => void;
}

export function SubMenuItemComponent({ item, onItemClick }: SubMenuItemProps) {
  return (
    <Button
      variant="ghost"
      size="sm"
      className="w-full justify-start h-10 px-3 text-sm hover:bg-accent"
      onClick={onItemClick}
    >
      {item.icon && <item.icon className="mr-2 h-4 w-4" />}
      <span className="flex-1 text-left">{item.title}</span>
    </Button>
  );
}

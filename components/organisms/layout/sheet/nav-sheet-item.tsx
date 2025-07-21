"use client";
import { ChevronRight, ChevronDown, LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SubMenuItem, SubMenuItemComponent } from "./nav-sheet-submenu";

export interface NavigationItem {
  title: string;
  icon: LucideIcon;
  href: string;
  submenu?: SubMenuItem[] | null;
}

interface NavigationItemProps {
  item: NavigationItem;
  index: number;
  onItemClick: () => void;
  isExpanded: boolean;
  onToggleExpand: (index: number) => void;
}

export function NavSheetItem({
  item,
  index,
  onItemClick,
  isExpanded,
  onToggleExpand,
}: NavigationItemProps) {
  const handleClick = () => {
    if (item.submenu) {
      onToggleExpand(index);
    } else {
      onItemClick();
    }
  };

  return (
    <div>
      <Button
        variant="ghost"
        className="w-full justify-start h-12 px-3 hover:bg-accent"
        onClick={handleClick}
      >
        <item.icon className="mr-3 h-5 w-5" />
        <span className="flex-1 text-left">{item.title}</span>
        {item.submenu ? (
          <ChevronDown
            className={`ml-2 h-4 w-4 transition-transform duration-200 ${
              isExpanded ? "rotate-180" : ""
            }`}
          />
        ) : (
          <ChevronRight className="ml-2 h-4 w-4" />
        )}
      </Button>

      {/* Submenu */}
      {item.submenu && isExpanded && (
        <div className="ml-4 mt-1 space-y-1 border-l-2 border-border pl-4 animate-in slide-in-from-top-2 duration-200">
          {item.submenu.map((subItem, subIndex) => (
            <SubMenuItemComponent
              key={subIndex}
              item={subItem}
              onItemClick={onItemClick}
            />
          ))}
        </div>
      )}
    </div>
  );
}

"use client";
import { IconButton } from "@/components/atomic/icon-text-button";
import LocaleSwitcher from "@/components/atomic/locale-switcher";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { LogOut } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import NavSheetContent from "./nav-sheet-content";

interface MenuSheetProps {
  className?: string;
}

const MenuSheet: React.FC<MenuSheetProps> = ({ className }) => {
  const btn = useTranslations("Button");

  return (
    <div className={cn(className)}>
      <Sheet>
        <SheetTrigger asChild>
          <IconButton
            variant="ghost"
            size="sm"
            iconLeft={
              <Image
                src="/icons/user-circle-fill.svg"
                alt="User Circle"
                width={24}
                height={24}
              />
            }
            className="text-gray-600 hover:bg-blue-100"
          >
            <span className="text-sm hidden lg:flex">{btn("account")}</span>
          </IconButton>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>
              <Image
                src="/logo.svg"
                alt="Logo"
                width={100}
                height={50}
                className="mb-4"
              />
            </SheetTitle>
            <SheetDescription>{btn("description")}</SheetDescription>
          </SheetHeader>

          {/* Sheet Content */}
          <NavSheetContent />

          <SheetFooter>
            <div className="flex items-center justify-between">
              <Button size={"icon"} variant="ghost">
                <LogOut />
              </Button>
              <LocaleSwitcher label="select" side="top" />
            </div>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MenuSheet;

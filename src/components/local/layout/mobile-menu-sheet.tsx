"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import LocaleSwitcher from "@/components/global/molecules/locale-switcher";
import { useTranslations } from "next-intl";
import { Menu, User, Settings } from "lucide-react";

const MobileMenuSheet = () => {
  const btn = useTranslations("Button");

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle className="text-left">Menu</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-6 mt-6">
          {/* Navigation Links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-sm text-gray-500 uppercase tracking-wide">
              Navigation
            </h3>
            <div className="flex flex-col gap-2">
              <Button variant="ghost" className="justify-start h-auto p-3">
                <span>Home</span>
              </Button>
              <Button variant="ghost" className="justify-start h-auto p-3">
                <span>Products</span>
              </Button>
              <Button variant="ghost" className="justify-start h-auto p-3">
                <span>Categories</span>
              </Button>
              <Button variant="ghost" className="justify-start h-auto p-3">
                <span>About</span>
              </Button>
              <Button variant="ghost" className="justify-start h-auto p-3">
                <span>Contact</span>
              </Button>
            </div>
          </div>

          {/* Account Section */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-sm text-gray-500 uppercase tracking-wide">
              Account
            </h3>
            <Button variant="ghost" className="justify-start h-auto p-3">
              <User className="mr-3 h-5 w-5" />
              <span>{btn("account")}</span>
            </Button>
            <Button variant="ghost" className="justify-start h-auto p-3">
              <Settings className="mr-3 h-5 w-5" />
              <span>Settings</span>
            </Button>
          </div>

          {/* Locale Switcher */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-sm text-gray-500 uppercase tracking-wide">
              Language
            </h3>
            <div className="px-3">
              <LocaleSwitcher />
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenuSheet;

"use client";

import { useIsMobile } from "@/hooks/use-mobile";
import { Phone, Users } from "lucide-react";
import { useTranslations } from "next-intl";

export function TopBanner() {
  const t = useTranslations("HomePage");

  const isMobile = useIsMobile();

  return (
    <div className="text-background py-2 px-4 md:px-10 bg-gradient-to-r from-blue-600 via-cyan-300 to-blue-600">
      <div className="container mx-auto flex justify-between items-center text-sm">
        {isMobile ? (
          <>
            {/* Mobile layout */}
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span className="text-yellow-300 font-semibold">
                0283 760 7607
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span className="font-medium">{t("download_app")}</span>
            </div>
          </>
        ) : (
          <>
            {/* Desktop layout */}
            <div className="flex items-center gap-4">
              <span>
                {t("input_code")}
                <span className="text-yellow-300 font-semibold">
                  {" "}
                  {t("newbie")}
                </span>{" "}
                {t("newbie_desc")}
              </span>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>
                  Hotline:{" "}
                  <span className="text-yellow-300 font-semibold">
                    0283 760 7607
                  </span>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span>{t("download_app")}</span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

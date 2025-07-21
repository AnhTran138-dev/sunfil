"use client";
import Link from "next/link";
import type React from "react";

import { useTranslations } from "next-intl";
import Image from "next/image";
import LocaleSwitcher from "@/components/atomic/locale-switcher";
import Container from "@/components/atomic/container";
import { cn } from "@/lib/utils";

interface App {
  title: string;
  description: string;
  icon: React.ReactNode;
  href?: string;
  className?: string;
}

export default function Footer() {
  const t = useTranslations("Footer");

  const apps: App[] = [
    {
      icon: (
        <div className="w-6 h-6 sm:w-8 sm:h-8 rounded flex items-center justify-center flex-shrink-0">
          <svg
            className="w-3 h-3 sm:w-5 sm:h-5 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
          </svg>
        </div>
      ),
      title: t("get_on_app_store"),
      description: "App Store",
      className: "bg-foreground",
    },
    {
      icon: (
        <div className="w-6 h-6 sm:w-8 sm:h-8 rounded flex items-center justify-center flex-shrink-0">
          <svg
            className="w-3 h-3 sm:w-5 sm:h-5 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
          </svg>
        </div>
      ),
      title: t("get_on_google_play"),
      description: "Google Play",
      className: "bg-primary",
    },
  ];

  return (
    <footer
      className="w-full py-12 sm:py-16 lg:py-20"
      style={{
        backgroundImage: "url('/icons/footer/background.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <Container className="grid grid-cols-12 gap-4 lg:gap-6 h-full">
        {/* Company Info - Full width on mobile, 5 cols on desktop */}
        <div className="col-span-12 lg:col-span-5 mb-8 lg:mb-0">
          <h6 className="font-bold text-blue-900 text-lg sm:text-xl">
            {t("company_name")}
          </h6>

          <div className="mt-6 sm:mt-8 space-y-2">
            <p>
              <span className="text-muted-foreground">{t("tax_code")}: </span>
              <span className="text-muted-foreground font-medium">
                0305094228
              </span>
            </p>
            <p>
              <span className="text-muted-foreground">{t("address")}: </span>
              <span className="text-muted-foreground font-medium">
                {t("address_detail")}
              </span>
            </p>
            <p>
              <span className="text-muted-foreground">
                {t("opening_hours")}:{" "}
              </span>
              <span className="text-muted-foreground font-medium">
                {t("opening_hours_detail")}
              </span>
            </p>
            <p>
              <span className="text-muted-foreground">{t("phone")}: </span>
              <span className="text-muted-foreground font-medium">
                0283 760 7607
              </span>
            </p>
          </div>

          <Image
            src="/icons/footer/certificate.svg"
            alt="Certificate"
            width={200}
            height={100}
            className="mt-6 sm:mt-8 w-auto h-16 sm:h-20"
          />
        </div>

        {/* Sitemap - Half width on mobile, 2 cols on desktop */}
        <div className="col-span-6 sm:col-span-6 lg:col-span-2 mb-8 lg:mb-0">
          <h6 className="font-bold text-blue-900 text-base sm:text-lg">
            {t("sitemap")}
          </h6>
          <ul className="mt-4 space-y-3 sm:space-y-4">
            <li className="text-muted-foreground text-sm sm:text-base">
              <Link
                href="/about"
                className="hover:text-blue-900 transition-colors"
              >
                {t("about_us")}
              </Link>
            </li>
            <li className="text-muted-foreground text-sm sm:text-base">
              <Link
                href="/articles"
                className="hover:text-blue-900 transition-colors"
              >
                {t("articles")}
              </Link>
            </li>
            <li className="text-muted-foreground text-sm sm:text-base">
              <Link
                href="/cart"
                className="hover:text-blue-900 transition-colors"
              >
                {t("cart")}
              </Link>
            </li>
            <li className="text-muted-foreground text-sm sm:text-base">
              <Link
                href="/contact"
                className="hover:text-blue-900 transition-colors"
              >
                {t("contact_us")}
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal - Half width on mobile, 2 cols on desktop */}
        <div className="col-span-6 sm:col-span-6 lg:col-span-2 mb-8 lg:mb-0">
          <h6 className="font-bold text-blue-900 text-base sm:text-lg">
            {t("legal")}
          </h6>
          <ul className="mt-4 space-y-3 sm:space-y-4">
            <li className="text-muted-foreground text-sm sm:text-base">
              <Link
                href="/privacy-policy"
                className="font-semibold hover:text-blue-900 transition-colors"
              >
                {t("privacy_policy")}
              </Link>
            </li>
            <li className="text-muted-foreground text-sm sm:text-base">
              <Link
                href="/cookies-policy"
                className="hover:text-blue-900 transition-colors"
              >
                {t("cookies_policy")}
              </Link>
            </li>
            <li className="text-muted-foreground text-sm sm:text-base">
              <Link
                href="/delivery-policy"
                className="hover:text-blue-900 transition-colors"
              >
                {t("delivery_policy")}
              </Link>
            </li>
            <li className="text-muted-foreground text-sm sm:text-base">
              <Link
                href="/faqs"
                className="hover:text-blue-900 transition-colors"
              >
                {t("faqs")}
              </Link>
            </li>
          </ul>
        </div>

        {/* Download App - Full width on mobile, 3 cols on desktop */}
        <div className="col-span-12 lg:col-span-3 flex flex-col">
          <h6 className="font-bold text-blue-900 text-base sm:text-lg">
            {t("download_app")}
          </h6>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 mt-4 mb-6">
            {apps.map((app, index) => (
              <Link
                key={index}
                href={app.href || "#"}
                className={cn(
                  "flex items-center gap-3 text-white px-4 py-3 rounded-lg transition-transform hover:scale-105 flex-1 sm:flex-1 lg:flex-none",
                  app.className
                )}
              >
                {app.icon}
                <div className="flex flex-col items-start">
                  <span className="text-xs sm:text-sm font-medium">
                    {app.title}
                  </span>
                  <span className="text-xs sm:text-sm opacity-90">
                    {app.description}
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-4 place-self-end">
            <LocaleSwitcher label="Select Language" side="top" />
          </div>
        </div>
      </Container>
    </footer>
  );
}

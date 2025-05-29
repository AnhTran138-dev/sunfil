import Link from "next/link";
import { useTranslations } from "next-intl";
import Image from "next/image";
import LocaleSwitcher from "@/components/global/molecules/locale-switcher";

export default function Footer() {
  const t = useTranslations("Footer");
  return (
    <footer className="bg-background py-12 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Information */}
          <div className="lg:col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-4">
              {t("company_name")}
            </h3>
            <div className="space-y-2 text-sm text-gray-600">
              <p>
                {t("tax_code")}: <span className="font-medium">0305094228</span>
              </p>
              <p>
                {t("address")}: 13 Nghia Thuc, Ward 05, District 5, Ho Chi Minh
                City, Viet Nam.
              </p>
              <p>
                {t("phone")}: <span className="font-medium">0283 760 7607</span>
              </p>
              <p>
                {t("opening_hours")}:{" "}
                <span className="font-medium">{t("time")}</span>
              </p>
            </div>

            {/* Certification Badge */}
            <div className="mt-6">
              <Image
                src="certificate.svg"
                alt="Certification Badge"
                width={250}
                height={150}
                className=" object-contain"
              />
            </div>
          </div>

          {/* Sitemap */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              {t("sitemap")}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {t("about_us")}
                </Link>
              </li>
              <li>
                <Link
                  href="/article"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {t("articles")}
                </Link>
              </li>
              <li>
                <Link
                  href="/cart"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {t("cart")}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {t("contact_us")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              {t("legal")}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {t("privacy_policy")}
                </Link>
              </li>
              <li>
                <Link
                  href="/cookie-policy"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {t("cookies_policy")}
                </Link>
              </li>
              <li>
                <Link
                  href="/delivery-policy"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {t("delivery_policy")}
                </Link>
              </li>
              <li>
                <Link
                  href="/faqs"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {t("faqs")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Download App */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              {t("download_app")}
            </h3>
            <div className="space-y-3">
              <Link
                href="#"
                className="block w-full max-w-[200px] bg-black text-white rounded-lg p-3 hover:bg-gray-800 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-black"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="text-xs opacity-90">
                      {t("get_on_google_play")}
                    </div>
                    <div className="text-sm font-semibold">
                      Google Play Store
                    </div>
                  </div>
                </div>
              </Link>

              <Link
                href="#"
                className="block w-full max-w-[200px] bg-blue-600 text-white rounded-lg p-3 hover:bg-blue-700 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-black"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="text-xs opacity-90">
                      {t("get_on_app_store")}
                    </div>
                    <div className="text-sm font-semibold">Apple App Store</div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Language Selector */}
            <div className="mt-6 ">
              <LocaleSwitcher />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

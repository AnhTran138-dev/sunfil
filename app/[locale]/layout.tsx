import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import MainTemplate from "@/components/templates/main-template";
import ReactQueryProvider from "@/components/contexts/react-query-provider";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider>
          <ReactQueryProvider>
            <MainTemplate>{children}</MainTemplate>
          </ReactQueryProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

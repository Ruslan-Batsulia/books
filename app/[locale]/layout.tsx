import type { Metadata } from "next";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { Nunito } from "@/src/common/fonts";

import "@/sass/globals.scss";

type Props = {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
};

export const metadata: Metadata = {
  title: "Books Catalog",
  icons: "/images/favicon.ico",
  description: "A simple books catalog application.",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
};

export default async function LocaleLayout({children, params}: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body className={`${Nunito.variable}`}>
        <NextIntlClientProvider>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

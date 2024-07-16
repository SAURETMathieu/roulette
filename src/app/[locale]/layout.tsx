import Footer from "@/src/components/footer/Footer";
import { SiteHeader } from "@/src/components/header/Header";
import { Toaster } from "@/src/components/ui/sonner";
import { locales } from "@/src/config";
import { ThemeProvider } from "@/src/context/themeProvider";
import { AuthProvider } from "@/src/context/userProvider";
import { fontSans } from "@/src/lib/fonts";
import { cn } from "@/src/lib/utils";
import { TailwindIndicator } from "@/src/utils/tailwindIndicator";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

import "@/styles/globals.css";
import { ReactNode } from "react";
import { Metadata } from "next";

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale },
}: Omit<Props, "children">): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "LocaleMetadata" });
  return {
    title: {
      default: t("title"),
      template: "%s - " + t("title"),
    },
    description: t("description"),
    applicationName: t("name"),
    keywords: ["Next.js", "React", "JavaScript"],
    authors: [{ name: "Mathieu SAURET", url: "" }],
    creator: "Mathieu SAURET",
    publisher: "Mathieu SAURET",
    //publishedTime: '2023-01-01T00:00:00.000Z',
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
      apple: "/favicon.ico",
    },
  };
}

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: {
    locale: string;
  };
}>) {
  unstable_setRequestLocale(locale);
  const messages = useMessages();
  return (
    <>
      <html lang={locale} suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <AuthProvider>
            <NextIntlClientProvider locale={locale} messages={messages}>
              <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
              >
                <div className="relative flex min-h-screen flex-col">
                  <SiteHeader />
                  <main className="min-h-screen flex-1 sm:py-4 sm:pl-14">
                    {children}
                  </main>
                  <Toaster />
                  <Footer />
                </div>
                <TailwindIndicator />
              </ThemeProvider>
            </NextIntlClientProvider>
          </AuthProvider>
        </body>
      </html>
    </>
  );
}

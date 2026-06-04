import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://site-pessoal-nine-wheat.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Bruno Santos — Developer Portfolio",
    template: "%s — Bruno Santos",
  },
  description:
    "Developer portfolio of Bruno Santos — terminal games, a crypto arbitrage bot, CLI projects and more.",
  keywords: [
    "Bruno Santos",
    "developer",
    "portfolio",
    "software developer",
    "Python",
    "C++",
    "TypeScript",
  ],
  authors: [{ name: "Bruno Santos" }],
  alternates: {
    languages: {
      en: "/en",
      pt: "/pt",
      es: "/es",
    },
  },
  openGraph: {
    type: "website",
    siteName: "Bruno Santos — Portfolio",
    title: "Bruno Santos — Developer Portfolio",
    description:
      "Developer portfolio of Bruno Santos — terminal games, a crypto arbitrage bot, CLI projects and more.",
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "Bruno Santos — Developer Portfolio",
    description:
      "Developer portfolio of Bruno Santos — terminal games, a crypto arbitrage bot, CLI projects and more.",
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  // Enable static rendering for this locale.
  setRequestLocale(locale);

  return (
    <html
      lang={locale}
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
    >
      <body className="bg-background text-foreground flex min-h-full flex-col">
        <NextIntlClientProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

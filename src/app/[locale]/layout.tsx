import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "../globals.css";

// two fonts: Geist for normal text and Geist Mono for the terminal bits.
// next/font self-hosts them so there's no extra request to google.
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// used as the base for og/canonical urls below. update if the domain changes.
const SITE_URL = "https://site-pessoal-nine-wheat.vercel.app";

// mobile bits: width=device-width so it isn't zoomed out on phones, and a
// theme-color that matches --background so the browser chrome (status bar /
// address bar) blends into the dark site instead of flashing white.
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#08090b",
};

// page <head> / SEO. the title template means a project page shows up as
// "Project name — Bruno Santos" without me repeating my name everywhere.
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
    "C",
    "TypeScript",
  ],
  authors: [{ name: "Bruno Santos" }],
  // tells google the same page exists in 3 languages
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

// prebuild one copy of the site per language (/en, /pt, /es) instead of
// rendering on demand
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

// this is the real root layout — there's no app/layout.tsx because every
// page lives under /[locale], so this renders the <html> tag itself.
export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  // someone hit /xx that isn't a real language -> 404
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  // without this the page falls back to dynamic rendering and the static
  // export breaks — has to be called before anything reads translations
  setRequestLocale(locale);

  return (
    // dark is hardcoded on purpose: the site is dark-only
    <html
      lang={locale}
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
    >
      <body className="bg-background text-foreground flex min-h-full flex-col">
        {/* provider hands the loaded messages down to every client component */}
        <NextIntlClientProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

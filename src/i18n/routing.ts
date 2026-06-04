import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // English is the default; Portuguese and Spanish are also supported.
  locales: ["en", "pt", "es"],
  defaultLocale: "en",
});

export type Locale = (typeof routing.locales)[number];

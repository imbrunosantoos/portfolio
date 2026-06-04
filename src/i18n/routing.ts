import { defineRouting } from "next-intl/routing";

// one place that defines which languages exist and which is the default.
// everything else (the proxy, the request config, the language switcher)
// reads from here, so adding a language is a one-line change.
export const routing = defineRouting({
  locales: ["en", "pt", "es"],
  // english is the fallback when the browser asks for something we don't have
  defaultLocale: "en",
});

// little helper type so i can type a real locale instead of a loose string
export type Locale = (typeof routing.locales)[number];

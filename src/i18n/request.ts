import { hasLocale } from "next-intl";
import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

// runs on every request to figure out the language and load its strings.
export default getRequestConfig(async ({ requestLocale }) => {
  // requestLocale comes from the [locale] segment of the url
  const requested = await requestLocale;
  // guard against someone typing /xx by hand -> just fall back to english
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  return {
    locale,
    // only the json for the active language gets loaded, not all three
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});

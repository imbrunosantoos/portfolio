"use client";

import { useLocale, useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { useTransition } from "react";
import { Globe } from "lucide-react";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

// the EN / PT / ES picker in the header. swapping language should keep you on
// the same page, just with a different prefix — so it rebuilds the current
// route instead of sending you home.
export function LanguageSwitcher() {
  const t = useTranslations("language");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  // useTransition so the select doesn't feel frozen while the new page loads
  const [isPending, startTransition] = useTransition();

  function onSelect(nextLocale: string) {
    startTransition(() => {
      // keep the same pathname + params (e.g. the project slug), only change
      // the locale. ts can't prove pathname/params line up for a dynamic
      // route here, but they always do since we're literally on that route.
      router.replace(
        // @ts-expect-error -- pathname/params are valid for the current route
        { pathname, params },
        { locale: nextLocale },
      );
    });
  }

  return (
    // a plain <select> styled to match — native dropdown, works on mobile,
    // and is accessible for free
    <label className="group relative inline-flex items-center">
      <Globe
        className="text-foreground/60 pointer-events-none absolute left-2.5 h-4 w-4"
        aria-hidden
      />
      <span className="sr-only">{t("label")}</span>
      <select
        value={locale}
        disabled={isPending}
        onChange={(e) => onSelect(e.target.value)}
        aria-label={t("label")}
        className="border-foreground/15 bg-foreground/5 hover:bg-foreground/10 focus-visible:ring-accent cursor-pointer appearance-none rounded-md border py-1.5 pr-3 pl-8 text-sm transition-colors focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50"
      >
        {routing.locales.map((loc) => (
          <option key={loc} value={loc} className="bg-background text-foreground">
            {t(loc)}
          </option>
        ))}
      </select>
    </label>
  );
}

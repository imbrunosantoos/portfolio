import { useTranslations } from "next-intl";
import { ArrowDown } from "lucide-react";

export function Hero() {
  const t = useTranslations();

  return (
    <section className="mx-auto max-w-5xl px-6 pt-20 pb-12 sm:pt-28">
      <p className="text-accent mb-3 text-sm font-medium tracking-wide uppercase">
        {t("site.role")}
      </p>
      <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
        {t("hero.greeting")}
        <span className="text-accent">.</span>
      </h1>
      <p className="text-foreground/70 mt-6 max-w-2xl text-lg leading-relaxed">
        {t("hero.tagline")}
      </p>
      <a
        href="#projects"
        className="text-foreground/70 hover:text-accent mt-8 inline-flex items-center gap-2 text-sm font-medium transition-colors"
      >
        {t("hero.cta")}
        <ArrowDown className="h-4 w-4" />
      </a>
    </section>
  );
}

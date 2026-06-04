import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Header() {
  const t = useTranslations();

  return (
    <header className="border-foreground/10 bg-background/70 sticky top-0 z-50 border-b backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="hover:text-accent text-base font-semibold tracking-tight transition-colors"
        >
          {t("site.name")}
          <span className="text-accent">.</span>
        </Link>
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="text-foreground/70 hover:text-foreground hidden text-sm transition-colors sm:block"
          >
            {t("nav.projects")}
          </Link>
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}

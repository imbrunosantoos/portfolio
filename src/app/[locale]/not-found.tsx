import { useTranslations } from "next-intl";
import { ArrowLeft } from "lucide-react";
import { Link } from "@/i18n/navigation";

// shown for any unknown url inside a locale (e.g. a project slug that doesn't
// exist). lives under [locale] so the 404 is translated like everything else.
export default function NotFound() {
  const t = useTranslations("notFound");

  return (
    <section className="mx-auto flex max-w-3xl flex-col items-start px-6 py-24">
      <p className="text-accent text-6xl font-bold">404</p>
      <h1 className="mt-4 text-2xl font-bold tracking-tight">{t("title")}</h1>
      <p className="text-foreground/60 mt-2">{t("description")}</p>
      <Link
        href="/"
        className="text-foreground/70 hover:text-accent mt-8 inline-flex items-center gap-2 text-sm font-medium transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        {t("back")}
      </Link>
    </section>
  );
}

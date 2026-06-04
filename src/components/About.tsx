import { useTranslations } from "next-intl";
import { SectionHeading } from "./SectionHeading";

// just the heading + a paragraph of bio. text is in the messages files.
export function About() {
  const t = useTranslations("about");

  return (
    <section id="about" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-10 sm:py-12">
      <SectionHeading index="01" title={t("title")} />
      <p className="text-muted max-w-3xl text-base leading-relaxed sm:text-lg">
        {t("body")}
      </p>
    </section>
  );
}

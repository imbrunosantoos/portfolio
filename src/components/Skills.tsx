import { useTranslations } from "next-intl";
import { SectionHeading } from "./SectionHeading";
import { skillGroups } from "@/content/profile";

// skills grouped into languages / frameworks / tools. the groups + items come
// from profile.ts; only the group label gets translated (the tech names don't).
export function Skills() {
  const t = useTranslations("skills");

  return (
    <section id="skills" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-12">
      <SectionHeading index="02" title={t("title")} />
      <div className="space-y-6">
        {skillGroups.map((group) => (
          <div key={group.labelKey} className="flex flex-col gap-3 sm:flex-row sm:gap-6">
            <p className="text-muted w-32 shrink-0 text-sm">
              {t(`groups.${group.labelKey}`)}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="border-border bg-foreground/[0.03] hover:border-accent/50 hover:text-accent rounded-md border px-3 py-1.5 font-mono text-sm transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

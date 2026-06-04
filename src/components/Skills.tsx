import { useTranslations } from "next-intl";
import { CommandHeading } from "./CommandHeading";
import { skillGroups } from "@/content/profile";

export function Skills() {
  const t = useTranslations("skills");

  return (
    <section id="skills" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-12">
      <CommandHeading command={t("command")} title={t("title")} />
      <div className="space-y-6">
        {skillGroups.map((group) => (
          <div key={group.labelKey}>
            <p className="text-muted mb-3 font-mono text-sm">
              <span className="text-accent">drwxr-xr-x</span>{" "}
              {t(`groups.${group.labelKey}`)}/
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

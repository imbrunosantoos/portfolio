import { useTranslations } from "next-intl";
import { stats } from "@/content/profile";

export function Stats() {
  const t = useTranslations("stats");

  return (
    <section className="mx-auto max-w-5xl px-6 py-8">
      <div className="border-border bg-foreground/[0.02] grid grid-cols-2 gap-px overflow-hidden rounded-xl border sm:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.labelKey}
            className="bg-background/40 flex flex-col items-center justify-center gap-1 px-4 py-6 text-center"
          >
            <span className="text-accent font-mono text-3xl font-bold sm:text-4xl">
              {stat.value}
            </span>
            <span className="text-muted text-xs sm:text-sm">{t(stat.labelKey)}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

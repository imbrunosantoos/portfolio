import { useTranslations } from "next-intl";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import type { Project } from "@/content/projects";

export function ProjectCard({ project }: { project: Project }) {
  const t = useTranslations();
  const title = t(`projects.${project.slug}.title`);
  const short = t(`projects.${project.slug}.short`);

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group border-foreground/10 bg-foreground/[0.03] hover:border-accent/50 hover:bg-foreground/[0.06] relative flex flex-col gap-3 rounded-xl border p-5 transition-colors"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="group-hover:text-accent text-lg font-semibold tracking-tight transition-colors">
          {title}
        </h3>
        <ArrowUpRight className="text-foreground/40 group-hover:text-accent h-5 w-5 shrink-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
      <p className="text-foreground/70 text-sm leading-relaxed">{short}</p>
      <div className="mt-auto flex flex-wrap gap-2 pt-2">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="border-foreground/10 bg-foreground/5 text-foreground/60 rounded-full border px-2.5 py-0.5 text-xs"
          >
            {tech}
          </span>
        ))}
      </div>
    </Link>
  );
}

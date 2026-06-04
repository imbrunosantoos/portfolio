import { useTranslations } from "next-intl";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import type { Project } from "@/content/projects";

// one card in the projects grid. the whole card is a single <Link> to the
// detail page — that's why there's no github link here (can't nest an <a>
// inside the link), it lives on the detail page instead.
export function ProjectCard({ project }: { project: Project }) {
  const t = useTranslations();
  // title + one-liner come from the messages file, keyed by slug
  const title = t(`projects.${project.slug}.title`);
  const short = t(`projects.${project.slug}.short`);

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group border-border bg-foreground/[0.02] hover:border-accent/50 hover:bg-foreground/[0.05] relative flex flex-col gap-3 rounded-xl border p-5 transition-colors"
    >
      <div className="flex items-start justify-between gap-3">
        <p className="text-muted min-w-0 font-mono text-xs break-all">
          <span className="text-accent">~/</span>
          {project.slug}
        </p>
        <ArrowUpRight className="text-muted group-hover:text-accent h-5 w-5 shrink-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
      <h3 className="group-hover:text-accent text-lg font-semibold tracking-tight transition-colors">
        {title}
      </h3>
      <p className="text-muted text-sm leading-relaxed">
        <span className="text-accent">&gt;</span> {short}
      </p>
      {/* tech stack as little #hashtags, e.g. Next.js -> #next.js */}
      <div className="mt-auto flex flex-wrap gap-2 pt-2 font-mono">
        {project.tech.map((tech) => (
          <span key={tech} className="text-muted text-xs">
            #{tech.toLowerCase().replace(/\s+/g, "-")}
          </span>
        ))}
      </div>
    </Link>
  );
}

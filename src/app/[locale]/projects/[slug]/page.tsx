import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { GithubIcon } from "@/components/icons";
import { getProject, projects, type Project } from "@/content/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  const t = await getTranslations({ locale, namespace: "projects" });
  return {
    title: `${t(`${slug}.title`)} — Bruno Santos`,
    description: t(`${slug}.short`),
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const project = getProject(slug);
  if (!project) {
    notFound();
  }

  return <ProjectDetail project={project} />;
}

function ProjectDetail({ project }: { project: Project }) {
  const t = useTranslations();
  const title = t(`projects.${project.slug}.title`);
  const long = t(`projects.${project.slug}.long`);
  const hasRepo = project.repo && project.repo !== "#";

  return (
    <article className="mx-auto max-w-3xl px-6 py-12">
      <Link
        href="/"
        className="text-muted hover:text-accent mb-8 inline-flex items-center gap-2 font-mono text-sm transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        cd ../
      </Link>

      <p className="text-muted font-mono text-sm">
        <span className="text-accent">~/</span>
        {project.slug}
      </p>
      <div className="mt-2 flex items-center gap-3">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h1>
        <span className="text-muted font-mono text-sm">{project.year}</span>
      </div>

      {project.image && (
        <div className="border-foreground/10 relative mt-6 aspect-video overflow-hidden rounded-xl border">
          <Image
            src={project.image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </div>
      )}

      <p className="text-muted mt-6 text-lg leading-relaxed">
        <span className="text-accent">&gt;</span> {long}
      </p>

      <div className="mt-8">
        <h2 className="text-muted mb-3 font-mono text-xs">
          <span className="text-accent">~$</span> {t("projectsSection.techTitle")}
        </h2>
        <div className="flex flex-wrap gap-2 font-mono">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="border-border bg-foreground/[0.03] rounded-md border px-3 py-1 text-sm"
            >
              #{tech.toLowerCase().replace(/\s+/g, "-")}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        {hasRepo ? (
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent hover:bg-accent/90 text-accent-foreground inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors"
          >
            <GithubIcon className="h-4 w-4" />
            {t("projectsSection.viewCode")}
          </a>
        ) : (
          <span className="border-foreground/10 text-foreground/50 inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm">
            <GithubIcon className="h-4 w-4" />
            {t("projectsSection.comingSoon")}
          </span>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="border-foreground/15 hover:bg-foreground/5 inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition-colors"
          >
            <ExternalLink className="h-4 w-4" />
            {t("projectsSection.viewDemo")}
          </a>
        )}
      </div>
    </article>
  );
}

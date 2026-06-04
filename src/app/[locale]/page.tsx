import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/content/projects";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <HomeContent />;
}

function HomeContent() {
  const t = useTranslations("projectsSection");

  return (
    <>
      <Hero />
      <section id="projects" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-12">
        <div className="mb-8">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            {t("title")}
          </h2>
          <p className="text-foreground/60 mt-2">{t("subtitle")}</p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </>
  );
}

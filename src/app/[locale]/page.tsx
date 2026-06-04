import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { projects } from "@/content/projects";

// the landing page. just stacks the sections in order and wraps each one in
// <Reveal> so it fades in as you scroll down. hero is left out of Reveal on
// purpose — it's already visible on load and has its own intro animation.
export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale); // keep this static, same as the layout

  return (
    <>
      <Hero />
      <Reveal>
        <Stats />
      </Reveal>
      <Reveal>
        <About />
      </Reveal>
      <Reveal>
        <Skills />
      </Reveal>
      <Reveal>
        <ProjectsSection />
      </Reveal>
      <Reveal>
        <Contact />
      </Reveal>
    </>
  );
}

// kept inline instead of its own component since it's the only spot that
// loops the projects list. the #projects id is what the hero button scrolls to.
function ProjectsSection() {
  const t = useTranslations("projectsSection");

  return (
    <section id="projects" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-12">
      <SectionHeading index="03" title={t("title")} />
      <p className="text-muted -mt-4 mb-6">{t("subtitle")}</p>
      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((project, i) => (
          // small stagger (delay grows per card) so they pop in one after
          // the other instead of all at once
          <Reveal key={project.slug} delay={i * 0.05}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

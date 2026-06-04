import { useTranslations } from "next-intl";
import { Mail } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { GithubIcon, LinkedinIcon } from "./icons";
import { socials } from "@/content/profile";

// last section: github + email buttons (and linkedin if i ever fill it in).
// the linkedin button is hidden while socials.linkedin is an empty string.
export function Contact() {
  const t = useTranslations("contact");

  return (
    <section id="contact" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-12">
      <SectionHeading index="04" title={t("title")} />
      <p className="text-muted mb-6 max-w-2xl">{t("body")}</p>
      <div className="flex flex-wrap gap-3">
        <a
          href={socials.github}
          target="_blank"
          rel="noopener noreferrer"
          className="border-border hover:border-accent/50 hover:text-accent inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition-colors"
        >
          <GithubIcon className="h-4 w-4" />
          {t("github")}
        </a>
        <a
          href={`mailto:${socials.email}`}
          className="border-border hover:border-accent/50 hover:text-accent inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition-colors"
        >
          <Mail className="h-4 w-4" />
          {t("email")}
        </a>
        {socials.linkedin && (
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="border-border hover:border-accent/50 hover:text-accent inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition-colors"
          >
            <LinkedinIcon className="h-4 w-4" />
            {t("linkedin")}
          </a>
        )}
      </div>
    </section>
  );
}

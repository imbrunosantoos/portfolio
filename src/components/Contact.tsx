import { useTranslations } from "next-intl";
import { Mail, Linkedin } from "lucide-react";
import { CommandHeading } from "./CommandHeading";
import { GithubIcon } from "./icons";
import { socials } from "@/content/profile";

export function Contact() {
  const t = useTranslations("contact");

  return (
    <section id="contact" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-12">
      <CommandHeading command={t("command")} title={t("title")} />
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
            <Linkedin className="h-4 w-4" />
            {t("linkedin")}
          </a>
        )}
      </div>
    </section>
  );
}

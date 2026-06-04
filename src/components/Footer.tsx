import { useTranslations } from "next-intl";
import { Mail } from "lucide-react";
import { GithubIcon } from "./icons";
import { socials } from "@/content/profile";

// bottom bar: copyright + the two social icons. links come from the shared
// socials object so i only keep my github/email in one place.
export function Footer() {
  const t = useTranslations();
  const year = new Date().getFullYear(); // so i never have to update the year

  return (
    <footer className="border-border mt-24 border-t">
      <div className="text-muted mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 py-8 font-mono text-sm sm:flex-row">
        <p>
          <span className="text-accent">$</span> echo &quot;© {year} {t("site.name")}
          &quot;
        </p>
        <div className="flex items-center gap-4">
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-accent transition-colors"
          >
            <GithubIcon className="h-5 w-5" />
          </a>
          <a
            href={`mailto:${socials.email}`}
            aria-label="Email"
            className="hover:text-accent transition-colors"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}

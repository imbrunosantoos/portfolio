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
    <footer className="border-border mt-16 border-t sm:mt-24">
      <div className="text-muted mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 py-8 font-mono text-sm sm:flex-row">
        <p className="text-center break-all sm:text-left">
          <span className="text-accent">$</span> echo &quot;© {year} {t("site.name")}
          &quot;
        </p>
        {/* the -m-2/p-2 trick keeps the icons looking the same size but gives
            them a bigger, finger-friendly tap area on mobile */}
        <div className="flex items-center gap-2">
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-accent p-2 transition-colors"
          >
            <GithubIcon className="h-5 w-5" />
          </a>
          <a
            href={`mailto:${socials.email}`}
            aria-label="Email"
            className="hover:text-accent p-2 transition-colors"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}

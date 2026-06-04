import { useTranslations } from "next-intl";
import { Github, Mail } from "lucide-react";

const GITHUB_URL = "https://github.com/imbrunosantoos";
const EMAIL = "brunoosirmaos@gmail.com";

export function Footer() {
  const t = useTranslations();
  const year = new Date().getFullYear();

  return (
    <footer className="border-foreground/10 mt-20 border-t">
      <div className="text-foreground/60 mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm sm:flex-row">
        <p>
          © {year} {t("site.name")}. {t("footer.rights")}
        </p>
        <div className="flex items-center gap-4">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-foreground transition-colors"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href={`mailto:${EMAIL}`}
            aria-label="Email"
            className="hover:text-foreground transition-colors"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}

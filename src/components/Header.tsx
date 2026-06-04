import { Link } from "@/i18n/navigation";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Header() {
  return (
    <header className="border-border bg-background/70 sticky top-0 z-50 border-b backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="group font-mono text-sm font-medium tracking-tight transition-colors"
        >
          <span className="text-accent">bruno</span>
          <span className="text-muted">@</span>
          <span className="group-hover:text-accent transition-colors">dev</span>
          <span className="text-muted">:~$</span>
          <span className="caret align-middle" aria-hidden>
            _
          </span>
        </Link>
        <LanguageSwitcher />
      </div>
    </header>
  );
}

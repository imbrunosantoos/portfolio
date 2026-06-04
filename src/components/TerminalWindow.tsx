import type { ReactNode } from "react";

type TerminalWindowProps = {
  title?: string; // text in the title bar, e.g. a path or a command
  children: ReactNode;
  className?: string;
};

// the little "macOS terminal" box: a title bar with the three traffic-light
// dots and a monospace body. only the hero uses it for now, but it's generic
// enough to reuse elsewhere later.
export function TerminalWindow({ title, children, className }: TerminalWindowProps) {
  return (
    <div
      className={`border-border bg-foreground/[0.02] overflow-hidden rounded-xl border shadow-2xl shadow-black/30 backdrop-blur-sm ${className ?? ""}`}
    >
      <div className="border-border bg-foreground/[0.03] flex items-center gap-2 border-b px-4 py-2.5">
        {/* red / yellow / green window buttons — purely decorative */}
        <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
        <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
        <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
        {title && (
          <span className="text-muted ml-2 truncate font-mono text-xs">{title}</span>
        )}
      </div>
      <div className="p-5 font-mono text-sm sm:p-6">{children}</div>
    </div>
  );
}

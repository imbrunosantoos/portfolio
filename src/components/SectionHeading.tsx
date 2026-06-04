type SectionHeadingProps = {
  index: string; // the "01", "02"... shown before the title
  title: string;
};

// the "01. About" style heading on each section. the line on the right just
// fills the leftover space. this replaced an earlier fake "~$ cat about.md"
// heading that felt a bit try-hard.
export function SectionHeading({ index, title }: SectionHeadingProps) {
  return (
    <div className="mb-8 flex items-baseline gap-3">
      <span className="text-accent font-mono text-sm">{index}.</span>
      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
      {/* thin rule, hidden on mobile so it doesn't wrap onto its own line */}
      <span className="bg-border ml-2 hidden h-px flex-1 sm:block" />
    </div>
  );
}

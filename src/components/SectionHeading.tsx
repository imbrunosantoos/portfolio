type SectionHeadingProps = {
  /** Two-digit index, e.g. "01". */
  index: string;
  title: string;
};

/** A clean, numbered section heading with a thin trailing rule. */
export function SectionHeading({ index, title }: SectionHeadingProps) {
  return (
    <div className="mb-8 flex items-baseline gap-3">
      <span className="text-accent font-mono text-sm">{index}.</span>
      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
      <span className="bg-border ml-2 hidden h-px flex-1 sm:block" />
    </div>
  );
}

type CommandHeadingProps = {
  /** The command shown after the prompt, e.g. `cat about.md`. */
  command: string;
  /** The human title rendered below as the section heading. */
  title: string;
};

/** A section heading styled as a shell prompt running a command. */
export function CommandHeading({ command, title }: CommandHeadingProps) {
  return (
    <div className="mb-6">
      <p className="text-muted font-mono text-sm">
        <span className="text-accent">~$</span> {command}
      </p>
      <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
    </div>
  );
}

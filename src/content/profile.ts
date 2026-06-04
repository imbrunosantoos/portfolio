/**
 * Language-independent profile data: social links, skill groups and stats.
 * Translatable labels (group names, stat labels) live in `messages/<locale>.json`.
 */

export const socials = {
  github: "https://github.com/imbrunosantoos",
  email: "brunoribeirosouzasantos@gmail.com",
  // Optional: fill in to show a LinkedIn button (hidden while empty).
  linkedin: "",
};

/** Skill groups. `labelKey` maps to `skills.groups.<labelKey>` in messages. */
export const skillGroups: { labelKey: string; items: string[] }[] = [
  {
    labelKey: "languages",
    items: ["Python", "C++", "TypeScript", "JavaScript", "SQL"],
  },
  {
    labelKey: "tools",
    items: ["Git", "Linux", "Next.js", "React", "Node.js", "REST APIs"],
  },
  {
    labelKey: "interests",
    items: ["CLI / TUI", "Automation", "Crypto / trading", "Web dev"],
  },
];

/** Headline stats. `value` is shown as-is; `labelKey` maps to `stats.<labelKey>`. */
export const stats: { value: string; labelKey: string }[] = [
  { value: "5+", labelKey: "projects" },
  { value: "1", labelKey: "hackathons" },
  { value: "5", labelKey: "languages" },
  { value: "∞", labelKey: "coffee" },
];

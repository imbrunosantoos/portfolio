/**
 * Project metadata (language-independent).
 *
 * The translatable text for each project (title / short / long description) lives
 * in `messages/<locale>.json` under `projects.<slug>`. To add a new project:
 *   1. Add an entry here.
 *   2. Add `projects.<slug>` to every file in `messages/`.
 *   3. (Optional) drop a screenshot in `public/projects/<slug>.png` and set `image`.
 */
export type Project = {
  slug: string;
  /** Technologies / languages used, shown as tags. */
  tech: string[];
  /** Public GitHub repository URL. Use "#" as a placeholder until available. */
  repo: string;
  /** Optional live demo URL. */
  demo?: string;
  /** Optional screenshot path under /public. */
  image?: string;
  /** Highlight on the home page. */
  featured: boolean;
  /** Year (or range) for display. */
  year: string;
};

export const projects: Project[] = [
  {
    slug: "terminal-rpg",
    tech: ["Python"],
    repo: "#",
    featured: true,
    year: "2024",
  },
  {
    slug: "crypto-arbitrage-bot",
    tech: ["Python", "REST APIs", "WebSockets"],
    repo: "#",
    featured: true,
    year: "2024",
  },
  {
    slug: "solitaire-cli",
    tech: ["C++"],
    repo: "#",
    featured: true,
    year: "2024",
  },
  {
    slug: "background-remover",
    tech: ["Python", "Image processing"],
    repo: "#",
    featured: false,
    year: "2024",
  },
  {
    slug: "resell-tracker",
    tech: ["TypeScript"],
    repo: "#",
    featured: false,
    year: "2024",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

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
    repo: "https://github.com/imbrunosantoos/dungeon-crawler",
    featured: true,
    year: "2024",
  },
  {
    slug: "crypto-arbitrage-bot",
    tech: ["Python", "Streamlit", "SQLite", "pandas"],
    repo: "https://github.com/imbrunosantoos/hackathon",
    featured: true,
    year: "2026",
  },
  {
    slug: "solitaire-cli",
    tech: ["C", "GCC", "CUnit"],
    repo: "https://github.com/imbrunosantoos/li2-card-games",
    featured: true,
    year: "2024",
  },
  {
    slug: "background-remover",
    tech: ["Python"],
    repo: "https://github.com/imbrunosantoos/image-background-remover",
    featured: false,
    year: "2024",
  },
  {
    slug: "resell-tracker",
    tech: ["Next.js", "SQLite", "node:crypto", "PWA"],
    repo: "https://github.com/imbrunosantoos/resell-tracker",
    demo: "https://resell-cloud.vercel.app",
    featured: true,
    year: "2025",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

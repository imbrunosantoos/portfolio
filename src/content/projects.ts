// everything about a project that's the same in any language: links, tech,
// year. the actual words (title + descriptions) live in messages/<lang>.json
// under projects.<slug> so they can be translated.
//
// to add a project: new entry here -> add its strings to the 3 message files
// -> optionally drop a screenshot in public/projects/ and set `image`.
export type Project = {
  slug: string;
  tech: string[]; // shown as #tags on the card + detail page
  repo: string; // github url, or "#" while there's no repo up yet
  demo?: string; // live url, if the project has one
  image?: string; // screenshot path under /public, optional
  featured: boolean; // not wired up yet — the home currently shows them all
  year: string;
};

export const projects: Project[] = [
  {
    slug: "dungeon-crawler",
    tech: ["Python"],
    repo: "https://github.com/imbrunosantoos/dungeon-crawler",
    featured: true,
    year: "2026",
  },
  {
    slug: "crypto-arbitrage-bot",
    tech: ["Python", "Streamlit", "SQLite", "pandas"],
    repo: "https://github.com/imbrunosantoos/botbyte",
    featured: true,
    year: "2026",
  },
  {
    slug: "solitaire-cli",
    tech: ["C", "GCC", "CUnit"],
    repo: "https://github.com/imbrunosantoos/li2-card-games",
    featured: true,
    year: "2026",
  },
  {
    slug: "background-remover",
    tech: ["Python", "rembg", "ONNX Runtime", "Pillow"],
    repo: "https://github.com/imbrunosantoos/image-background-remover",
    featured: false,
    year: "2026",
  },
  {
    slug: "resell-tracker",
    tech: ["Next.js", "SQLite", "node:crypto", "PWA"],
    repo: "https://github.com/imbrunosantoos/resell-tracker",
    demo: "https://resell-cloud.vercel.app",
    featured: true,
    year: "2026",
  },
];

// used by the detail page to grab one project from the url slug
export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

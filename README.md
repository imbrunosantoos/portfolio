# Personal Portfolio — Bruno Santos

My personal website / portfolio, showcasing my current and future projects.

🌐 **Live:** https://site-pessoal-nine-wheat.vercel.app

## Tech stack

- [Next.js 16](https://nextjs.org/) (App Router) + React 19 + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com/)
- [next-intl](https://next-intl.dev/) for i18n — **English (default)**, Português, Español
- [Framer Motion](https://www.framer.com/motion/) for subtle scroll animations
- [lucide-react](https://lucide.dev/) icons
- Deployed on [Vercel](https://vercel.com/)

## Features

- 🖥️ **Terminal / dev** aesthetic — terminal window hero, prompts, monospace accents
- 🌍 Trilingual (EN / PT / ES) with a language switcher
- 🌙 Dark theme with a green terminal accent
- ✨ Subtle fade/slide-in animations (respects `prefers-reduced-motion`)
- 🧩 Sections: Hero · Stats · About · Skills · Projects · Contact
- 🗂️ Project cards on the home page + a detail page per project
- 🔎 SEO-ready (Open Graph, Twitter cards, locale alternates)
- ➕ Adding a new project = editing one data file + its translations

## Projects featured

| Project | Description |
| --- | --- |
| Terminal RPG | A role-playing game playable in the terminal |
| Crypto Arbitrage Bot | Crypto arbitrage bot built at a hackathon |
| Solitaire CLI | Card / solitaire game in the terminal (LI2 project) |
| Background Remover | Script to remove the background from photos |
| Resell Tracker | A reselling tracker |

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Adding a new project

1. Add an entry to `src/content/projects.ts` (slug, tech, repo URL, image…).
2. Add its translations (`title` / `short` / `long`) to `messages/en.json`,
   `messages/pt.json` and `messages/es.json` under `projects.<slug>`.
3. (Optional) Drop a screenshot in `public/projects/`.

---


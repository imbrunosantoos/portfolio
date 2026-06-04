// the stuff about me that doesn't change per language: contact links, skills
// and the headline numbers. the captions/labels get translated over in
// messages/<lang>.json — here it's just data.

export const socials = {
  github: "https://github.com/imbrunosantoos",
  email: "brunoribeirosouzasantos@gmail.com",
  // leave empty to hide the linkedin button; paste a url here to show it
  linkedin: "",
};

// skills split into a few groups for the skills section. labelKey points at
// skills.groups.<labelKey> in the messages; the tech names themselves aren't
// translated (Python is Python everywhere).
export const skillGroups: { labelKey: string; items: string[] }[] = [
  {
    labelKey: "languages",
    items: ["Python", "C", "JavaScript", "TypeScript", "SQL"],
  },
  {
    labelKey: "frameworks",
    items: ["Next.js", "React", "Streamlit"],
  },
  {
    labelKey: "tools",
    items: ["Git", "Linux", "SQLite", "Node.js", "CUnit"],
  },
];

// the four numbers under the hero. value is printed exactly as written (so it
// can be "5+" or even "UMinho"), labelKey points at stats.<labelKey>.
export const stats: { value: string; labelKey: string }[] = [
  { value: "5+", labelKey: "projects" },
  { value: "5", labelKey: "languages" },
  { value: "1", labelKey: "hackathons" },
  { value: "UMinho", labelKey: "university" },
];

"use client";

import { useTranslations } from "next-intl";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { TerminalWindow } from "./TerminalWindow";

// the big intro: a fake terminal that "types" a couple of lines, then drops
// in the name + tagline. client component because it animates on mount.
export function Hero() {
  const t = useTranslations();
  // if the user has reduced-motion on, skip the slide/fade and just show it
  const reduceMotion = useReducedMotion();

  // the two terminal lines: the `whoami` prompt and its output. kept as an
  // array so i can map over them and stagger the fade below.
  const lines = [
    { el: <Prompt key="p1">{t("hero.command")}</Prompt> },
    {
      el: (
        <p key="o1" className="text-muted">
          <span className="text-accent">&gt;</span> {t("hero.output")}
        </p>
      ),
    },
  ];

  return (
    <section className="mx-auto max-w-5xl px-6 pt-12 pb-10 sm:pt-24 sm:pb-12">
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <TerminalWindow title="bruno@portfolio: ~">
          {/* break-words so the mono lines never push the window sideways
              on a narrow phone */}
          <div className="space-y-1 break-words">
            {/* the growing delay (0.3, 0.55, ...) is what fakes the "typing"
                feel — each line shows up a beat after the previous one */}
            {lines.map((l, i) => (
              <motion.div
                key={i}
                initial={reduceMotion ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 + i * 0.25, duration: 0.3 }}
              >
                {l.el}
              </motion.div>
            ))}

            <motion.h1
              className="font-sans pt-4 text-4xl font-bold tracking-tight sm:text-6xl"
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.4 }}
            >
              {t("hero.greeting")}
              {/* the blinking _ after my name — pure css (see .caret) */}
              <span className="caret" aria-hidden>
                _
              </span>
            </motion.h1>

            <motion.p
              className="font-sans text-muted max-w-2xl pt-4 text-base leading-relaxed sm:text-lg"
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.4 }}
            >
              {t("hero.tagline")}
            </motion.p>

            <motion.div
              className="pt-6"
              initial={reduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.4 }}
            >
              <a
                href="#projects"
                className="border-accent/40 text-accent hover:bg-accent/10 inline-flex items-center gap-2 rounded-md border px-4 py-2 text-sm transition-colors"
              >
                <span className="text-muted">[</span>
                {t("hero.cta")}
                <ArrowDown className="h-4 w-4" />
                <span className="text-muted">]</span>
              </a>
            </motion.div>
          </div>
        </TerminalWindow>
      </motion.div>
    </section>
  );
}

// little helper that renders the coloured "bruno@portfolio:~$ " prompt so i
// don't repeat all the spans every time
function Prompt({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-foreground">
      <span className="text-accent">bruno@portfolio</span>
      <span className="text-muted">:</span>
      <span className="text-sky-400">~</span>
      <span className="text-muted">$ </span>
      {children}
    </p>
  );
}

"use client";

import { EASE, SECTION_IDS } from "@/lib/constants";
import { navSections, personalInfo } from "@/lib/portfolio-data";
import { motion } from "motion/react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function DevNav() {
  const [activeId, setActiveId] = useState<string>("top");
  const [pulseDone, setPulseDone] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  // Lenis lerps the *native* window scroll (root mode), so a passive scroll
  // listener stays in sync with the visible position. One handler drives both
  // the floating-island state and the active section, so there's never a stale
  // gap (the old IntersectionObserver only fired when a section crossed a thin
  // band near the top, which felt laggy and lit up too late).
  useEffect(() => {
    const measure = () => {
      setScrolled(window.scrollY > 12);

      // Activation line ~35% down the viewport: a section turns active as soon
      // as its top scrolls above that line, i.e. when the section is arriving —
      // not once you're already deep inside it.
      const line = window.innerHeight * 0.35;
      let current: string = SECTION_IDS[0];
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }
      // At the very bottom the last (short) section may never reach the line —
      // force it active so Contact lights up when the page bottoms out.
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
        current = SECTION_IDS[SECTION_IDS.length - 1];
      }
      setActiveId(current);
    };

    // Coalesce bursts of scroll events into one measurement per frame: reading
    // getBoundingClientRect() for every section on each raw scroll event forces
    // repeated layout and can jank. The rAF gate caps it to once per paint.
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        measure();
        ticking = false;
      });
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    if (!sessionStorage.getItem("cmd-k-pulsed")) {
      setPulseDone(false);
      const t = setTimeout(() => {
        setPulseDone(true);
        sessionStorage.setItem("cmd-k-pulsed", "1");
      }, 2800);
      return () => clearTimeout(t);
    }
  }, []);

  function openPalette() {
    window.dispatchEvent(new CustomEvent("open-command-palette"));
  }

  return (
    <header className="sticky top-0 z-30 -mx-5 px-5">
      <div
        className={`-mx-3 mt-2.5 flex items-center justify-between gap-3 rounded-full border px-3 py-2 backdrop-blur-md backdrop-saturate-150 transition-[background-color,border-color,box-shadow] duration-300 ease-out ${
          // Geometry is identical in both states (no horizontal/vertical jump on
          // scroll). The -mx-3 bleed + px-3 padding lands the logo text back on
          // the 20px content column so "Karan Mali" stays aligned with the hero.
          // Only the frost/border/shadow intensity changes — a subtle but always
          // present bar at the top that lifts into a stronger pill on scroll.
          scrolled
            ? "border-black/[0.08] bg-[#F5EFE6]/70 shadow-[0_10px_30px_-14px_rgba(70,55,30,0.34)] supports-[backdrop-filter]:bg-[#F5EFE6]/58"
            : "border-black/[0.05] bg-[#F5EFE6]/55 shadow-[0_5px_20px_-15px_rgba(70,55,30,0.24)] supports-[backdrop-filter]:bg-[#F5EFE6]/38"
        }`}
      >
        <a
          href="#top"
          className="shrink-0 whitespace-nowrap text-[15px] font-semibold tracking-tight text-zinc-900"
        >
          {personalInfo.name}
        </a>
        <nav className="flex shrink items-center gap-x-0.5 overflow-x-auto font-sans text-[13px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {navSections.map((s) => {
            const isActive = activeId === s.id;
            return (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={`relative whitespace-nowrap rounded-full px-2 py-1 transition-colors duration-150 ${
                  isActive ? "font-medium text-zinc-900" : "text-zinc-500 hover:text-zinc-800"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="dev-nav-pill"
                    className="absolute inset-0 rounded-full bg-white shadow-[0_1px_2px_rgba(60,50,30,0.10)] ring-1 ring-black/[0.04]"
                    transition={{ duration: 0.25, ease: EASE }}
                  />
                )}
                <span className="relative z-10">{s.id === "learn" ? "Learn" : s.label}</span>
              </a>
            );
          })}
          <Link
            href="/now"
            className="relative whitespace-nowrap rounded-full px-2 py-1 text-zinc-500 transition-colors duration-150 hover:text-zinc-800"
          >
            Now
          </Link>
          <motion.button
            onClick={openPalette}
            aria-label="Open command palette"
            animate={
              pulseDone
                ? {}
                : {
                    scale: [1, 1.14, 1],
                    boxShadow: [
                      "0 0 0 0px rgba(59,91,219,0)",
                      "0 0 0 4px rgba(59,91,219,0.22)",
                      "0 0 0 0px rgba(59,91,219,0)",
                    ],
                  }
            }
            transition={pulseDone ? {} : { delay: 1.4, duration: 0.9, times: [0, 0.5, 1] }}
            className="ml-1 hidden shrink-0 items-center gap-1 rounded-full border border-black/10 bg-white/50 px-2 py-1 font-mono text-[11px] leading-none text-zinc-500 transition-colors duration-200 hover:border-[#3b5bdb]/40 hover:text-[#3b5bdb] sm:flex"
          >
            <span>⌘K</span>
          </motion.button>
        </nav>
      </div>
    </header>
  );
}

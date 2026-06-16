"use client";

import { EASE, SECTION_IDS } from "@/lib/constants";
import { navSections, personalInfo } from "@/lib/portfolio-data";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function DevNav() {
  const [activeId, setActiveId] = useState<string>("top");
  const [pulseDone, setPulseDone] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-10% 0px -80% 0px", threshold: 0 },
    );
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
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
    <header className="sticky top-0 z-20 -mx-5 flex items-center justify-between gap-6 bg-[#F5EFE6]/95 px-5 py-3 backdrop-blur-sm shadow-[0_1px_0_0_#ede9e3]">
      <a href="#top" className="whitespace-nowrap text-[15px] font-semibold tracking-tight text-zinc-900">
        {personalInfo.name}
      </a>
      <nav className="flex shrink-0 items-center gap-x-1 overflow-x-auto font-sans text-[13px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {navSections.map((s) => {
          const isActive = activeId === s.id;
          return (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`relative whitespace-nowrap rounded-md px-2.5 py-1 transition-colors duration-150 ${
                isActive ? "font-medium text-zinc-900" : "text-zinc-500 hover:text-zinc-700"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="dev-nav-pill"
                  className="absolute inset-0 rounded-md bg-zinc-100"
                  transition={{ duration: 0.2, ease: EASE }}
                />
              )}
              <span className="relative z-10">{s.label}</span>
            </a>
          );
        })}
        <Link
          href="/now"
          className="relative whitespace-nowrap rounded-md px-2.5 py-1 text-zinc-500 transition-colors duration-150 hover:text-zinc-700"
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
          className="ml-3 hidden items-center gap-1 rounded px-1.5 py-0.5 font-mono text-[11px] text-zinc-500 ring-1 ring-zinc-200 transition-colors duration-200 hover:text-zinc-600 sm:flex"
        >
          <span>⌘K</span>
        </motion.button>
      </nav>
    </header>
  );
}

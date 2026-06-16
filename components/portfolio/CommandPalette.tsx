"use client";

import { Command } from "cmdk";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { personalInfo } from "@/lib/portfolio-data";

type CommandItem = {
  id: string;
  label: string;
  group: string;
  action: () => void;
};

function isMac() {
  if (typeof navigator === "undefined") return true;
  return navigator.platform.toUpperCase().includes("MAC");
}

// Spring config shared by dialog and pulse ring
const SPRING = { type: "spring", stiffness: 290, damping: 24 } as const;

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((p) => !p);
      }
    }
    function onOpen() { setOpen(true); }
    document.addEventListener("keydown", onKey);
    window.addEventListener("open-command-palette", onOpen);
    return () => {
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("open-command-palette", onOpen);
    };
  }, []);

  useEffect(() => {
    if (open) {
      setQuery("");
      setTimeout(() => inputRef.current?.focus(), 10);
    }
  }, [open]);

  function close() { setOpen(false); setQuery(""); }

  function scrollTo(id: string) {
    close();
    setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" }), 80);
  }

  const commands: CommandItem[] = [
    { id: "top",        label: "Go to top",             group: "Navigate", action: () => scrollTo("top") },
    { id: "ai",         label: "Engineering with AI",   group: "Navigate", action: () => scrollTo("engineering-with-ai") },
    { id: "exp",        label: "Experience",            group: "Navigate", action: () => scrollTo("experience") },
    { id: "proj",       label: "Projects",              group: "Navigate", action: () => scrollTo("projects") },
    { id: "writing",    label: "Writing",               group: "Navigate", action: () => scrollTo("writing") },
    { id: "learn",      label: "How I learn",           group: "Navigate", action: () => scrollTo("learn") },
    { id: "contact",    label: "Contact",               group: "Navigate", action: () => scrollTo("contact") },
    { id: "now",        label: "What I'm doing now →",  group: "Navigate", action: () => { close(); router.push("/now"); } },
    { id: "github",     label: "GitHub",                group: "Open",     action: () => { close(); window.open(personalInfo.github, "_blank"); } },
    { id: "resume",     label: "Résumé",                group: "Open",     action: () => { close(); window.open(personalInfo.resumeUrl, "_blank"); } },
    { id: "devto",      label: "dev.to",                group: "Open",     action: () => { close(); window.open(personalInfo.devto, "_blank"); } },
    { id: "medium",     label: "Medium",                group: "Open",     action: () => { close(); window.open(personalInfo.medium, "_blank"); } },
    { id: "twitter",    label: "X / Twitter",           group: "Open",     action: () => { close(); window.open(personalInfo.x, "_blank"); } },
    { id: "email-open", label: "Email me",              group: "Actions",  action: () => { close(); window.location.href = `mailto:${personalInfo.email}`; } },
    { id: "email-copy", label: "Copy email address",    group: "Actions",  action: () => { navigator.clipboard.writeText(personalInfo.email); close(); } },
  ];

  const grouped = Object.entries(
    commands.reduce<Record<string, CommandItem[]>>((acc, cmd) => {
      (acc[cmd.group] ??= []).push(cmd);
      return acc;
    }, {})
  );

  const mod = isMac() ? "⌘" : "Ctrl";

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* ── Backdrop: radial spotlight — dialog center is lighter ── */}
          <motion.div
            key="backdrop"
            className="fixed inset-0 z-50"
            style={{
              background:
                "radial-gradient(ellipse 680px 480px at 50% 38%, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0.28) 100%)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            onClick={(e) => { if (e.target === e.currentTarget) close(); }}
          />

          {/* ── Pulse ring that emanates from the dialog on open ── */}
          <motion.div
            key="ring"
            className="pointer-events-none fixed z-50 mx-auto"
            style={{
              top: "calc(18vh - 6px)",
              left: "50%",
              width: 532,
              height: "calc(var(--dialog-h, 420px) + 12px)",
              x: "-50%",
              borderRadius: 14,
              border: "1.5px solid #3b5bdb",
            }}
            initial={{ opacity: 0.7, scale: 1 }}
            animate={{ opacity: 0, scale: 1.04 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          />

          {/* ── Dialog ── */}
          <motion.div
            key="dialog"
            className="fixed z-50 mx-auto"
            style={{ top: "18vh", left: "50%", width: "100%", maxWidth: 520, x: "-50%" }}
            initial={{ opacity: 0, scale: 0.93, y: -14, filter: "blur(14px)" }}
            animate={{ opacity: 1, scale: 1,    y: 0,   filter: "blur(0px)" }}
            exit={{   opacity: 0, scale: 0.96, y: -8,   filter: "blur(6px)" }}
            transition={SPRING}
          >
            <Command
              shouldFilter
              loop
              className="overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-[0_24px_64px_rgba(0,0,0,0.18)]"
            >
              {/* Search row */}
              <div className="flex items-center border-b border-zinc-100 px-4">
                <svg className="mr-3 h-4 w-4 shrink-0 text-zinc-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <circle cx={11} cy={11} r={8} />
                  <path d="m21 21-4.35-4.35" />
                </svg>
                <Command.Input
                  ref={inputRef}
                  value={query}
                  onValueChange={setQuery}
                  placeholder="Search commands…"
                  className="h-12 w-full bg-transparent font-sans text-[15px] text-zinc-900 placeholder:text-zinc-400 focus:outline-none"
                />
                <button onClick={close} className="ml-2 shrink-0 rounded px-1.5 py-0.5 font-mono text-[11px] text-zinc-500 ring-1 ring-zinc-200 hover:text-zinc-600">
                  esc
                </button>
              </div>

              {/* List */}
              <Command.List className="max-h-[320px] overflow-y-auto py-2">
                <Command.Empty className="py-8 text-center font-sans text-[14px] text-zinc-500">
                  No results.
                </Command.Empty>

                {grouped.map(([group, items], gi) => (
                  /* Wrap each group in a motion div for stagger — safe because
                     cmdk's keyboard traversal targets [cmdk-item] inside its own DOM,
                     not the outer wrapper. */
                  <motion.div
                    key={group}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1], delay: 0.07 + gi * 0.045 }}
                  >
                    <Command.Group
                      heading={group}
                      className="[&_[cmdk-group-heading]]:px-4 [&_[cmdk-group-heading]]:py-2 [&_[cmdk-group-heading]]:font-mono [&_[cmdk-group-heading]]:text-[11px] [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-widest [&_[cmdk-group-heading]]:text-zinc-500"
                    >
                      {items.map((cmd) => (
                        <Command.Item
                          key={cmd.id}
                          value={cmd.label}
                          onSelect={cmd.action}
                          className="mx-2 flex cursor-pointer items-center justify-between rounded-lg px-3 py-2.5 font-sans text-[14px] text-zinc-700 transition-colors aria-selected:bg-zinc-50 aria-selected:text-zinc-900"
                        >
                          {cmd.label}
                        </Command.Item>
                      ))}
                    </Command.Group>
                  </motion.div>
                ))}
              </Command.List>

              <div className="border-t border-zinc-100 px-4 py-2.5 font-mono text-[11px] text-zinc-500">
                {mod}K to open · ↑↓ to navigate · ↵ to run · esc to close
              </div>
            </Command>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

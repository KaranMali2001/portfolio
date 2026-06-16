"use client";

import { ACCENT, EASE } from "@/lib/constants";
import { motion, useReducedMotion } from "framer-motion";

// ── Scroll reveal wrapper ────────────────────────────────────────────────────
export function Reveal({ children, delay = 0, className }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.35, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

// ── Clip-path text reveal (unmasking left → right) ───────────────────────────
export function TextReveal({ children, delay = 0, className }: { children: React.ReactNode; delay?: number; className?: string }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.span
      className={`inline-block ${className ?? ""}`}
      initial={reduceMotion ? { opacity: 0 } : { clipPath: "inset(0 100% 0 0)" }}
      whileInView={reduceMotion ? { opacity: 1 } : { clipPath: "inset(0 0% 0 0)" }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, ease: EASE, delay }}
    >
      {children}
    </motion.span>
  );
}

// ── Section divider — draws left to right on scroll ─────────────────────────
export function SectionDivider({ className }: { className?: string }) {
  return (
    <motion.div
      className={`h-px bg-[#EDE9E3] ${className ?? ""}`}
      style={{ originX: 0 }}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, ease: EASE }}
    />
  );
}

// ── Sliding-underline link ───────────────────────────────────────────────────
export function ULink({ href, children, external = true }: { href: string; children: React.ReactNode; external?: boolean }) {
  return (
    <a href={href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="group relative inline-flex text-zinc-900 transition-colors duration-200 hover:text-[#3b5bdb]">
      <span>{children}</span>
      <span
        className="pointer-events-none absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 transition-transform duration-200 ease-out group-hover:scale-x-100"
        style={{ backgroundColor: ACCENT }}
      />
    </a>
  );
}

// ── Pure display components ──────────────────────────────────────────────────
export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-7 font-mono text-[13px] uppercase tracking-[0.18em] text-zinc-500">
      <TextReveal>{children}</TextReveal>
    </h2>
  );
}

export function Meta({ children }: { children: React.ReactNode }) {
  return <span className="font-mono text-[13px] text-zinc-500">{children}</span>;
}

export function BoldText({ text }: { text: string }) {
  const reduceMotion = useReducedMotion();
  const parts = text.split(/\*\*(.+?)\*\*/g);
  let boldIdx = 0;

  return (
    <>
      {parts.map((part, i) => {
        if (i % 2 !== 1) return <span key={i}>{part}</span>;

        const idx = boldIdx++;

        if (reduceMotion) {
          return (
            <strong key={i} className="font-semibold text-zinc-900">
              {part}
            </strong>
          );
        }

        return (
          <motion.strong
            key={i}
            className="text-zinc-900"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-20px" }}
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.04,
                  delayChildren: 0.4 + idx * 0.15,
                },
              },
            }}
          >
            {part.split("").map((char, j) => (
              <motion.span
                key={j}
                className="inline-block"
                variants={{
                  hidden: { fontWeight: 400 },
                  show: {
                    fontWeight: 700,
                    transition: { duration: 0.35, ease: EASE },
                  },
                }}
              >
                {char === " " ? " " : char}
              </motion.span>
            ))}
          </motion.strong>
        );
      })}
    </>
  );
}

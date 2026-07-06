"use client";

import { ACCENT, EASE } from "@/lib/constants";
import { personalInfo } from "@/lib/portfolio-data";
import { motion, useReducedMotion, useSpring, type Variants } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { TextReveal, ULink } from "../primitives";

// ── Typewriter ────────────────────────────────────────────────────────────────
function Typewriter({ text, startDelay = 0.9 }: { text: string; startDelay?: number }) {
  const reduceMotion = useReducedMotion();
  const [displayed, setDisplayed] = useState(reduceMotion ? text : "");
  const [showCursor, setShowCursor] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    if (reduceMotion) return;

    let charIndex = 0;
    const start = setTimeout(() => {
      setShowCursor(true);
      const typing = setInterval(() => {
        charIndex++;
        setDisplayed(text.slice(0, charIndex));
        if (charIndex >= text.length) {
          clearInterval(typing);
          // blink for 1.6s then hide
          const blink = setInterval(() => setCursorVisible((v) => !v), 500);
          setTimeout(() => {
            clearInterval(blink);
            setShowCursor(false);
          }, 1600);
        }
      }, 42);
      return () => clearInterval(typing);
    }, startDelay * 1000);

    return () => clearTimeout(start);
  }, [text, startDelay, reduceMotion]);

  return (
    <span>
      {displayed}
      {showCursor && (
        <span
          className="ml-[2px] inline-block w-0.5 align-middle"
          style={{ height: "0.9em", backgroundColor: ACCENT, opacity: cursorVisible ? 1 : 0 }}
        />
      )}
    </span>
  );
}

// ── Magnetic link ─────────────────────────────────────────────────────────────
function MagneticLink({
  href,
  children,
  external = true,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const x = useSpring(0, { stiffness: 350, damping: 25 });
  const y = useSpring(0, { stiffness: 350, damping: 25 });

  function handleMouseMove(e: React.MouseEvent) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width / 2)) * 0.32);
    y.set((e.clientY - (rect.top + rect.height / 2)) * 0.32);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.span
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x, y }}
      className="inline-block"
    >
      <a
        href={href}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className="group relative inline-flex text-zinc-900 transition-colors duration-200 hover:text-[#3b5bdb]"
      >
        <span>{children}</span>
        <span
          className="pointer-events-none absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 transition-transform duration-200 ease-out group-hover:scale-x-100"
          style={{ backgroundColor: ACCENT }}
        />
      </a>
    </motion.span>
  );
}

// ── Hero ──────────────────────────────────────────────────────────────────────
export default function DevHero() {
  const reduceMotion = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: {
      transition: {
        delayChildren: reduceMotion ? 0 : 0.5,
        staggerChildren: reduceMotion ? 0 : 0.07,
      },
    },
  };

  const line: Variants = reduceMotion
    ? { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.3 } } }
    : { hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: EASE } } };

  return (
    <section id="top" className="py-14">
      <h1 className="text-[28px] font-bold leading-snug tracking-tight text-zinc-900">
        <TextReveal delay={0.1}>{personalInfo.name}</TextReveal>
      </h1>

      {!reduceMotion && (
        <motion.span
          aria-hidden
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.45, ease: EASE, delay: 0.42 }}
          className="mt-2 block h-[2px] w-14 origin-left"
          style={{ backgroundColor: ACCENT }}
        />
      )}

      <motion.div variants={container} initial="hidden" animate="show">
        <motion.p variants={line} className="mt-4 text-[17px] font-medium text-zinc-500">
          <Typewriter text={personalInfo.title} />
        </motion.p>

        <motion.p variants={line} className="mt-6 text-[18px] leading-relaxed text-zinc-600">
          I build backend and systems: multi-tenant architecture, data integrity, and zero-downtime migrations that
          hold under real traffic.
        </motion.p>

        <motion.p variants={line} className="mt-3 text-[18px] leading-relaxed text-zinc-600">
          Lately, AI tooling that lets a small team ship like a big one — agents that plan features, localize the app,
          and ship mobile releases. Currently at <span className="text-zinc-900">Ajar</span>, a property-management
          &amp; rent-payments SaaS.
        </motion.p>

        <motion.div variants={line} className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-[18px]">
          <MagneticLink href={personalInfo.github}>GitHub</MagneticLink>
          <MagneticLink href={personalInfo.devto}>dev.to</MagneticLink>
          <MagneticLink href={personalInfo.x}>X</MagneticLink>
          <MagneticLink href={personalInfo.resumeUrl}>Résumé</MagneticLink>
          <MagneticLink href={`mailto:${personalInfo.email}`} external={false}>
            Email
          </MagneticLink>
        </motion.div>

        <motion.p variants={line} className="mt-6 text-[16px] text-zinc-500">
          {personalInfo.location} · {personalInfo.availability}
        </motion.p>

        <motion.p variants={line} className="mt-3 text-[16px] text-zinc-500">
          Lately rabbit-holing on SO_REUSEPORT and TCP internals.{" "}
          <a href="/now" className="underline underline-offset-2 transition-colors duration-200 hover:text-zinc-600">
            See what I&apos;m working on now →
          </a>
        </motion.p>
      </motion.div>
    </section>
  );
}

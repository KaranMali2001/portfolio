"use client";

import { ACCENT } from "@/lib/constants";
import { blogPosts, engineeringWithAI, experiences, learning, personalInfo, projects } from "@/lib/portfolio-data";
import { BoldText, Meta, Reveal, SectionDivider, SectionLabel, ULink } from "../primitives";

// ── Shimmer tag ───────────────────────────────────────────────────────────────
function ShimmerTag({ label }: { label: string }) {
  return (
    <span className="group relative inline-flex cursor-default select-none overflow-hidden rounded-sm bg-zinc-100 px-2 py-0.5 font-mono text-[11px] text-zinc-500">
      <span className="relative z-10">{label}</span>
      <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white to-transparent transition-transform duration-500 ease-in-out group-hover:translate-x-full" />
    </span>
  );
}

// ── Engineering with AI — terminal code-block style ───────────────────────────
const TERM_GREEN = "rgba(34, 197, 94, 0.6)";

export function DevEngineeringAI() {
  return (
    <section id="engineering-with-ai" className="py-14">
      <SectionLabel>Engineering with AI</SectionLabel>
      <div className="space-y-9">
        {engineeringWithAI.map((item, i) => (
          <Reveal key={item.id} delay={i * 0.03}>
            <div className="border-l-2 pl-4" style={{ borderColor: TERM_GREEN }}>
              <h3 className="flex items-baseline gap-2 text-[18px] font-semibold leading-snug text-zinc-900">
                <span
                  className="shrink-0 font-mono text-[16px] font-normal leading-none"
                  style={{ color: TERM_GREEN }}
                >
                  ›
                </span>
                {item.headline}
              </h3>
              <p className="mt-2 text-[17px] leading-relaxed text-zinc-600">{item.what}</p>
              <p className="mt-2 text-[16px] leading-relaxed text-zinc-500">{item.proof}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {item.tech.map((t) => (
                  <ShimmerTag key={t} label={t} />
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

// ── Experience ────────────────────────────────────────────────────────────────
export function DevExperience() {
  return (
    <section id="experience" className="py-14">
      <SectionDivider className="mb-10" />
      <SectionLabel>Experience</SectionLabel>
      <div className="space-y-10">
        {experiences.map((exp, i) => (
          <Reveal key={exp.company} delay={i * 0.03}>
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="text-[18px] font-semibold text-zinc-900">
                {exp.title}
                <span className="font-normal text-zinc-500"> · {exp.company}</span>
              </h3>
              <Meta>{exp.period}</Meta>
            </div>
            <p className="mt-1 text-[16px] text-zinc-500">
              {exp.companyNote} · {exp.location}
            </p>
            <ul className="mt-4 space-y-2.5">
              {exp.highlights.map((h, j) => (
                <li key={j} className="flex gap-3 text-[18px] leading-relaxed text-zinc-600">
                  <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: ACCENT }} />
                  <span>
                    <BoldText text={h} />
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {exp.skills.map((s) => (
                <ShimmerTag key={s} label={s} />
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

// ── Projects ──────────────────────────────────────────────────────────────────
export function DevProjects() {
  return (
    <section id="projects" className="py-14">
      <SectionDivider className="mb-10" />
      <SectionLabel>Projects</SectionLabel>
      <div className="space-y-10">
        {projects.map((p, i) => {
          const href = p.liveUrl ?? p.githubUrl ?? "#";
          const hasSource = p.githubUrl && p.liveUrl;
          return (
            <Reveal key={p.title} delay={i * 0.03}>
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-[18px] font-semibold">
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-baseline gap-1.5 text-zinc-900 transition-colors duration-200 hover:text-[#3b5bdb]"
                  >
                    <span>{p.title}</span>
                    {p.subtitle && (
                      <span className="font-normal text-zinc-500 group-hover:text-[#3b5bdb]/60">· {p.subtitle}</span>
                    )}
                    <span
                      className="pointer-events-none absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 transition-transform duration-200 ease-out group-hover:scale-x-100"
                      style={{ backgroundColor: ACCENT }}
                    />
                  </a>
                </h3>
                <div className="flex shrink-0 items-center gap-3">
                  {p.featured && <Meta>featured</Meta>}
                  {hasSource && <ULink href={p.githubUrl!}>Source</ULink>}
                </div>
              </div>
              <ul className="mt-3 space-y-2">
                {[p.description, p.solution, p.impact].map((point, j) => (
                  <li key={j} className="flex gap-3 text-[18px] leading-relaxed text-zinc-600">
                    <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: ACCENT }} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <ShimmerTag key={t} label={t} />
                ))}
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

// ── Writing ───────────────────────────────────────────────────────────────────
export function DevWriting() {
  return (
    <section id="writing" className="py-14">
      <SectionDivider className="mb-10" />
      <SectionLabel>Writing</SectionLabel>
      <div className="space-y-8">
        {blogPosts.map((post, i) => (
          <Reveal key={post.title} delay={i * 0.03}>
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="text-[17px] font-semibold leading-snug text-zinc-900">
                {post.url ? <ULink href={post.url}>{post.title}</ULink> : post.title}
              </h3>
              <Meta>{post.publishedDate}</Meta>
            </div>
            <p className="mt-2 text-[18px] leading-relaxed text-zinc-500">{post.excerpt}</p>
            <div className="mt-2 flex flex-wrap items-center gap-1.5">
              <span className="font-mono text-[13px] text-zinc-500">
                {post.platform} · {post.readTime}
                {post.upcoming ? " · in progress" : ""}
              </span>
              {post.tags.map((tag) => (
                <ShimmerTag key={tag} label={tag} />
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

// ── How I learn ───────────────────────────────────────────────────────────────
export function DevLearn() {
  return (
    <section id="learn" className="py-14">
      <SectionDivider className="mb-10" />
      <SectionLabel>How I learn</SectionLabel>
      <Reveal>
        <h3 className="text-[18px] font-semibold text-zinc-900">{learning.method.name}</h3>
        <p className="mt-2 text-[17px] leading-relaxed text-zinc-600">{learning.method.description}</p>
      </Reveal>
      <div className="mt-8 space-y-5">
        {learning.interests.map((it, i) => (
          <Reveal key={it.title} delay={i * 0.03}>
            <div className="flex flex-col gap-1 sm:flex-row sm:gap-4">
              <h4 className="shrink-0 text-[18px] font-medium text-zinc-900 sm:w-44">{it.title}</h4>
              <p className="text-[18px] leading-relaxed text-zinc-500">{it.detail}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

// ── Contact ───────────────────────────────────────────────────────────────────
export function DevContact() {
  return (
    <section id="contact" className="py-14">
      <SectionDivider className="mb-10" />
      <Reveal>
        <SectionLabel>Contact</SectionLabel>
        <p className="text-[18px] leading-relaxed text-zinc-600">
          {personalInfo.availability}. The fastest way to reach me is{" "}
          <ULink href={`mailto:${personalInfo.email}`} external={false}>
            {personalInfo.email}
          </ULink>
          .
        </p>
        <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[18px]">
          <ULink href={personalInfo.github}>GitHub</ULink>
          <ULink href={personalInfo.devto}>dev.to</ULink>
          <ULink href={personalInfo.medium}>Medium</ULink>
          <ULink href={personalInfo.x}>X</ULink>
          <ULink href={personalInfo.website}>Website</ULink>
          <ULink href={personalInfo.resumeUrl}>Résumé</ULink>
        </div>
      </Reveal>
      <footer className="mt-12 pb-12 font-mono text-[13px] text-zinc-500">
        <p>
          © {new Date().getFullYear()} {personalInfo.name} · {personalInfo.location}
        </p>
        <p className="mt-1">Built with Next.js · Tailwind · Framer Motion · Deployed on Vercel</p>
      </footer>
    </section>
  );
}

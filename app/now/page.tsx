import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Now — Karan Mali",
  description: "What Karan Mali is building, reading, and thinking about right now.",
};

const now = {
  building: [
    {
      title: "Wealth Reserve — SMS reconciler",
      detail:
        "The Go/Lambda backend that parses Indian bank SMS into transactions. Currently hardening the fuzzy-match confidence scoring and building the SIP auto-link pass.",
    },
    {
      title: "This portfolio",
      detail: "Rebuilding from scratch — text-first, no gimmicks, written to hold up to an engineering interview not just look good on a screenshot.",
    },
  ],
  diggingInto: [
    {
      title: "SO_REUSEPORT & TCP internals",
      detail: "Writing the post that explains how the kernel load-balances across processes on the same port — the 4-tuple hash, the reuseport_sock_index, and where it breaks.",
    },
    {
      title: "eBPF",
      detail: "Not production-ready yet. Just building the mental model: how the verifier works, what XDP actually does at the driver level, and why everyone is excited.",
    },
    {
      title: "Kafka internals",
      detail: "Log segmentation, ISR, and why partition reassignment is scarier than it looks. Reading the source when the docs stop being specific enough.",
    },
  ],
  writing: [
    {
      title: "Two Processes on the Same Port",
      status: "In progress",
      detail: "SO_REUSEPORT, TCP 4-tuple hashing, and how the kernel actually load-balances. The post I wish had existed when I first hit this.",
    },
  ],
  lastUpdated: "June 2026",
};

export default function NowPage() {
  return (
    <main className="min-h-screen bg-[#F5EFE6] text-zinc-900">
      <div className="mx-auto max-w-[720px] px-5 py-14">
        {/* Back link */}
        <Link
          href="/"
          className="group inline-flex items-center gap-1.5 font-mono text-[13px] text-zinc-400 transition-colors duration-200 hover:text-zinc-900"
        >
          <span className="transition-transform duration-200 group-hover:-translate-x-0.5">←</span>
          <span>karan5599.in</span>
        </Link>

        <div className="mt-10">
          <h1 className="text-[28px] font-bold tracking-tight text-zinc-900">Now</h1>
          <p className="mt-2 font-mono text-[13px] text-zinc-400">Last updated {now.lastUpdated}</p>
          <p className="mt-5 text-[17px] leading-relaxed text-zinc-600">
            A snapshot of what I&apos;m actually working on, learning, and writing — not a resume, not an aspirational list. If
            something here is months old I&apos;ve either shipped it or quietly abandoned it.
          </p>
        </div>

        {/* Building */}
        <section className="mt-14">
          <h2 className="mb-7 font-mono text-[13px] uppercase tracking-[0.18em] text-zinc-400">Building</h2>
          <div className="space-y-7">
            {now.building.map((item) => (
              <div key={item.title}>
                <h3 className="text-[17px] font-semibold text-zinc-900">{item.title}</h3>
                <p className="mt-1.5 text-[16px] leading-relaxed text-zinc-600">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Digging into */}
        <section className="mt-14">
          <h2 className="mb-7 font-mono text-[13px] uppercase tracking-[0.18em] text-zinc-400">Digging into</h2>
          <div className="space-y-7">
            {now.diggingInto.map((item) => (
              <div key={item.title}>
                <h3 className="text-[17px] font-semibold text-zinc-900">{item.title}</h3>
                <p className="mt-1.5 text-[16px] leading-relaxed text-zinc-600">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Writing */}
        <section className="mt-14">
          <h2 className="mb-7 font-mono text-[13px] uppercase tracking-[0.18em] text-zinc-400">Writing</h2>
          <div className="space-y-7">
            {now.writing.map((item) => (
              <div key={item.title}>
                <div className="flex items-baseline gap-3">
                  <h3 className="text-[17px] font-semibold text-zinc-900">{item.title}</h3>
                  <span className="font-mono text-[12px] text-zinc-400">{item.status}</span>
                </div>
                <p className="mt-1.5 text-[16px] leading-relaxed text-zinc-600">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <footer className="mt-14 border-t border-zinc-100 pt-8 font-mono text-[13px] text-zinc-400">
          Inspired by{" "}
          <a href="https://nownownow.com/about" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-zinc-600">
            nownownow.com
          </a>
          . Derek Sivers started it.
        </footer>
      </div>
    </main>
  );
}

// Single source of truth for all portfolio design variants.
// Positioning: Backend & product engineer who builds AI tooling to ship faster.
// Target: backend & product roles. Light, clean, text-rich.

export const personalInfo = {
  name: "Karan Mali",
  title: "Backend + Product Engineer",
  positioningLine: "Backend & product engineer who builds AI tooling to ship faster.",
  subline: "I work on data integrity, multi-tenant architecture, and the automation that lets a few engineers get through the work of a much bigger team. Currently at Ajar, a property-management & rent-payments SaaS.",
  location: "India · Remote",
  availability: "Open to backend & product roles · Remote",
  email: "karanmali122001@gmail.com",
  github: "https://github.com/KaranMali2001",
  githubUsername: "KaranMali2001",
  devto: "https://dev.to/karan5599",
  medium: "https://medium.com/@karanmali122001",
  x: "https://x.com/karanM5599",
  website: "https://karan5599.in",
  resumeUrl: "https://drive.google.com/file/d/11Vk2bbOHiZ6hUFiy8aAABJr5PLzXk5O6/view",
};

// THE differentiator section. Each item = outcome headline + what it is + proof + tech.
// This is the only place the React Native mobile work appears (as an AI-leveraged delivery story).
export const engineeringWithAI = [
  {
    id: "ai-plan-pipeline",
    headline: "Cut feature kickoff from hours to minutes",
    what: "When a ticket is assigned, a Jira → GitHub Actions → Claude pipeline reads the codebase, drafts a plan and test scenarios, and commits them to a new branch.",
    proof: "12+ plans in the first month; the whole team now starts from it.",
    tech: ["Claude", "GitHub Actions", "Jira webhooks", "Node.js"],
    url: "https://dev.to/karan5599/i-didnt-need-a-smarter-model-i-needed-to-onboard-it-27dc",
  },
  {
    id: "arabic-agent",
    headline: "Automated Arabic localization behind a human-review gate",
    what: "A translator agent runs in CI before each deploy, translating the app into Arabic (full RTL). A human reviewer just approves the diff.",
    proof: "Localization ships continuously instead of blocking releases.",
    tech: ["LLM agent", "CI/CD", "i18n", "RTL"],
  },
  {
    id: "mobile-8-weeks",
    headline: "Shipped a production mobile app in 8 weeks",
    what: "Shipped the landlord mobile app end to end, using AI tooling for scaffolding, native plugin work, and the Android release pipeline (Fastlane → signed AAB → Firebase).",
    proof: "iOS + Android, 15+ screens, Arabic RTL, push notifications — zero to store in ~8 weeks.",
    tech: ["React Native", "Expo", "Fastlane", "Firebase", "Courier"],
  },
];

// Experience — Ajar framed PURELY backend/systems (mobile lives in engineeringWithAI).
export const experiences = [
  {
    title: "Software Engineer",
    company: "Ajar Online",
    companyNote: "Property-management & rent-payments SaaS",
    period: "Nov 2025 – Present",
    location: "Remote",
    highlights: [
      "Fixed a multi-tenant data-corruption bug where web and mobile sessions shared one global account context — a device could act on another's portfolio. Re-architected to request-scoped resolution (AsyncLocalStorage) across **44 service call sites**; shipped in 3 files.",
      "Led a zero-downtime, six-phase migration deprecating a global account-id field across four codebases, with a metric-gated cutover held below **0.5% error rate for 7 days** ending in a schema column drop.",
      "Found RBAC was enforced only on the client; catalogued **IDOR vulnerabilities** and built server-side RBAC middleware with integration tests.",
      "Built a **centralized notification hub**: queue-based multi-channel delivery (in-app, email, SMS) with per-user preferences and event triggers across lease and payment workflows.",
      "Integrated MyFatoorah payments: **saved-card tokenization** and a capture flow hardened with transactional rollback.",
      "Build & infra: cut the server build **6.6s → 119ms** with esbuild, shrank the Docker image 65%, sped Angular CI 75%, and flagged a recurring CI-plan cost saving.",
    ],
    skills: ["Node.js", "TypeScript", "PostgreSQL", "BullMQ", "Redis", "Go", "Google Cloud", "Docker", "GitHub Actions"],
    impact: "Platform-wide systems work",
  },
  {
    title: "Software Developer",
    company: "Autonomis",
    companyNote: "Data / reporting platform",
    period: "Dec 2024 – Oct 2025",
    location: "Remote",
    highlights: [
      "Built an **RBAC sharing system**: fine-grained view/edit permissions, multi-tenancy, invites, and role management.",
      "Established MIS reporting dashboards with customizable views, automating delivery through Airflow.",
      "Reduced bug-related downtime by **~50%** by troubleshooting and hardening AI-generated backend code.",
    ],
    skills: ["RBAC", "Multi-tenancy", "Airflow", "React Query", "Zustand"],
    impact: "~50% less downtime",
  },
  {
    title: "Backend Developer",
    company: "PixelSaffron",
    companyNote: "E-commerce",
    period: "Oct 2024 – Dec 2024",
    location: "Remote",
    highlights: [
      "Built the backend for a clothing brand on MongoDB, Express, and Node.js.",
      "Integrated PhonePe and RazorPay with webhook-based real-time order updates, plus a wallet and coupon system.",
      "Optimized analytics through indexing and database views.",
    ],
    skills: ["Node.js", "MongoDB", "PhonePe", "RazorPay", "JWT"],
    impact: "Real-time payments",
  },
];

// Projects — finance-tracker-v2 is the centerpiece. No DispatchX.
export const projects = [
  {
    title: "Wealth Reserve",
    subtitle: "Finance Tracker v2",
    featured: true,
    description:
      "Captures Indian bank SMS, reconciles it against Excel statements, and auto-links transactions to SIP goals. Web + React Native.",
    problem: "Indian users juggle expense tracking, scattered SIPs, and manual statement reconciliation across four or five tools.",
    solution:
      "Go/Echo, SQLC + PostgreSQL on AWS Lambda, with an Asynq queue. Gemini parses the SMS; a reconciler fuzzy-matches statement rows with confidence scoring; SIP rules link transactions in the background.",
    impact: "Live · 50+ documented endpoints · Go on AWS Lambda",
    tech: ["Go", "Echo", "SQLC", "PostgreSQL", "AWS Lambda", "Asynq", "Gemini", "React Native", "Clerk", "Cloudflare R2"],
    liveUrl: "https://finance-tracker-v2-ten.vercel.app/",
    githubUrl: "https://github.com/KaranMali2001/finance-tracker-v2",
  },
  {
    title: "Auto-Blog",
    featured: true,
    description:
      "A GitHub App that runs your commit diffs through an LLM and drafts blog posts, tweets, and LinkedIn updates on every push.",
    problem: "Engineers ship constantly but rarely turn that work into writing.",
    solution:
      "Next.js + Convex (real-time) + Clerk. Validates webhooks, filters noise (lockfiles, binaries, large diffs), streams clean diffs to an LLM, and schedules multi-platform output.",
    impact: "Webhooks · real-time sync · LLM orchestration · open source",
    tech: ["Next.js", "Convex", "Clerk", "GitHub App", "OpenRouter / Gemini"],
    liveUrl: "https://auto-blog-opal.vercel.app/",
    githubUrl: "https://github.com/KaranMali2001/auto-blog",
  },
  {
    title: "MatchUp",
    description: "A tournament-management platform built on Go goroutines, so concurrent registrations and scheduling never collide.",
    problem: "Tournament tools struggle with concurrent users updating the same bracket.",
    solution: "Goroutines + channels for high-throughput registration, scheduling, and result tracking with no race conditions.",
    impact: "Concurrent-safe · Go + PostgreSQL · Dockerized",
    tech: ["Go", "PostgreSQL", "Docker", "REST"],
    githubUrl: "https://github.com/KaranMali2001/MatchUp",
  },
  {
    title: "Enhanced Dimaag",
    description: "Drop in a YouTube URL, get a structured summary, and share it with per-user permissions. Handles hour-long videos without truncation.",
    problem: "Long videos are slow to digest and hard to share with context.",
    solution: "LangChain + Gemini chunked-summarization pipeline; Clerk handles permission-based sharing.",
    impact: "Live · Gemini + LangChain · shareable summaries",
    tech: ["React", "PostgreSQL", "Drizzle", "LangChain", "Clerk"],
    liveUrl: "https://enhanced-dimaag.vercel.app/",
    githubUrl: "https://github.com/KaranMali2001/enhancedDimaag",
  },
  {
    title: "Elevare",
    description: "An AI email manager with a custom job queue. Summarizes busy inboxes and flags the messages that need a reply.",
    problem: "The email tools I tried couldn't handle the volume and still give useful AI insight.",
    solution: "Custom queue for controlled concurrency, Groq-powered summarization, and real-time processing analytics.",
    impact: "40% faster processing · custom queue · Groq inference",
    tech: ["Next.js", "TypeScript", "Prisma", "Groq"],
    liveUrl: "https://elevare-karanmali2001s-projects.vercel.app/",
    githubUrl: "https://github.com/KaranMali2001/Elevare",
  },
];

// Writing — real, published posts first, then upcoming.
export const blogPosts = [
  {
    title: "I didn't need a smarter model. I needed to onboard it",
    platform: "dev.to",
    publishedDate: "June 2026",
    readTime: "9 min",
    tags: ["AI Tooling", "Automation", "Claude"],
    url: "https://dev.to/karan5599/i-didnt-need-a-smarter-model-i-needed-to-onboard-it-27dc",
    excerpt: "Unreliable AI output usually isn't a model problem; it's an onboarding one. I fed an agent our architecture, naming, and real code until its plans were good enough to run several tickets at once.",
    featured: true,
  },
  {
    title: "From custom polling architecture to one API call: rethinking notification delivery",
    platform: "dev.to",
    publishedDate: "May 2026",
    readTime: "7 min",
    reactions: 16,
    tags: ["System Design", "Backend", "Full-stack"],
    url: "https://dev.to/karan5599/notification-system-design-the-question-i-almost-missed-a1f",
    excerpt: "Building a polling-based notification system, I realized the scope was wrong — mobile and email were coming. On pressure-testing scope before you build.",
  },
  {
    title: "The const enum that took down our payments",
    platform: "dev.to",
    publishedDate: "May 2026",
    readTime: "7 min",
    tags: ["TypeScript", "Performance", "Incident"],
    url: "https://dev.to/karan5599/the-const-enum-that-took-down-our-payments-pi8",
    excerpt: "How one difference between tsc and esbuild, const enum inlining, corrupted payment data in production, and what I did about it.",
  },
  {
    title: "The ORM Trap That Cost Me a Backend Job",
    platform: "Medium",
    publishedDate: "Jul 12, 2025",
    readTime: "7 min",
    tags: ["Backend", "ORM", "Database"],
    url: "https://medium.com/@karanmali122001/the-orm-trap-that-cost-me-a-backend-job-042c710d5163",
    excerpt: "Leaning on an ORM, missing the SQL underneath it, and what that cost me.",
  },
  {
    title: "Concurrency Can Kill Your Performance",
    platform: "Medium",
    publishedDate: "In progress",
    readTime: "—",
    tags: ["Go", "Concurrency", "Performance"],
    upcoming: true,
    excerpt: "I thought merge sort was fast enough, until 10 million items. What Go's goroutines did to it, for better and worse.",
  },
  {
    title: "Two Processes on the Same Port",
    platform: "dev.to",
    publishedDate: "In progress",
    readTime: "—",
    tags: ["Networking", "SO_REUSEPORT", "Linux"],
    upcoming: true,
    excerpt: "SO_REUSEPORT, TCP 4-tuple hashing, and how the kernel actually load-balances across processes.",
  },
];

// What he's into / how he learns — for the "How I learn" strip.
export const learning = {
  method: {
    name: "Rabbit-holing",
    description: "My own way of learning: pick something that nags at me, dig until the mental model clicks, then write it up. Most of my posts start as a rabbit hole.",
  },
  interests: [
    {
      title: "Distributed systems",
      detail: "Kafka, Redis, transactions, and the system limits that bite at scale.",
    },
    {
      title: "Low-level networking",
      detail: "SO_REUSEPORT, TCP internals, and eBPF — how packets actually get routed.",
    },
    {
      title: "Go performance",
      detail: "Where the time and allocations really go, and how to get them back.",
    },
  ],
};

export const navSections = [
  { id: "engineering-with-ai", label: "Engineering with AI" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "writing", label: "Writing" },
  { id: "learn", label: "How I learn" },
  { id: "contact", label: "Contact" },
];

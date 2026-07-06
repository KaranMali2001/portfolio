# Portfolio → Astro Migration Plan

Rebuild the Next.js portfolio as an Astro site that ships **~10–15 KB of JS**
(down from 173 KB) by rendering all content as static HTML, doing every scroll
animation in pure CSS, and keeping JavaScript only in three tiny vanilla islands.

## Why Astro here

The page is ~99% static text. In the Next version every section is a Client
Component *only* because of `motion` animations — not because the content is
interactive. Astro renders to zero-JS HTML by default and hydrates only the
islands you opt into, so the React runtime (114 KB) and the `motion` stack
(~40 KB gzip) both disappear from the critical path.

## Stack

| Concern | Choice | Rationale |
| --- | --- | --- |
| Framework | Astro 5, `output: 'static'` | zero-JS default, content-site sweet spot |
| Styling | Tailwind v4 via `@tailwindcss/vite` | classes port 1:1 from the Next app |
| Islands | Vanilla JS `<script>` / custom elements | avoid re-shipping a UI framework for 3 widgets |
| Reveals | CSS `view()` scroll-driven animations | universal 2026 support, runs on compositor, 0 KB |
| Progress bar | CSS `scroll(root)` timeline | replaces `motion` useScroll/useSpring, 0 KB |
| Fonts | `@fontsource-variable/*`, self-hosted | one variable file per family, no external request |
| Routing | MPA (no `<ClientRouter>`) | 2 pages only; avoids Lenis + view-transition scroll conflict |
| Sitemap | `@astrojs/sitemap` | replaces `app/sitemap.ts` |
| Headers | `vercel.json` | replaces `next.config` security headers |
| OG image | static PNG in `public/` (Satori endpoint optional later) | keeps build simple |

## Component map

| Next (React) | Astro | JS |
| --- | --- | --- |
| `app/layout.tsx` | `src/layouts/Base.astro` | 0 |
| `app/page.tsx` | `src/pages/index.astro` | 0 |
| `app/now/page.tsx` | `src/pages/now.astro` | 0 |
| `lib/*` | `src/lib/*` (verbatim) | 0 |
| `ScrollProgress.tsx` | CSS `.scroll-progress` | 0 |
| `primitives.tsx` reveals/divider | `.astro` + CSS `.reveal` / `.text-reveal` | 0 |
| `primitives.tsx` ULink/Meta/Label | pure `.astro` + CSS `:hover` | 0 |
| `DevSections.tsx` | `.astro` section components | 0 |
| `DevHero.tsx` typewriter/magnetic | CSS stagger + `hero.ts` (~1 KB) | ~1 KB |
| `DevNav.tsx` scroll-spy | `nav.ts` IntersectionObserver (~1 KB) | ~1 KB |
| `CommandPalette.tsx` (cmdk+motion) | `CommandPalette.astro` vanilla `<dialog>` | ~2–4 KB |
| `SmoothScroll.tsx` (lenis) | inline Lenis init in Base | ~7 KB (optional) |

## Behavior differences to accept

- CSS `view()` reveals **scrub with scroll** (reverse on scroll-up within the
  entry range) instead of `once:true`. Tuned via `animation-range`.
- Firefox scroll-driven support is partial → `@supports` fallback shows content
  instantly (no reveal) rather than hiding it.
- The per-character bold-weight animation (`BoldText`) is simplified to a CSS
  fade so it needs no JS.

## Phases

1. Scaffold + config + deps
2. Port `lib/*` and `public/*`
3. Base layout (fonts, `<head>`, JSON-LD, Lenis)
4. Static homepage + all sections (no JS yet)
5. `now` page
6. CSS scroll animations + reduced-motion / `@supports` fallbacks
7. Islands: command palette, scroll-spy nav, hero micro-interactions
8. `vercel.json`, sitemap, robots — build & measure

## Target outcome

First Load JS ~10–15 KB, Lighthouse perf ~100, identical look & content.

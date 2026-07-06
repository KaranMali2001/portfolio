"use client";

import { ReactLenis } from "lenis/react";
import { useEffect, useState } from "react";

/**
 * App-wide smooth scrolling powered by Lenis.
 *
 * Lenis wraps the browser's *native* scroll and lerps the real scroll
 * position, so `position: sticky`, anchor links, keyboard scrolling, and
 * motion's `useScroll()` (the progress bar) all keep working.
 *
 * - `root` attaches Lenis to <html> with no extra wrapper DOM, so layout is
 *   untouched.
 * - `anchors` makes in-page `#section` links scroll smoothly; the negative
 *   offset clears the sticky nav (matches `scroll-padding-top` in globals.css).
 * - Touch is left on native scroll (Lenis default) — forced smooth touch feels
 *   laggy and hurts accessibility on mobile.
 * - Respects `prefers-reduced-motion`: we skip Lenis entirely so motion-
 *   sensitive users get instant, native scrolling.
 */
export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  if (reducedMotion) return <>{children}</>;

  return (
    <ReactLenis
      root
      options={{
        // Framerate-independent smoothing. Lower = glassier glide. With `lerp`
        // set, Lenis ignores `duration`/`easing` entirely, so this is the only
        // smoothness knob. 0.06 + a 1.4 wheelMultiplier is the community
        // "smooth-but-fast" sweet spot: low lerp glides, high multiplier keeps
        // it from feeling slow.
        lerp: 0.06,
        smoothWheel: true,
        wheelMultiplier: 1.4,
        // In-page anchor links scroll smoothly and stop clear of the sticky nav.
        anchors: { offset: -64 },
      }}
    >
      {children}
    </ReactLenis>
  );
}

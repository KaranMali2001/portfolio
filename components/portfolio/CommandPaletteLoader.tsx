"use client";

import dynamic from "next/dynamic";

// cmdk (and the motion tree it pulls in) isn't needed on first paint — the
// palette only becomes visible on ⌘K. Code-split it into its own chunk so it
// stays out of the initial First Load JS and loads after the page hydrates.
const CommandPalette = dynamic(() => import("./CommandPalette"), { ssr: false });

export default function CommandPaletteLoader() {
  return <CommandPalette />;
}

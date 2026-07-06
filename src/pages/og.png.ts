import type { APIRoute } from "astro";
import satori from "satori";
import { html } from "satori-html";
import { Resvg } from "@resvg/resvg-js";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { personalInfo } from "../lib/portfolio-data";

// Build-time social card, generated from the live design tokens (beige #F5EFE6 /
// accent #3b5bdb) so it can never drift from the site. This is a prerendered
// endpoint — satori/resvg run at build only and never ship to the client.
export const prerender = true;

const ACCENT = "#3b5bdb";
const BG = "#F5EFE6";
const website = personalInfo.website.replace("https://", "");

export const GET: APIRoute = async () => {
  // Read the source font files (cwd is the project root during build).
  const fontsDir = path.join(process.cwd(), "src/assets/fonts");
  const [bold, medium] = await Promise.all([
    readFile(path.join(fontsDir, "PlusJakartaSans-700.woff")),
    readFile(path.join(fontsDir, "PlusJakartaSans-500.woff")),
  ]);

  // No whitespace between tags: satori-html turns inter-tag whitespace into text
  // nodes, which would give a container multiple children without display:flex.
  const markup = html(
    `<div style="height:100%;width:100%;display:flex;flex-direction:column;justify-content:space-between;background-color:${BG};padding:84px 88px;font-family:Jakarta">` +
      `<div style="display:flex;flex-direction:column">` +
      `<div style="display:flex;width:64px;height:6px;border-radius:3px;background-color:${ACCENT}"></div>` +
      `<div style="display:flex;margin-top:40px;font-size:92px;font-weight:700;letter-spacing:-3px;color:#18181b;line-height:1.05">${personalInfo.name}</div>` +
      `<div style="display:flex;margin-top:18px;font-size:42px;font-weight:500;color:${ACCENT}">${personalInfo.title}</div>` +
      `<div style="display:flex;margin-top:30px;font-size:30px;font-weight:500;color:#52525b;max-width:920px;line-height:1.4">${personalInfo.positioningLine}</div>` +
      `</div>` +
      `<div style="display:flex;align-items:center;justify-content:space-between">` +
      `<div style="display:flex;font-size:26px;font-weight:500;color:#71717a">${personalInfo.location}</div>` +
      `<div style="display:flex;font-size:26px;font-weight:700;color:#18181b">${website}</div>` +
      `</div>` +
      `</div>`,
  );

  const svg = await satori(markup, {
    width: 1200,
    height: 630,
    fonts: [
      { name: "Jakarta", data: bold, weight: 700, style: "normal" },
      { name: "Jakarta", data: medium, weight: 500, style: "normal" },
    ],
  });

  const png = new Resvg(svg, { fitTo: { mode: "width", value: 1200 } })
    .render()
    .asPng();

  return new Response(new Uint8Array(png), {
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
};

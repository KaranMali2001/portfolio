import { personalInfo } from "@/lib/portfolio-data";
import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// Static social-preview card, generated at build time from the live design
// tokens (beige #F5EFE6 / accent #3b5bdb) so it can never drift from the site
// the way a hand-captured screenshot does.
export const alt = `${personalInfo.name} — ${personalInfo.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const ACCENT = "#3b5bdb";
const BG = "#F5EFE6";

export default async function OpengraphImage() {
  const [bold, medium] = await Promise.all([
    readFile(join(process.cwd(), "app/_fonts/PlusJakartaSans-700.woff")),
    readFile(join(process.cwd(), "app/_fonts/PlusJakartaSans-500.woff")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: BG,
          padding: "84px 88px",
          fontFamily: "Jakarta",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ width: 64, height: 6, borderRadius: 3, backgroundColor: ACCENT }} />
          <div
            style={{
              marginTop: 40,
              fontSize: 92,
              fontWeight: 700,
              letterSpacing: -3,
              color: "#18181b",
              lineHeight: 1.05,
            }}
          >
            {personalInfo.name}
          </div>
          <div style={{ marginTop: 18, fontSize: 42, fontWeight: 500, color: ACCENT }}>
            {personalInfo.title}
          </div>
          <div
            style={{
              marginTop: 30,
              fontSize: 30,
              fontWeight: 500,
              color: "#52525b",
              maxWidth: 920,
              lineHeight: 1.4,
            }}
          >
            {personalInfo.positioningLine}
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ fontSize: 26, fontWeight: 500, color: "#71717a" }}>
            {personalInfo.location}
          </div>
          <div style={{ fontSize: 26, fontWeight: 700, color: "#18181b" }}>
            {personalInfo.website.replace("https://", "")}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Jakarta", data: bold, weight: 700, style: "normal" },
        { name: "Jakarta", data: medium, weight: 500, style: "normal" },
      ],
    },
  );
}

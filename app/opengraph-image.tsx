import { ImageResponse } from "next/og";

export const alt = "Karan Mali - Backend & Full-Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "rgb(15, 15, 20)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px 72px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Top accent line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "linear-gradient(90deg, #fb923c, #f97316, transparent)",
          }}
        />

        {/* Radial glow */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "radial-gradient(circle at 80% 20%, rgba(251,146,60,0.07) 0%, transparent 55%)",
          }}
        />

        {/* Top section */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {/* Badge + URL row */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div
              style={{
                width: "68px",
                height: "68px",
                borderRadius: "50%",
                background: "rgba(251,146,60,0.12)",
                border: "2px solid rgba(251,146,60,0.35)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "26px",
                fontWeight: "800",
                color: "#fb923c",
              }}
            >
              KM
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              <span style={{ fontSize: "13px", color: "rgba(251,146,60,0.75)", letterSpacing: "3px", textTransform: "uppercase" }}>
                Portfolio
              </span>
              <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.35)" }}>
                karan5599.tech
              </span>
            </div>
          </div>

          {/* Name + Title */}
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <h1
              style={{
                fontSize: "76px",
                fontWeight: "800",
                color: "#ffffff",
                margin: 0,
                lineHeight: 1,
                letterSpacing: "-2.5px",
              }}
            >
              Karan Mali
            </h1>
            <p
              style={{
                fontSize: "26px",
                color: "#fb923c",
                margin: 0,
                fontWeight: "500",
                letterSpacing: "0.3px",
              }}
            >
              Backend &amp; Full-Stack Developer
            </p>
          </div>
        </div>

        {/* Bottom section */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {/* Skill badges — hardcoded to avoid Satori .map() issues */}
          <div style={{ display: "flex", gap: "10px" }}>
            <div style={{ background: "rgba(251,146,60,0.08)", border: "1px solid rgba(251,146,60,0.25)", color: "#fb923c", padding: "7px 16px", borderRadius: "999px", fontSize: "15px", fontWeight: "500" }}>Node.js</div>
            <div style={{ background: "rgba(251,146,60,0.08)", border: "1px solid rgba(251,146,60,0.25)", color: "#fb923c", padding: "7px 16px", borderRadius: "999px", fontSize: "15px", fontWeight: "500" }}>Golang</div>
            <div style={{ background: "rgba(251,146,60,0.08)", border: "1px solid rgba(251,146,60,0.25)", color: "#fb923c", padding: "7px 16px", borderRadius: "999px", fontSize: "15px", fontWeight: "500" }}>Next.js</div>
            <div style={{ background: "rgba(251,146,60,0.08)", border: "1px solid rgba(251,146,60,0.25)", color: "#fb923c", padding: "7px 16px", borderRadius: "999px", fontSize: "15px", fontWeight: "500" }}>PostgreSQL</div>
            <div style={{ background: "rgba(251,146,60,0.08)", border: "1px solid rgba(251,146,60,0.25)", color: "#fb923c", padding: "7px 16px", borderRadius: "999px", fontSize: "15px", fontWeight: "500" }}>AWS</div>
            <div style={{ background: "rgba(251,146,60,0.08)", border: "1px solid rgba(251,146,60,0.25)", color: "#fb923c", padding: "7px 16px", borderRadius: "999px", fontSize: "15px", fontWeight: "500" }}>TypeScript</div>
          </div>

          {/* Divider + tagline */}
          <p
            style={{
              fontSize: "16px",
              color: "rgba(255,255,255,0.35)",
              margin: 0,
              borderTop: "1px solid rgba(255,255,255,0.07)",
              paddingTop: "18px",
              letterSpacing: "0.2px",
            }}
          >
            Scalable multi-tenant systems · High-performance APIs · Distributed architecture
          </p>
        </div>
      </div>
    ),
    { ...size }
  );
}

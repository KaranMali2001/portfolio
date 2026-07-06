import SmoothScroll from "@/components/portfolio/SmoothScroll";
import type { Metadata } from "next";
import { JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

// Declared once at the root — not per-page — so the font files are only
// requested once for the whole app.
const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-sans",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://karan5599.in"),
  title: "Karan Mali — Backend + Product Engineer",
  description: "Backend & product engineer working on data integrity, multi-tenant architecture, and AI tooling. Currently at Ajar. Open to backend & product roles.",
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/icon.svg", sizes: "180x180" }],
  },
  openGraph: {
    title: "Karan Mali — Backend + Product Engineer",
    description: "Backend & product engineer working on data integrity, multi-tenant architecture, and AI tooling.",
    url: "https://karan5599.in",
    siteName: "Karan Mali",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Karan Mali — Backend + Product Engineer",
    description: "Backend & product engineer working on data integrity, multi-tenant architecture, and AI tooling.",
    creator: "@karanM5599",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}

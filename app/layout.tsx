import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import type React from "react";
//@ts-ignore
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://karan5599.tech"),
  title: {
    default: "Karan Mali - Backend & Full-Stack Developer | Node.js, Go, AWS Expert",
    template: "%s | Karan Mali - Backend Developer",
  },
  description:
    "Backend & Full-Stack Developer specializing in Node.js, Golang, Next.js, and AWS. Building scalable multi-tenant systems, RBAC implementations, and high-performance APIs. Available for backend engineer roles.",
  keywords: [
    "Backend Developer",
    "Full Stack Developer",
    "Node.js Developer",
    "Golang Developer",
    "Go Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "AWS Developer",
    "Backend Engineer",
    "Software Engineer",
    "Multi-tenant Architecture",
    "RBAC Implementation",
    "Microservices",
    "RESTful APIs",
    "PostgreSQL",
    "MongoDB",
    "System Design",
    "Scalable Backend",
    "Karan Mali",
    "India Backend Developer",
    "Remote Backend Developer",
    "Hire Backend Developer",
  ],
  authors: [{ name: "Karan Mali", url: "https://karan5599.tech" }],
  creator: "Karan Mali",
  publisher: "Karan Mali",
  alternates: {
    canonical: "https://karan5599.tech",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://karan5599.tech",
    title: "Karan Mali - Backend & Full-Stack Developer | Node.js, Go, AWS",
    description: "Backend Engineer specializing in scalable systems, multi-tenant architecture, and high-performance APIs. Expert in Node.js, Golang, PostgreSQL, and AWS.",
    siteName: "Karan Mali Portfolio",
    images: [
      {
        url: "/og-image.png", // Create this image (1200x630px)
        width: 1200,
        height: 630,
        alt: "Karan Mali - Backend Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Karan Mali - Backend & Full-Stack Developer",
    description: "Backend Engineer building scalable systems with Node.js, Go, PostgreSQL, and AWS. Available for backend engineer roles.",
    images: ["/og-image.png"], // Create this image
    creator: "@karanmali", // Replace with your Twitter handle if you have one
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Add Google Search Console verification
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Structured Data for Person */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Karan Mali",
              url: "https://karan5599.tech",
              email: "karanmali122001@gmail.com",
              jobTitle: "Backend & Full-Stack Developer",
              worksFor: {
                "@type": "Organization",
                name: "Autonomis",
              },
              description: "Backend & Full-Stack Developer specializing in Node.js, Golang, Next.js, and AWS. Building scalable multi-tenant systems and high-performance APIs.",
              knowsAbout: ["Backend Development", "Node.js", "Golang", "TypeScript", "AWS", "PostgreSQL", "MongoDB", "System Design", "Multi-tenant Architecture", "RBAC", "Microservices"],
              sameAs: [
                "https://github.com/KaranMali2001",
                "https://medium.com/@karanmali122001",
                "https://www.linkedin.com/in/karan-mali", // Add if you have LinkedIn
              ],
              address: {
                "@type": "PostalAddress",
                addressCountry: "IN",
              },
            }),
          }}
        />

        {/* Structured Data for Portfolio */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfilePage",
              mainEntity: {
                "@type": "Person",
                name: "Karan Mali",
                alternateName: "KM",
                description: "Backend Systems Engineer with expertise in building scalable multi-tenant architectures",
              },
            }),
          }}
        />
      </head>
      <body className="dark">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

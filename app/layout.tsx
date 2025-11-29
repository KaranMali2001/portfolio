import { ThemeProvider } from "@/components/theme-provider";

import type React from "react";
//@ts-ignore
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://karan5599.tech"),
  title: {
    default: "Karan Mali - Backend & Full-Stack Developer | Node.js, Go, AWS Expert",
    template: "%s | Karan Mali - Backend Developer",
  },
  description:
    "Backend & Full-Stack Developer specializing in Node.js, Golang, Next.js, and AWS. Building scalable multi-tenant systems, RBAC implementations, and high-performance APIs. Available for backend engineer roles.",
  icons: {
    icon: "/karan.svg",
    shortcut: "/karan.svg",
    apple: "/karan.svg",
  },
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
                "https://www.linkedin.com/in/karan5599", // Add if you have LinkedIn
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

        {/* Structured Data for Website */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Karan Mali - Backend Developer Portfolio",
              url: "https://karan5599.tech",
              description: "Portfolio showcasing backend development projects, technical articles, and software engineering expertise in Node.js, Go, and AWS.",
              author: {
                "@type": "Person",
                name: "Karan Mali",
              },
              inLanguage: "en-US",
            }),
          }}
        />

        {/* Structured Data for Main Projects */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "SoftwareApplication",
                name: "Elevare - AI Email Management",
                applicationCategory: "BusinessApplication",
                operatingSystem: "Web",
                description: "Full-stack AI-powered email manager with custom queue management, achieving 40% faster email processing. Built with Next.js, TypeScript, Prisma, and Groq AI.",
                url: "https://elevare-karanmali2001s-projects.vercel.app/",
                author: {
                  "@type": "Person",
                  name: "Karan Mali",
                  url: "https://karan5599.tech",
                },
                programmingLanguage: ["TypeScript", "JavaScript"],
                keywords: "AI email management, Next.js, Prisma, Groq, RazorPay, email automation",
              },
              {
                "@context": "https://schema.org",
                "@type": "SoftwareApplication",
                name: "Enhanced Dimaag - AI Content Sharing",
                applicationCategory: "WebApplication",
                operatingSystem: "Web",
                description: "AI-powered YouTube video summarization and content sharing platform using LangChain and Google Gemini. Features permission-based sharing with Clerk authentication.",
                url: "https://enhanced-dimaag.vercel.app/",
                author: {
                  "@type": "Person",
                  name: "Karan Mali",
                },
                codeRepository: "https://github.com/KaranMali2001/enhancedDimaag",
                programmingLanguage: ["TypeScript", "JavaScript"],
                keywords: "AI summarization, LangChain, Gemini, YouTube, React, PostgreSQL",
              },
              {
                "@context": "https://schema.org",
                "@type": "SoftwareSourceCode",
                name: "Microservices Platform - Go, gRPC, GraphQL",
                description: "Distributed Go microservices architecture using gRPC for inter-service communication and GraphQL for API gateway. Orchestrated with Docker Compose and PostgreSQL.",
                author: {
                  "@type": "Person",
                  name: "Karan Mali",
                },
                codeRepository: "https://github.com/KaranMali2001/Golang-micro-services",
                programmingLanguage: "Go",
                keywords: "Go, gRPC, GraphQL, microservices, Docker, PostgreSQL, distributed systems",
              },
              {
                "@context": "https://schema.org",
                "@type": "SoftwareSourceCode",
                name: "Matchup - Tournament Management System",
                description: "High-concurrency tournament management platform built with Go, supporting 1000+ concurrent users using Go routines for optimal performance.",
                author: {
                  "@type": "Person",
                  name: "Karan Mali",
                },
                codeRepository: "https://github.com/KaranMali2001/matchup",
                programmingLanguage: "Go",
                keywords: "Go, concurrency, tournament management, PostgreSQL, REST API",
              },
              {
                "@context": "https://schema.org",
                "@type": "SoftwareApplication",
                name: "Bidding Management System",
                applicationCategory: "BusinessApplication",
                operatingSystem: "Web",
                description: "Role-based bidding platform with Cloudinary integration for file uploads and optimized builds using esbuild. Features seller and bidder role management.",
                url: "https://bidding-management-system.vercel.app/",
                author: {
                  "@type": "Person",
                  name: "Karan Mali",
                },
                codeRepository: "https://github.com/KaranMali2001/bidding-management-system",
                programmingLanguage: ["TypeScript", "JavaScript"],
                keywords: "RBAC, bidding system, Cloudinary, React Query, Prisma, Next.js",
              },
            ]),
          }}
        />

        {/* Breadcrumb Navigation */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://karan5599.tech",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Experience",
                  item: "https://karan5599.tech/#experience",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Projects",
                  item: "https://karan5599.tech/#projects",
                },
                {
                  "@type": "ListItem",
                  position: 4,
                  name: "Blog",
                  item: "https://karan5599.tech/#blog",
                },
                {
                  "@type": "ListItem",
                  position: 5,
                  name: "Contact",
                  item: "https://karan5599.tech/#contact",
                },
              ],
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

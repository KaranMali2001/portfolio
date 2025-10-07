'use client';

import { Card } from '@/components/ui/card';

export function FAQChapter() {
  const faqs = [
    {
      question: "Who is Karan Mali?",
      answer: "Karan Mali is a Backend & Full-Stack Developer from India, specializing in Node.js, Golang, Next.js, AWS, PostgreSQL, and MongoDB. He builds scalable backend systems with multi-tenant architectures, RBAC implementations, and high-performance APIs."
    },
    {
      question: "What technologies does Karan Mali work with?",
      answer: "Karan primarily works with Node.js, Golang (Go), TypeScript, Next.js, React, PostgreSQL, MongoDB, Redis, AWS (ECS/ECR), Docker, Prisma, Drizzle ORM, and system design patterns including multi-tenancy, RBAC, microservices, and queue systems."
    },
    {
      question: "What are Karan Mali's major projects?",
      answer: "Karan's notable projects include: (1) Elevare - An AI-powered email management SaaS with 40% faster processing using Next.js and Groq AI, (2) Enhanced Dimaag - YouTube video summarization platform using LangChain and Gemini, (3) Go Microservices Platform - Distributed architecture with gRPC and GraphQL, (4) Matchup - Tournament management system handling 1000+ concurrent users, and (5) Bidding Management System - RBAC-based platform with Cloudinary integration."
    },
    {
      question: "What is Karan Mali's professional experience?",
      answer: "Karan Mali currently works as a Software Developer at Autonomis (Dec 2024 - Present), where he built RBAC sharing systems, multi-tenant architecture, MIS dashboards with Airflow, and reduced bug-related downtime by 50%. Previously, he worked as a Backend Developer at PixelSaffron (Oct 2024 - Dec 2024), building e-commerce backends with MongoDB, integrating PhonePe webhooks, and creating wallet/coupon systems."
    },
    {
      question: "What is Karan Mali's development philosophy?",
      answer: "Karan follows an '80% Thinking, 20% Coding' philosophy. He believes backend development is fundamentally about problem-solving and spends significant time understanding problems from first principles before writing code. This approach helps him build systems that scale efficiently and remain maintainable as requirements evolve."
    },
    {
      question: "Has Karan Mali written any technical blog posts?",
      answer: "Yes, Karan writes technical articles on Medium. His featured post 'The ORM Trap That Cost Me a Backend Job' discusses database optimization and ORM usage patterns. He also has upcoming posts on SQL optimization, Go concurrency, and parallel merge sort implementations."
    },
    {
      question: "What makes Karan Mali's backend systems scalable?",
      answer: "Karan designs systems with multi-tenant architecture, implements fine-grained RBAC with view/edit permissions, uses custom queue management for high-performance processing, optimizes databases with indexing and views, and leverages Go's concurrency features for handling thousands of concurrent users."
    },
    {
      question: "How can I hire Karan Mali or get in touch?",
      answer: "Karan Mali is available for backend engineer roles at startups and freelance projects. You can contact him via email at karanmali122001@gmail.com, view his projects on GitHub (github.com/KaranMali2001), read his technical blog on Medium (@karanmali122001), or visit his portfolio at karan5599.tech. He is remote-ready and based in India."
    }
  ];

  return (
    <section id="faq" className="py-20 px-4" aria-labelledby="faq-heading">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-stagger">
          <h2 id="faq-heading" className="text-3xl font-bold theme-text-primary mb-4">Frequently Asked Questions About Karan Mali</h2>
          <p className="text-lg theme-text-muted">Common questions about my work, skills, and projects</p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <Card key={index} className="theme-bg-card p-6 animate-fade-in-stagger" itemScope itemType="https://schema.org/Question">
              <h3 className="text-lg font-bold theme-text-primary mb-3 flex items-start gap-3" itemProp="name">
                <span className="theme-text-accent flex-shrink-0">Q:</span>
                <span>{faq.question}</span>
              </h3>
              <div className="flex items-start gap-3 theme-text-muted leading-relaxed" itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <span className="theme-text-accent flex-shrink-0 font-bold">A:</span>
                <p itemProp="text">{faq.answer}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Structured Data for FAQ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
            })
          }}
        />
      </div>
    </section>
  );
}

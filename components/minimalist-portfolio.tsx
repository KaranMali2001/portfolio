"use client";

import type React from "react";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, ChevronUp, Code2Icon, GithubIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type ColorScheme = "default" | "blue" | "green";

interface MinimalistPortfolioProps {
  colorScheme: ColorScheme;
}

const experience = [
  {
    title: "Software Engineering Intern",
    company: "Autonomis",
    period: "Jan 2025 – Apr 2025",
    points: [
      "Engineered a Role-Based Access Control (RBAC) sharing system enabling users to share documents with view and edit access, enhancing collaboration and security.",
      "Architected a multi-tenant architecture allowing organizations to join the platform and invite team members with features like unique invite links, access revocation, and role management.",
      "Designed an organization analytics dashboard displaying usage for employees against plan limits for resources.",
      "Constructed an alert system leveraging Airflow to trigger automated notifications to Slack and email.",
      "Established MIS report dashboards with customizable views automating report delivery through Airflow.",
      'Integrated "never throw" philosophy for improved development experience and more robust error handling.',
      "Reduced bug-related downtime by 50% by troubleshooting and resolving issues in AI-generated backend code.",
    ],
  },
  {
    title: "Backend Developer",
    company: "PixelSaffron",
    period: "Oct 2024 – Dec 2024",
    points: [
      "Crafted a scalable backend for a clothing brand using MongoDB, Express, and Node.js.",
      "Incorporated PhonePe payments with webhook-based real-time order updates.",
      "Formulated database schema with wallet management and coupon system for smooth transactions.",
      "Secured platform with JWT-based authentication and authorization to enhance security.",
    ],
  },
];

const projects = [
  {
    title: "Elevare - AI-Powered Email Management System",
    url: "elevareapp.com",
    description:
      "Built and deployed an AI-powered email management system, reducing email processing time by 40%.",
    points: [
      "Created an analytics system to track email summaries, response generation and user engagement metrics.",
      "Integrated RazorPay for seamless payment processing and subscription management.",
      "Established email APIs for seamless retrieval and processing of email threads.",
      "Utilized LLM (Groq) to generate AI-powered summaries and context-aware responses.",
      "Deployed to the cloud with a CI/CD pipeline using GitHub Actions, ensuring automated deployments.",
    ],
    tech: ["Next.js", "TypeScript", "Prisma", "MongoDB", "Groq API", "Node.js"],
  },
  {
    title: "Matchup - A tournament management system",
    url: "github.com/KaranMali2001/Matchup",
    description:
      "Orchestrated a comprehensive tournament management system that streamlines the entire tournament lifecycle from player registrations to result tracking.",
    points: [
      "Programmed Go routines for high concurrency support, enabling the platform to handle multiple simultaneous tournaments and user interactions.",
      "Devised an efficient scheduling algorithm that automatically generates optimal match fixtures based on participant numbers and constraints.",
    ],
    tech: ["Go", "PostgreSQL", "Docker", "REST APIs"],
  },
  {
    title: "Microservices Platform (WIP)",
    url: "github.com/KaranMali2001",
    description:
      "Designing a distributed system with independent Go microservices for modular and scalable architecture.",
    points: [
      "Implementing fast, strongly-typed APIs using gRPC and GraphQL; leveraging sqlc for secure DB access.",
      "Containerizing services with Docker Compose to support local orchestration and future deployment pipelines.",
    ],
    tech: ["Go", "gRPC", "GraphQL", "PostgreSQL", "Docker", "sqlc"],
  },
];

const technologies = {
  languages: ["C++", "C", "Go", "TypeScript", "JavaScript", "SQL", "Node.js"],
  technologies: [
    "AWS ECR",
    "AWS ECS",
    "MongoDB",
    "Express",
    "Next.js",
    "Supabase",
    "JWT",
    "Razorpay",
    "PhonePay",
    "Prisma",
    "GitHub Actions",
    "Airflow",
    "PostgreSQL",
    "Docker",
    "REST APIs",
  ],
};

const achievements = [
  "Consistently solved complex Data Structures and Algorithms problems on platforms like LeetCode and GeeksforGeeks.",
  "Semi-finalist in the Vultr Hackathon, where my team built and showcased an innovative AI-powered platform for managing Emails.",
];

const socialLinks = [
  {
    icon: GithubIcon,
    href: "https://github.com/KaranMali2001",
    label: "GitHub",
  },
  {
    icon: Code2Icon,
    href: "https://leetcode.com/u/karanmali122001/",
    label: "Leetcode",
  },
];

function AnimatedSection({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [20, 0, 0, 20]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y }}
      transition={{ duration: 0.5, delay }}
      className="mb-16"
    >
      {children}
    </motion.div>
  );
}

// Collapsible component for mobile experience and project items
function CollapsibleItem({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded-md mb-4">
      <div
        className="p-4 flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-muted-foreground">{subtitle}</p>
        </div>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-muted-foreground" />
        ) : (
          <ChevronDown className="h-5 w-5 text-muted-foreground" />
        )}
      </div>
      {isOpen && <div className="p-4 pt-0 border-t">{children}</div>}
    </div>
  );
}

export default function MinimalistPortfolio({
  colorScheme,
}: MinimalistPortfolioProps) {
  const [activeSection, setActiveSection] = useState<string>("experience");
  const [isMobile, setIsMobile] = useState(false);

  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const sections = ["experience", "projects", "technologies", "achievements"];

  // Style for underlined section headers
  const underlinedHeaderStyle = {
    borderBottom:
      colorScheme === "blue"
        ? "2px solid rgb(59, 130, 246)"
        : colorScheme === "green"
        ? "2px solid rgb(34, 197, 94)"
        : "2px solid rgb(147, 51, 234)",
    paddingBottom: "0.5rem",
    display: "inline-block",
  };

  return (
    <div className="container mx-auto px-6 py-12">
      {/* Header */}
      <header className="container mx-auto mb-16 flex flex-col md:flex-row md:justify-between md:items-center">
        <div className="relative mb-6 md:mb-0">
          <div
            className="absolute -z-10 w-64 h-64 rounded-full blur-3xl opacity-20"
            style={{
              background:
                colorScheme === "blue"
                  ? "radial-gradient(circle, rgba(59,130,246,0.8) 0%, rgba(37,99,235,0) 70%)"
                  : colorScheme === "green"
                  ? "radial-gradient(circle, rgba(34,197,94,0.8) 0%, rgba(22,163,74,0) 70%)"
                  : "radial-gradient(circle, rgba(147,51,234,0.8) 0%, rgba(126,34,206,0) 70%)",
            }}
          />
          <h1 className="text-4xl font-bold">Karan Mali</h1>
          <p className="text-xl text-muted-foreground mb-2">
            Software Engineer specializing in full-stack development
          </p>
          <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
            <span>Maharashtra, India</span>
            <span>•</span>
            <span>karanmali122001@gmail.com</span>
            <span>•</span>
            <span>7507005599</span>
          </div>
        </div>

        <div className="flex gap-4">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Icon className="h-5 w-5" />
              <span className="sr-only">{label}</span>
            </a>
          ))}
        </div>
      </header>

      {/* Mobile Breadcrumb Navigation */}
      {isMobile && (
        <div className="sticky top-0 z-10 bg-background py-3 mb-6 border-b">
          <div className="flex justify-between">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`px-2 py-1 text-sm capitalize ${
                  activeSection === section
                    ? "font-bold border-b-2"
                    : "text-muted-foreground"
                }`}
                style={
                  activeSection === section
                    ? {
                        borderBottomColor:
                          colorScheme === "blue"
                            ? "rgb(59, 130, 246)"
                            : colorScheme === "green"
                            ? "rgb(34, 197, 94)"
                            : "rgb(147, 51, 234)",
                      }
                    : {}
                }
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Experience Section */}
      {(!isMobile || activeSection === "experience") && (
        <AnimatedSection>
          <h2
            className="text-2xl font-semibold mb-6"
            style={underlinedHeaderStyle}
          >
            Experience
          </h2>
          <div className="space-y-8">
            {isMobile
              ? // Mobile collapsible view
                experience.map((job, index) => (
                  <CollapsibleItem
                    key={index}
                    title={job.title}
                    subtitle={`${job.company} • ${job.period}`}
                  >
                    <ul className="list-disc list-inside space-y-2">
                      {job.points.map((point, i) => (
                        <li key={i} className="text-muted-foreground">
                          {point}
                        </li>
                      ))}
                    </ul>
                  </CollapsibleItem>
                ))
              : // Desktop view
                experience.map((job, index) => (
                  <Card
                    key={index}
                    className="p-6 transition-all duration-300 hover:shadow-lg border-l-4"
                    style={{
                      borderLeftColor:
                        colorScheme === "blue"
                          ? "rgb(59, 130, 246)"
                          : colorScheme === "green"
                          ? "rgb(34, 197, 94)"
                          : "rgb(147, 51, 234)",
                    }}
                  >
                    <h3 className="text-xl font-semibold">{job.title}</h3>
                    <p className="text-muted-foreground mb-4">
                      {job.company} • {job.period}
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                      {job.points.map((point, i) => (
                        <li key={i} className="text-muted-foreground">
                          {point}
                        </li>
                      ))}
                    </ul>
                  </Card>
                ))}
          </div>
        </AnimatedSection>
      )}

      {/* Projects Section */}
      {(!isMobile || activeSection === "projects") && (
        <AnimatedSection delay={0.2}>
          <h2
            className="text-2xl font-semibold mb-6"
            style={underlinedHeaderStyle}
          >
            Projects
          </h2>
          <div className="space-y-8">
            {isMobile
              ? // Mobile collapsible view
                projects.map((project, index) => (
                  <CollapsibleItem
                    key={index}
                    title={project.title}
                    subtitle={project.url}
                  >
                    <p className="text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    <ul className="list-disc list-inside space-y-2 mb-4">
                      {project.points.map((point, i) => (
                        <li key={i} className="text-muted-foreground">
                          {point}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <Badge
                          key={i}
                          variant="secondary"
                          style={{
                            backgroundColor:
                              colorScheme === "blue"
                                ? "rgba(59, 130, 246, 0.1)"
                                : colorScheme === "green"
                                ? "rgba(34, 197, 94, 0.1)"
                                : "rgba(147, 51, 234, 0.1)",
                            borderColor:
                              colorScheme === "blue"
                                ? "rgba(59, 130, 246, 0.2)"
                                : colorScheme === "green"
                                ? "rgba(34, 197, 94, 0.2)"
                                : "rgba(147, 51, 234, 0.2)",
                          }}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CollapsibleItem>
                ))
              : // Desktop view
                projects.map((project, index) => (
                  <Card
                    key={index}
                    className="p-6 transition-all duration-300 hover:shadow-lg border-l-4"
                    style={{
                      borderLeftColor:
                        colorScheme === "blue"
                          ? "rgb(59, 130, 246)"
                          : colorScheme === "green"
                          ? "rgb(34, 197, 94)"
                          : "rgb(147, 51, 234)",
                    }}
                  >
                    <h3 className="text-xl font-semibold mb-2">
                      {project.title}
                      <a
                        href={`https://${project.url}`}
                        className="text-sm ml-2 transition-colors"
                        style={{
                          color:
                            colorScheme === "blue"
                              ? "rgb(59, 130, 246)"
                              : colorScheme === "green"
                              ? "rgb(34, 197, 94)"
                              : "rgb(147, 51, 234)",
                        }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {project.url}
                      </a>
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    <ul className="list-disc list-inside space-y-2 mb-4">
                      {project.points.map((point, i) => (
                        <li key={i} className="text-muted-foreground">
                          {point}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <Badge
                          key={i}
                          variant="secondary"
                          style={{
                            backgroundColor:
                              colorScheme === "blue"
                                ? "rgba(59, 130, 246, 0.1)"
                                : colorScheme === "green"
                                ? "rgba(34, 197, 94, 0.1)"
                                : "rgba(147, 51, 234, 0.1)",
                            borderColor:
                              colorScheme === "blue"
                                ? "rgba(59, 130, 246, 0.2)"
                                : colorScheme === "green"
                                ? "rgba(34, 197, 94, 0.2)"
                                : "rgba(147, 51, 234, 0.2)",
                          }}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                ))}
          </div>
        </AnimatedSection>
      )}

      {/* Technologies Section */}
      {(!isMobile || activeSection === "technologies") && (
        <AnimatedSection delay={0.4}>
          <h2
            className="text-2xl font-semibold mb-6"
            style={underlinedHeaderStyle}
          >
            Technologies
          </h2>
          <Card className="p-6 transition-all duration-300 hover:shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium mb-3">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {technologies.languages.map((lang, i) => (
                    <Badge
                      key={i}
                      variant="outline"
                      style={{
                        borderColor:
                          colorScheme === "blue"
                            ? "rgba(59, 130, 246, 0.5)"
                            : colorScheme === "green"
                            ? "rgba(34, 197, 94, 0.5)"
                            : "rgba(147, 51, 234, 0.5)",
                      }}
                    >
                      {lang}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-3">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {technologies.technologies.map((tech, i) => (
                    <Badge
                      key={i}
                      variant="outline"
                      style={{
                        borderColor:
                          colorScheme === "blue"
                            ? "rgba(59, 130, 246, 0.5)"
                            : colorScheme === "green"
                            ? "rgba(34, 197, 94, 0.5)"
                            : "rgba(147, 51, 234, 0.5)",
                      }}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </AnimatedSection>
      )}

      {/* Achievements Section */}
      {(!isMobile || activeSection === "achievements") && (
        <AnimatedSection delay={0.6}>
          <h2
            className="text-2xl font-semibold mb-6"
            style={underlinedHeaderStyle}
          >
            Achievements
          </h2>
          <Card
            className="p-6 transition-all duration-300 hover:shadow-lg border-l-4"
            style={{
              borderLeftColor:
                colorScheme === "blue"
                  ? "rgb(59, 130, 246)"
                  : colorScheme === "green"
                  ? "rgb(34, 197, 94)"
                  : "rgb(147, 51, 234)",
            }}
          >
            <ul className="list-disc list-inside space-y-2">
              {achievements.map((achievement, i) => (
                <li key={i} className="text-muted-foreground">
                  {achievement}
                </li>
              ))}
            </ul>
          </Card>
        </AnimatedSection>
      )}
    </div>
  );
}

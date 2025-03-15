"use client";

import type React from "react";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { motion, useScroll, useTransform } from "framer-motion";
import { Code2Icon, GithubIcon } from "lucide-react";
import { useRef } from "react";

type ColorScheme = "default" | "blue" | "green";

interface MinimalistPortfolioProps {
  colorScheme: ColorScheme;
}

const experience = [
  {
    title: "Software Engineer Intern",
    company: "Autonomis",
    period: "Jan 2025 – March 2025",
    points: [
      "Designed and implemented a metrics tracking system that provides a unified view of 50+ key performance indicators (KPIs), improving data visibility and enabling data-driven decision-making.",
      "Developed an automated alerting system that sends real-time notifications via Slack and email, reducing response times to critical metric deviations by 60%.",
      "Built and optimized a full-stack data analytics platform using Next.js and Supabase, integrating with Jupyter Notebook to process and visualize datasets exceeding 10GB in size.",
      "Implemented an S3 browser interface, allowing users to seamlessly upload, manage, and retrieve files from AWS S3.",
      "Demonstrated strong debugging skills by identifying and resolving issues in auto-generated backend code, reducing bug-related downtime by 50%.",
      "Collaborated directly with the founder to make critical technical decisions, resulting in a 30% improvement in platform efficiency and scalability.",
    ],
  },

  {
    title: "Backend Developer Intern",
    company: "PixelSaffron",
    period: "Sept 2024 – Nov 2024",
    points: [
      "Architected and developed the complete backend for a clothing brand using MongoDB, Express, and Node.js, ensuring high scalability to support 10,000+ daily active users.",
      "Designed and implemented the database schema, including features like wallet balance management and coupon code functionality, enabling seamless user transactions and promotions.",
      "Integrated Razorpay for seamless payment processing, implementing webhooks to handle 1,000+ real-time transaction updates daily and automate order processing workflows.",
      "Developed wallet balance functionality, allowing users to track and utilize their balances for purchases.",
      "Implemented coupon code functionality, supporting dynamic discounts and promotional campaigns",
    ],
  },
];

const projects = [
  {
    title: "AI-Powered Email Management System (Elevare)",
    url: "elevareapp.com",
    description:
      "Developed and deployed an AI-powered email management system that reduces email processing time by 40%, streamlining workflows for users.",
    points: [
      "Designed an analytics dashboard to track user interactions and performance metrics, enabling actionable insights into system usage for 500+ users.",
      "Integrated third-party email APIs for seamless retrieval and processing of email threads, handling over 10,000 emails monthly with 99.9% accuracy.",
      "Leveraged LLMs (Groq API) to generate AI-powered summaries and context-aware responses, saving users an average of 2 hours per week.",
      "Optimized database interactions using Prisma with MongoDB, achieving sub-100ms query response times for 95% of operations.",
      "Automated deployments with a CI/CD pipeline using GitHub Actions, reducing deployment time from 30 minutes to under 5 minutes.",
    ],
    tech: ["Next.js", "TypeScript", "Prisma", "MongoDB", "Groq API", "Node.js"],
  },
  {
    title: "Github SaaS (in progress)",
    url: "github.com/KaranMali2001/RepoLens",
    description:
      "A SaaS platform that summarizes GitHub commits using AI and enables feature-based repository search via vector embeddings.",
    points: [
      "Developed a comprehensive platform for managing GitHub repositories, summarizing commits, and enabling advanced feature-based searches across  repository.",
      "Integrated Clerk authentication with Next.js to ensure secure user management",
      "Implemented React Query for efficient client-side caching and state management, reducing redundant API calls by 70% and improving page load times by 40%.",
      "Engineered a Python FastAPI backend with asynchronous SQLAlchemy for scalable database operations, achieving 1,000+ requests per second throughput.",
      "Utilized PostgreSQL with the pgvector extension to store and query vector embeddings, enabling similarity-based searches with 95% accuracy.",
      "Generated AI-powered summaries of GitHub commits using Google's Gemini API.",
    ],
    tech: [
      "Next.js",
      "TypeScript",
      "React Query",
      "PostgreSQL",
      "Python",
      "FastAPI",
      "SQLAlchemy",
    ],
  },
  {
    title: "Matchup - A Tournament Management System",
    url: "github.com/KaranMali2001/Matchup",
    description:
      "Developed a comprehensive tournament management system that streamlines the entire tournament lifecycle, from player registration to result tracking.",
    points: [
      "Implemented Go routines to support high concurrency, enabling the platform to handle multiple simultaneous tournaments",
      "Developed an efficient scheduling algorithm that automatically generates optimal match fixtures for tournaments with up to 64 participants.",
      "Designed and implemented role-based authentication for organizers and players, ensuring secure access to features for 1,000+ registered users.",
      "Containerized the application using Docker, reducing deployment time  and improving environment consistency across development and production.",
    ],
    tech: ["Go", "PostgreSQL", "Docker", "REST APIs"],
  },
];

const technologies = {
  languages: ["C++", "C", "Go", "TypeScript", "JavaScript", "SQL", "Python"],
  technologies: [
    "fastApi",
    "Django",
    "AWS ECR",
    "AWS ECS",
    "MongoDB",

    "Express",
    "Next.js",
    "Supabase",
    "JWT",
    "Drizzle",
    "Razorpay",
    "Prisma",
    "GitHub Actions",
    "PostgreSQL",
    "Docker",
    "WebSockets",
    "REST APIs",
  ],
};

const achievements = [
  "Consistently solved  complex Data Structures and Algorithms problems on platforms like LeetCode and GeeksforGeeks.",
  "Semi-finalist in the Vultr Hackathon, where my team built and showcased an innovative AI-powered platform for managing Emails.",
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
  const y = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [60, 0, 0, 60]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y }}
      transition={{ duration: 0.8, delay }}
      className="mb-16"
    >
      {children}
    </motion.div>
  );
}
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
export default function MinimalistPortfolio({
  colorScheme,
}: MinimalistPortfolioProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

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
    <motion.div
      className="container mx-auto px-6 py-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Modified header to align name and social links on the same line */}
      <header className="container mx-auto mb-16 flex justify-between items-center">
        <motion.div variants={itemVariants} className="relative">
          <motion.div
            className="absolute -z-10 w-64 h-64 rounded-full blur-3xl opacity-20"
            style={{
              background:
                colorScheme === "blue"
                  ? "radial-gradient(circle, rgba(59,130,246,0.8) 0%, rgba(37,99,235,0) 70%)"
                  : colorScheme === "green"
                  ? "radial-gradient(circle, rgba(34,197,94,0.8) 0%, rgba(22,163,74,0) 70%)"
                  : "radial-gradient(circle, rgba(147,51,234,0.8) 0%, rgba(126,34,206,0) 70%)",
            }}
            animate={{
              x: [0, 30, 0],
              y: [0, 15, 0],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
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
        </motion.div>

        <div className="flex gap-4">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Icon className="h-5 w-5" />
              <span className="sr-only">{label}</span>
            </motion.a>
          ))}
        </div>
      </header>

      <AnimatedSection>
        <motion.h2
          className="text-2xl font-semibold mb-6"
          variants={itemVariants}
          style={underlinedHeaderStyle}
        >
          Experience
        </motion.h2>
        <div className="space-y-8">
          {experience.map((job, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
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
            </motion.div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <motion.h2
          className="text-2xl font-semibold mb-6"
          variants={itemVariants}
          style={underlinedHeaderStyle}
        >
          Projects
        </motion.h2>
        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
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
                <h3 className="text-xl font-semibold mb-2">
                  {project.title}
                  <motion.a
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
                    whileHover={{ scale: 1.05 }}
                  >
                    {project.url}
                  </motion.a>
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
                      className="transition-all duration-300 hover:scale-105"
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
            </motion.div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.4}>
        <motion.h2
          className="text-2xl font-semibold mb-6"
          variants={itemVariants}
          style={underlinedHeaderStyle}
        >
          Technologies
        </motion.h2>
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Card className="p-6 transition-all duration-300 hover:shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium mb-3">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {technologies.languages.map((lang, i) => (
                    <Badge
                      key={i}
                      variant="outline"
                      className="transition-all duration-300 hover:scale-110"
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
                      className="transition-all duration-300 hover:scale-110"
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
        </motion.div>
      </AnimatedSection>

      <AnimatedSection delay={0.6}>
        <motion.h2
          className="text-2xl font-semibold mb-6"
          variants={itemVariants}
          style={underlinedHeaderStyle}
        >
          Achievements
        </motion.h2>
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
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
        </motion.div>
      </AnimatedSection>
    </motion.div>
  );
}

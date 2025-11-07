"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  BookOpen,
  Brain,
  Briefcase,
  Building,
  Calendar,
  ChevronDown,
  Clock,
  Code,
  ExternalLink,
  Gavel,
  Github,
  GraduationCap,
  Mail,
  MapPin,
  Menu,
  Server,
  Target,
  TrendingUp,
  Trophy,
  User,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FAQChapter } from "./faq-section";

export function StoryLayout() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeChapter, setActiveChapter] = useState(0);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      // Update active chapter based on scroll position
      const chapters = ["intro", "philosophy", "journey", "experience", "projects", "blog", "skills", "contact"];
      const currentChapter = chapters.findIndex((chapter) => {
        const element = document.getElementById(chapter);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 200;
        }
        return false;
      });

      if (currentChapter !== -1) {
        setActiveChapter(currentChapter);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToChapter = (chapterId: string) => {
    document.getElementById(chapterId)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileNavOpen(false);
  };

  const chapters = [
    { id: "intro", title: "Introduction", icon: User },
    { id: "philosophy", title: "Philosophy", icon: Brain },
    { id: "journey", title: "Journey", icon: GraduationCap },
    { id: "experience", title: "Experience", icon: Building },
    { id: "projects", title: "Projects", icon: Briefcase },
    { id: "blog", title: "Blog", icon: BookOpen },
    { id: "skills", title: "Skills", icon: Code },
    { id: "contact", title: "Contact", icon: Mail },
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <div className="min-h-screen theme-bg-primary">
        {/* Clean Scroll Progress */}
        <div className="scroll-progress">
          <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }} />
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
          className="fixed top-4 right-4 z-50 md:hidden w-12 h-12 rounded-full theme-bg-card flex items-center justify-center theme-text-accent"
        >
          {isMobileNavOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {/* Mobile Chapter Navigation Overlay */}
        {isMobileNavOpen && (
          <div className="fixed inset-0 z-40 md:hidden">
            <div className="absolute inset-0 theme-bg-primary opacity-95" onClick={() => setIsMobileNavOpen(false)} />
            <div className="absolute top-20 right-4 left-4 theme-bg-card rounded-lg p-6">
              <h3 className="text-lg font-semibold theme-text-primary mb-4">Navigate to</h3>
              <div className="grid grid-cols-2 gap-3">
                {chapters.map((chapter, index) => {
                  const Icon = chapter.icon;
                  return (
                    <button
                      key={chapter.id}
                      onClick={() => scrollToChapter(chapter.id)}
                      className={`flex items-center gap-3 p-3 rounded-lg transition-all ${
                        activeChapter === index ? "theme-accent theme-text-primary" : "theme-bg-secondary theme-text-muted hover:theme-text-accent"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="text-sm font-medium">{chapter.title}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Desktop Chapter Navigation */}
        <div className="chapter-nav hidden md:block">
          <div className="space-y-3">
            {chapters.map((chapter, index) => {
              const Icon = chapter.icon;
              return (
                <button
                  key={chapter.id}
                  onClick={() => scrollToChapter(chapter.id)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                    activeChapter === index ? "theme-accent" : "theme-bg-card theme-text-muted hover:theme-text-accent"
                  }`}
                  title={chapter.title}
                >
                  <Icon className="w-4 h-4" />
                </button>
              );
            })}
          </div>
        </div>

        {/* Story Content */}
        <div>
          <IntroChapter />
          <PhilosophyChapter />
          <JourneyChapter />
          <ExperienceChapter />
          <ProjectsChapter />
          <BlogChapter />
          <SkillsChapter />
          <FAQChapter />
          <ContactChapter />
        </div>
      </div>
    </motion.div>
  );
}

function IntroChapter() {
  const scrollToNext = () => {
    document.getElementById("philosophy")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="intro" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center animate-slide-in-bottom">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 relative">
            <Image
              src="/avatar.jpg"
              width={128}
              height={128}
              alt="Karan Mali - Backend Developer Profile Picture"
              className="w-full h-full rounded-full object-cover border-4 border-orange-500/20 shadow-xl"
            />
          </div>

          <Badge variant="outline" className="theme-text-muted border-gray-600 mb-4">
            <MapPin className="w-3 h-3 mr-1" aria-hidden="true" />
            Remote Ready • India
          </Badge>

          <h1 className="text-4xl md:text-6xl font-bold theme-text-primary mb-4">Karan Mali - Backend & Full-Stack Developer</h1>

          <h2 className="text-xl md:text-2xl theme-text-secondary mb-6">Backend Systems Engineer | Node.js, Go, AWS Expert</h2>

          <p className="text-lg theme-text-muted mb-8 max-w-2xl mx-auto leading-relaxed">
            Building powerful, scalable backend systems with multi-tenant architectures, RBAC implementations, and high-performance APIs using Node.js, Golang, PostgreSQL, and AWS.
          </p>
        </div>

        {/* Clean Stats */}
        <div className="grid grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="text-2xl font-bold theme-text-accent mb-2">1+</div>
            <div className="text-sm theme-text-muted">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold theme-text-accent mb-2">50%</div>
            <div className="text-sm theme-text-muted">Bug Reduction</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold theme-text-accent mb-2">5+</div>
            <div className="text-sm theme-text-muted">Major Projects</div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button variant="outline" className="theme-accent theme-text-secondary bg-transparent" asChild>
            <Link href="https://github.com/KaranMali2001" target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" aria-hidden="true" />
              View GitHub
            </Link>
          </Button>
          <Button variant="outline" className="theme-border theme-text-secondary bg-transparent">
            <Link href={"https://drive.google.com/file/d/1e--IHnIG5xLTQxUPzc9zN7kh_iJuzUbG/view?usp=sharing"} target="_blank" rel="noopener noreferrer">
              Resume
            </Link>
          </Button>
        </div>

        <button onClick={scrollToNext} className="theme-text-muted hover:theme-text-accent transition-colors" aria-label="Scroll to next section">
          <ChevronDown className="w-6 h-6 animate-bounce mx-auto" aria-hidden="true" />
          <p className="text-sm mt-2">Discover my story</p>
        </button>
      </div>
    </section>
  );
}

function PhilosophyChapter() {
  return (
    <section id="philosophy" className="py-20 px-4" aria-labelledby="philosophy-heading">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-stagger">
          <h2 id="philosophy-heading" className="text-3xl font-bold theme-text-primary mb-4">
            Backend Development Philosophy: First Principles Thinking
          </h2>
          <p className="text-lg theme-text-muted">How I approach complex backend engineering problems</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-stagger">
            <Card className="theme-bg-card p-8 animate-fade-in-up">
              <Brain className="w-10 h-10 theme-text-accent mb-6" />
              <h3 className="text-xl font-bold theme-text-primary mb-4">80% Thinking, 20% Coding</h3>
              <p className="theme-text-secondary leading-relaxed mb-4">
                I believe backend development is fundamentally about problem-solving. Before writing a single line of code, I spend time understanding the problem from first principles.
              </p>
              <p className="theme-text-muted leading-relaxed">This approach has helped me build systems that not only work but scale efficiently and remain maintainable as requirements evolve.</p>
            </Card>
          </div>

          <div className="space-y-6 animate-fade-in-stagger">
            <Card className="theme-bg-card p-6 animate-fade-in-up">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg theme-bg-secondary flex items-center justify-center">
                  <span className="text-sm font-bold theme-text-accent">1</span>
                </div>
                <h4 className="font-semibold theme-text-primary">Understand the Problem</h4>
              </div>
              <p className="text-sm theme-text-muted">Break down complex requirements into fundamental components</p>
            </Card>

            <Card className="theme-bg-card p-6 animate-fade-in-up">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg theme-bg-secondary flex items-center justify-center">
                  <span className="text-sm font-bold theme-text-accent">2</span>
                </div>
                <h4 className="font-semibold theme-text-primary">Design for Scale</h4>
              </div>
              <p className="text-sm theme-text-muted">Consider how the system will behave with 10x, 100x more load</p>
            </Card>

            <Card className="theme-bg-card p-6 animate-fade-in-up">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg theme-bg-secondary flex items-center justify-center">
                  <span className="text-sm font-bold theme-text-accent">3</span>
                </div>
                <h4 className="font-semibold theme-text-primary">Implement Simply</h4>
              </div>
              <p className="text-sm theme-text-muted">Choose the simplest solution that meets all requirements</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

function JourneyChapter() {
  const milestones = [
    {
      year: "2020",
      title: "Started Engineering",
      description: "Began Bachelor of Engineering at DY Patil College, Kolhapur",
      icon: <GraduationCap className="w-5 h-5" />,
    },
    {
      year: "2024",
      title: "First Professional Role",
      description: "Joined PixelSaffron as Backend Developer, built scalable e-commerce systems",
      icon: <Building className="w-5 h-5" />,
    },
    {
      year: "Late 2024",
      title: "Software Engineer",
      description: "Joined Autonomis, focused on Problem-Solving and User Experience",
      icon: <Code className="w-5 h-5" />,
    },
    {
      year: "Now",
      title: "Seeking Backend Engineer Roles",
      description: "Ready for Backend Engineer positions at innovative startups",
      icon: <Target className="w-5 h-5" />,
    },
  ];

  return (
    <section id="journey" className="py-20 px-4" aria-labelledby="journey-heading">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-stagger">
          <h2 id="journey-heading" className="text-3xl font-bold theme-text-primary mb-4">
            My Software Engineering Journey: From Student to Backend Developer
          </h2>
          <p className="text-lg theme-text-muted">Career progression in backend development and full-stack engineering</p>
        </div>

        <div className="space-y-12">
          {milestones.map((milestone, index) => (
            <div key={index} className="flex gap-8 items-start animate-fade-in-stagger">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg theme-bg-card flex items-center justify-center">
                  <div className="theme-text-accent">{milestone.icon}</div>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-2">
                  <Badge variant="outline" className="theme-text-muted border-gray-600 font-mono">
                    {milestone.year}
                  </Badge>
                  <h3 className="text-lg font-semibold theme-text-primary">{milestone.title}</h3>
                </div>
                <p className="theme-text-muted leading-relaxed">{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceChapter() {
  const experiences = [
    {
      title: "Backend Developer",
      company: "Ajar",
      period: "Nov 2025 – Present",
      location: "Remote",
      highlights: [
        "Building scalable backend services for Ajar's core platform",
        "Implementing high-performance APIs and microservices",
        "Optimizing database queries and system architecture for better performance",
        "Collaborating with cross-functional teams to deliver robust backend solutions"
      ],
      skills: ["Node.js", "TypeScript", "PostgreSQL", "AWS", "Microservices"],
      impact: "Building scalable infrastructure",
    },
    {
      title: "Software Developer",
      company: "Autonomis",
      period: "Dec 2024 – Oct 2025",
      location: "Remote",
      highlights: [
        "Built RBAC sharing system with fine-grained view/edit permissions",
        "Designed multi-tenant architecture with invite system and role management",
        "Established MIS report dashboards with customizable views automating report delivery through Airflow",
        "Reduced bug-related downtime by 50% by troubleshooting and resolving issues in AI-generated backend code",
      ],
      skills: ["RBAC", "Multi-tenancy", "Airflow", "React Query", "Zustand"],
      impact: "50% less downtime",
    },
    {
      title: "Backend Developer",
      company: "PixelSaffron",
      period: " Oct 2024 – Dec 2024",
      location: "Remote",
      highlights: [
        "Built backend for clothing brand with MongoDB, Express, Node.js",
        "Integrated PhonePe with webhook-based real-time order updates",
        "Created wallet + coupon system with RazorPay + PhonePe payment flows",
        "Optimized analytics via indexing + database views",
      ],
      skills: ["Node.js", "MongoDB", "PhonePe", "RazorPay", "JWT"],
      impact: "Real-time payments",
    },
  ];

  return (
    <section id="experience" className="py-20 px-4" aria-labelledby="experience-heading">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-stagger">
          <h2 id="experience-heading" className="text-3xl font-bold theme-text-primary mb-4">
            Professional Experience: Backend & Full-Stack Development
          </h2>
          <p className="text-lg theme-text-muted">Building scalable systems and delivering measurable impact</p>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <Card key={index} className="theme-bg-card p-8 animate-fade-in-stagger animate-fade-in-up">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-lg theme-bg-secondary flex items-center justify-center">
                    <Building className="w-8 h-8 theme-text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold theme-text-primary">{exp.title}</h3>
                    <p className="text-lg theme-text-secondary font-semibold">{exp.company}</p>
                    <div className="flex items-center gap-4 mt-2 text-sm theme-text-muted">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </span>
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                <Badge className="theme-accent-subtle">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  {exp.impact}
                </Badge>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <h4 className="font-semibold theme-text-primary mb-4">Key Achievements</h4>
                  <ul className="space-y-3">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="theme-text-muted flex items-start gap-3">
                        <span className="theme-text-accent font-bold mt-1 flex-shrink-0">•</span>
                        <span className="leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold theme-text-primary mb-4">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs theme-text-muted border-gray-600">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectsChapter() {
  const projects = [
    {
      title: "Auto-Blog - AI-Powered Content Creation",
      description: "Automated blog generation using AI to create and publish content",
      impact: "Streamlined content creation process",
      icon: <BookOpen className="w-6 h-6" />,
      problem: "Content creators needed an efficient way to generate high-quality blog posts quickly without sacrificing quality.",
      solution: "Developed an AI-powered platform that generates, formats, and publishes blog content automatically, with customizable templates and SEO optimization.",
      tech: ["Next.js", "TypeScript", "OpenAI API", "MongoDB", "Tailwind CSS"],
      liveUrl: "https://auto-blog-opal.vercel.app/",
      githubUrl: "https://github.com/KaranMali2001/auto-blog",
    },
    {
      title: "Finance Tracker - Personal Finance Management",
      description: "Comprehensive finance tracking app with analytics and insights",
      impact: "Smart financial management with real-time analytics",
      icon: <TrendingUp className="w-6 h-6" />,
      problem: "Users needed a simple yet powerful way to track expenses, income, and analyze spending patterns.",
      solution: "Built a full-featured finance tracker with SMS parsing, category-based analytics, real-time dashboards, and automated transaction categorization.",
      tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Recharts", "Tailwind CSS"],
      githubUrl: "https://github.com/KaranMali2001",
    },
    {
      title: "Mini Ride Booking",
      description: "A lightweight ride-hailing service with real-time tracking",
      impact: "Efficient ride matching and tracking",
      icon: <MapPin className="w-6 h-6" />,
      problem: "Existing ride-hailing solutions were too complex for small-scale operations and local businesses.",
      solution: "Created a simplified ride-booking platform with real-time location tracking, fare calculation, and driver-passenger matching algorithms.",
      tech: ["React Native", "Node.js", "MongoDB", "Socket.io", "Google Maps API"],
      githubUrl: "https://github.com/KaranMali2001/Mini-Ride-Booking",
    },
    {
      title: "Elevare - AI Email Management",
      description: "Full-stack AI-powered email manager with custom queue management",
      impact: "40% faster processing",
      icon: <Brain className="w-6 h-6" />,
      problem: "Email management was inefficient with existing tools, requiring a custom solution that could handle high volumes with AI-powered insights.",
      solution: "Built a complete email management system with custom queue implementation, AI summarization, and real-time analytics.",
      tech: ["Next.js", "TypeScript", "Prisma", "Groq", "RazorPay"],
      liveUrl: "https://elevareapp.com",
      githubUrl: "https://github.com/KaranMali2001",
    },

    {
      title: "Enhanced Dimaag - AI Content Sharing",
      description: "AI-powered YouTube summarization & content sharing app",
      impact: "Improved content digestion using Gemini + LangChain",
      icon: <BookOpen className="w-6 h-6" />,
      problem: "Users needed a way to summarize and share long videos efficiently.",
      solution: "Used LangChain and Gemini to summarize YouTube videos and implemented permission-based sharing with Clerk.",
      tech: ["React", "PostgreSQL", "Drizzle ORM", "LangChain", "Clerk"],
      liveUrl: "https://enhanced-dimaag.vercel.app/",
      githubUrl: "https://github.com/KaranMali2001/enhancedDimaag",
    },
    {
      title: "Microservices Platform (WIP)",
      description: "Distributed Go microservices with gRPC and GraphQL",
      impact: "Scalable architecture for modular backend services",
      icon: <Server className="w-6 h-6" />,
      problem: "Monolithic backends lacked modularity and scalability.",
      solution: "Building a distributed backend with microservices using gRPC & GraphQL, orchestrated via Docker Compose.",
      tech: ["Go", "gRPC", "GraphQL", "PostgreSQL", "Docker", "sqlc"],
      githubUrl: "https://github.com/KaranMali2001/Golang-micro-services",
    },
    {
      title: "Bidding Management System",
      description: "Role-based bidding app with Cloudinary integration",
      impact: "Efficient file uploads and build optimization",
      icon: <Gavel className="w-6 h-6" />,
      problem: "Needed a platform where sellers and bidders could interact seamlessly.",
      solution: "Created a role-based system for bid management with file uploads and optimized frontend using esbuild.",
      tech: ["Express", "Next.js", "React Query", "Cloudinary", "Prisma"],
      liveUrl: "https://bidding-management-system.vercel.app/",
      githubUrl: "https://github.com/KaranMali2001/bidding-management-system",
    },
    {
      title: "Matchup - Tournament System",
      description: "High-concurrency tournament management with Go routines",
      impact: "1000+ concurrent users",
      icon: <Trophy className="w-6 h-6" />,
      problem: "Tournament management systems often struggle with concurrent user loads and complex scheduling algorithms.",
      solution: "Built a robust tournament platform leveraging Go's concurrency features for optimal performance.",
      tech: ["Go", "PostgreSQL", "Docker", "REST APIs"],
      githubUrl: "https://github.com/KaranMali2001/matchup",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4" aria-labelledby="projects-heading">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-stagger">
          <h2 id="projects-heading" className="text-3xl font-bold theme-text-primary mb-4">
            Backend & Full-Stack Projects Portfolio
          </h2>
          <p className="text-lg theme-text-muted">Production-ready applications showcasing Node.js, Go, and system design expertise</p>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <Card key={index} className="theme-bg-card p-8 animate-fade-in-stagger animate-fade-in-up">
              <div className="grid lg:grid-cols-2 gap-8 items-start">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-lg theme-bg-secondary flex items-center justify-center">
                      <div className="theme-text-accent">{project.icon}</div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold theme-text-primary">{project.title}</h3>
                      <Badge className="theme-accent-subtle mt-2">{project.impact}</Badge>
                    </div>
                  </div>

                  <p className="theme-text-muted mb-6 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs theme-text-muted border-gray-600">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    {project.liveUrl && (
                      <Button className="theme-accent" asChild>
                        <Link href={project.liveUrl} target="_blank">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Live
                        </Link>
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button variant="outline" className="theme-border theme-text-secondary bg-transparent" asChild>
                        <Link href={project.githubUrl} target="_blank">
                          <Github className="w-4 h-4 mr-2" />
                          Source Code
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold theme-text-primary mb-3">Problem</h4>
                    <p className="text-sm theme-text-muted leading-relaxed">{project.problem}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold theme-text-secondary mb-3">Solution</h4>
                    <p className="text-sm theme-text-muted leading-relaxed">{project.solution}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function BlogChapter() {
  const blogPosts = [
    {
      title: "The ORM Trap That Cost Me a Backend Job",
      description: "I’ve been searching for backend-related jobs for almost a month, and I finally got one opportunity — but I messed it up. Here’s my story:",
      publishedDate: "July 2025",
      readTime: "7 min read",
      tags: ["Backend", "ORM", "Performance", "Database"],
      url: "https://medium.com/@karanmali122001/the-orm-trap-that-cost-me-a-backend-job-042c710d5163",
      excerpt:
        "I cleared the first round, which I didn’t expect because I was asked to write a CREATE TABLE syntax, and I wasn’t very confident with it. I thought that would get me rejected, but surprisingly, I was ....",
      featured: true,
      category: "Career Reflection",
      difficulty: "Beginner",
      impactNote: "This post gained significant traction in the backend development community, sparking discussions about ORM usage patterns and database optimization strategies.",
    },
    {
      title: "SQL Secrets for Backend Developers",
      description: "Lessons learned while scaling complex backend systems, focusing on real-world SQL challenges and performance pitfalls.",
      publishedDate: "Coming Soon",
      readTime: "12 min read",
      tags: ["SQL", "Backend", "Performance", "Database"],
      excerpt:
        "If you’re using SQL in your backend, you’re likely making subtle mistakes that affect performance or reliability. This post covers what I wish I knew earlier — from query planning to schema design.",
      upcoming: true,
      category: "Technical Deep Dive",
      difficulty: "Intermediate",
    },
    {
      title: "Concurrency Can Kill Your Performance",
      description:
        "Sorting millions of records? I thought merge sort was fast enough — until I discovered how concurrency in Go could supercharge it — or sabotage it. Here’s how I implemented parallel merge sort and visualized the gains and tradeoffs.",
      publishedDate: "July 2025",
      readTime: "8 min read",
      tags: ["Go", "Concurrency", "Algorithms", "Performance", "Parallelism"],
      excerpt:
        "I always thought merge sort was efficient — until I ran it on 10 million items. Then I asked, “What if I let Go’s goroutines help?” This blog explores how I used concurrency to drastically cut sort times, complete with graphs, GC stats, and lessons.",
      upcoming: true,
      category: "Technical Deep Dive",
      difficulty: "Intermediate",
    },
  ];

  return (
    <section id="blog" className="py-20 px-4" aria-labelledby="blog-heading">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-stagger">
          <h2 id="blog-heading" className="text-3xl font-bold theme-text-primary mb-4">
            Technical Blog: Backend Development Insights
          </h2>
          <p className="text-lg theme-text-muted">Deep dives into Node.js, Go, database optimization, and system design</p>
        </div>

        <div className="space-y-8">
          {blogPosts.map((post, index) => (
            <Card key={index} className={`theme-bg-card p-8 animate-fade-in-stagger animate-fade-in-up ${post.featured ? "ring-2 ring-orange-500/20" : ""}`}>
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg theme-bg-secondary flex items-center justify-center">
                        <BookOpen className="w-5 h-5 theme-text-accent" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold theme-text-primary mb-1">{post.title}</h3>
                        <div className="flex items-center gap-4 text-sm theme-text-muted">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {post.publishedDate}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {post.readTime}
                          </span>
                        </div>
                      </div>
                    </div>
                    {post.featured && <Badge className="theme-accent-subtle">Featured</Badge>}
                    {post.upcoming && (
                      <Badge variant="outline" className="theme-text-muted border-gray-600">
                        Coming Soon
                      </Badge>
                    )}
                  </div>

                  <p className="theme-text-secondary mb-4 leading-relaxed">{post.description}</p>

                  <p className="theme-text-muted text-sm mb-6 leading-relaxed italic">"{post.excerpt}"</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.map((tag, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs theme-text-muted border-gray-600">
                        #{tag}
                      </Badge>
                    ))}
                  </div>

                  {post.url && !post.upcoming && (
                    <Button className="theme-accent" asChild>
                      <Link href={post.url} target="_blank">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Read on Medium
                      </Link>
                    </Button>
                  )}
                </div>

                <div className="lg:col-span-1">
                  <div className="theme-bg-secondary rounded-lg p-6">
                    <h4 className="font-semibold theme-text-primary mb-4">About This Post</h4>

                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="theme-text-muted">Category:</span>
                        <span className="theme-text-secondary">{post.category}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="theme-text-muted">Difficulty:</span>
                        <span className="theme-text-secondary">{post.difficulty}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Card className="theme-bg-card p-8 animate-fade-in-stagger">
            <BookOpen className="w-12 h-12 theme-text-accent mx-auto mb-4" />
            <h3 className="text-xl font-bold theme-text-primary mb-4">More Content Coming Soon</h3>
            <p className="theme-text-muted mb-6 max-w-2xl mx-auto">
              I regularly share insights about backend development, system design, and engineering best practices. Follow me on Medium to stay updated with my latest posts.
            </p>
            <Button variant="outline" className="theme-border theme-text-secondary bg-transparent" asChild>
              <Link href="https://medium.com/@karanmali122001" target="_blank">
                <ExternalLink className="w-4 h-4 mr-2" />
                Follow on Medium
              </Link>
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
}

function SkillsChapter() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Go", "TypeScript", "JavaScript", "SQL"],
      icon: "💻",
    },
    {
      title: "Backend Technologies",
      skills: ["Node.js", "Express", "Prisma", "Drizzle ORM"],
      icon: "⚙️",
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "MongoDB", "Redis"],
      icon: "🗄️",
    },
    {
      title: "System Design",
      skills: ["Multi-tenancy", "RBAC", "Queue Systems", "Microservices"],
      icon: "🏗️",
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS ECS/ECR", "Docker", "GitHub Actions", "Airflow"],
      icon: "☁️",
    },
    {
      title: "Frontend & APIs",
      skills: ["React", "Next.js", "React Query", "REST APIs"],
      icon: "🎨",
    },
  ];

  return (
    <section id="skills" className="py-20 px-4" aria-labelledby="skills-heading">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-stagger">
          <h2 id="skills-heading" className="text-3xl font-bold theme-text-primary mb-4">
            Technical Skills & Expertise: Backend Engineering Stack
          </h2>
          <p className="text-lg theme-text-muted">Proficient in Node.js, Go, TypeScript, PostgreSQL, MongoDB, AWS, and system design</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <Card key={index} className="theme-bg-card p-6 animate-fade-in-stagger animate-fade-in-up">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xl">{category.icon}</span>
                <h3 className="font-semibold theme-text-primary">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <Badge key={idx} variant="outline" className="text-xs theme-text-muted border-gray-600">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <Card className="theme-bg-card p-8 animate-fade-in-stagger animate-fade-in-up">
          <h3 className="text-xl font-bold theme-text-primary mb-6 text-center">Core Specializations</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 rounded-lg theme-bg-secondary mx-auto mb-3 flex items-center justify-center">
                <Brain className="w-6 h-6 theme-text-accent" />
              </div>
              <h4 className="font-semibold theme-text-primary mb-2">First Principles</h4>
              <p className="text-sm theme-text-muted">Breaking down complex problems</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-lg theme-bg-secondary mx-auto mb-3 flex items-center justify-center">
                <Building className="w-6 h-6 theme-text-accent" />
              </div>
              <h4 className="font-semibold theme-text-primary mb-2">System Architecture</h4>
              <p className="text-sm theme-text-muted">Designing scalable systems</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-lg theme-bg-secondary mx-auto mb-3 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 theme-text-accent" />
              </div>
              <h4 className="font-semibold theme-text-primary mb-2">Performance</h4>
              <p className="text-sm theme-text-muted">Optimization and efficiency</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-lg theme-bg-secondary mx-auto mb-3 flex items-center justify-center">
                <Code className="w-6 h-6 theme-text-accent" />
              </div>
              <h4 className="font-semibold theme-text-primary mb-2">Concurrency</h4>
              <p className="text-sm theme-text-muted">Parallel processing patterns</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}

function ContactChapter() {
  return (
    <section id="contact" className="py-20 px-4" aria-labelledby="contact-heading">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-stagger">
          <h2 id="contact-heading" className="text-3xl font-bold theme-text-primary mb-4">
            Hire Backend Developer: Contact Karan Mali
          </h2>
          <p className="text-lg theme-text-muted">Available for backend engineer roles and freelance projects</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="theme-bg-card p-8 animate-fade-in-stagger animate-fade-in-up">
            <h3 className="text-xl font-bold theme-text-primary mb-6">Get In Touch</h3>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg theme-bg-secondary flex items-center justify-center">
                  <Mail className="w-4 h-4 theme-text-accent" />
                </div>
                <div>
                  <p className="font-medium theme-text-primary">Email</p>
                  <Link href="mailto:karanmali122001@gmail.com" className="theme-text-secondary hover:theme-text-accent">
                    karanmali122001@gmail.com
                  </Link>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg theme-bg-secondary flex items-center justify-center">
                  <Github className="w-4 h-4 theme-text-accent" />
                </div>
                <div>
                  <p className="font-medium theme-text-primary">GitHub</p>
                  <Link href="https://github.com/KaranMali2001" target="_blank" className="theme-text-secondary hover:theme-text-accent">
                    github.com/KaranMali2001
                  </Link>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg theme-bg-secondary flex items-center justify-center">
                  <BookOpen className="w-4 h-4 theme-text-accent" />
                </div>
                <div>
                  <p className="font-medium theme-text-primary">Medium Blog</p>
                  <Link href="https://medium.com/@karanmali122001" target="_blank" className="theme-text-secondary hover:theme-text-accent">
                    medium.com/@karanmali122001
                  </Link>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg theme-bg-secondary flex items-center justify-center">
                  <MapPin className="w-4 h-4 theme-text-accent" />
                </div>
                <div>
                  <p className="font-medium theme-text-primary">Location</p>
                  <span className="theme-text-muted">India • Remote Ready</span>
                </div>
              </div>
            </div>

            <div className="flex gap-3 mt-8">
              <Button className="theme-accent flex-1" asChild>
                <Link href="mailto:karanmali122001@gmail.com">
                  <Mail className="w-4 h-4 mr-2" />
                  Email Me
                </Link>
              </Button>
              <Button variant="outline" className="theme-border theme-text-secondary flex-1 bg-transparent" asChild>
                <Link href="https://github.com/KaranMali2001" target="_blank">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Link>
              </Button>
            </div>
          </Card>

          <Card className="theme-bg-card p-8 animate-fade-in-stagger animate-fade-in-up">
            <h3 className="text-xl font-bold theme-text-primary mb-6">Currently Seeking</h3>
            <p className="theme-text-muted mb-6">
              <span className="theme-text-accent font-medium">Backend Engineer</span> roles at innovative startups
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Target className="w-4 h-4 theme-text-accent" />
                <span className="theme-text-muted">Open to all tech roles across the stack</span>
              </div>
              <div className="flex items-center gap-3">
                <Target className="w-4 h-4 theme-text-accent" />
                <span className="theme-text-muted">Curious about challenges across any industry</span>
              </div>
              <div className="flex items-center gap-3">
                <Target className="w-4 h-4 theme-text-accent" />
                <span className="theme-text-muted">Eager to build for scale, reliability & performance</span>
              </div>
              <div className="flex items-center gap-3">
                <Target className="w-4 h-4 theme-text-accent" />
                <span className="theme-text-muted">Excited to join thoughtful, product-driven teams</span>
              </div>
            </div>

            <div className="mt-8 p-6 theme-bg-secondary rounded-lg">
              <h4 className="font-semibold theme-text-primary mb-3">What I Bring</h4>
              <ul className="space-y-2 text-sm theme-text-muted">
                <li>• First-principles problem-solving approach</li>

                <li>• Focus on system performance and reliability</li>
                <li>• Passion for clean, maintainable code</li>
              </ul>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

// Shared portfolio data for all design variants

export const personalInfo = {
  name: "Karan Mali",
  title: "Backend & Full-Stack Developer",
  email: "karanmali122001@gmail.com",
  github: "https://github.com/KaranMali2001",
  githubUsername: "KaranMali2001",
  medium: "https://medium.com/@karanmali122001",
  location: "India",
  remote: true,
  tagline: "Backend Engineer crafting scalable systems with Node.js, Go, and AWS",
  philosophy: "80% Thinking, 20% Coding",
  yearsSince: 2020,
  experience: "2+ Years",
  resumeUrl: "https://drive.google.com/file/d/1wMiTKP6tQb0Ds1YcLRYKRWlnhz0rg2UQ/view?usp=sharing",
};

export const stats = {
  experience: "2+ Years",
  bugReduction: "50%",
  projects: "8+",
  concurrentUsers: "1000+",
};

export const experiences = [
  {
    title: "Full Stack Engineer",
    company: "Ajar Online",
    period: "Nov 2025 – Present",
    location: "Remote",
    highlights: [
      "Designed a centralized Notification Hub (Node.js/TypeScript) integrating Courier API with RBAC-aware fan-out, per-user preference management, and async dispatch via BullMQ job queues",
      "Built the Contracts module end-to-end: PostgreSQL DAO layer, bilingual PDF generation (English + Arabic RTL) using pdfmake-RTL, role-based module locking, and plan limit enforcement",
      "Fixed a data integrity bug in the payment capture flow by wrapping a multi-step DB operation in a PostgreSQL transaction with proper rollback on error",
      "Extended the Advanced Reporting module with payment status/method filters, optimized a slow production SQL query, and fixed Arabic RTL rendering in exported PDFs",
    ],
    skills: ["Node.js", "TypeScript", "Angular", "PostgreSQL", "BullMQ", "Google Cloud", "Firebase", "pdfmake-RTL"],
    impact: "3 full features shipped",
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
    period: "Oct 2024 – Dec 2024",
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

export const projects = [
  {
    title: "Auto-Blog - AI-Powered Content Creation",
    description: "Automated blog generation using AI to create and publish content",
    impact: "Streamlined content creation process",
    problem: "Content creators needed an efficient way to generate high-quality blog posts quickly without sacrificing quality.",
    solution: "Developed an AI-powered platform that generates, formats, and publishes blog content automatically, with customizable templates and SEO optimization.",
    tech: ["Next.js", "TypeScript", "OpenAI API", "MongoDB", "Tailwind CSS"],
    liveUrl: "https://auto-blog-opal.vercel.app/",
    githubUrl: "https://github.com/KaranMali2001/auto-blog",
  },
  {
    title: "Mini Ride Booking",
    description: "A lightweight ride-hailing service with real-time tracking",
    impact: "Efficient ride matching and tracking",
    problem: "Existing ride-hailing solutions were too complex for small-scale operations and local businesses.",
    solution: "Created a simplified ride-booking platform with real-time location tracking, fare calculation, and driver-passenger matching algorithms.",
    tech: ["React Native", "Node.js", "MongoDB", "Socket.io", "Google Maps API"],
    githubUrl: "https://github.com/KaranMali2001/Mini-Ride-Booking",
  },
  {
    title: "Elevare - AI Email Management",
    description: "Full-stack AI-powered email manager with custom queue management",
    impact: "40% faster processing",
    problem: "Email management was inefficient with existing tools, requiring a custom solution that could handle high volumes with AI-powered insights.",
    solution: "Built a complete email management system with custom queue implementation, AI summarization, and real-time analytics.",
    tech: ["Next.js", "TypeScript", "Prisma", "Groq", "RazorPay"],
    liveUrl: "https://elevare-karanmali2001s-projects.vercel.app/",
    githubUrl: "https://github.com/KaranMali2001",
  },
  {
    title: "Enhanced Dimaag - AI Content Sharing",
    description: "AI-powered YouTube summarization & content sharing app",
    impact: "Improved content digestion using Gemini + LangChain",
    problem: "Users needed a way to summarize and share long videos efficiently.",
    solution: "Used LangChain and Gemini to summarize YouTube videos and implemented permission-based sharing with Clerk.",
    tech: ["React", "PostgreSQL", "Drizzle ORM", "LangChain", "Clerk"],
    liveUrl: "https://enhanced-dimaag.vercel.app/",
    githubUrl: "https://github.com/KaranMali2001/enhancedDimaag",
  },
  {
    title: "Bidding Management System",
    description: "Role-based bidding app with Cloudinary integration",
    impact: "Efficient file uploads and build optimization",
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
    problem: "Tournament management systems often struggle with concurrent user loads and complex scheduling algorithms.",
    solution: "Built a robust tournament platform leveraging Go's concurrency features for optimal performance.",
    tech: ["Go", "PostgreSQL", "Docker", "REST APIs"],
    githubUrl: "https://github.com/KaranMali2001/matchup",
  },
  {
    title: "Finance Tracker - Personal Finance Management",
    description: "Comprehensive finance tracking app with analytics and insights",
    impact: "Smart financial management with real-time analytics",
    problem: "Users needed a simple yet powerful way to track expenses, income, and analyze spending patterns.",
    solution: "Built a full-featured finance tracker with SMS parsing, category-based analytics, real-time dashboards, and automated transaction categorization.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Recharts", "Tailwind CSS"],
    githubUrl: "https://github.com/KaranMali2001/finance-tracker-v2",
  },
];

export const blogPosts = [
  {
    title: "The ORM Trap That Cost Me a Backend Job",
    description: "I've been searching for backend-related jobs for almost a month, and I finally got one opportunity — but I messed it up. Here's my story:",
    publishedDate: "July 2025",
    readTime: "7 min read",
    tags: ["Backend", "ORM", "Performance", "Database"],
    url: "https://medium.com/@karanmali122001/the-orm-trap-that-cost-me-a-backend-job-042c710d5163",
    excerpt:
      "I cleared the first round, which I didn't expect because I was asked to write a CREATE TABLE syntax, and I wasn't very confident with it. I thought that would get me rejected, but surprisingly, I was ....",
    featured: true,
    category: "Career Reflection",
    difficulty: "Beginner",
  },
  {
    title: "SQL Secrets for Backend Developers",
    description: "Lessons learned while scaling complex backend systems, focusing on real-world SQL challenges and performance pitfalls.",
    publishedDate: "Coming Soon",
    readTime: "12 min read",
    tags: ["SQL", "Backend", "Performance", "Database"],
    excerpt:
      "If you're using SQL in your backend, you're likely making subtle mistakes that affect performance or reliability. This post covers what I wish I knew earlier — from query planning to schema design.",
    upcoming: true,
    category: "Technical Deep Dive",
    difficulty: "Intermediate",
  },
  {
    title: "Concurrency Can Kill Your Performance",
    description:
      "Sorting millions of records? I thought merge sort was fast enough — until I discovered how concurrency in Go could supercharge it — or sabotage it.",
    publishedDate: "July 2025",
    readTime: "8 min read",
    tags: ["Go", "Concurrency", "Algorithms", "Performance", "Parallelism"],
    excerpt:
      'I always thought merge sort was efficient — until I ran it on 10 million items. Then I asked, "What if I let Go\'s goroutines help?" This blog explores how I used concurrency to drastically cut sort times.',
    upcoming: true,
    category: "Technical Deep Dive",
    difficulty: "Intermediate",
  },
];

export const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Go", "TypeScript", "JavaScript", "SQL"],
    icon: "💻",
  },
  {
    title: "Backend Technologies",
    skills: ["Node.js", "Express", "BullMQ", "Prisma", "Drizzle ORM"],
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
    skills: ["Google Cloud", "AWS ECS/ECR", "Firebase", "Docker", "GitHub Actions", "Airflow"],
    icon: "☁️",
  },
  {
    title: "Frontend & APIs",
    skills: ["Angular", "React", "Next.js", "React Query", "REST APIs"],
    icon: "🎨",
  },
];

export const coreSpecializations = [
  {
    title: "First Principles",
    description: "Breaking down complex problems",
  },
  {
    title: "System Architecture",
    description: "Designing scalable systems",
  },
  {
    title: "Performance",
    description: "Optimization and efficiency",
  },
  {
    title: "Concurrency",
    description: "Parallel processing patterns",
  },
];

export const journey = [
  {
    year: "2020",
    title: "Started Engineering",
    description: "Began Bachelor of Engineering at DY Patil College, Kolhapur",
  },
  {
    year: "2024",
    title: "First Professional Role",
    description: "Joined PixelSaffron as Backend Developer",
  },
  {
    year: "Late 2024",
    title: "Scaled to Full-Stack",
    description: "Joined Autonomis as Software Developer working on multi-tenant systems",
  },
  {
    year: "Nov 2025",
    title: "Full Stack Engineer at Ajar Online",
    description: "Shipping full features end-to-end on a property management SaaS platform — notification systems, contracts, reporting, and more",
  },
  {
    year: "Now",
    title: "Building & Growing",
    description: "Continuously shipping features at Ajar while exploring new backend technologies",
  },
];

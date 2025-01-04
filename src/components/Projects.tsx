import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "GitHub SaaS Platform",
    description: "A comprehensive SaaS platform built for GitHub, featuring repository indexing, interactive chat, and analytics dashboard.",
    tech: "React • Node.js • MongoDB • GitHub API",
    highlights: [
      "Led full-stack development and cloud service integration",
      "Implemented repository indexing for interactive chat",
      "Built analytics dashboard for data insights",
      "Organized team meetings and project delivery",
      "Enhanced collaboration through repository chat features"
    ]
  },
  {
    title: "Elevare - AI Email Management",
    description: "An AI-powered email management application enabling smart summarization and analytics.",
    tech: "Next.js • Prisma • MongoDB • Python • Docker",
    highlights: [
      "Developed AI-driven email summarization system",
      "Engineered robust backend with Prisma ORM",
      "Deployed scalable LLM processing server",
      "Built comprehensive email analytics dashboard",
      "Implemented sentiment analysis and trend tracking"
    ]
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl -top-48 -right-48" />
        <div className="absolute w-[300px] h-[300px] bg-accent/5 rounded-full blur-2xl -bottom-24 -left-24" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-16 text-center"
        >
          Featured Projects
        </motion.h2>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="project-card bg-accent/5 backdrop-blur-sm rounded-2xl p-8 md:p-12"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-accent/90">
                    {project.title}
                  </h3>
                  <p className="text-lg text-muted">{project.description}</p>
                  <div className="space-y-3">
                    {project.highlights.map((highlight, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + i * 0.1 }}
                        className="flex items-center gap-2"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                        <p className="text-muted">{highlight}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="p-6 rounded-xl bg-accent/10 backdrop-blur-sm">
                    <h4 className="text-lg font-semibold mb-4">Technologies Used</h4>
                    <p className="text-accent">{project.tech}</p>
                  </div>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.02 }}
                    className="group flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
                  >
                    View Project Details
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
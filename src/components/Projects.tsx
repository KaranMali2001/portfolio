import { motion } from "framer-motion";

const projects = [
  {
    title: "Project One",
    description: "A revolutionary web application",
    tech: "React • Node.js • MongoDB",
  },
  {
    title: "Project Two",
    description: "Mobile-first e-commerce platform",
    tech: "Next.js • Prisma • PostgreSQL",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="project-card bg-accent bg-opacity-5 p-8 rounded-xl"
            >
              <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
              <p className="text-muted mb-4">{project.description}</p>
              <p className="text-sm text-accent">{project.tech}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
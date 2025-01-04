import { motion } from "framer-motion";

const skills = [
  { name: "Frontend Development", icon: "🎨" },
  { name: "Backend Architecture", icon: "⚙️" },
  { name: "AI Insights", icon: "🤖" },
  { name: "Cloud Solutions", icon: "☁️" },
];

export const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center"
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xl text-muted mb-16 text-center"
        >
          Passionate about creating innovative digital solutions that combine
          cutting-edge AI with powerful functionality.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="skill-card bg-accent bg-opacity-5 p-6 rounded-xl"
            >
              <div className="text-4xl mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
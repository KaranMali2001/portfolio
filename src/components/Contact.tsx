import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Get In Touch
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-accent bg-opacity-5 p-8 rounded-xl"
        >
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-lg bg-background border border-accent border-opacity-20 focus:border-accent focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 rounded-lg bg-background border border-accent border-opacity-20 focus:border-accent focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                rows={4}
                className="w-full px-4 py-2 rounded-lg bg-background border border-accent border-opacity-20 focus:border-accent focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-accent text-white py-3 rounded-lg hover:bg-opacity-90 transition-all"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-background via-background to-accent/10">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-accent/20 rounded-full blur-3xl -top-48 -right-48 animate-pulse" />
        <div className="absolute w-[300px] h-[300px] bg-accent/10 rounded-full blur-2xl -bottom-24 -left-24" />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center justify-center min-h-screen px-4 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6"
        >
          <motion.h1 
            className="text-6xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-accent/90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Creative Developer
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-muted max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Building digital experiences that inspire and innovate through code and creativity
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex gap-4 justify-center mt-8"
          >
            <a
              href="#projects"
              className="group relative px-8 py-3 overflow-hidden rounded-full bg-accent hover:bg-accent/90 transition-colors"
            >
              <div className="relative z-10 text-white font-medium">
                View Work
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-accent/50 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a
              href="#contact"
              className="px-8 py-3 rounded-full border border-accent/20 text-white hover:bg-accent/10 transition-colors"
            >
              Contact Me
            </a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <div className="w-6 h-10 border-2 border-muted rounded-full p-1">
              <div className="w-1.5 h-3 bg-muted rounded-full animate-bounce mx-auto" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-background via-background to-accent/10">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-accent/20 rounded-full blur-3xl -top-48 -right-48 animate-pulse" />
        <div className="absolute w-[300px] h-[300px] bg-accent/10 rounded-full blur-2xl -bottom-24 -left-24 animate-pulse" />
        <div className="absolute w-[200px] h-[200px] bg-accent/15 rounded-full blur-xl top-1/2 left-1/4 animate-pulse" />
        
        {/* Decorative elements */}
        <div className="absolute inset-0">
          <div className="grid grid-cols-8 gap-4 h-full opacity-10">
            {Array.from({ length: 64 }).map((_, i) => (
              <div
                key={i}
                className="border-[0.5px] border-accent/20"
                style={{
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${Math.random() * 2 + 2}s`,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center justify-center min-h-screen px-4 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="inline-block p-2 px-4 rounded-full bg-accent/10 text-accent mb-6">
              Full Stack Developer & AI Enthusiast
            </div>
          </motion.div>

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
            Building digital experiences that inspire and innovate through code and AI
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

          {/* Enhanced scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center gap-2"
            >
              <span className="text-sm text-muted">Scroll to explore</span>
              <ChevronDown className="w-6 h-6 text-accent" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
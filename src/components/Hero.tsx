import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 overflow-hidden perspective">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 transform-3d relative"
        style={{
          transform: `rotateX(${mousePosition.y * 0.1}deg) rotateY(${mousePosition.x * 0.1}deg)`,
        }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="text-center relative">
          {/* Background Grid */}
          <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 gap-1 pointer-events-none">
            {Array.from({ length: 64 }).map((_, i) => (
              <motion.div
                key={i}
                className="bg-blue-200/10 rounded-lg transform"
                animate={{
                  translateZ: Math.sin((i + mousePosition.x) * 0.1) * 20,
                }}
                transition={{ duration: 0.5 }}
              />
            ))}
          </div>

          {/* Title */}
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 glowing-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Full Stack Developer
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            I craft beautiful, scalable web applications with modern technologies
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <motion.a
              href="#projects"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 hover:scale-105 transform transition-all duration-300 shadow-neon"
              whileHover={{ scale: 1.1 }}
            >
              View My Work
              <ArrowRight className="ml-2 w-5 h-5 animate-float" />
            </motion.a>
            <motion.a
              href="#contact"
              className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 hover:scale-105 transform transition-all duration-300 glass-effect"
              whileHover={{ scale: 1.1 }}
            >
              Contact Me
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

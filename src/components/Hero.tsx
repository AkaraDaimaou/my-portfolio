import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import TitleBackground from './TitleBackground';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    setIsVisible(true);
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
        <div 
          className="absolute inset-0 transform-3d"
          style={{
            transform: `rotateX(${mousePosition.y * 0.1}deg) rotateY(${mousePosition.x * 0.1}deg)`,
            pointerEvents: 'none'
          }}
        />
        <div className="text-center relative">
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl overflow-hidden">
              <TitleBackground />
            </div>
            <h1 
              className={`relative z-10 text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 transition-all duration-1000 transform p-8 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              Full Stack Developer
            </h1>
          </div>
          <p 
            className={`text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto transition-all duration-1000 delay-300 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            I craft beautiful, scalable web applications with modern technologies
          </p>
          <div 
            className={`flex justify-center gap-4 transition-all duration-1000 delay-500 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <button
              onClick={() => scrollToSection('projects')}
              className="relative z-10 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 hover:scale-105 transform transition-all duration-300 shadow-neon"
            >
              View My Work
              <ArrowRight className="ml-2 w-5 h-5 animate-float" />
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="relative z-10 inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 hover:scale-105 transform transition-all duration-300 glass-effect"
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
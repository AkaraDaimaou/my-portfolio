import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import '../components.css';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 pt-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 
            className={`text-5xl md:text-7xl font-bold text-gray-900 mb-6 transition-all duration-1000 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            Full Stack Developer
          </h1>
          <p 
            className={`text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto transition-all duration-1000 delay-300 transform ${
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
            <a
              href="#projects"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 hover:scale-105 transform transition-all duration-300"
            >
              View My Work
              <ArrowRight className="ml-2 w-5 h-5 animate-bounce" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 hover:scale-105 transform transition-all duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
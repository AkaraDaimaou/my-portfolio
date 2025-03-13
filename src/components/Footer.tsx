import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 relative wave-animation footer-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-4 glowing-text">JD</h3>
            <p className="text-gray-400">
              Crafting beautiful digital experiences with passion and precision.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              <a href="#home" className="text-gray-400 hover:text-blue-400 transition-colors w-fit social-link">Home</a>
              <a href="#about" className="text-gray-400 hover:text-blue-400 transition-colors w-fit social-link">About</a>
              <a href="#projects" className="text-gray-400 hover:text-blue-400 transition-colors w-fit social-link">Projects</a>
              <a href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors w-fit social-link">Contact</a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Connect</h3>
            <div className="flex flex-col space-y-2">
              <a href="https://github.com/AkaraDaimaou" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors w-fit social-link">
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/vashist-beedessy-17a8172a0" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors w-fit social-link">
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
              <a href="mailto:contact@example.com" className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors w-fit social-link">
                <Mail className="w-5 h-5" />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
            <p className="flex items-center text-gray-400">
              Made with <Heart className="w-4 h-4 mx-2 text-red-500 animate-pulse" /> by JD
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

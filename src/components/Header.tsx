import React from 'react';
import { Menu, X } from 'lucide-react';
import { Github } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import '../components.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <a href="#home" className="text-2xl font-bold text-gray-900">VB</a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 transition-all duration-200">Home</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-all duration-200">About</a>
            <a href="#projects" className="text-gray-700 hover:text-blue-600 transition-all duration-200">Projects</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-all duration-200">Contact</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com/AkaraDaimaou" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 transition-all duration-200">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/vashist-beedessy-17a8172a0/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 transition-all duration-200">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-all duration-200" onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-all duration-200" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#projects" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-all duration-200" onClick={() => setIsMenuOpen(false)}>Projects</a>
            <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-all duration-200" onClick={() => setIsMenuOpen(false)}>Contact</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

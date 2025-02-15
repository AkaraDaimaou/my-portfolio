import { Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 transition-colors duration-300 dark:bg-white dark:text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold mb-4 md:mb-0 dark:text-gray-900">VB</div>

          {/* Navigation Links */}
          <nav className="flex space-x-8 mb-4 md:mb-0">
            {[
              { name: 'Home', href: '#home' },
              { name: 'About', href: '#about' },
              { name: 'Projects', href: '#projects' },
              { name: 'Contact', href: '#contact' },
              { name: 'Resume', href: '/resume.pdf', external: true },
            ].map(({ name, href, external }) => (
              <a
                key={name}
                href={href}
                target={external ? '_blank' : '_self'}
                rel={external ? 'noopener noreferrer' : undefined}
                className="hover:text-blue-400 dark:hover:text-blue-600 transition-colors"
              >
                {name}
              </a>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex space-x-6">
            {[
              { Icon: Github, href: 'https://github.com/AkaraDaimaou' },
              { Icon: Linkedin, href: 'https://www.linkedin.com/in/vashist-beedessy-17a8172a0' },
            ].map(({ Icon, href }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 dark:hover:text-blue-600 transition-colors"
                aria-label={href.includes('github') ? 'GitHub' : 'LinkedIn'}
              >
                <Icon className="w-6 h-6 text-white dark:text-gray-900" />
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-gray-400 dark:text-gray-700">
          <p>&copy; {new Date().getFullYear()} VB. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

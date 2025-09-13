import React from 'react';
import { HiHeart, HiArrowUp } from 'react-icons/hi';
import { FaCode, FaCoffee } from 'react-icons/fa';

/**
 * Footer Component
 * 
 * This component provides the website footer with:
 * - Brand information and description
 * - Quick navigation links
 * - Technology stack information
 * - Copyright and hosting information
 * - Back to top functionality
 * 
 * For backend developers:
 * - Simple, clean layout that's easy to modify
 * - Responsive design that works on all devices
 * - Smooth scroll functionality for navigation
 * - Easy to update contact information and links
 */
const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  /**
   * Quick Links Configuration
   * Easy to modify navigation links
   */
  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contact', href: '#contact' }
  ];

  /**
   * Smooth scroll to section
   * @param href - The section anchor (e.g., '#home')
   */
  const scrollToSection = (href: string) => {
    const sectionId = href.replace('#', '');
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.offsetTop - headerOffset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  /**
   * Scroll to top of page
   */
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-900 font-serif">
              Aayush Pathak
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed font-sans">
              Backend Engineer passionate about building scalable systems and solving complex technical challenges. 
              Turning ideas into robust, high-performance solutions.
            </p>
            <div className="flex items-center space-x-2 text-gray-500 text-sm font-sans">
              <span>Built with</span>
              <HiHeart size={16} className="text-error-500" />
              <span>using</span>
              <FaCode size={16} className="text-primary-500" />
              <span>and lots of</span>
              <FaCoffee size={16} className="text-warning-500" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4 font-serif">Quick Links</h4>
            <nav className="space-y-2">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-gray-600 hover:text-primary-600 transition-colors text-sm font-sans text-left"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4 font-serif">Built With</h4>
            <div className="flex flex-wrap gap-2">
              {['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'React Icons'].map((tech, index) => (
                <span
                  key={index}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg text-sm border border-gray-200 font-sans"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-4">
              <h5 className="text-sm font-medium text-gray-700 mb-2 font-sans">Backend Focus:</h5>
              <div className="flex flex-wrap gap-2">
                {['Node.js', 'Python', 'PostgreSQL', 'Docker', 'AWS'].map((tech, index) => (
                  <span
                    key={index}
                    className="bg-primary-100 text-primary-700 px-2 py-1 rounded text-xs font-sans"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm font-sans">
              © {currentYear} Aayush Pathak. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-gray-500 text-sm">
              <button 
                onClick={scrollToTop}
                className="flex items-center space-x-1 hover:text-primary-600 transition-colors font-sans"
              >
                <HiArrowUp size={16} />
                <span>Back to top</span>
              </button>
              <span className="text-gray-400">|</span>
              <span className="font-sans">Hosted on Cloudflare Pages</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
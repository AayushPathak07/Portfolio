import React from 'react';
import { HiMenu, HiX } from 'react-icons/hi'; // Using Heroicons from react-icons
import { FaCode } from 'react-icons/fa'; // Using Font Awesome from react-icons

interface HeaderProps {
  activeSection: string;
}

/**
 * Header Component
 * 
 * This component renders the main navigation header with:
 * - Fixed positioning at the top of the page
 * - Responsive mobile menu
 * - Smooth scroll navigation to sections
 * - Active section highlighting
 * 
 * Note for backend developers:
 * - useState manages the mobile menu open/closed state
 * - scrollIntoView() is a browser API for smooth scrolling
 * - The header uses fixed positioning with backdrop-blur for modern glass effect
 */
const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  // Navigation items configuration
  // Easy to modify - just add/remove items from this array
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'work', label: 'Work' },
    { id: 'about', label: 'About' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' },
  ];

  /**
   * Smooth scroll to section function
   * @param sectionId - The ID of the section to scroll to
   */
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Calculate offset to account for fixed header height (64px + 16px padding)
      const headerOffset = 80;
      const elementPosition = element.offsetTop - headerOffset;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    // Close mobile menu after navigation
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand Section */}
          <div className="flex-shrink-0">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
                <FaCode className="text-white" size={18} />
              </div>
              <h1 className="text-xl font-bold text-gray-900 font-serif">
                Aayush Pathak
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeSection === item.label
                      ? 'bg-primary-500 text-white shadow-lg'
                      : 'text-gray-700 hover:text-primary-600 hover:bg-primary-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white rounded-lg mt-2 mb-4 shadow-lg border border-gray-200">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block px-4 py-3 rounded-lg text-base font-medium w-full text-left transition-all duration-300 ${
                    activeSection === item.label
                      ? 'bg-primary-500 text-white'
                      : 'text-gray-700 hover:text-primary-600 hover:bg-primary-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
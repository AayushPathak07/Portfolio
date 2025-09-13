import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CursorFollower from './components/CursorFollower';
import ProjectDetailPage from './pages/ProjectDetailPage';
import ArticleDetailPage from './pages/ArticleDetailPage';

/**
 * Main App Component
 * 
 * This is the root component that orchestrates the entire portfolio website with routing.
 * It now includes:
 * - React Router for client-side navigation
 * - Dynamic project and article detail pages
 * - Cursor following animation for visual appeal
 * - Active section tracking for the main portfolio page
 * 
 * For backend developers:
 * - React Router handles client-side navigation (no page refreshes)
 * - Routes are defined for the main page and detail pages
 * - The cursor follower adds impressive visual effects
 * - All content is loaded dynamically from markdown files
 */

/**
 * MainPortfolioPage Component
 * 
 * This component contains the main single-page portfolio layout
 * with all sections (Hero, Projects, About, Blog, Contact)
 */
const MainPortfolioPage: React.FC = () => {
  // State to track which section is currently active (for navigation highlighting)
  const [activeSection, setActiveSection] = useState('Home');

  /**
   * Scroll Event Handler
   * This effect sets up scroll tracking to highlight the active navigation item
   */
  useEffect(() => {
    /**
     * Handle scroll events to determine active section
     * This function calculates which section is currently in view
     */
    const handleScroll = () => {
      // Define sections in order (must match the section IDs in components)
      const sections = ['Home', 'Work', 'About', 'Blog', 'Contact'];
      
      // Get current scroll position with offset for fixed header
      const scrollPosition = window.scrollY + 100;

      // Check each section to see which one is currently in view
      for (const section of sections) {
        const element = document.getElementById(section.toLowerCase());
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          // If scroll position is within this section's bounds
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup function to remove event listener
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Fixed Header with Navigation */}
      <Header activeSection={activeSection} />
      
      {/* Main Content */}
      <main>
        {/* Hero Section - First impression with introduction */}
        <Hero />
        
        {/* Projects Section - Showcase of work */}
        <Projects />
        
        {/* About Section - Personal background and skills */}
        <About />
        
        {/* Blog Section - Technical articles and insights */}
        <Blog />
        
        {/* Contact Section - Ways to get in touch */}
        <Contact />
      </main>
      
      {/* Footer with additional links and information */}
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      {/* Global cursor follower animation */}
      <CursorFollower />
      
      {/* Define routes for different pages */}
      <Routes>
        {/* Main portfolio page */}
        <Route path="/" element={<MainPortfolioPage />} />
        
        {/* Project detail pages */}
        <Route path="/projects/:slug" element={<ProjectDetailPage />} />
        
        {/* Article detail pages */}
        <Route path="/blog/:slug" element={<ArticleDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
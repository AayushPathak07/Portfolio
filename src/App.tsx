import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Footer from './components/Footer';
import CursorFollower from './components/CursorFollower';
import ProjectDetailPage from './pages/ProjectDetailPage';
import ArticleDetailPage from './pages/ArticleDetailPage';

const MainPortfolioPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['Home', 'Work', 'About', 'Blog'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section.toLowerCase());
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header activeSection={activeSection} />
      
      <main>
        <Hero />
        <Projects />
        <About />
        <Blog />
      </main>
      
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <CursorFollower />
      
      <Routes>
        <Route path="/" element={<MainPortfolioPage />} />
        <Route path="/projects/:slug" element={<ProjectDetailPage />} />
        <Route path="/blog/:slug" element={<ArticleDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;

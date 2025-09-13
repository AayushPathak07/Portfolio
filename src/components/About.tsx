import React from 'react';
import { FaCoffee, FaAward, FaCode, FaServer, FaDatabase } from 'react-icons/fa';
import { HiUsers, HiCalendar } from 'react-icons/hi';
import { getTechnologiesByCategory } from '../data/technologies';

/**
 * About Component
 * 
 * This component now dynamically loads technology data and showcases:
 * - Personal background and professional story
 * - Technology skills organized by category
 * - Professional statistics and achievements
 * - Call-to-action for collaboration
 * 
 * For backend developers:
 * - Technology data comes from src/data/technologies.ts
 * - Categories are dynamically filtered and displayed
 * - Icons and colors are centrally managed
 * - Easy to add new technologies by updating the data file
 */
const About: React.FC = () => {
  // Get technology data from centralized source
  const frontendTechs = getTechnologiesByCategory('frontend');
  const backendTechs = getTechnologiesByCategory('backend');
  const databaseTechs = getTechnologiesByCategory('database');
  const devopsTechs = getTechnologiesByCategory('devops');

  /**
   * Professional Statistics
   * Key metrics that demonstrate experience and impact
   */
  const stats = [
    { icon: FaCode, label: 'Projects Completed', value: '50+', color: 'text-primary-500' },
    { icon: FaCoffee, label: 'Cups of Coffee', value: '1000+', color: 'text-yellow-500' },
    { icon: FaAward, label: 'Certifications', value: '8', color: 'text-accent-500' },
    { icon: HiCalendar, label: 'Years Experience', value: '5+', color: 'text-success-500' }
  ];

  /**
   * Technology Section Component
   * Reusable component for displaying technology categories
   * Now uses the centralized technology data with proper icons and colors
   */
  const TechSection: React.FC<{
    title: string;
    icon: React.ComponentType<any>;
    iconColor: string;
    technologies: Array<{ name: string; icon: React.ComponentType<any>; color: string; category: string }>;
  }> = ({ title, icon: TitleIcon, iconColor, technologies }) => (
    <div>
      <h3 className="text-2xl font-bold text-gray-900 mb-6 font-serif flex items-center">
        <TitleIcon className={`mr-3 ${iconColor}`} size={28} />
        {title}
      </h3>
      <div className="grid grid-cols-2 gap-4">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-4 text-center group"
          >
            <tech.icon 
              className={`mx-auto mb-3 ${tech.color} group-hover:scale-110 transition-transform`} 
              size={32} 
            />
            <h4 className="font-semibold text-gray-900 font-sans">{tech.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-serif">
            About <span className="text-primary-500">Me</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sans">
            Backend engineer passionate about building scalable systems and solving complex technical challenges
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start mb-16">
          {/* Personal Story - Takes up 2 columns on large screens */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-serif">My Journey</h3>
              <p className="text-gray-600 leading-relaxed mb-4 font-sans">
                I'm a passionate backend engineer with over 5 years of experience building scalable, 
                high-performance systems that serve millions of users. My journey started with curiosity 
                about how large-scale applications work, and it has evolved into expertise in distributed 
                systems, microservices architecture, and cloud infrastructure.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4 font-sans">
                I specialize in designing and implementing robust backend solutions using modern technologies 
                like Node.js, Python, and cloud platforms. I'm passionate about system design, database 
                optimization, and creating APIs that are both powerful and developer-friendly.
              </p>
              <p className="text-gray-600 leading-relaxed font-sans">
                When I'm not architecting systems, you can find me contributing to open-source projects, 
                writing technical blog posts, or mentoring junior developers. I believe in the power of 
                clean code, comprehensive testing, and continuous learning.
              </p>
            </div>
          </div>

          {/* Stats - Takes up 1 column on large screens */}
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-6 text-center"
              >
                <stat.icon className={`mx-auto mb-3 ${stat.color}`} size={32} />
                <div className="text-2xl font-bold text-gray-900 mb-1 font-serif">{stat.value}</div>
                <div className="text-gray-600 text-sm font-sans">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Sections */}
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Backend Technologies */}
          <TechSection
            title="Backend Technologies"
            icon={FaServer}
            iconColor="text-success-500"
            technologies={backendTechs}
          />

          {/* Database Technologies */}
          <TechSection
            title="Database Systems"
            icon={FaDatabase}
            iconColor="text-blue-500"
            technologies={databaseTechs}
          />

          {/* DevOps Technologies */}
          <TechSection
            title="DevOps & Infrastructure"
            icon={FaServer}
            iconColor="text-cyan-500"
            technologies={devopsTechs}
          />

          {/* Frontend Technologies */}
          <TechSection
            title="Frontend Technologies"
            icon={FaCode}
            iconColor="text-primary-500"
            technologies={frontendTechs}
          />
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-accent-500 text-white p-8 rounded-2xl shadow-xl">
            <div className="flex justify-center mb-4">
              <HiUsers className="text-white" size={48} />
            </div>
            <h3 className="text-2xl font-bold mb-4 font-serif">Let's Build Something Scalable</h3>
            <p className="text-accent-100 mb-6 max-w-2xl mx-auto font-sans">
              Ready to tackle complex technical challenges? I'm always excited to work on 
              systems that push the boundaries of performance and scalability.
            </p>
            <button
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  const headerOffset = 80;
                  const elementPosition = contactSection.offsetTop - headerOffset;
                  window.scrollTo({
                    top: elementPosition,
                    behavior: 'smooth'
                  });
                }
              }}
              className="bg-white text-accent-600 hover:bg-gray-50 font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
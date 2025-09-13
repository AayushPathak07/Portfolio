import React from 'react';
import { Link } from 'react-router-dom';
import { HiExternalLink, HiCalendar } from 'react-icons/hi';
import { FaGithub, FaCode } from 'react-icons/fa';
import { projects, ProjectPost } from '../data/content';
import { getTechnologiesByNames } from '../data/technologies';
import Reveal from './Reveal';

const Projects: React.FC = () => {

  return (
    <section id="work" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-serif">
              Featured <span className="text-primary-500">Projects</span>
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sans">
              A showcase of backend systems, infrastructure projects, and scalable solutions built with modern technologies
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:items-start">
          {projects.map((project: ProjectPost) => {
            const technologies = getTechnologiesByNames(project.technologies);
            
            const showImage = project.image && project.image !== '/images/your-project-image.png';
            const showGithub = project.githubUrl && project.githubUrl !== 'https://github.com/yourusername/your-repo';
            const showLiveUrl = project.liveUrl && project.liveUrl !== 'https://your-project-live-url.com';

            return (
            <Reveal key={project.slug}>
              <Link
                to={`/projects/${project.slug}`}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
              >
                {showImage && (
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                )}
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                    <div className="flex items-center space-x-1 text-gray-500">
                      <HiCalendar size={14} />
                      <span className="text-sm">{project.date}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-serif group-hover:text-primary-600 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 font-sans leading-relaxed">{project.excerpt}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {technologies.map((tech, techIndex) => (
                      <div
                        key={techIndex}
                        className="inline-flex items-center space-x-2 bg-gray-100 px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 hover:scale-110"
                      >
                        <tech.icon className={tech.color} size={16} />
                        <span className="text-gray-700">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-4">
                      {showGithub && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors"
                          onClick={(e) => e.stopPropagation()} // Prevent navigation to detail page
                        >
                          <FaGithub size={18} />
                          <span className="font-medium">Code</span>
                        </a>
                      )}
                      {showLiveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 transition-colors"
                          onClick={(e) => e.stopPropagation()} // Prevent navigation to detail page
                        >
                          <HiExternalLink size={18} />
                          <span className="font-medium">Live Demo</span>
                        </a>
                      )}
                    </div>
                    <div className="text-primary-600 font-medium text-sm">
                      View Details →
                    </div>
                  </div>
                </div>
              </Link>
            </Reveal>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <Reveal>
            <div className="bg-primary-500 text-white p-8 rounded-2xl shadow-xl">
              <div className="flex justify-center mb-4">
                <FaCode className="text-white" size={48} />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-serif">Ready to Build Something Scalable?</h3>
              <p className="text-primary-100 mb-6 max-w-2xl mx-auto font-sans">
                Let's collaborate on your next backend project. I specialize in building systems that scale, 
                perform, and stand the test of time.
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
                className="bg-white text-primary-600 hover:bg-gray-50 font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                Let's Work Together
              </button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Projects;

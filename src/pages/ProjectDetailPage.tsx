import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { HiArrowLeft, HiExternalLink, HiCalendar, HiTag } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';
import { getProjectBySlug, ProjectPost } from '../utils/markdown';
import { getTechnologiesByNames } from '../data/technologies';

/**
 * ProjectDetailPage Component
 * 
 * Displays the full details of a single project, including:
 * - Complete project description from markdown content
 * - Technology stack with icons
 * - Links to GitHub repository and live demo
 * - Project metadata (date, category, etc.)
 * 
 * This component demonstrates how to:
 * - Use React Router's useParams hook to get URL parameters
 * - Fetch and display markdown content converted to HTML
 * - Handle loading states and error cases
 * - Create a professional project showcase layout
 */
const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [project, setProject] = useState<ProjectPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProject = async () => {
      if (!slug) {
        setError('Project not found');
        setLoading(false);
        return;
      }

      try {
        const projectData = await getProjectBySlug(slug);
        if (!projectData) {
          setError('Project not found');
        } else {
          setProject(projectData);
        }
      } catch (err) {
        setError('Failed to load project');
        console.error('Error fetching project:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading project...</p>
        </div>
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Project Not Found</h1>
          <p className="text-gray-600 mb-6">{error || 'The requested project could not be found.'}</p>
          <Link
            to="/"
            className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  // Get technology data with icons and colors
  const technologies = getTechnologiesByNames(project.technologies);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            to="/"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors"
          >
            <HiArrowLeft className="mr-2" size={20} />
            Back to Portfolio
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Project Header */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="mb-6">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4 font-serif">
            {project.title}
          </h1>

          <p className="text-xl text-gray-600 mb-6 leading-relaxed">
            {project.excerpt}
          </p>

          {/* Project Metadata */}
          <div className="flex flex-wrap items-center gap-6 mb-6 text-sm text-gray-500">
            <div className="flex items-center">
              <HiCalendar className="mr-2" size={16} />
              <span>{project.date}</span>
            </div>
            <div className="flex items-center">
              <HiTag className="mr-2" size={16} />
              <span>{project.category}</span>
            </div>
          </div>

          {/* Technology Stack */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Technology Stack</h3>
            <div className="flex flex-wrap gap-3">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 bg-gray-100 px-3 py-2 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  <tech.icon className={tech.color} size={20} />
                  <span className="font-medium text-gray-700">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              <FaGithub className="mr-2" size={20} />
              View Source Code
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              <HiExternalLink className="mr-2" size={20} />
              Live Demo
            </a>
          </div>
        </div>

        {/* Project Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div 
            className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-gray-900 prose-p:text-gray-600 prose-p:leading-relaxed prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-pre:bg-gray-900 prose-pre:text-gray-100"
            dangerouslySetInnerHTML={{ __html: project.contentHtml || '' }}
          />
        </div>

        {/* Related Projects CTA */}
        <div className="mt-12 text-center">
          <div className="bg-primary-500 text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4 font-serif">Interested in More Projects?</h3>
            <p className="text-primary-100 mb-6">
              Check out my other work and see how I solve complex technical challenges.
            </p>
            <Link
              to="/"
              className="bg-white text-primary-600 hover:bg-gray-50 px-6 py-3 rounded-lg font-semibold transition-colors inline-block"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetailPage;
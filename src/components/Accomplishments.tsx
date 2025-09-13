import React from 'react';
import { Award, Trophy, Star, Calendar } from 'lucide-react';
import { AlignCenterVertical as Certificate } from 'lucide-react';

const Accomplishments: React.FC = () => {
  const accomplishments = [
    {
      type: 'award',
      title: 'Best Innovation Award 2024',
      organization: 'TechCrunch Disrupt',
      date: '2024',
      description: 'Awarded for developing an AI-powered sustainability platform that reduces carbon footprint by 30%',
      icon: Trophy,
    },
    {
      type: 'certification',
      title: 'AWS Solutions Architect Professional',
      organization: 'Amazon Web Services',
      date: '2024',
      description: 'Advanced cloud architecture certification demonstrating expertise in designing distributed systems',
      icon: Certificate,
    },
    {
      type: 'achievement',
      title: 'Open Source Contributor of the Year',
      organization: 'GitHub',
      date: '2023',
      description: 'Recognized for significant contributions to open-source projects with over 500 commits and 50+ PRs',
      icon: Star,
    },
    {
      type: 'award',
      title: 'Hackathon Winner - FinTech Challenge',
      organization: 'JP Morgan Chase',
      date: '2023',
      description: 'First place in 48-hour hackathon for developing a blockchain-based payment solution',
      icon: Award,
    },
    {
      type: 'certification',
      title: 'Google Cloud Professional Developer',
      organization: 'Google Cloud',
      date: '2023',
      description: 'Certified in developing scalable applications on Google Cloud Platform',
      icon: Certificate,
    },
    {
      type: 'achievement',
      title: 'Tech Speaker at 10+ Conferences',
      organization: 'Various Tech Events',
      date: '2022-2024',
      description: 'Delivered keynote speeches on modern web development and AI integration at major tech conferences',
      icon: Star,
    },
    {
      type: 'award',
      title: 'Innovation Excellence Award',
      organization: 'IEEE Computer Society',
      date: '2022',
      description: 'Recognized for outstanding contribution to computer science research and development',
      icon: Trophy,
    },
    {
      type: 'certification',
      title: 'Certified Kubernetes Administrator',
      organization: 'Cloud Native Computing Foundation',
      date: '2022',
      description: 'Expert-level certification in Kubernetes cluster administration and orchestration',
      icon: Certificate,
    }
  ];

  const stats = [
    { label: 'Awards Won', value: '12+', icon: Trophy, color: 'text-yellow-400' },
    { label: 'Certifications', value: '8', icon: Certificate, color: 'text-blue-400' },
    { label: 'Conference Talks', value: '15+', icon: Star, color: 'text-purple-400' },
    { label: 'Years Active', value: '5+', icon: Calendar, color: 'text-green-400' }
  ];

  return (
    <section id="accomplishments" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-serif">
            My <span className="text-primary-500">Accomplishments</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sans">
            Recognition and achievements that mark my journey in technology and innovation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:items-start">
          {accomplishments.map((accomplishment, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group p-6"
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-lg bg-primary-100">
                  <accomplishment.icon className="text-primary-500" size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-primary-700">
                      {accomplishment.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">{accomplishment.title}</h3>
                  <p className="text-gray-500 font-medium mb-3">{accomplishment.organization}</p>
                  <p className="text-gray-600 leading-relaxed">{accomplishment.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-primary-500 text-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold mb-4 font-serif">Let's Build Something Amazing Together</h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto font-sans">
              Ready to collaborate on innovative projects? I'm always excited to work on challenging problems and create impactful solutions.
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
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accomplishments;

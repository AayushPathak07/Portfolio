import React from 'react';
import { Award, Trophy, AlignCenterVertical as Certificate, Star, Calendar } from 'lucide-react';

const Accomplishments: React.FC = () => {
  const accomplishments = [
    {
      type: 'award',
      title: 'Best Innovation Award 2024',
      organization: 'TechCrunch Disrupt',
      date: '2024',
      description: 'Awarded for developing an AI-powered sustainability platform that reduces carbon footprint by 30%',
      icon: Trophy,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-600/20',
      borderColor: 'border-yellow-500/30'
    },
    {
      type: 'certification',
      title: 'AWS Solutions Architect Professional',
      organization: 'Amazon Web Services',
      date: '2024',
      description: 'Advanced cloud architecture certification demonstrating expertise in designing distributed systems',
      icon: Certificate,
      color: 'text-orange-400',
      bgColor: 'bg-orange-600/20',
      borderColor: 'border-orange-500/30'
    },
    {
      type: 'achievement',
      title: 'Open Source Contributor of the Year',
      organization: 'GitHub',
      date: '2023',
      description: 'Recognized for significant contributions to open-source projects with over 500 commits and 50+ PRs',
      icon: Star,
      color: 'text-purple-400',
      bgColor: 'bg-purple-600/20',
      borderColor: 'border-purple-500/30'
    },
    {
      type: 'award',
      title: 'Hackathon Winner - FinTech Challenge',
      organization: 'JP Morgan Chase',
      date: '2023',
      description: 'First place in 48-hour hackathon for developing a blockchain-based payment solution',
      icon: Award,
      color: 'text-green-400',
      bgColor: 'bg-green-600/20',
      borderColor: 'border-green-500/30'
    },
    {
      type: 'certification',
      title: 'Google Cloud Professional Developer',
      organization: 'Google Cloud',
      date: '2023',
      description: 'Certified in developing scalable applications on Google Cloud Platform',
      icon: Certificate,
      color: 'text-blue-400',
      bgColor: 'bg-blue-600/20',
      borderColor: 'border-blue-500/30'
    },
    {
      type: 'achievement',
      title: 'Tech Speaker at 10+ Conferences',
      organization: 'Various Tech Events',
      date: '2022-2024',
      description: 'Delivered keynote speeches on modern web development and AI integration at major tech conferences',
      icon: Star,
      color: 'text-pink-400',
      bgColor: 'bg-pink-600/20',
      borderColor: 'border-pink-500/30'
    },
    {
      type: 'award',
      title: 'Innovation Excellence Award',
      organization: 'IEEE Computer Society',
      date: '2022',
      description: 'Recognized for outstanding contribution to computer science research and development',
      icon: Trophy,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-600/20',
      borderColor: 'border-cyan-500/30'
    },
    {
      type: 'certification',
      title: 'Certified Kubernetes Administrator',
      organization: 'Cloud Native Computing Foundation',
      date: '2022',
      description: 'Expert-level certification in Kubernetes cluster administration and orchestration',
      icon: Certificate,
      color: 'text-indigo-400',
      bgColor: 'bg-indigo-600/20',
      borderColor: 'border-indigo-500/30'
    }
  ];

  const stats = [
    { label: 'Awards Won', value: '12+', icon: Trophy, color: 'text-yellow-400' },
    { label: 'Certifications', value: '8', icon: Certificate, color: 'text-blue-400' },
    { label: 'Conference Talks', value: '15+', icon: Star, color: 'text-purple-400' },
    { label: 'Years Active', value: '5+', icon: Calendar, color: 'text-green-400' }
  ];

  return (
    <section id="accomplishments" className="py-20 bg-slate-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Accomplishments</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Recognition and achievements that mark my journey in technology and innovation
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-slate-700/50 text-center hover:border-blue-500/30 transition-all duration-300"
            >
              <stat.icon className={`mx-auto mb-3 ${stat.color}`} size={32} />
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-slate-300 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Accomplishments Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 transform md:-translate-x-1/2"></div>

          <div className="space-y-8">
            {accomplishments.map((accomplishment, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } items-center`}
              >
                {/* Timeline Node */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transform md:-translate-x-1/2 z-10 border-4 border-slate-900"></div>

                {/* Content Card */}
                <div
                  className={`w-full md:w-5/12 ml-12 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                  }`}
                >
                  <div className={`bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border ${accomplishment.borderColor} hover:scale-105 transition-all duration-300`}>
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-lg ${accomplishment.bgColor} ${accomplishment.borderColor} border`}>
                        <accomplishment.icon className={accomplishment.color} size={24} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <span className={`text-sm font-medium px-2 py-1 rounded-lg ${accomplishment.bgColor} ${accomplishment.color}`}>
                            {accomplishment.date}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">{accomplishment.title}</h3>
                        <p className="text-blue-400 font-medium mb-3">{accomplishment.organization}</p>
                        <p className="text-slate-300 leading-relaxed">{accomplishment.description}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden md:block md:w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-8 rounded-2xl border border-blue-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">Let's Build Something Amazing Together</h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Ready to collaborate on innovative projects? I'm always excited to work on challenging problems and create impactful solutions.
            </p>
            <button
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
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
import React from 'react';
import { FaAward, FaTrophy, FaStar, FaCertificate } from 'react-icons/fa';
import Reveal from './Reveal';

const Accomplishments: React.FC = () => {
  const accomplishments = [
    {
      type: 'award',
      title: '7-Time National Rank 1 - Cyber Olympiad',
      organization: 'Science Olympiad Foundation (SOF)',
      date: '2009-2015',
      description: 'Achieved National Rank 1 for seven consecutive years in the National Cyber Olympiad conducted by SOF.',
      icon: FaTrophy,
    },
    {
      type: 'achievement',
      title: 'Top 30 Innovators in India',
      organization: 'Government of India',
      date: '2018-2019',
      description: 'Recognized among the Top 30 young innovators in India for impactful science and technology contributions.',
      icon: FaStar,
    },
    {
      type: 'award',
      title: 'First Prize - Science Exhibitions',
      organization: 'CBSE',
      date: '2015-2018',
      description: 'Won multiple first-place awards in science exhibitions from school to national-level CBSE competitions.',
      icon: FaAward,
    },
    {
      type: 'experience',
      title: 'IBM Student Intern',
      organization: 'IBM',
      date: '2018',
      description: 'Selected as a student intern at IBM, gaining early industry experience in applied technology and innovation.',
      icon: FaCertificate,
    },
    {
      type: 'achievement',
      title: 'Television Appearances',
      organization: 'National Science Competitions, India',
      date: '2016-2019',
      description: 'Featured multiple times on national television for participation and victories in Indian science competitions.',
      icon: FaStar,
    },
    {
      type: 'award',
      title: 'Winner - FAST Capstone Project Competition',
      organization: 'Sheridan College',
      date: '2024',
      description: 'Won first place by building an AI + OpenCV drone capable of tracking vehicles and individuals to assist law enforcement.',
      icon: FaTrophy,
    },
    {
      type: 'certification',
      title: 'AWS Certified Cloud Practitioner',
      organization: 'Amazon Web Services',
      date: '2025',
      description: 'Foundational certification in AWS cloud concepts, services, and global infrastructure.',
      icon: FaCertificate,
    },
  ];

  return (
    <section id="accomplishments" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-serif">
              My <span className="text-primary-500">Accomplishments</span>
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sans">
              Recognition and achievements that mark my journey in technology and
              innovation
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:items-start">
          {accomplishments.map((accomplishment, index) => (
            <Reveal key={index}>
              <div
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
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                      {accomplishment.title}
                    </h3>
                    <p className="text-gray-500 font-medium mb-3">
                      {accomplishment.organization}
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      {accomplishment.description}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accomplishments;

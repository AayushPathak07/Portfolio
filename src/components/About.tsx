import React from "react";
import {
  FaCoffee,
  FaAward,
  FaCode,
  FaServer,
  FaDatabase,
} from "react-icons/fa";
import { HiUsers, HiCalendar } from "react-icons/hi";
import { getTechnologiesByCategory } from "../data/technologies";
import Reveal from "./Reveal";

const About: React.FC = () => {
  const frontendTechs = getTechnologiesByCategory("frontend");
  const backendTechs = getTechnologiesByCategory("backend");
  const databaseTechs = getTechnologiesByCategory("database");
  const devopsTechs = getTechnologiesByCategory("devops");

  const stats = [
    {
      icon: FaCode,
      label: "Projects Completed",
      value: "50+",
      color: "text-primary-500",
    },
    {
      icon: FaCoffee,
      label: "Cups of Coffee",
      value: "I lost count",
      color: "text-yellow-500",
    },
    {
      icon: FaAward,
      label: "Certifications",
      value: "6",
      color: "text-accent-500",
    },
    {
      icon: HiCalendar,
      label: "Years Experience",
      value: "5+",
      color: "text-success-500",
    },
  ];

  const TechSection: React.FC<{
    title: string;
    icon: React.ComponentType<any>;
    iconColor: string;
    technologies: Array<{
      name: string;
      icon: React.ComponentType<any>;
      color: string;
      category: string;
    }>;
  }> = ({ title, icon: TitleIcon, iconColor, technologies }) => (
    <div>
      <Reveal>
        <h3 className="text-2xl font-bold text-gray-900 mb-6 font-serif flex items-center">
          <TitleIcon className={`mr-3 ${iconColor}`} size={28} />
          {title}
        </h3>
      </Reveal>
      <div className="grid grid-cols-2 gap-4">
        {technologies.map((tech, index) => (
          <Reveal key={index}>
            <div
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-4 text-center group"
            >
              <tech.icon
                className={`mx-auto mb-3 ${tech.color} group-hover:scale-110 transition-transform`}
                size={32}
              />
              <h4 className="font-semibold text-gray-900 font-sans">
                {tech.name}
              </h4>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-serif">
              About <span className="text-primary-500">Me</span>
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sans">
              Backend engineer passionate about building scalable systems and
              solving complex technical challenges
            </p>
          </Reveal>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start mb-16">
          <div className="lg:col-span-2 space-y-6">
            <Reveal>
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-serif">
                  My Journey
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4 font-sans">
                  I’m a backend engineer with 5+ years of experience designing and
                  building scalable, high-performance systems that power millions
                  of users worldwide. My work spans distributed systems,
                  microservices, and cloud infrastructure, with a strong focus on
                  reliability, observability, and efficiency. What began as
                  curiosity about how large platforms operate has grown into deep
                  expertise in system design, DevOps, and delivering
                  production-grade architectures.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4 font-sans">
                  I specialize in architecting and delivering robust backend
                  systems using modern technologies such as Node.js, Python, and
                  cloud-native platforms. My passion lies in system design,
                  database optimization, and building APIs that are not only
                  scalable and reliable but also intuitive and developer-friendly.
                </p>
                <p className="text-gray-600 leading-relaxed font-sans">
                  Outside of architecting systems, I contribute to open-source
                  projects, share insights through technical writing, and mentor
                  aspiring developers. I’m a strong advocate of clean code,
                  rigorous testing, and a culture of continuous learning and
                  improvement.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
            {stats.map((stat, index) => (
              <Reveal key={index}>
                <div
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-6 text-center"
                >
                  <stat.icon className={`mx-auto mb-3 ${stat.color}`} size={32} />
                  <div className="text-2xl font-bold text-gray-900 mb-1 font-serif">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 text-sm font-sans">
                    {stat.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <TechSection
            title="Backend Technologies"
            icon={FaServer}
            iconColor="text-success-500"
            technologies={backendTechs}
          />

          <TechSection
            title="Database Systems"
            icon={FaDatabase}
            iconColor="text-blue-500"
            technologies={databaseTechs}
          />

          <TechSection
            title="DevOps & Infrastructure"
            icon={FaServer}
            iconColor="text-cyan-500"
            technologies={devopsTechs}
          />

          <TechSection
            title="Frontend Technologies"
            icon={FaCode}
            iconColor="text-primary-500"
            technologies={frontendTechs}
          />
        </div>
      </div>
    </section>
  );
};

export default About;

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
      icon: React.ComponentType<any> | string;
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
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {technologies.map((tech, index) => (
          <Reveal key={index}>
            <div className="group flex flex-col items-center">
              <div
                className={`w-24 h-24 rounded-full flex items-center justify-center bg-white shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2 mb-3`}
              >
                {typeof tech.icon === "string" ? (
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="h-12 w-12 object-contain rounded-md"
                  />
                ) : (
                  <tech.icon
                    className={`h-12 w-12 ${tech.color} transition-transform`}
                  />
                )}
              </div>
              <h4 className="font-semibold text-gray-900 font-sans text-center">
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

          <div className="grid grid-cols-2 lg:grid-cols-1 gap-4 lg:max-w-xs justify-self-center">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 w-36 h-36 flex items-center justify-center mx-auto"
              >
                <Reveal>
                  <div className="text-center">
                    <stat.icon
                      className={`mx-auto mb-2 ${stat.color}`}
                      size={28}
                    />
                    <div className="text-xl font-bold text-gray-900 font-serif">
                      {stat.value}
                    </div>
                    <div className="text-gray-600 text-xs font-sans">
                      {stat.label}
                    </div>
                  </div>
                </Reveal>
              </div>
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

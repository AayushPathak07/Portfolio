import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiArrowDown, HiSparkles, HiLightningBolt } from "react-icons/hi";
import Reveal from "./Reveal";

const Hero: React.FC = () => {
  const scrollToWork = () => {
    const workSection = document.getElementById("work");
    if (workSection) {
      const headerOffset = 80;
      const elementPosition = workSection.offsetTop - headerOffset;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white pt-20"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary-500 rounded-full animate-float"></div>
        <div
          className="absolute top-40 right-32 w-24 h-24 bg-accent-500 rounded-lg rotate-45 animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-32 left-1/3 w-20 h-20 bg-success-500 rounded-full animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
        <div
          className="absolute bottom-20 right-20 w-28 h-28 bg-warning-500 rounded-lg rotate-12 animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-8">
          <div className="flex justify-center mb-4">
            <Reveal>
              <div className="flex items-center space-x-2 bg-primary-100 px-4 py-2 rounded-full">
                <HiSparkles className="text-primary-500" size={20} />
                <span className="text-primary-700 font-medium">
                  Available for new projects
                </span>
              </div>
            </Reveal>
          </div>

          <div className="space-y-4">
            <Reveal>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight font-serif">
                Hi, I'm <span className="text-primary-500">Aayush Pathak</span>
              </h1>
            </Reveal>
            <Reveal>
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-sans">
                Backend Engineer & Systems Architect building scalable,
                high-performance solutions
              </p>
            </Reveal>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-primary-500 text-white rounded-full shadow-lg">
              <Reveal>
                <div className="flex items-center space-x-2 px-6 py-3">
                  <HiLightningBolt className="text-white" size={20} />
                  <span className="font-medium">Backend Expert</span>
                </div>
              </Reveal>
            </div>
            <div className="bg-accent-500 text-white rounded-full shadow-lg">
              <Reveal>
                <div className="flex items-center space-x-2 px-6 py-3">
                  <HiSparkles className="text-white" size={20} />
                  <span className="font-medium">Systems Design</span>
                </div>
              </Reveal>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://github.com/aayushpathak07"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:shadow-lg flex items-center space-x-2"
            >
              <FaGithub size={20} />
              <span>View GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/aayushpathak7"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-50 text-primary-600 font-semibold py-3 px-6 rounded-xl border-2 border-primary-500 transition-all duration-300 flex items-center space-x-2"
            >
              <FaLinkedin size={20} />
              <span>Connect on LinkedIn</span>
            </a>
          </div>

          <div className="pt-16">
            <button
              onClick={scrollToWork}
              className="animate-bounce text-gray-400 hover:text-primary-500 transition-colors duration-300"
              aria-label="Scroll to work section"
            >
              <HiArrowDown size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

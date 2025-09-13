import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import Reveal from './Reveal';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-serif">
              Contact <span className="text-primary-500">Me</span>
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sans">
              I'm open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Reveal>
            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 font-serif">Get in Touch</h3>
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                  <input type="text" id="name" name="name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500" />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                  <input type="email" id="email" name="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500" />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                  <textarea id="message" name="message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"></textarea>
                </div>
                <button type="submit" className="bg-primary-500 text-white font-semibold py-3 px-6 rounded-xl hover:bg-primary-600 transition-all duration-300">
                  Send Message
                </button>
              </form>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 font-serif">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <FaEnvelope className="text-primary-500 mr-3" size={20} />
                  <span className="text-gray-700">aayushpathak0707@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <FaPhone className="text-primary-500 mr-3" size={20} />
                  <span className="text-gray-700">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <FaMapMarkerAlt className="text-primary-500 mr-3" size={20} />
                  <span className="text-gray-700">Toronto, ON, Canada</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import React, { useState } from 'react';
import { HiMail, HiPhone, HiLocationMarker, HiPaperAirplane, HiChatAlt, HiHeart } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaTwitter, FaDiscord } from 'react-icons/fa';

/**
 * Contact Form Data Interface
 * Defines the structure of the contact form data
 */
interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

/**
 * Contact Component
 * 
 * This component provides multiple ways for visitors to get in touch:
 * - Contact form for direct messages
 * - Contact information display
 * - Social media links
 * - Current availability status
 * 
 * For backend developers:
 * - Form state is managed with React hooks
 * - Form validation can be easily added
 * - Submit handler is ready for API integration
 * - Responsive design works on all devices
 */
const Contact: React.FC = () => {
  // Form state management
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  /**
   * Handle form submission
   * @param e - Form submission event
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically:
    // 1. Validate the form data
    // 2. Send the data to your backend API
    // 3. Show success/error messages
    // 4. Reset the form on success
    
    console.log('Form submitted:', formData);
    
    // Example API call (uncomment and modify for your backend):
    // try {
    //   const response = await fetch('/api/contact', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(formData)
    //   });
    //   if (response.ok) {
    //     alert('Thank you for your message! I\'ll get back to you soon.');
    //     setFormData({ name: '', email: '', subject: '', message: '' });
    //   }
    // } catch (error) {
    //   alert('Sorry, there was an error sending your message. Please try again.');
    // }
    
    // For now, just show a success message and reset the form
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  /**
   * Handle input changes
   * @param e - Input change event
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  /**
   * Contact Information Configuration
   * Easy to modify contact details
   */
  const contactInfo = [
    {
      icon: HiMail,
      label: 'Email',
      value: 'hello@aayushpathak.com',
      href: 'mailto:hello@aayushpathak.com',
      color: 'text-primary-500'
    },
    {
      icon: HiPhone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
      color: 'text-success-500'
    },
    {
      icon: HiLocationMarker,
      label: 'Location',
      value: 'San Francisco, CA',
      href: '#',
      color: 'text-accent-500'
    }
  ];

  /**
   * Social Media Links Configuration
   * Easy to add/remove social platforms
   */
  const socialLinks = [
    {
      icon: FaGithub,
      label: 'GitHub',
      href: 'https://github.com/aayushpathak',
      color: 'hover:text-gray-700'
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/aayushpathak',
      color: 'hover:text-primary-500'
    },
    {
      icon: FaTwitter,
      label: 'Twitter',
      href: 'https://twitter.com/aayushpathak',
      color: 'hover:text-cyan-500'
    },
    {
      icon: FaDiscord,
      label: 'Discord',
      href: 'https://discord.com/users/aayushpathak',
      color: 'hover:text-indigo-500'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-serif">
            Get In <span className="text-primary-500">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sans">
            Have a challenging backend project or want to discuss system architecture? I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 font-serif">Let's Connect</h3>
              <p className="text-gray-600 mb-8 font-sans leading-relaxed">
                I'm always open to discussing new opportunities, challenging technical problems, and innovative projects. 
                Whether you're looking to build a scalable backend system, optimize existing infrastructure, or need 
                consultation on system architecture, let's explore how we can work together.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-center space-x-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-4 group"
                >
                  <div className={`p-3 rounded-lg bg-gray-100 ${info.color} group-hover:scale-110 transition-transform`}>
                    <info.icon size={24} />
                  </div>
                  <div>
                    <div className="text-gray-500 text-sm font-sans">{info.label}</div>
                    <div className="text-gray-900 font-medium font-sans">{info.value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4 font-serif">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-white rounded-lg text-gray-600 ${social.color} transition-all duration-300 hover:scale-110 shadow-md hover:shadow-lg border border-gray-200`}
                    aria-label={social.label}
                  >
                    <social.icon size={24} />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <div className="bg-success-100 p-6 rounded-xl border border-success-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-2 font-serif">Current Availability</h4>
              <p className="text-gray-700 text-sm font-sans">
                I'm currently available for backend development projects and system architecture consulting. 
                Typical response time: <span className="text-success-600 font-medium">within 24 hours</span>
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 font-serif">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Email Row */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2 font-sans">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:border-primary-500 focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 font-sans">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:border-primary-500 focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2 font-sans">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:border-primary-500 focus:outline-none transition-colors"
                  placeholder="What's this about?"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2 font-sans">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:border-primary-500 focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project or technical challenge..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg w-full flex items-center justify-center space-x-2"
              >
                <HiPaperAirplane size={20} />
                <span>Send Message</span>
              </button>
            </form>

            {/* Form Tips */}
            <div className="mt-6 p-4 bg-primary-50 border border-primary-200 rounded-lg">
              <p className="text-primary-700 text-sm font-sans">
                <strong>Quick tip:</strong> The more technical details you provide about your project, 
                the better I can understand your requirements and provide a meaningful response.
              </p>
            </div>
          </div>
        </div>

        {/* Thank You Message */}
        <div className="text-center mt-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
            <HiHeart className="mx-auto mb-4 text-error-500" size={48} />
            <h3 className="text-2xl font-bold text-gray-900 mb-4 font-serif">Thank You for Visiting!</h3>
            <p className="text-gray-600 max-w-2xl mx-auto font-sans">
              I appreciate you taking the time to explore my work. Whether you're looking to collaborate on 
              challenging backend projects, need system architecture consultation, or just want to connect 
              with a fellow engineer, I'm always excited to hear from innovative minds.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
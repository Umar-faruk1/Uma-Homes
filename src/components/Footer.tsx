
import React from 'react';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    'Home', 'Properties', 'About Us', 'Services', 'Contact'
  ];

  const services = [
    'Property Sales', 'Property Rentals', 'Property Management', 'Investment Consulting', 'Market Analysis'
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-navy-600 text-white relative">
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gold-500 hover:bg-gold-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      >
        <ArrowUp size={20} />
      </button>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="animate-fade-in-up">
            <div className="text-3xl font-bold mb-4">
              <span className="text-white">UMA</span>
              <span className="text-gold-500">STA</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your trusted partner in real estate. We help you find the perfect home or investment property with expert guidance and personalized service.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-navy-700 hover:bg-gold-500 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                    aria-label={social.label}
                  >
                    <IconComponent size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-xl font-semibold mb-6 text-gold-500">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(' ', '')}`}
                    className="text-gray-300 hover:text-gold-500 transition-colors duration-300 hover:translate-x-2 transform inline-block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-xl font-semibold mb-6 text-gold-500">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-gray-300 hover:text-gold-500 transition-colors duration-300 hover:translate-x-2 transform inline-block"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-xl font-semibold mb-6 text-gold-500">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="text-gold-500 mt-1 flex-shrink-0" size={18} />
                <div className="text-gray-300">
                  <p>123 Business Ave, Suite 100</p>
                  <p>New York, NY 10001</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-gold-500 flex-shrink-0" size={18} />
                <a href="tel:+15551234567" className="text-gray-300 hover:text-gold-500 transition-colors">
                  +233 557 190 530
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-gold-500 flex-shrink-0" size={18} />
                <a href="mailto:info@umahome.com" className="text-gray-300 hover:text-gold-500 transition-colors">
                  info@umahomes.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-navy-500 mt-12 pt-8">
          <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-xl font-semibold mb-4 text-gold-500">Stay Updated</h3>
            <p className="text-gray-300 mb-6">Subscribe to our newsletter for the latest property listings and market insights</p>
            <div className="max-w-md mx-auto flex">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-l-lg bg-navy-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-500"
              />
              <button className="bg-gold-500 hover:bg-gold-600 px-6 py-3 rounded-r-lg font-semibold transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-navy-500 mt-8 pt-8 text-center animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <p className="text-gray-400">
            © 2025 Uma Homes Real Estate. All rights reserved. | 
            <a href="#" className="hover:text-gold-500 transition-colors ml-1">Privacy Policy</a> | 
            <a href="#" className="hover:text-gold-500 transition-colors ml-1">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

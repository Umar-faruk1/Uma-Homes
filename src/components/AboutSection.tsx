
import React from 'react';
import { Award, Users, Home, TrendingUp, CheckCircle } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { icon: Home, number: '500+', label: 'Properties Sold', color: 'text-blue-500' },
    { icon: Users, number: '200+', label: 'Happy Clients', color: 'text-green-500' },
    { icon: Award, number: '15+', label: 'Years Experience', color: 'text-gold-500' },
    { icon: TrendingUp, number: '98%', label: 'Success Rate', color: 'text-purple-500' }
  ];

  const features = [
    'Expert Market Analysis',
    'Professional Photography', 
    '24/7 Customer Support',
    'Legal Assistance',
    'Property Management',
    'Investment Consulting'
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="animate-slide-in-left">
            <h2 className="text-4xl md:text-5xl font-bold text-navy-600 mb-6">
              About Uma Homes
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              With over 15 years of experience in the real estate industry, Uma Homes has established itself as a trusted partner for buyers, sellers, and investors seeking premium properties.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our team of experienced professionals combines market expertise with personalized service to deUMAr exceptional results. We understand that buying or selling a home is one of life's most important decisions, and we're here to guide you through every step of the process.
            </p>

            {/* Features List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div
                  key={feature}
                  className="flex items-center space-x-3 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle className="text-gold-500 flex-shrink-0" size={20} />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <button className="bg-gold-500 hover:bg-gold-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Learn More About Us
            </button>
          </div>

          {/* Right Content - Image & Stats */}
          <div className="animate-slide-in-right">
            <div className="relative">
              {/* Main Image */}
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Modern office space"
                  className="w-full h-96 object-cover"
                />
              </div>

              {/* Floating Stats Card */}
              <div className="absolute -bottom-8 -left-8 bg-white rounded-xl shadow-2xl p-6 animate-float">
                <div className="flex items-center space-x-4">
                  <div className="bg-gold-500 p-3 rounded-lg">
                    <Award className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-navy-600">15+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 pt-20 border-t border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="text-center group animate-scale-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={stat.color} size={32} />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-navy-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

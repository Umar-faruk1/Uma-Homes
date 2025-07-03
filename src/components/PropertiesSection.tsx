
import React, { useState } from 'react';
import { MapPin, Bed, Bath, Square, Heart, Eye } from 'lucide-react';

const PropertiesSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'For Sale', 'For Rent', 'Luxury'];

  const properties = [
    {
      id: 1,
      title: 'Modern Villa with Pool',
      location: 'Beverly Hills, CA',
      price: '$2,500,000',
      type: 'For Sale',
      category: 'Luxury',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      beds: 4,
      baths: 3,
      sqft: 3200,
      isLiked: false
    },
    {
      id: 2,
      title: 'Downtown Luxury Apartment',
      location: 'Manhattan, NY',
      price: '$8,500/month',
      type: 'For Rent',
      category: 'Luxury',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      beds: 2,
      baths: 2,
      sqft: 1200,
      isLiked: true
    },
    {
      id: 3,
      title: 'Cozy Family Home',
      location: 'Austin, TX',
      price: '$650,000',
      type: 'For Sale',
      category: 'Family',
      image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      beds: 3,
      baths: 2,
      sqft: 2100,
      isLiked: false
    },
    {
      id: 4,
      title: 'Penthouse Suite',
      location: 'Miami, FL',
      price: '$12,000/month',
      type: 'For Rent',
      category: 'Luxury',
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      beds: 3,
      baths: 3,
      sqft: 2800,
      isLiked: false
    },
    {
      id: 5,
      title: 'Suburban Dream House',
      location: 'Phoenix, AZ',
      price: '$450,000',
      type: 'For Sale',
      category: 'Family',
      image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      beds: 4,
      baths: 3,
      sqft: 2600,
      isLiked: true
    },
    {
      id: 6,
      title: 'Luxury Ocean View Condo',
      location: 'San Diego, CA',
      price: '$1,800,000',
      type: 'For Sale',
      category: 'Luxury',
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      beds: 2,
      baths: 2,
      sqft: 1800,
      isLiked: false
    }
  ];

  const filteredProperties = activeFilter === 'All' 
    ? properties 
    : properties.filter(property => 
        property.type === activeFilter || property.category === activeFilter
      );

  const PropertyCard = ({ property }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [liked, setLiked] = useState(property.isLiked);

    return (
      <div 
        className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative overflow-hidden">
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>
          
          {/* Property Type Badge */}
          <div className="absolute top-4 left-4">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
              property.type === 'For Sale' 
                ? 'bg-green-500 text-white' 
                : 'bg-blue-500 text-white'
            }`}>
              {property.type}
            </span>
          </div>

          {/* Action Buttons */}
          <div className={`absolute top-4 right-4 flex space-x-2 transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
          }`}>
            <button
              onClick={() => setLiked(!liked)}
              className={`p-2 rounded-full backdrop-blur-md transition-all duration-300 ${
                liked ? 'bg-red-500 text-white' : 'bg-white/80 text-gray-600 hover:bg-red-500 hover:text-white'
              }`}
            >
              <Heart size={16} fill={liked ? 'currentColor' : 'none'} />
            </button>
            <button className="p-2 rounded-full bg-white/80 text-gray-600 hover:bg-navy-600 hover:text-white backdrop-blur-md transition-all duration-300">
              <Eye size={16} />
            </button>
          </div>

          {/* Price */}
          <div className="absolute bottom-4 left-4">
            <span className="bg-gold-500 text-white px-3 py-1 rounded-lg font-bold text-lg">
              {property.price}
            </span>
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold text-navy-600 mb-2 group-hover:text-gold-500 transition-colors duration-300">
            {property.title}
          </h3>
          <div className="flex items-center text-gray-600 mb-4">
            <MapPin size={16} className="mr-1" />
            <span className="text-sm">{property.location}</span>
          </div>

          <div className="flex justify-between items-center text-sm text-gray-600 border-t pt-4">
            <div className="flex items-center space-x-1">
              <Bed size={16} />
              <span>{property.beds}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Bath size={16} />
              <span>{property.baths}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Square size={16} />
              <span>{property.sqft} sq ft</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="properties" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-600 mb-4 animate-fade-in-up">
            Featured Properties
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Discover our handpicked selection of premium properties in the most sought-after locations
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter, index) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 animate-fade-in ${
                activeFilter === filter
                  ? 'bg-gold-500 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-navy-600 hover:text-white'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property, index) => (
            <div
              key={property.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <PropertyCard property={property} />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-navy-600 hover:bg-navy-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
            View All Properties
          </button>
        </div>
      </div>
    </section>
  );
};

export default PropertiesSection;


import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Bed, Bath, Square, Heart, Share2, Phone, Mail } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PropertyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock property data - in a real app, this would come from an API
  const properties = [
    {
      id: 1,
      title: 'Modern Villa with Pool',
      location: 'Beverly Hills, CA',
      price: '$2,500,000',
      type: 'For Sale',
      category: 'Luxury',
      images: [
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      beds: 4,
      baths: 3,
      sqft: 3200,
      description: 'This stunning modern villa features an open-concept design with floor-to-ceiling windows, a gourmet kitchen, and a luxurious master suite. The property includes a sparkling pool, landscaped gardens, and a three-car garage.',
      features: ['Swimming Pool', 'Garage', 'Garden', 'Modern Kitchen', 'Master Suite', 'High Ceilings'],
      agent: {
        name: 'Sarah Johnson',
        phone: '+233 557 190 530',
        email: 'sarah@umahomes.com',
        image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
      }
    }
    // Add more properties as needed
  ];

  const property = properties.find(p => p.id === parseInt(id || '1'));

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Property not found</h1>
          <button 
            onClick={() => navigate('/')}
            className="bg-gold-500 text-white px-6 py-3 rounded-lg hover:bg-gold-600 transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-24">
        {/* Back Button */}
        <div className="container mx-auto px-4 py-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center space-x-2 text-gray-600 hover:text-navy-600 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to Properties</span>
          </button>
        </div>

        {/* Property Images */}
        <div className="container mx-auto px-4 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 h-96 lg:h-[500px]">
            <div className="lg:col-span-2">
              <img
                src={property.images[0]}
                alt={property.title}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="hidden lg:flex flex-col gap-4">
              {property.images.slice(1, 3).map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${property.title} ${index + 2}`}
                  className="w-full h-full object-cover rounded-lg"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Property Details */}
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    property.type === 'For Sale' 
                      ? 'bg-green-500 text-white' 
                      : 'bg-blue-500 text-white'
                  }`}>
                    {property.type}
                  </span>
                  <div className="flex space-x-2">
                    <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                      <Heart size={20} />
                    </button>
                    <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                      <Share2 size={20} />
                    </button>
                  </div>
                </div>
                
                <h1 className="text-3xl lg:text-4xl font-bold text-navy-600 mb-2">
                  {property.title}
                </h1>
                
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin size={20} className="mr-2" />
                  <span className="text-lg">{property.location}</span>
                </div>
                
                <div className="text-3xl font-bold text-gold-500 mb-6">
                  {property.price}
                </div>

                <div className="flex space-x-6 mb-8 p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Bed size={24} className="text-gray-600" />
                    <span className="text-lg font-semibold">{property.beds} Beds</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Bath size={24} className="text-gray-600" />
                    <span className="text-lg font-semibold">{property.baths} Baths</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Square size={24} className="text-gray-600" />
                    <span className="text-lg font-semibold">{property.sqft} sq ft</span>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-navy-600 mb-4">Description</h2>
                  <p className="text-gray-700 leading-relaxed">
                    {property.description}
                  </p>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold text-navy-600 mb-4">Features</h2>
                  <div className="grid grid-cols-2 gap-3">
                    {property.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-gold-500 rounded-full"></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Agent Card */}
            <div className="lg:col-span-1">
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg sticky top-24">
                <h3 className="text-xl font-bold text-navy-600 mb-4">Contact Agent</h3>
                
                <div className="flex items-center space-x-4 mb-6">
                  <img
                    src={property.agent.image}
                    alt={property.agent.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-lg">{property.agent.name}</h4>
                    <p className="text-gray-600">Real Estate Agent</p>
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3">
                    <Phone size={18} className="text-gray-600" />
                    <span>{property.agent.phone}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail size={18} className="text-gray-600" />
                    <span>{property.agent.email}</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <button className="w-full bg-gold-500 hover:bg-gold-600 text-white py-3 px-4 rounded-lg font-semibold transition-colors">
                    Call Now
                  </button>
                  <button className="w-full bg-navy-600 hover:bg-navy-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors">
                    Send Message
                  </button>
                  <button className="w-full border border-gray-300 hover:bg-gray-50 text-gray-700 py-3 px-4 rounded-lg font-semibold transition-colors">
                    Schedule Tour
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PropertyDetail;

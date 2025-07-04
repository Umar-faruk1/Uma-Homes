
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const SavedProperties = () => {
  // Mock saved properties data
  const savedProperties = [
    {
      id: 1,
      title: "Luxury Villa in Beverly Hills",
      price: "$2,500,000",
      location: "Beverly Hills, CA",
      bedrooms: 5,
      bathrooms: 4,
      sqft: 4500,
      image: "/placeholder.svg",
      savedDate: "2024-01-15"
    },
    {
      id: 2,
      title: "Modern Condo Downtown",
      price: "$850,000",
      location: "Downtown LA, CA",
      bedrooms: 2,
      bathrooms: 2,
      sqft: 1200,
      image: "/placeholder.svg",
      savedDate: "2024-01-10"
    },
    {
      id: 3,
      title: "Family Home in Suburbs",
      price: "$650,000",
      location: "Pasadena, CA",
      bedrooms: 4,
      bathrooms: 3,
      sqft: 2800,
      image: "/placeholder.svg",
      savedDate: "2024-01-08"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 bg-gray-50 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-navy-600 mb-2">Saved Properties</h1>
            <p className="text-gray-600">Your favorite properties ({savedProperties.length})</p>
          </div>

          {savedProperties.length === 0 ? (
            <Card>
              <CardContent className="text-center py-12">
                <h3 className="text-xl font-semibold text-gray-600 mb-4">No saved properties yet</h3>
                <p className="text-gray-500 mb-6">Start browsing and save properties you're interested in</p>
                <Button className="bg-navy-600 hover:bg-navy-700">
                  Browse Properties
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {savedProperties.map((property) => (
                <Card key={property.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <img 
                      src={property.image} 
                      alt={property.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <Button 
                        size="sm" 
                        variant="secondary" 
                        className="bg-white/90 hover:bg-white text-red-500"
                      >
                        ♥ Remove
                      </Button>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-navy-600 mb-2">{property.title}</h3>
                      <p className="text-2xl font-bold text-gold-500 mb-2">{property.price}</p>
                      <p className="text-gray-600 mb-2">{property.location}</p>
                    </div>
                    
                    <div className="flex justify-between text-sm text-gray-600 mb-4">
                      <span>{property.bedrooms} beds</span>
                      <span>{property.bathrooms} baths</span>
                      <span>{property.sqft.toLocaleString()} sqft</span>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button className="flex-1 bg-navy-600 hover:bg-navy-700">
                        View Details
                      </Button>
                      <Button variant="outline" className="flex-1">
                        Contact Agent
                      </Button>
                    </div>
                    
                    <p className="text-xs text-gray-500 mt-3">
                      Saved on {new Date(property.savedDate).toLocaleDateString()}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SavedProperties;

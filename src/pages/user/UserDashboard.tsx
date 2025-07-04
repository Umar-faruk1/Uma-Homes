
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const UserDashboard = () => {
  // Mock data - replace with actual data from backend
  const userStats = {
    savedProperties: 5,
    recentViews: 12,
    inquiries: 3,
    alerts: 2
  };

  const recentProperties = [
    { id: 1, title: "Luxury Villa in Beverly Hills", price: "$2,500,000", image: "/placeholder.svg" },
    { id: 2, title: "Modern Condo Downtown", price: "$850,000", image: "/placeholder.svg" },
    { id: 3, title: "Family Home in Suburbs", price: "$650,000", image: "/placeholder.svg" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 bg-gray-50 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-navy-600 mb-2">Welcome back, John!</h1>
            <p className="text-gray-600">Here's what's happening with your property search</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Saved Properties</p>
                    <p className="text-3xl font-bold text-navy-600">{userStats.savedProperties}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Recent Views</p>
                    <p className="text-3xl font-bold text-navy-600">{userStats.recentViews}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Active Inquiries</p>
                    <p className="text-3xl font-bold text-navy-600">{userStats.inquiries}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Price Alerts</p>
                    <p className="text-3xl font-bold text-navy-600">{userStats.alerts}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Recent Properties */}
            <Card>
              <CardHeader>
                <CardTitle>Recently Viewed Properties</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentProperties.map((property) => (
                    <div key={property.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                      <img 
                        src={property.image} 
                        alt={property.title}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium text-navy-600">{property.title}</h4>
                        <p className="text-gold-500 font-semibold">{property.price}</p>
                      </div>
                      <Link to={`/property/${property.id}`}>
                        <Button variant="outline" size="sm">View</Button>
                      </Link>
                    </div>
                  ))}
                </div>
                <div className="mt-4">
                  <Link to="/properties">
                    <Button variant="outline" className="w-full">Browse All Properties</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Link to="/saved-properties">
                    <Button className="w-full justify-start bg-navy-600 hover:bg-navy-700">
                      View Saved Properties
                    </Button>
                  </Link>
                  <Link to="/properties">
                    <Button variant="outline" className="w-full justify-start">
                      Search Properties
                    </Button>
                  </Link>
                  <Link to="/profile">
                    <Button variant="outline" className="w-full justify-start">
                      Update Profile
                    </Button>
                  </Link>
                  <Button variant="outline" className="w-full justify-start">
                    Set Price Alerts
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default UserDashboard;

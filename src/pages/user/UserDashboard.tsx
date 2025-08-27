
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, Eye, MessageSquare, TrendingUp } from 'lucide-react';
import UserHeader from '@/components/headers/UserHeader';
import { useAuth } from '@/contexts/AuthContext';
import Footer from '@/components/Footer';

const UserDashboard = () => {
  const { user } = useAuth();
  
  // Mock data - replace with actual data from backend
  const userStats = {
    savedProperties: 5,
    recentViews: 12,
    inquiries: 3,
    alerts: 2
  };

  const recentProperties = [
    { id: 1, title: "Luxury Villa in Beverly Hills", price: "$2,500,000", image: "/placeholder.svg", beds: 4, baths: 3, sqft: 3200 },
    { id: 2, title: "Modern Condo Downtown", price: "$850,000", image: "/placeholder.svg", beds: 2, baths: 2, sqft: 1200 },
    { id: 3, title: "Family Home in Suburbs", price: "$650,000", image: "/placeholder.svg", beds: 3, baths: 2, sqft: 1800 }
  ];

  const recentActivity = [
    { id: 1, type: 'saved', property: 'Luxury Villa in Beverly Hills', time: '2 hours ago' },
    { id: 2, type: 'viewed', property: 'Modern Condo Downtown', time: '1 day ago' },
    { id: 3, type: 'inquiry', property: 'Family Home in Suburbs', time: '3 days ago' }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <UserHeader />
      
      <main className="flex-1 bg-gray-50 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 mt-15">
            <h1 className="text-3xl font-bold text-navy-600 mb-2">Welcome back, {user?.name || 'User'}!</h1>
            <p className="text-gray-600">Here's what's happening with your property search</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Saved Properties</p>
                    <p className="text-3xl font-bold text-navy-600">{userStats.savedProperties}</p>
                    <p className="text-xs text-green-600 mt-1">+2 this week</p>
                  </div>
                  <div className="h-12 w-12 bg-red-100 rounded-full flex items-center justify-center">
                    <Heart className="h-6 w-6 text-red-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Recent Views</p>
                    <p className="text-3xl font-bold text-navy-600">{userStats.recentViews}</p>
                    <p className="text-xs text-green-600 mt-1">+5 this week</p>
                  </div>
                  <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Eye className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Active Inquiries</p>
                    <p className="text-3xl font-bold text-navy-600">{userStats.inquiries}</p>
                    <p className="text-xs text-green-600 mt-1">+1 this week</p>
                  </div>
                  <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center">
                    <MessageSquare className="h-6 w-6 text-green-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Price Alerts</p>
                    <p className="text-3xl font-bold text-navy-600">{userStats.alerts}</p>
                    <p className="text-xs text-orange-600 mt-1">2 new alerts</p>
                  </div>
                  <div className="h-12 w-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-orange-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Properties */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Recently Viewed Properties</span>
                <Link to="/properties">
                  <Button variant="outline" size="sm">Browse All</Button>
                </Link>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recentProperties.map((property) => (
                  <div key={property.id} className="group cursor-pointer">
                    <div className="relative overflow-hidden rounded-lg">
                      <img 
                        src={property.image} 
                        alt={property.title}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="mt-3">
                      <h4 className="font-medium text-navy-600 group-hover:text-gold-500 transition-colors">
                        {property.title}
                      </h4>
                      <p className="text-gold-500 font-semibold text-lg">{property.price}</p>
                                             <div className="mt-2 flex items-center justify-between">
                         <div className="flex items-center space-x-2 text-sm text-gray-600">
                           <span>{property.beds} beds</span>
                           <span>•</span>
                           <span>{property.baths} baths</span>
                           <span>•</span>
                           <span>{property.sqft.toLocaleString()} sqft</span>
                         </div>
                         <Link to={`/property/${property.id}`}>
                           <Button variant="outline" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                             View Details
                           </Button>
                         </Link>
                       </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                    <div className="h-10 w-10 rounded-full flex items-center justify-center">
                      {activity.type === 'saved' && (
                        <div className="h-10 w-10 bg-red-100 rounded-full flex items-center justify-center">
                          <Heart className="h-5 w-5 text-red-600" />
                        </div>
                      )}
                      {activity.type === 'viewed' && (
                        <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <Eye className="h-5 w-5 text-blue-600" />
                        </div>
                      )}
                      {activity.type === 'inquiry' && (
                        <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center">
                          <MessageSquare className="h-5 w-5 text-green-600" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-navy-600">
                        {activity.type === 'saved' && 'Saved property'}
                        {activity.type === 'viewed' && 'Viewed property'}
                        {activity.type === 'inquiry' && 'Sent inquiry'}
                      </p>
                      <p className="text-sm text-gray-600">{activity.property}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-500">{activity.time}</p>
                      <Badge variant="secondary" className="mt-1">
                        {activity.type}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default UserDashboard;

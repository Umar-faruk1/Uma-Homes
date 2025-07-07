import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import AgentHeader from '@/components/headers/AgentHeader';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const AgentDashboard = () => {
  // Mock data - replace with actual data from backend
  const agentStats = {
    activeListings: 12,
    totalInquiries: 25,
    monthlyViews: 1540,
    pendingSales: 3
  };

  const recentInquiries = [
    { id: 1, property: "Luxury Villa in Beverly Hills", client: "Sarah Johnson", date: "2024-01-15", status: "New" },
    { id: 2, property: "Modern Condo Downtown", client: "Mike Chen", date: "2024-01-14", status: "Responded" },
    { id: 3, property: "Family Home in Suburbs", client: "Lisa Williams", date: "2024-01-13", status: "Scheduled" }
  ];

  const topListings = [
    { id: 1, title: "Luxury Villa in Beverly Hills", views: 245, inquiries: 8, price: "$2,500,000" },
    { id: 2, title: "Modern Condo Downtown", views: 189, inquiries: 5, price: "$850,000" },
    { id: 3, title: "Family Home in Suburbs", views: 156, inquiries: 3, price: "$650,000" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <AgentHeader />
      
      <main className="flex-1 bg-gray-50 py-8 pt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-navy-600 mb-2">Agent Dashboard</h1>
            <p className="text-gray-600">Welcome back! Here's your business overview</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Active Listings</p>
                    <p className="text-3xl font-bold text-navy-600">{agentStats.activeListings}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total Inquiries</p>
                    <p className="text-3xl font-bold text-navy-600">{agentStats.totalInquiries}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Monthly Views</p>
                    <p className="text-3xl font-bold text-navy-600">{agentStats.monthlyViews.toLocaleString()}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Pending Sales</p>
                    <p className="text-3xl font-bold text-navy-600">{agentStats.pendingSales}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Recent Inquiries */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Inquiries</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentInquiries.map((inquiry) => (
                    <div key={inquiry.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <h4 className="font-medium text-navy-600">{inquiry.client}</h4>
                        <p className="text-sm text-gray-600">{inquiry.property}</p>
                        <p className="text-xs text-gray-500">{new Date(inquiry.date).toLocaleDateString()}</p>
                      </div>
                      <div className="text-right">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          inquiry.status === 'New' ? 'bg-blue-100 text-blue-800' :
                          inquiry.status === 'Responded' ? 'bg-green-100 text-green-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {inquiry.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Top Performing Listings */}
            <Card>
              <CardHeader>
                <CardTitle>Top Performing Listings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topListings.map((listing) => (
                    <div key={listing.id} className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-medium text-navy-600 mb-2">{listing.title}</h4>
                      <p className="text-gold-500 font-semibold mb-2">{listing.price}</p>
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>{listing.views} views</span>
                        <span>{listing.inquiries} inquiries</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Link to="/agent/listings">
                  <Button className="w-full bg-navy-600 hover:bg-navy-700">
                    Add New Listing
                  </Button>
                </Link>
                <Link to="/agent/listings">
                  <Button variant="outline" className="w-full">
                    Manage Listings
                  </Button>
                </Link>
                <Link to="/agent/analytics">
                  <Button variant="outline" className="w-full">
                    View Analytics
                  </Button>
                </Link>
                <Link to="/agent/profile">
                  <Button variant="outline" className="w-full">
                    Update Profile
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AgentDashboard;

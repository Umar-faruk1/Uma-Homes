
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AgentHeader from '@/components/headers/AgentHeader';
import Footer from '@/components/Footer';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { Eye, MessageCircle, Phone, Star } from 'lucide-react';

const AgentAnalytics = () => {
  const performanceData = [
    { month: 'Jan', views: 45, inquiries: 12, calls: 8 },
    { month: 'Feb', views: 52, inquiries: 15, calls: 10 },
    { month: 'Mar', views: 48, inquiries: 18, calls: 12 },
    { month: 'Apr', views: 61, inquiries: 22, calls: 14 },
    { month: 'May', views: 67, inquiries: 25, calls: 16 },
    { month: 'Jun', views: 72, inquiries: 28, calls: 18 },
  ];

  const listingStats = [
    { title: 'Total Views', value: '1,234', change: '+12%', icon: Eye, color: 'text-blue-600' },
    { title: 'Inquiries', value: '89', change: '+18%', icon: MessageCircle, color: 'text-green-600' },
    { title: 'Phone Calls', value: '45', change: '+8%', icon: Phone, color: 'text-purple-600' },
    { title: 'Average Rating', value: '4.8', change: '+0.2', icon: Star, color: 'text-gold-500' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <AgentHeader />
      
      <main className="flex-1 bg-gray-50 py-8 pt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-navy-600 mb-2">Analytics Dashboard</h1>
            <p className="text-gray-600">Track your listing performance and client engagement</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {listingStats.map((stat) => (
              <Card key={stat.title}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                      <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                      <p className="text-sm text-green-600">{stat.change} from last month</p>
                    </div>
                    <stat.icon className={`h-8 w-8 ${stat.color}`} />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Performance Trends */}
            <Card>
              <CardHeader>
                <CardTitle>Monthly Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={performanceData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="views" stroke="#1a365d" strokeWidth={2} />
                    <Line type="monotone" dataKey="inquiries" stroke="#d4af37" strokeWidth={2} />
                    <Line type="monotone" dataKey="calls" stroke="#16a34a" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                    <Eye className="text-blue-600" size={20} />
                    <div>
                      <p className="font-medium">New listing view</p>
                      <p className="text-sm text-gray-600">Luxury Villa in Beverly Hills - 2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                    <MessageCircle className="text-green-600" size={20} />
                    <div>
                      <p className="font-medium">New inquiry received</p>
                      <p className="text-sm text-gray-600">Modern Condo Downtown - 4 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg">
                    <Phone className="text-purple-600" size={20} />
                    <div>
                      <p className="font-medium">Scheduled viewing</p>
                      <p className="text-sm text-gray-600">Family Home in Suburbs - 1 day ago</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Listing Performance */}
          <Card>
            <CardHeader>
              <CardTitle>Listing Performance Comparison</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="views" fill="#1a365d" />
                  <Bar dataKey="inquiries" fill="#d4af37" />
                  <Bar dataKey="calls" fill="#16a34a" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AgentAnalytics;

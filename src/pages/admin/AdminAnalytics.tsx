
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AdminHeader from '@/components/headers/AdminHeader';
import Footer from '@/components/Footer';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, Users, Building, DollarSign, Activity } from 'lucide-react';

const AdminAnalytics = () => {
  const monthlyData = [
    { month: 'Jan', users: 120, properties: 45, revenue: 85000 },
    { month: 'Feb', users: 135, properties: 52, revenue: 92000 },
    { month: 'Mar', users: 148, properties: 58, revenue: 105000 },
    { month: 'Apr', users: 162, properties: 64, revenue: 118000 },
    { month: 'May', users: 178, properties: 71, revenue: 125000 },
    { month: 'Jun', users: 195, properties: 78, revenue: 142000 },
  ];

  const propertyTypes = [
    { name: 'Houses', value: 45, color: '#1a365d' },
    { name: 'Apartments', value: 30, color: '#d4af37' },
    { name: 'Villas', value: 15, color: '#2d5a87' },
    { name: 'Condos', value: 10, color: '#b8860b' },
  ];

  const stats = [
    { title: 'Total Revenue', value: '$2.4M', change: '+12%', icon: DollarSign, color: 'text-green-600' },
    { title: 'Active Users', value: '1,234', change: '+8%', icon: Users, color: 'text-blue-600' },
    { title: 'Properties Listed', value: '456', change: '+15%', icon: Building, color: 'text-purple-600' },
    { title: 'Monthly Growth', value: '23%', change: '+5%', icon: TrendingUp, color: 'text-gold-500' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <AdminHeader />
      
      <main className="flex-1 bg-gray-50 py-8 pt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-navy-600 mb-2">Analytics Dashboard</h1>
            <p className="text-gray-600">Platform performance and insights</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat) => (
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
            {/* Monthly Trends */}
            <Card>
              <CardHeader>
                <CardTitle>Monthly Trends</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="users" stroke="#1a365d" strokeWidth={2} />
                    <Line type="monotone" dataKey="properties" stroke="#d4af37" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Property Types Distribution */}
            <Card>
              <CardHeader>
                <CardTitle>Property Types</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={propertyTypes}
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {propertyTypes.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Revenue Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Monthly Revenue</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, 'Revenue']} />
                  <Bar dataKey="revenue" fill="#d4af37" />
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

export default AdminAnalytics;

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import AdminHeader from '@/components/headers/AdminHeader';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  const systemStats = {
    totalUsers: 1247,
    totalAgents: 89,
    totalProperties: 567,
    pendingApprovals: 12,
    monthlyRevenue: 125000,
    activeTransactions: 34
  };

  const recentActivity = [
    { id: 1, type: 'New Agent', description: 'Sarah Johnson registered as agent', time: '2 hours ago' },
    { id: 2, type: 'Property Added', description: 'Luxury Villa in Beverly Hills listed', time: '4 hours ago' },
    { id: 3, type: 'User Registration', description: 'New user Mike Chen registered', time: '6 hours ago' },
    { id: 4, type: 'Transaction', description: 'Property sale completed - $850,000', time: '1 day ago' }
  ];

  const pendingItems = [
    { id: 1, type: 'Agent Verification', description: 'John Smith - License verification pending', priority: 'High' },
    { id: 2, type: 'Property Review', description: 'Downtown Condo - Review required', priority: 'Medium' },
    { id: 3, type: 'User Report', description: 'Inappropriate listing reported', priority: 'High' }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <AdminHeader />
      
      <main className="flex-1 bg-gray-50 py-8 pt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-navy-600 mb-2">Admin Dashboard</h1>
            <p className="text-gray-600">System overview and management</p>
          </div>

          {/* System Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="text-center">
                  <p className="text-sm font-medium text-gray-600">Total Users</p>
                  <p className="text-3xl font-bold text-navy-600">{systemStats.totalUsers.toLocaleString()}</p>
                  <p className="text-sm text-green-600">+8.2% this month</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="text-center">
                  <p className="text-sm font-medium text-gray-600">Active Agents</p>
                  <p className="text-3xl font-bold text-navy-600">{systemStats.totalAgents}</p>
                  <p className="text-sm text-green-600">+12 this month</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="text-center">
                  <p className="text-sm font-medium text-gray-600">Total Properties</p>
                  <p className="text-3xl font-bold text-navy-600">{systemStats.totalProperties}</p>
                  <p className="text-sm text-green-600">+45 this month</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="text-center">
                  <p className="text-sm font-medium text-gray-600">Pending Approvals</p>
                  <p className="text-3xl font-bold text-orange-600">{systemStats.pendingApprovals}</p>
                  <p className="text-sm text-orange-600">Requires attention</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="text-center">
                  <p className="text-sm font-medium text-gray-600">Monthly Revenue</p>
                  <p className="text-3xl font-bold text-navy-600">${systemStats.monthlyRevenue.toLocaleString()}</p>
                  <p className="text-sm text-green-600">+15.3% this month</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="text-center">
                  <p className="text-sm font-medium text-gray-600">Active Transactions</p>
                  <p className="text-3xl font-bold text-navy-600">{systemStats.activeTransactions}</p>
                  <p className="text-sm text-blue-600">In progress</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity) => (
                    <div key={activity.id} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            activity.type === 'New Agent' ? 'bg-blue-100 text-blue-800' :
                            activity.type === 'Property Added' ? 'bg-green-100 text-green-800' :
                            activity.type === 'User Registration' ? 'bg-purple-100 text-purple-800' :
                            'bg-gold-100 text-gold-800'
                          }`}>
                            {activity.type}
                          </span>
                          <span className="text-xs text-gray-500">{activity.time}</span>
                        </div>
                        <p className="text-sm text-gray-700 mt-1">{activity.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Pending Items */}
            <Card>
              <CardHeader>
                <CardTitle>Pending Items</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {pendingItems.map((item) => (
                    <div key={item.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="text-sm font-medium text-navy-600">{item.type}</span>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            item.priority === 'High' ? 'bg-red-100 text-red-800' :
                            'bg-yellow-100 text-yellow-800'
                          }`}>
                            {item.priority}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                      <Button size="sm" variant="outline">
                        Review
                      </Button>
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
                <Link to="/admin/users">
                  <Button className="w-full bg-navy-600 hover:bg-navy-700">
                    Manage Users
                  </Button>
                </Link>
                <Link to="/admin/properties">
                  <Button variant="outline" className="w-full">
                    Review Properties
                  </Button>
                </Link>
                <Link to="/admin/analytics">
                  <Button variant="outline" className="w-full">
                    View Analytics
                  </Button>
                </Link>
                <Button variant="outline" className="w-full">
                  System Settings
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AdminDashboard;


import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import AdminHeader from '@/components/headers/AdminHeader';
import UserManagementModal from '@/components/modals/UserManagementModal';
import Footer from '@/components/Footer';
import { Users, UserPlus, Shield, Activity } from 'lucide-react';

const AdminUsers = () => {
  const stats = [
    { title: 'Total Users', value: '1,234', icon: Users, color: 'text-blue-600' },
    { title: 'Active Users', value: '1,156', icon: Activity, color: 'text-green-600' },
    { title: 'Agents', value: '89', icon: Shield, color: 'text-gold-500' },
    { title: 'New This Month', value: '47', icon: UserPlus, color: 'text-purple-600' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <AdminHeader />
      
      <main className="flex-1 bg-gray-50 py-8 pt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-navy-600 mb-2">User Management</h1>
              <p className="text-gray-600">Manage all users, agents, and administrators</p>
            </div>
            <UserManagementModal />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat) => (
              <Card key={stat.title}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                      <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    </div>
                    <stat.icon className={`h-8 w-8 ${stat.color}`} />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Recent User Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <UserPlus size={16} className="text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium">New user registered</p>
                      <p className="text-sm text-gray-600">john.doe@example.com joined</p>
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">2 hours ago</span>
                </div>
                
                <div className="flex items-center justify-between py-3 border-b">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <Shield size={16} className="text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium">Agent application approved</p>
                      <p className="text-sm text-gray-600">jane.smith@example.com is now an agent</p>
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">5 hours ago</span>
                </div>
                
                <div className="flex items-center justify-between py-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                      <Users size={16} className="text-red-600" />
                    </div>
                    <div>
                      <p className="font-medium">User account suspended</p>
                      <p className="text-sm text-gray-600">spam.user@example.com violated terms</p>
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">1 day ago</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AdminUsers;

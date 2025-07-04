
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const AdminUsers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');

  // Mock users data
  const users = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      type: "User",
      status: "Active",
      joinDate: "2024-01-15",
      lastActive: "2024-01-20",
      properties: 0,
      inquiries: 5
    },
    {
      id: 2,
      name: "Sarah Johnson",
      email: "sarah.johnson@example.com",
      type: "Agent",
      status: "Active",
      joinDate: "2024-01-10",
      lastActive: "2024-01-20",
      properties: 12,
      inquiries: 25,
      licenseNumber: "DRE#12345678",
      verified: true
    },
    {
      id: 3,
      name: "Mike Chen",
      email: "mike.chen@example.com",
      type: "User",
      status: "Active",
      joinDate: "2024-01-18",
      lastActive: "2024-01-19",
      properties: 0,
      inquiries: 2
    },
    {
      id: 4,
      name: "Lisa Williams",
      email: "lisa.williams@example.com",
      type: "Agent",
      status: "Pending",
      joinDate: "2024-01-19",
      lastActive: "2024-01-19",
      properties: 0,
      inquiries: 0,
      licenseNumber: "DRE#87654321",
      verified: false
    }
  ];

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === 'all' || user.type.toLowerCase() === filterType;
    return matchesSearch && matchesFilter;
  });

  const handleStatusChange = (userId: number, newStatus: string) => {
    console.log(`Changing status of user ${userId} to ${newStatus}`);
    // TODO: Implement actual status change logic
  };

  const handleVerifyAgent = (userId: number) => {
    console.log(`Verifying agent ${userId}`);
    // TODO: Implement actual agent verification logic
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 bg-gray-50 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-navy-600 mb-2">User Management</h1>
            <p className="text-gray-600">Manage users and agents ({filteredUsers.length} total)</p>
          </div>

          {/* Filters */}
          <Card className="mb-6">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <Input
                    placeholder="Search users by name or email..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <div className="flex gap-2">
                  <Button
                    variant={filterType === 'all' ? 'default' : 'outline'}
                    onClick={() => setFilterType('all')}
                    size="sm"
                  >
                    All
                  </Button>
                  <Button
                    variant={filterType === 'user' ? 'default' : 'outline'}
                    onClick={() => setFilterType('user')}
                    size="sm"
                  >
                    Users
                  </Button>
                  <Button
                    variant={filterType === 'agent' ? 'default' : 'outline'}
                    onClick={() => setFilterType('agent')}
                    size="sm"
                  >
                    Agents
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Users Table */}
          <Card>
            <CardHeader>
              <CardTitle>Users & Agents</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3">Name</th>
                      <th className="text-left py-3">Email</th>
                      <th className="text-left py-3">Type</th>
                      <th className="text-left py-3">Status</th>
                      <th className="text-left py-3">Join Date</th>
                      <th className="text-left py-3">Properties</th>
                      <th className="text-left py-3">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredUsers.map((user) => (
                      <tr key={user.id} className="border-b hover:bg-gray-50">
                        <td className="py-4">
                          <div>
                            <p className="font-medium text-navy-600">{user.name}</p>
                            {user.type === 'Agent' && user.licenseNumber && (
                              <p className="text-xs text-gray-500">{user.licenseNumber}</p>
                            )}
                          </div>
                        </td>
                        <td className="py-4 text-gray-600">{user.email}</td>
                        <td className="py-4">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            user.type === 'Agent' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'
                          }`}>
                            {user.type}
                          </span>
                        </td>
                        <td className="py-4">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            user.status === 'Active' ? 'bg-green-100 text-green-800' :
                            user.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {user.status}
                          </span>
                          {user.type === 'Agent' && user.verified === false && (
                            <span className="ml-2 px-2 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                              Unverified
                            </span>
                          )}
                        </td>
                        <td className="py-4 text-gray-600">
                          {new Date(user.joinDate).toLocaleDateString()}
                        </td>
                        <td className="py-4 text-gray-600">
                          {user.properties} listings
                        </td>
                        <td className="py-4">
                          <div className="flex gap-2">
                            {user.type === 'Agent' && user.verified === false && (
                              <Button
                                size="sm"
                                onClick={() => handleVerifyAgent(user.id)}
                                className="bg-green-600 hover:bg-green-700"
                              >
                                Verify
                              </Button>
                            )}
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleStatusChange(user.id, user.status === 'Active' ? 'Suspended' : 'Active')}
                            >
                              {user.status === 'Active' ? 'Suspend' : 'Activate'}
                            </Button>
                            <Button size="sm" variant="outline">
                              View
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
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

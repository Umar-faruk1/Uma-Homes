
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import AdminHeader from '@/components/headers/AdminHeader';
import Footer from '@/components/Footer';

const AdminProperties = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  // Mock properties data
  const properties = [
    {
      id: 1,
      title: "Luxury Villa in Beverly Hills",
      agent: "Sarah Johnson",
      price: "$2,500,000",
      location: "Beverly Hills, CA",
      status: "Active",
      dateAdded: "2024-01-15",
      views: 245,
      inquiries: 8,
      flagged: false
    },
    {
      id: 2,
      title: "Modern Condo Downtown",
      agent: "Mike Smith",
      price: "$850,000",
      location: "Downtown LA, CA",
      status: "Pending Review",
      dateAdded: "2024-01-18",
      views: 189,
      inquiries: 5,
      flagged: true,
      flagReason: "Suspicious pricing"
    },
    {
      id: 3,
      title: "Family Home in Suburbs",
      agent: "Lisa Williams",
      price: "$650,000",
      location: "Pasadena, CA",
      status: "Active",
      dateAdded: "2024-01-16",
      views: 156,
      inquiries: 3,
      flagged: false
    },
    {
      id: 4,
      title: "Waterfront Apartment",
      agent: "John Davis",
      price: "$1,200,000",
      location: "Marina del Rey, CA",
      status: "Suspended",
      dateAdded: "2024-01-12",
      views: 89,
      inquiries: 2,
      flagged: true,
      flagReason: "Duplicate listing reported"
    }
  ];

  const filteredProperties = properties.filter(property => {
    const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         property.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         property.agent.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || 
                         (filterStatus === 'flagged' && property.flagged) ||
                         property.status.toLowerCase().replace(' ', '_') === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const handleStatusChange = (propertyId: number, newStatus: string) => {
    console.log(`Changing status of property ${propertyId} to ${newStatus}`);
    // TODO: Implement actual status change logic
  };

  const handleUnflag = (propertyId: number) => {
    console.log(`Unflagging property ${propertyId}`);
    // TODO: Implement actual unflag logic
  };

  return (
    <div className="min-h-screen flex flex-col">
      <AdminHeader />
      
      <main className="flex-1 bg-gray-50 py-8 pt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-navy-600 mb-2">Property Management</h1>
            <p className="text-gray-600">Review and manage property listings ({filteredProperties.length} total)</p>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            <Card>
              <CardContent className="p-4 text-center">
                <p className="text-2xl font-bold text-navy-600">{properties.length}</p>
                <p className="text-sm text-gray-600">Total Properties</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <p className="text-2xl font-bold text-green-600">
                  {properties.filter(p => p.status === 'Active').length}
                </p>
                <p className="text-sm text-gray-600">Active</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <p className="text-2xl font-bold text-yellow-600">
                  {properties.filter(p => p.status === 'Pending Review').length}
                </p>
                <p className="text-sm text-gray-600">Pending Review</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <p className="text-2xl font-bold text-red-600">
                  {properties.filter(p => p.flagged).length}
                </p>
                <p className="text-sm text-gray-600">Flagged</p>
              </CardContent>
            </Card>
          </div>

          {/* Filters */}
          <Card className="mb-6">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <Input
                    placeholder="Search properties by title, location, or agent..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <div className="flex gap-2 flex-wrap">
                  <Button
                    variant={filterStatus === 'all' ? 'default' : 'outline'}
                    onClick={() => setFilterStatus('all')}
                    size="sm"
                  >
                    All
                  </Button>
                  <Button
                    variant={filterStatus === 'active' ? 'default' : 'outline'}
                    onClick={() => setFilterStatus('active')}
                    size="sm"
                  >
                    Active
                  </Button>
                  <Button
                    variant={filterStatus === 'pending_review' ? 'default' : 'outline'}
                    onClick={() => setFilterStatus('pending_review')}
                    size="sm"
                  >
                    Pending
                  </Button>
                  <Button
                    variant={filterStatus === 'flagged' ? 'default' : 'outline'}
                    onClick={() => setFilterStatus('flagged')}
                    size="sm"
                  >
                    Flagged
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Properties Table */}
          <Card>
            <CardHeader>
              <CardTitle>Property Listings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3">Property</th>
                      <th className="text-left py-3">Agent</th>
                      <th className="text-left py-3">Price</th>
                      <th className="text-left py-3">Status</th>
                      <th className="text-left py-3">Performance</th>
                      <th className="text-left py-3">Date Added</th>
                      <th className="text-left py-3">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredProperties.map((property) => (
                      <tr key={property.id} className="border-b hover:bg-gray-50">
                        <td className="py-4">
                          <div>
                            <p className="font-medium text-navy-600">{property.title}</p>
                            <p className="text-sm text-gray-500">{property.location}</p>
                            {property.flagged && (
                              <p className="text-xs text-red-600 mt-1">
                                🚩 {property.flagReason}
                              </p>
                            )}
                          </div>
                        </td>
                        <td className="py-4 text-gray-600">{property.agent}</td>
                        <td className="py-4 font-semibold text-gold-500">{property.price}</td>
                        <td className="py-4">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            property.status === 'Active' ? 'bg-green-100 text-green-800' :
                            property.status === 'Pending Review' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {property.status}
                          </span>
                        </td>
                        <td className="py-4">
                          <div className="text-sm text-gray-600">
                            <p>{property.views} views</p>
                            <p>{property.inquiries} inquiries</p>
                          </div>
                        </td>
                        <td className="py-4 text-gray-600">
                          {new Date(property.dateAdded).toLocaleDateString()}
                        </td>
                        <td className="py-4">
                          <div className="flex gap-2 flex-wrap">
                            {property.status === 'Pending Review' && (
                              <>
                                <Button
                                  size="sm"
                                  onClick={() => handleStatusChange(property.id, 'Active')}
                                  className="bg-green-600 hover:bg-green-700"
                                >
                                  Approve
                                </Button>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() => handleStatusChange(property.id, 'Rejected')}
                                >
                                  Reject
                                </Button>
                              </>
                            )}
                            {property.flagged && (
                              <Button
                                size="sm"
                                onClick={() => handleUnflag(property.id)}
                                className="bg-blue-600 hover:bg-blue-700"
                              >
                                Unflag
                              </Button>
                            )}
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleStatusChange(property.id, property.status === 'Active' ? 'Suspended' : 'Active')}
                            >
                              {property.status === 'Active' ? 'Suspend' : 'Activate'}
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

export default AdminProperties;

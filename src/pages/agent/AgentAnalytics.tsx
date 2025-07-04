
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const AgentAnalytics = () => {
  // Mock analytics data
  const monthlyStats = {
    listings: [
      { month: 'Jan', count: 8 },
      { month: 'Feb', count: 12 },
      { month: 'Mar', count: 15 },
      { month: 'Apr', count: 10 },
      { month: 'May', count: 18 },
      { month: 'Jun', count: 14 }
    ],
    views: [
      { month: 'Jan', count: 1200 },
      { month: 'Feb', count: 1800 },
      { month: 'Mar', count: 2200 },
      { month: 'Apr', count: 1600 },
      { month: 'May', count: 2800 },
      { month: 'Jun', count: 2400 }
    ]
  };

  const performanceMetrics = {
    totalListings: 45,
    activeSales: 8,
    avgDaysOnMarket: 25,
    totalCommission: 125000,
    conversionRate: 15.2,
    clientSatisfaction: 4.8
  };

  const topListings = [
    { title: "Luxury Villa in Beverly Hills", views: 245, inquiries: 8, price: "$2,500,000" },
    { title: "Modern Condo Downtown", views: 189, inquiries: 5, price: "$850,000" },
    { title: "Family Home in Suburbs", views: 156, inquiries: 3, price: "$650,000" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 bg-gray-50 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-navy-600 mb-2">Analytics Dashboard</h1>
            <p className="text-gray-600">Track your performance and business insights</p>
          </div>

          {/* Key Performance Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="text-center">
                  <p className="text-sm font-medium text-gray-600">Total Listings</p>
                  <p className="text-3xl font-bold text-navy-600">{performanceMetrics.totalListings}</p>
                  <p className="text-sm text-green-600">+12% from last month</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="text-center">
                  <p className="text-sm font-medium text-gray-600">Active Sales</p>
                  <p className="text-3xl font-bold text-navy-600">{performanceMetrics.activeSales}</p>
                  <p className="text-sm text-green-600">+25% from last month</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="text-center">
                  <p className="text-sm font-medium text-gray-600">Avg Days on Market</p>
                  <p className="text-3xl font-bold text-navy-600">{performanceMetrics.avgDaysOnMarket}</p>
                  <p className="text-sm text-red-600">+3 days from last month</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="text-center">
                  <p className="text-sm font-medium text-gray-600">Total Commission</p>
                  <p className="text-3xl font-bold text-navy-600">${performanceMetrics.totalCommission.toLocaleString()}</p>
                  <p className="text-sm text-green-600">+18% from last month</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="text-center">
                  <p className="text-sm font-medium text-gray-600">Conversion Rate</p>
                  <p className="text-3xl font-bold text-navy-600">{performanceMetrics.conversionRate}%</p>
                  <p className="text-sm text-green-600">+2.1% from last month</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="text-center">
                  <p className="text-sm font-medium text-gray-600">Client Satisfaction</p>
                  <p className="text-3xl font-bold text-navy-600">{performanceMetrics.clientSatisfaction}/5</p>
                  <p className="text-sm text-green-600">+0.2 from last month</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Monthly Listings Chart */}
            <Card>
              <CardHeader>
                <CardTitle>Monthly Listings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {monthlyStats.listings.map((item) => (
                    <div key={item.month} className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-600">{item.month}</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-32 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-navy-600 h-2 rounded-full" 
                            style={{ width: `${(item.count / 20) * 100}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-semibold text-navy-600">{item.count}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Monthly Views Chart */}
            <Card>
              <CardHeader>
                <CardTitle>Monthly Property Views</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {monthlyStats.views.map((item) => (
                    <div key={item.month} className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-600">{item.month}</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-32 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-gold-500 h-2 rounded-full" 
                            style={{ width: `${(item.count / 3000) * 100}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-semibold text-gold-500">{item.count.toLocaleString()}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Top Performing Listings */}
          <Card>
            <CardHeader>
              <CardTitle>Top Performing Listings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2">Property</th>
                      <th className="text-right py-2">Price</th>
                      <th className="text-right py-2">Views</th>
                      <th className="text-right py-2">Inquiries</th>
                      <th className="text-right py-2">Conversion</th>
                    </tr>
                  </thead>
                  <tbody>
                    {topListings.map((listing, index) => (
                      <tr key={index} className="border-b">
                        <td className="py-3 text-navy-600 font-medium">{listing.title}</td>
                        <td className="text-right py-3 text-gold-500 font-semibold">{listing.price}</td>
                        <td className="text-right py-3">{listing.views}</td>
                        <td className="text-right py-3">{listing.inquiries}</td>
                        <td className="text-right py-3">
                          {((listing.inquiries / listing.views) * 100).toFixed(1)}%
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

export default AgentAnalytics;

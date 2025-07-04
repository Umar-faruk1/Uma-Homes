
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const AdminAnalytics = () => {
  // Mock analytics data
  const platformStats = {
    totalRevenue: 2450000,
    monthlyGrowth: 15.3,
    userGrowth: 8.2,
    agentGrowth: 12.5,
    propertyGrowth: 18.7,
    conversionRate: 12.8
  };

  const monthlyData = [
    { month: 'Jan', users: 850, agents: 45, properties: 320, revenue: 185000 },
    { month: 'Feb', users: 920, agents: 52, properties: 380, revenue: 220000 },
    { month: 'Mar', users: 1050, agents: 63, properties: 445, revenue: 285000 },
    { month: 'Apr', users: 1180, agents: 71, properties: 495, revenue: 325000 },
    { month: 'May', users: 1280, agents: 82, properties: 540, revenue: 380000 },
    { month: 'Jun', users: 1380, agents: 89, properties: 567, revenue: 425000 }
  ];

  const topPerformingAgents = [
    { name: "Sarah Johnson", listings: 25, sales: 8, revenue: 85000 },
    { name: "Mike Smith", listings: 22, sales: 6, revenue: 72000 },
    { name: "Lisa Williams", listings: 18, sales: 5, revenue: 58000 },
    { name: "John Davis", listings: 16, sales: 4, revenue: 45000 },
    { name: "Emma Brown", listings: 14, sales: 3, revenue: 38000 }
  ];

  const topCities = [
    { city: "Beverly Hills", properties: 89, avgPrice: "$2,100,000" },
    { city: "Santa Monica", properties: 76, avgPrice: "$1,800,000" },
    { city: "Manhattan Beach", properties: 54, avgPrice: "$2,500,000" },
    { city: "Pasadena", properties: 67, avgPrice: "$950,000" },
    { city: "West Hollywood", properties: 43, avgPrice: "$1,200,000" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 bg-gray-50 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-navy-600 mb-2">Platform Analytics</h1>
            <p className="text-gray-600">Comprehensive business intelligence and insights</p>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="text-center">
                  <p className="text-sm font-medium text-gray-600">Total Revenue</p>
                  <p className="text-3xl font-bold text-navy-600">
                    ${platformStats.totalRevenue.toLocaleString()}
                  </p>
                  <p className="text-sm text-green-600">+{platformStats.monthlyGrowth}% this month</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="text-center">
                  <p className="text-sm font-medium text-gray-600">User Growth</p>
                  <p className="text-3xl font-bold text-navy-600">+{platformStats.userGrowth}%</p>
                  <p className="text-sm text-green-600">Monthly increase</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="text-center">
                  <p className="text-sm font-medium text-gray-600">Agent Growth</p>
                  <p className="text-3xl font-bold text-navy-600">+{platformStats.agentGrowth}%</p>
                  <p className="text-sm text-green-600">Monthly increase</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="text-center">
                  <p className="text-sm font-medium text-gray-600">Property Growth</p>
                  <p className="text-3xl font-bold text-navy-600">+{platformStats.propertyGrowth}%</p>
                  <p className="text-sm text-green-600">Monthly increase</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="text-center">
                  <p className="text-sm font-medium text-gray-600">Conversion Rate</p>
                  <p className="text-3xl font-bold text-navy-600">{platformStats.conversionRate}%</p>
                  <p className="text-sm text-green-600">Inquiry to sale</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="text-center">
                  <p className="text-sm font-medium text-gray-600">Avg. Commission</p>
                  <p className="text-3xl font-bold text-navy-600">$12,500</p>
                  <p className="text-sm text-blue-600">Per transaction</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Monthly Growth Chart */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Monthly Platform Growth</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-navy-600 mb-4">Users & Agents</h4>
                  <div className="space-y-4">
                    {monthlyData.map((data) => (
                      <div key={data.month} className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-600 w-12">{data.month}</span>
                        <div className="flex items-center space-x-4 flex-1 ml-4">
                          <div className="flex items-center space-x-2 flex-1">
                            <div className="w-24 bg-gray-200 rounded-full h-2">
                              <div 
                                className="bg-navy-600 h-2 rounded-full" 
                                style={{ width: `${(data.users / 1500) * 100}%` }}
                              ></div>
                            </div>
                            <span className="text-sm text-navy-600 w-16">{data.users} users</span>
                          </div>
                          <div className="flex items-center space-x-2 flex-1">
                            <div className="w-24 bg-gray-200 rounded-full h-2">
                              <div 
                                className="bg-gold-500 h-2 rounded-full" 
                                style={{ width: `${(data.agents / 100) * 100}%` }}
                              ></div>
                            </div>
                            <span className="text-sm text-gold-500 w-16">{data.agents} agents</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-navy-600 mb-4">Properties & Revenue</h4>
                  <div className="space-y-4">
                    {monthlyData.map((data) => (
                      <div key={data.month} className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-600 w-12">{data.month}</span>
                        <div className="flex items-center space-x-4 flex-1 ml-4">
                          <div className="flex items-center space-x-2 flex-1">
                            <div className="w-24 bg-gray-200 rounded-full h-2">
                              <div 
                                className="bg-green-600 h-2 rounded-full" 
                                style={{ width: `${(data.properties / 600) * 100}%` }}
                              ></div>
                            </div>
                            <span className="text-sm text-green-600 w-20">{data.properties} props</span>
                          </div>
                          <div className="flex items-center space-x-2 flex-1">
                            <div className="w-24 bg-gray-200 rounded-full h-2">
                              <div 
                                className="bg-purple-600 h-2 rounded-full" 
                                style={{ width: `${(data.revenue / 500000) * 100}%` }}
                              ></div>
                            </div>
                            <span className="text-sm text-purple-600 w-20">${(data.revenue / 1000).toFixed(0)}k</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Top Performing Agents */}
            <Card>
              <CardHeader>
                <CardTitle>Top Performing Agents</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topPerformingAgents.map((agent, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-navy-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          {index + 1}
                        </div>
                        <div>
                          <p className="font-medium text-navy-600">{agent.name}</p>
                          <p className="text-sm text-gray-600">{agent.listings} listings • {agent.sales} sales</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-gold-500">${agent.revenue.toLocaleString()}</p>
                        <p className="text-xs text-gray-500">commission</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Top Cities */}
            <Card>
              <CardHeader>
                <CardTitle>Top Cities by Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topCities.map((city, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gold-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          {index + 1}
                        </div>
                        <div>
                          <p className="font-medium text-navy-600">{city.city}</p>
                          <p className="text-sm text-gray-600">{city.properties} properties</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-green-600">{city.avgPrice}</p>
                        <p className="text-xs text-gray-500">avg price</p>
                      </div>
                    </div>
                  ))}
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

export default AdminAnalytics;

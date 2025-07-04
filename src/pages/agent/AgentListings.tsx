
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface ListingForm {
  title: string;
  price: string;
  description: string;
  bedrooms: string;
  bathrooms: string;
  sqft: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
}

const AgentListings = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const form = useForm<ListingForm>();

  // Mock listings data
  const listings = [
    {
      id: 1,
      title: "Luxury Villa in Beverly Hills",
      price: "$2,500,000",
      location: "Beverly Hills, CA",
      bedrooms: 5,
      bathrooms: 4,
      sqft: 4500,
      status: "Active",
      views: 245,
      inquiries: 8,
      image: "/placeholder.svg"
    },
    {
      id: 2,
      title: "Modern Condo Downtown",
      price: "$850,000",
      location: "Downtown LA, CA",
      bedrooms: 2,
      bathrooms: 2,
      sqft: 1200,
      status: "Active",
      views: 189,
      inquiries: 5,
      image: "/placeholder.svg"
    },
    {
      id: 3,
      title: "Family Home in Suburbs",
      price: "$650,000",
      location: "Pasadena, CA",
      bedrooms: 4,
      bathrooms: 3,
      sqft: 2800,
      status: "Pending",
      views: 156,
      inquiries: 3,
      image: "/placeholder.svg"
    }
  ];

  const onSubmit = (data: ListingForm) => {
    console.log('New listing:', data);
    setIsDialogOpen(false);
    form.reset();
    // TODO: Implement actual listing creation logic
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 bg-gray-50 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-navy-600 mb-2">My Listings</h1>
              <p className="text-gray-600">Manage your property listings ({listings.length})</p>
            </div>
            
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button className="bg-navy-600 hover:bg-navy-700">
                  Add New Listing
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Create New Listing</DialogTitle>
                </DialogHeader>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="title"
                      rules={{ required: 'Title is required' }}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Property Title</FormLabel>
                          <FormControl>
                            <Input placeholder="Beautiful family home..." {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="price"
                        rules={{ required: 'Price is required' }}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Price</FormLabel>
                            <FormControl>
                              <Input placeholder="$750,000" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="sqft"
                        rules={{ required: 'Square footage is required' }}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Square Feet</FormLabel>
                            <FormControl>
                              <Input placeholder="2500" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="bedrooms"
                        rules={{ required: 'Bedrooms is required' }}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Bedrooms</FormLabel>
                            <FormControl>
                              <Input placeholder="3" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="bathrooms"
                        rules={{ required: 'Bathrooms is required' }}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Bathrooms</FormLabel>
                            <FormControl>
                              <Input placeholder="2" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="address"
                      rules={{ required: 'Address is required' }}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Address</FormLabel>
                          <FormControl>
                            <Input placeholder="123 Main St" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <FormField
                        control={form.control}
                        name="city"
                        rules={{ required: 'City is required' }}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>City</FormLabel>
                            <FormControl>
                              <Input placeholder="Los Angeles" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="state"
                        rules={{ required: 'State is required' }}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>State</FormLabel>
                            <FormControl>
                              <Input placeholder="CA" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="zipCode"
                        rules={{ required: 'ZIP code is required' }}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>ZIP Code</FormLabel>
                            <FormControl>
                              <Input placeholder="90210" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="flex gap-4 pt-4">
                      <Button type="submit" className="bg-navy-600 hover:bg-navy-700">
                        Create Listing
                      </Button>
                      <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                        Cancel
                      </Button>
                    </div>
                  </form>
                </Form>
              </DialogContent>
            </Dialog>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {listings.map((listing) => (
              <Card key={listing.id} className="overflow-hidden">
                <div className="relative">
                  <img 
                    src={listing.image} 
                    alt={listing.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      listing.status === 'Active' ? 'bg-green-100 text-green-800' :
                      listing.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {listing.status}
                    </span>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-navy-600 mb-2">{listing.title}</h3>
                    <p className="text-2xl font-bold text-gold-500 mb-2">{listing.price}</p>
                    <p className="text-gray-600 mb-2">{listing.location}</p>
                  </div>
                  
                  <div className="flex justify-between text-sm text-gray-600 mb-4">
                    <span>{listing.bedrooms} beds</span>
                    <span>{listing.bathrooms} baths</span>
                    <span>{listing.sqft.toLocaleString()} sqft</span>
                  </div>
                  
                  <div className="flex justify-between text-sm text-gray-600 mb-4">
                    <span>{listing.views} views</span>
                    <span>{listing.inquiries} inquiries</span>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      Edit
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      View
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1 text-red-600 hover:text-red-700">
                      Delete
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AgentListings;

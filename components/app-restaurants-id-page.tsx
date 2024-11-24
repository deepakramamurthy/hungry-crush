'use client'

import { useState, useEffect, useParams as useReactParams, use } from 'react'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface Restaurant {
  _id: string;
  name: string;
  cuisine: string;
  description: string;
  image: string;
  address: string;
  phone: string;
  email: string;
  website: string;
  openingHours: string;
}

interface MenuItem {
  _id: string;
  name: string;
  description: string;
  price: number;
  category: string;
}

const fetchRestaurant = async (id: string): Promise<Restaurant> => {
  // This is a mock function. Replace with actual API call later.
  return {
    _id: id,
    name: "Sample Restaurant",
    cuisine: "International",
    description: "A fantastic dining experience with a variety of cuisines.",
    image: "/placeholder.svg?height=400&width=600",
    address: "123 Food Street, Culinary City, CC 12345",
    phone: "(123) 456-7890",
    email: "info@samplerestaurant.com",
    website: "https://www.samplerestaurant.com",
    openingHours: "Mon-Sat: 11:00 AM - 10:00 PM, Sun: Closed"
  };
};

const fetchMenuItems = async (id: string): Promise<MenuItem[]> => {
  // This is a mock function. Replace with actual API call later.
  return [
    { _id: "1", name: "Margherita Pizza", description: "Classic tomato and mozzarella pizza", price: 12.99, category: "Main Course" },
    { _id: "2", name: "Caesar Salad", description: "Crisp romaine lettuce with Caesar dressing", price: 8.99, category: "Starters" },
    { _id: "3", name: "Tiramisu", description: "Classic Italian coffee-flavored dessert", price: 6.99, category: "Desserts" },
  ];
};

export function BlockPage() {
  const params = useParams();
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  useEffect(() => {
    const { id } = use(params);
    fetchRestaurant(id).then(setRestaurant);
    fetchMenuItems(id).then(setMenuItems);
  }, [id]);

  if (!restaurant) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <Image
            src={restaurant.image}
            alt={restaurant.name}
            width={600}
            height={400}
            className="w-full h-64 object-cover rounded-t-lg"
          />
          <CardTitle className="text-3xl font-bold">{restaurant.name}</CardTitle>
          <CardDescription>{restaurant.cuisine}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-4">{restaurant.description}</p>
          <Tabs defaultValue="info" className="w-full">
            <TabsList>
              <TabsTrigger value="info">Information</TabsTrigger>
              <TabsTrigger value="menu">Menu</TabsTrigger>
              <TabsTrigger value="booking">Make a Reservation</TabsTrigger>
            </TabsList>
            <TabsContent value="info">
              <div className="space-y-2">
                <p><strong>Address:</strong> {restaurant.address}</p>
                <p><strong>Phone:</strong> {restaurant.phone}</p>
                <p><strong>Email:</strong> {restaurant.email}</p>
                <p><strong>Website:</strong> <a href={restaurant.website} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">{restaurant.website}</a></p>
                <p><strong>Opening Hours:</strong> {restaurant.openingHours}</p>
              </div>
            </TabsContent>
            <TabsContent value="menu">
              <div className="space-y-4">
                {menuItems.map((item) => (
                  <Card key={item._id}>
                    <CardHeader>
                      <CardTitle>{item.name}</CardTitle>
                      <CardDescription>{item.category}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>{item.description}</p>
                      <p className="font-bold mt-2">${item.price.toFixed(2)}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="booking">
              <p>Booking functionality coming soon!</p>
              <Button className="mt-4">Reserve a Table</Button>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
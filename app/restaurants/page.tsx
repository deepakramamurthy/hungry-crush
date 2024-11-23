'use client'

import { useState, useEffect, ChangeEvent } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface Restaurant {
  _id: string;
  name: string;
  cuisine: string;
  description: string;
  image: string;
  address: string;
}

const fetchRestaurants = async (): Promise<Restaurant[]> => {
  // This is a mock function. Replace with actual API call later.
  return [
    { _id: '1', name: "Italian Delight", cuisine: "Italian", description: "Authentic Italian cuisine in a cozy atmosphere.", image: "/placeholder.svg?height=300&width=400", address: "123 Pasta Street, Italytown" },
    { _id: '2', name: "Sushi Haven", cuisine: "Japanese", description: "Fresh sushi and traditional Japanese dishes.", image: "/placeholder.svg?height=300&width=400", address: "456 Sushi Lane, Japaneseville" },
    { _id: '3', name: "Spice Route", cuisine: "Indian", description: "A journey through the flavors of India.", image: "/placeholder.svg?height=300&width=400", address: "789 Curry Road, Spicetown" },
    { _id: '4', name: "Burger Bliss", cuisine: "American", description: "Juicy burgers and crispy fries.", image: "/placeholder.svg?height=300&width=400", address: "101 Burger Avenue, Beefville" },
    { _id: '5', name: "Taco Fiesta", cuisine: "Mexican", description: "Authentic Mexican street food.", image: "/placeholder.svg?height=300&width=400", address: "202 Taco Street, Mexicotown" },
  ];
};

export default function RestaurantsPage() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState<Restaurant[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'name' | 'cuisine'>('name');

  useEffect(() => {
    fetchRestaurants().then(setRestaurants);
  }, []);

  useEffect(() => {
    let result = [...restaurants];
    
    // Apply search filter
    if (searchQuery) {
      result = result.filter(restaurant => 
        restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        restaurant.cuisine.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    // Apply sorting
    result.sort((a, b) => {
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      } else {
        return a.cuisine.localeCompare(b.cuisine);
      }
    });
    
    setFilteredRestaurants(result);
  }, [restaurants, searchQuery, sortBy]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Partner Restaurants</h1>
      
      <div className="flex justify-between items-center mb-6">
        <Input
          type="text"
          placeholder="Search restaurants..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="max-w-sm"
        />
        <select
          value={sortBy}
          onChange={(e: ChangeEvent<HTMLSelectElement>) => setSortBy(e.target.value as 'name' | 'cuisine')}
          className="border rounded p-2"
        >
          <option value="name">Sort by Name</option>
          <option value="cuisine">Sort by Cuisine</option>
        </select>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredRestaurants.map((restaurant) => (
          <Card key={restaurant._id}>
            <CardHeader>
              <Image
                src={restaurant.image}
                alt={restaurant.name}
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <CardTitle>{restaurant.name}</CardTitle>
              <CardDescription>{restaurant.cuisine}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{restaurant.description}</p>
              <p className="mt-2 text-sm text-gray-600">{restaurant.address}</p>
            </CardContent>
            <CardFooter>
              <Link href={`/restaurants/${restaurant._id}`}>
                <Button>View Details</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      {filteredRestaurants.length === 0 && (
        <p className="text-center text-gray-500 mt-8">No restaurants found. Try adjusting your search.</p>
      )}
    </div>
  )
}
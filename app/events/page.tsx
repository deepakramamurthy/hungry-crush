'use client'

import { useState, useEffect, ChangeEvent } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface Event {
  _id: string;
  name: string;
  date: string;
  description: string;
  restaurantName: string;
  image: string;
}

const fetchEvents = async (): Promise<Event[]> => {
  // This is a mock function. Replace with actual API call later.
  return [
    { _id: '1', name: "Wine Tasting Evening", date: "2024-12-15", description: "Explore a variety of wines with our sommelier.", restaurantName: "Italian Delight", image: "/placeholder.svg?height=300&width=400" },
    { _id: '2', name: "Sushi Making Class", date: "2024-12-20", description: "Learn to make sushi from our expert chefs.", restaurantName: "Sushi Haven", image: "/placeholder.svg?height=300&width=400" },
    { _id: '3', name: "Spicy Food Challenge", date: "2024-12-25", description: "Test your spice tolerance with our special menu.", restaurantName: "Spice Route", image: "/placeholder.svg?height=300&width=400" },
    { _id: '4', name: "Burger Eating Contest", date: "2024-12-30", description: "Who can eat the most burgers?", restaurantName: "Burger Bliss", image: "/placeholder.svg?height=300&width=400" },
    { _id: '5', name: "Taco Tuesday Fiesta", date: "2025-01-05", description: "All-you-can-eat tacos every Tuesday!", restaurantName: "Taco Fiesta", image: "/placeholder.svg?height=300&width=400" },
  ];
};

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'date' | 'name' | 'restaurant'>('date');

  useEffect(() => {
    fetchEvents().then(setEvents);
  }, []);

  useEffect(() => {
    let result = [...events];
    
    // Apply search filter
    if (searchQuery) {
      result = result.filter(event => 
        event.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.restaurantName.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    // Apply sorting
    result.sort((a, b) => {
      if (sortBy === 'date') {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      } else if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      } else {
        return a.restaurantName.localeCompare(b.restaurantName);
      }
    });
    
    setFilteredEvents(result);
  }, [events, searchQuery, sortBy]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Upcoming Events</h1>
      
      <div className="flex justify-between items-center mb-6">
        <Input
          type="text"
          placeholder="Search events..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="max-w-sm"
        />
        <select
          value={sortBy}
          onChange={(e: ChangeEvent<HTMLSelectElement>) => setSortBy(e.target.value)}
          className="border rounded p-2"
        >
          <option value="date">Sort by Date</option>
          <option value="name">Sort by Name</option>
          <option value="restaurant">Sort by Restaurant</option>
        </select>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredEvents.map((event) => (
          <Card key={event._id}>
            <CardHeader>
              <Image
                src={event.image}
                alt={event.name}
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <CardTitle>{event.name}</CardTitle>
              <CardDescription>{new Date(event.date).toLocaleDateString()}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{event.description}</p>
              <p className="mt-2 font-semibold">
                Hosted by: {event.restaurantName}
              </p>
            </CardContent>
            <CardFooter>
              <Link href={`/events/${event._id}`}>
                <Button>View Details</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      {filteredEvents.length === 0 && (
        <p className="text-center text-gray-500 mt-8">No events found. Try adjusting your search.</p>
      )}
    </div>
  )
}
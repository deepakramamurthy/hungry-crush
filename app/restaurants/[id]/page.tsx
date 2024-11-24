'use client'

import { useParams } from 'next/navigation'
import React, { useState, useEffect, useRef } from 'react'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Calendar, MapPin, Clock, ChevronLeft, ChevronRight } from 'lucide-react'

interface Restaurant {
  _id: string;
  name: string;
  cuisine: string;
  description: string;
  image: string;
  address: string;
  phone: string;
  email: string;
}

interface MenuItem {
  _id: string;
  name: string;
  description: string;
  price: number;
  category: string;
}

interface Event {
  _id: string;
  name: string;
  date: string;
  time: string;
  description: string;
  image: string;
}

async function getRestaurant(id: string): Promise<Restaurant> {
  // This is a mock function. Replace with actual API call later.
  return {
    _id: id,
    name: "Italian Delight",
    cuisine: "Italian",
    description: "Authentic Italian cuisine in a cozy atmosphere.",
    image: "/placeholder.svg?height=400&width=800",
    address: "123 Pasta Street, Foodville, FC 12345",
    phone: "(123) 456-7890",
    email: "info@italiandelight.com"
  };
}

async function getMenu(restaurantId: string): Promise<MenuItem[]> {
  // This is a mock function. Replace with actual API call later.
  return [
    { _id: "1", name: "Margherita Pizza", description: "Classic tomato and mozzarella", price: 12.99, category: "Main Courses" },
    { _id: "2", name: "Spaghetti Carbonara", description: "Creamy pasta with pancetta", price: 14.99, category: "Main Courses" },
    { _id: "3", name: "Caprese Salad", description: "Fresh mozzarella, tomatoes, and basil", price: 8.99, category: "Starters" },
    { _id: "4", name: "Bruschetta", description: "Toasted bread with tomatoes and garlic", price: 7.99, category: "Starters" },
    { _id: "5", name: "Tiramisu", description: "Coffee-flavored Italian dessert", price: 7.99, category: "Desserts" },
    { _id: "6", name: "Panna Cotta", description: "Italian custard with berry compote", price: 6.99, category: "Desserts" },
    { _id: "7", name: "Espresso", description: "Strong Italian coffee", price: 2.99, category: "Beverages" },
    { _id: "8", name: "Aperol Spritz", description: "Refreshing Italian cocktail", price: 8.99, category: "Beverages" },
    { _id: "9", name: "Garlic Bread", description: "Toasted bread with garlic butter", price: 4.99, category: "Sides" },
    { _id: "10", name: "Mixed Olives", description: "Assorted marinated olives", price: 3.99, category: "Sides" },
  ];
}

async function getEvents(restaurantId: string): Promise<Event[]> {
  // This is a mock function. Replace with actual API call later.
  return [
    { _id: "1", name: "Wine Tasting Evening", date: "2024-12-15", time: "19:00", description: "Explore a variety of Italian wines", image: "/placeholder.svg?height=300&width=400" },
    { _id: "2", name: "Pasta Making Workshop", date: "2024-12-20", time: "18:00", description: "Learn to make authentic Italian pasta", image: "/placeholder.svg?height=300&width=400" },
  ];
}

export default function RestaurantPage() {
  const params = useParams()
  const id = params?.id as string
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null)
  const [menu, setMenu] = useState<MenuItem[]>([])
  const [events, setEvents] = useState<Event[]>([])
  const [activeMenuCategory, setActiveMenuCategory] = useState<string>('')
  const tabsRef = useRef<HTMLDivElement>(null)
  const searchParams = useSearchParams()
  const [activeTab, setActiveTab] = useState('menu')

  useEffect(() => {
    if (id) {
      getRestaurant(id).then(setRestaurant)
      getMenu(id).then((menuItems) => {
        setMenu(menuItems)
        if (menuItems.length > 0) {
          setActiveMenuCategory(menuItems[0].category)
        }
      })
      getEvents(id).then(setEvents)
    }

    const tabParam = searchParams.get('tab')
    if (tabParam && ['menu', 'book', 'events'].includes(tabParam)) {
      setActiveTab(tabParam)
    }
  }, [id, searchParams])

  const menuCategories = Array.from(new Set(menu.map(item => item.category)))

  const scrollTabs = (direction: 'left' | 'right') => {
    if (tabsRef.current) {
      const scrollAmount = 200
      const container = tabsRef.current
      const newScrollPosition = direction === 'left' 
        ? container.scrollLeft - scrollAmount 
        : container.scrollLeft + scrollAmount
      
      container.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
      })
    }
  }

  if (!restaurant) {
    return <div className="container mx-auto px-4 py-8">Loading...</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <Image
            src={restaurant.image}
            alt={restaurant.name}
            width={800}
            height={400}
            className="w-full h-64 object-cover rounded-t-lg"
          />
          <CardTitle className="text-3xl">{restaurant.name}</CardTitle>
          <CardDescription>{restaurant.cuisine}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-lg">{restaurant.description}</p>
          <div className="flex items-center space-x-2">
            <MapPin className="w-5 h-5" />
            <span>{restaurant.address}</span>
          </div>
          <div className="flex items-center space-x-2">
            <p>Phone: {restaurant.phone}</p>
          </div>
          <div className="flex items-center space-x-2">
            <p>Email: {restaurant.email}</p>
          </div>
        </CardContent>
      </Card>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full max-w-4xl mx-auto mt-8">
        <TabsList className="grid w-full grid-cols-3 p-1 bg-gray-100">
          <TabsTrigger 
            value="menu"
            className="data-[state=active]:bg-black data-[state=active]:text-white"
          >
            Menu
          </TabsTrigger>
          <TabsTrigger 
            value="book"
            className="data-[state=active]:bg-black data-[state=active]:text-white"
          >
            Reserve a Table
          </TabsTrigger>
          <TabsTrigger 
            value="events"
            className="data-[state=active]:bg-black data-[state=active]:text-white"
          >
            Events
          </TabsTrigger>
        </TabsList>
        <TabsContent value="menu">
          <Card>
            <CardHeader>
              <CardTitle>Menu</CardTitle>
              <CardDescription>Explore our delicious offerings</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue={activeMenuCategory} className="w-full">
                <div className="relative flex items-center">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-0 z-10 h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm"
                    onClick={() => scrollTabs('left')}
                    aria-label="Scroll left"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <div 
                    ref={tabsRef} 
                    className="overflow-x-auto scrollbar-hide px-8"
                  >
                    <TabsList className="inline-flex h-10 items-center justify-start rounded-none border-b border-b-muted bg-transparent p-0">
                      {menuCategories.map((category) => (
                        <TabsTrigger
                          key={category}
                          value={category}
                          className="relative h-10 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-medium text-muted-foreground hover:text-foreground data-[state=active]:border-b-primary data-[state=active]:text-foreground"
                        >
                          {category}
                        </TabsTrigger>
                      ))}
                    </TabsList>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 z-10 h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm"
                    onClick={() => scrollTabs('right')}
                    aria-label="Scroll right"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
                {menuCategories.map((category) => (
                  <TabsContent key={category} value={category} className="mt-6">
                    <div className="grid gap-4">
                      {menu
                        .filter((item) => item.category === category)
                        .map((item) => (
                          <div key={item._id} className="flex justify-between gap-4 border-b pb-4 last:border-0">
                            <div>
                              <h3 className="font-medium">{item.name}</h3>
                              <p className="text-sm text-muted-foreground">{item.description}</p>
                            </div>
                            <div className="font-medium">
                              ${item.price.toFixed(2)}
                            </div>
                          </div>
                        ))}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="book">
          <Card>
            <CardHeader>
              <CardTitle>Reserve a Table</CardTitle>
              <CardDescription>Reserve your spot at {restaurant.name}</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
                  <Input type="date" id="date" name="date" className="mt-1" />
                </div>
                <div>
                  <label htmlFor="time" className="block text-sm font-medium text-gray-700">Time</label>
                  <Input type="time" id="time" name="time" className="mt-1" />
                </div>
                <div>
                  <label htmlFor="guests" className="block text-sm font-medium text-gray-700">Number of Guests</label>
                  <Input type="number" id="guests" name="guests" min="1" className="mt-1" />
                </div>
                <Button type="submit" className="w-full bg-black text-white hover:bg-gray-800">Make a Reservation</Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="events">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
              <CardDescription>Join us for these special occasions</CardDescription>
            </CardHeader>
            <CardContent>
              {events.map((event) => (
                <div key={event._id} className="mb-6 pb-6 border-b last:border-b-0">
                  <div className="flex flex-col md:flex-row gap-4">
                    <Image
                      src={event.image}
                      alt={event.name}
                      width={300}
                      height={200}
                      className="w-full md:w-1/3 h-40 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold">{event.name}</h3>
                      <div className="flex items-center space-x-2 mt-2">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(event.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-2 mt-1">
                        <Clock className="w-4 h-4" />
                        <span>{event.time}</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-2">{event.description}</p>
                      <Button className="mt-4 bg-black text-white hover:bg-gray-800">RSVP</Button>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
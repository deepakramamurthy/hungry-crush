'use client'

import { useState, useRef, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Restaurant, Event } from '@/lib/types'
import { searchRestaurantsAndEvents, getFeaturedRestaurants, getFeaturedEvents } from '@/lib/api'

interface ClientHomeProps {
  initialRestaurants: Restaurant[]
  initialEvents: Event[]
}

export default function ClientHome({ initialRestaurants, initialEvents }: ClientHomeProps) {
  const [restaurants, setRestaurants] = useState(initialRestaurants)
  const [events, setEvents] = useState(initialEvents)
  const [isSearching, setIsSearching] = useState(false)
  const restaurantsRef = useRef<HTMLDivElement>(null)
  const eventsRef = useRef<HTMLDivElement>(null)
  const searchParams = useSearchParams()

  useEffect(() => {
    const query = searchParams.get('q')
    if (query !== null) {
      if (query.trim() === '') {
        resetToInitialState()
      } else {
        handleSearch(query)
      }
    }
  }, [searchParams])

  const handleSearch = async (query: string) => {
    setIsSearching(true)
    try {
      const results = await searchRestaurantsAndEvents(query)
      setRestaurants(results.restaurants)
      setEvents(results.events)
    } catch (error) {
      console.error('Search error:', error)
      setRestaurants([])
      setEvents([])
    }
  }

  const resetToInitialState = async () => {
    setIsSearching(false)
    try {
      const featuredRestaurants = await getFeaturedRestaurants()
      const featuredEvents = await getFeaturedEvents()
      setRestaurants(featuredRestaurants)
      setEvents(featuredEvents)
    } catch (error) {
      console.error('Error fetching featured content:', error)
      setRestaurants(initialRestaurants)
      setEvents(initialEvents)
    }
  }

  const scroll = (direction: 'left' | 'right', ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      const scrollAmount = 300
      ref.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {isSearching ? (
          <div className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold mb-4">Search Results</h2>
            {restaurants.length === 0 && events.length === 0 ? (
              <p className="text-lg">No results found for your search. Please try a different query.</p>
            ) : (
              <>
                {restaurants.length > 0 && (
                  <>
                    <h3 className="text-xl font-semibold mb-2">Restaurants</h3>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
                      {restaurants.map((restaurant) => (
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
                          </CardContent>
                          <CardFooter>
                            <Link href={`/restaurants/${restaurant._id}`}>
                              <Button>Make a Reservation</Button>
                            </Link>
                          </CardFooter>
                        </Card>
                      ))}
                    </div>
                  </>
                )}

                {events.length > 0 && (
                  <>
                    <h3 className="text-xl font-semibold mb-2">Events</h3>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                      {events.map((event) => (
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
                              Hosted by: {event.restaurantName || 'Loading...'}
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
                  </>
                )}
              </>
            )}
          </div>
        ) : (
          <>
            {/* Featured Restaurants */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Featured Restaurants</h2>
              <div className="relative">
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/70 hover:bg-white transition-colors"
                  onClick={() => scroll('left', restaurantsRef)}
                  aria-label="Scroll left"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <div ref={restaurantsRef} className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide">
                  {restaurants.map((restaurant) => (
                    <Card key={restaurant._id} className="flex-shrink-0 w-64">
                      <CardHeader>
                        <Image
                          src={restaurant.image}
                          alt={restaurant.name}
                          width={400}
                          height={300}
                          className="w-full h-40 object-cover rounded-t-lg"
                        />
                        <CardTitle className="text-lg">{restaurant.name}</CardTitle>
                        <CardDescription>{restaurant.cuisine}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm line-clamp-2">{restaurant.description}</p>
                      </CardContent>
                      <CardFooter>
                        <Link href={`/restaurants/${restaurant._id}`}>
                          <Button size="sm">Make a Reservation</Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/70 hover:bg-white transition-colors"
                  onClick={() => scroll('right', restaurantsRef)}
                  aria-label="Scroll right"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </section>

            {/* Featured Events */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Featured Events</h2>
              <div className="relative">
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/70 hover:bg-white transition-colors"
                  onClick={() => scroll('left', eventsRef)}
                  aria-label="Scroll left"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <div ref={eventsRef} className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide">
                  {events.map((event) => (
                    <Card key={event._id} className="flex-shrink-0 w-64">
                      <CardHeader>
                        <Image
                          src={event.image}
                          alt={event.name}
                          width={400}
                          height={300}
                          className="w-full h-40 object-cover rounded-t-lg"
                        />
                        <CardTitle className="text-lg">{event.name}</CardTitle>
                        <CardDescription>{new Date(event.date).toLocaleDateString()}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm line-clamp-2">{event.description}</p>
                        <p className="mt-2 text-sm font-semibold">
                          Hosted by: {event.restaurantName || 'Loading...'}
                        </p>
                      </CardContent>
                      <CardFooter>
                        <Link href={`/events/${event._id}`}>
                          <Button size="sm">View Details</Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/70 hover:bg-white transition-colors"
                  onClick={() => scroll('right', eventsRef)}
                  aria-label="Scroll right"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </section>
          </>
        )}
      </main>
    </div>
  )
}
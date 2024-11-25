'use client'

import React, { useState, useEffect, useRef } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Image from 'next/image'
import { Restaurant, Event } from '@/lib/types'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface ClientHomeProps {
  initialRestaurants: Restaurant[]
  initialEvents: Event[]
}

export default function ClientHome({ initialRestaurants, initialEvents }: ClientHomeProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [searchQuery, setSearchQuery] = useState(searchParams.get('query') || '')
  const [featuredRestaurants, setFeaturedRestaurants] = useState<Restaurant[]>(initialRestaurants)
  const [featuredEvents, setFeaturedEvents] = useState<Event[]>(initialEvents)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [searchResults, setSearchResults] = useState<{ restaurants: Restaurant[], events: Event[] } | null>(null)
  const restaurantsRef = useRef<HTMLDivElement>(null)
  const eventsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const fetchFeaturedData = async () => {
      try {
        setIsLoading(true)
        setError(null)

        const [restaurantsResponse, eventsResponse] = await Promise.all([
          fetch('/api/restaurants?featured=true'),
          fetch('/api/events?featured=true')
        ])

        if (!restaurantsResponse.ok || !eventsResponse.ok) {
          throw new Error('Failed to fetch featured data')
        }

        const [restaurants, events] = await Promise.all([
          restaurantsResponse.json(),
          eventsResponse.json()
        ])

        setFeaturedRestaurants(restaurants)
        setFeaturedEvents(events)
      } catch (error) {
        console.error('Error fetching featured data:', error)
        setError('Failed to fetch featured data. Please try again later.')
      } finally {
        setIsLoading(false)
      }
    }

    fetchFeaturedData()
  }, [])

  useEffect(() => {
    const query = searchParams.get('query')
    if (query) {
      setSearchQuery(query)
      handleSearch(query)
    } else {
      setSearchQuery('')
      setSearchResults(null)
    }
  }, [searchParams])

  const handleSearch = async (query: string) => {
    if (!query.trim()) {
      setSearchResults(null)
      setError(null)
      return
    }

    setIsLoading(true)
    setError(null)
    setSearchResults(null)

    try {
      const response = await fetch(`/api/search?query=${encodeURIComponent(query)}`)
      if (!response.ok) {
        throw new Error('Search failed')
      }
      const data = await response.json()
      setSearchResults(data)
      if (data.restaurants.length === 0 && data.events.length === 0) {
        setError('No results found for your search query.')
      }
    } catch (error) {
      console.error('Search error:', error)
      setError('An error occurred while searching. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleRestaurantClick = (id: string) => {
    router.push(`/restaurants/${id}`)
  }

  const handleEventClick = (id: string) => {
    router.push(`/events/${id}`)
  }

  const handleReservationClick = (id: string, e: React.MouseEvent) => {
    e.stopPropagation()
    router.push(`/restaurants/${id}/reserve`)
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

  if (isLoading) {
    return <div className="text-center py-10">Loading...</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {error && <div className="text-red-500 mb-4">{error}</div>}

      {searchResults ? (
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Search Results for "{searchQuery}"</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">Restaurants</h3>
              {searchResults.restaurants.length > 0 ? (
                searchResults.restaurants.map((restaurant) => (
                  <Card key={restaurant.id} className="mb-4 cursor-pointer" onClick={() => handleRestaurantClick(restaurant.id)}>
                    <div className="relative h-40 w-full">
                      <Image
                        src={restaurant.image || '/placeholder.svg?height=160&width=256'}
                        alt={restaurant.name}
                        width={256}
                        height={160}
                        className="rounded-t-lg object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>{restaurant.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600">{restaurant.cuisine}</p>
                      <p className="mt-2 line-clamp-2">{restaurant.description}</p>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full" onClick={(e) => handleReservationClick(restaurant.id, e)}>
                        Make a Reservation
                      </Button>
                    </CardFooter>
                  </Card>
                ))
              ) : (
                <p>No restaurants found.</p>
              )}
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Events</h3>
              {searchResults.events.length > 0 ? (
                searchResults.events.map((event) => (
                  <Card key={event.id} className="mb-4 cursor-pointer" onClick={() => handleEventClick(event.id)}>
                    <div className="relative h-40 w-full">
                      <Image
                        src={event.image || '/placeholder.svg?height=160&width=256'}
                        alt={event.name}
                        width={256}
                        height={160}
                        className="rounded-t-lg object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>{event.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600">{new Date(event.date).toLocaleDateString()}</p>
                      <p className="mt-2 line-clamp-2">{event.description}</p>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full" onClick={(e) => { e.stopPropagation(); handleEventClick(event.id); }}>
                        View Details
                      </Button>
                    </CardFooter>
                  </Card>
                ))
              ) : (
                <p>No events found.</p>
              )}
            </div>
          </div>
        </div>
      ) : (
        <main>
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Featured Restaurants</h2>
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
              <div
                ref={restaurantsRef}
                className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide no-scrollbar"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {featuredRestaurants.map((restaurant) => (
                  <div key={restaurant.id} className="flex-shrink-0 w-64">
                    <Card className="cursor-pointer" onClick={() => handleRestaurantClick(restaurant.id)}>
                      <div className="relative h-40 w-full">
                        <Image
                          src={restaurant.image || '/placeholder.svg?height=160&width=256'}
                          alt={restaurant.name}
                          width={256}
                          height={160}
                          className="rounded-t-lg object-cover"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle>{restaurant.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-600">{restaurant.cuisine}</p>
                        <p className="mt-2 line-clamp-2">{restaurant.description}</p>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full" onClick={(e) => handleReservationClick(restaurant.id, e)}>
                          Make a Reservation
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
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

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Upcoming Events</h2>
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
              <div
                ref={eventsRef}
                className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide no-scrollbar"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {featuredEvents.map((event) => (
                  <div key={event.id} className="flex-shrink-0 w-64">
                    <Card className="cursor-pointer" onClick={() => handleEventClick(event.id)}>
                      <div className="relative h-40 w-full">
                        <Image
                          src={event.image || '/placeholder.svg?height=160&width=256'}
                          alt={event.name}
                          width={256}
                          height={160}
                          className="rounded-t-lg object-cover"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle>{event.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-600">{new Date(event.date).toLocaleDateString()}</p>
                        <p className="mt-2 line-clamp-2">{event.description}</p>
                        <p className="mt-2 font-semibold">Hosted by: {event.restaurantName}</p>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full" onClick={(e) => { e.stopPropagation(); handleEventClick(event.id); }}>
                          View Details
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
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
        </main>
      )}
    </div>
  )
}
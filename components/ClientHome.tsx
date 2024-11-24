'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { searchRestaurantsAndEvents, getFeaturedRestaurants, getFeaturedEvents } from '@/lib/api'
import type { Restaurant, Event } from '@/lib/types'
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Loader2, ChevronLeft, ChevronRight } from 'lucide-react'

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
    setIsLoading(true)
    setError(null)
    try {
      const results = await searchRestaurantsAndEvents(query)
      setSearchResults(results)
    } catch (error) {
      setError('Failed to fetch search results. Please try again later.')
      console.error('Error searching:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const scroll = (direction: 'left' | 'right', ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      const { scrollLeft, clientWidth } = ref.current
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth
      ref.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
    }
  }

  const handleRestaurantClick = (restaurantId: string) => {
    router.push(`/restaurants/${restaurantId}`)
  }

  const handleReservationClick = (restaurantId: string, e: React.MouseEvent) => {
    e.stopPropagation()
    router.push(`/restaurants/${restaurantId}?tab=book`)
  }

  const handleEventClick = (eventId: string) => {
    router.push(`/events/${eventId}`)
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center text-red-600 p-4">
        <p>{error}</p>
        <Button onClick={() => window.location.reload()} className="mt-4">
          Retry
        </Button>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {searchResults && searchQuery && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Search Results for "{searchQuery}"</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">Restaurants</h3>
              {searchResults.restaurants.length > 0 ? (
                searchResults.restaurants.map((restaurant) => (
                  <Card key={restaurant._id} className="mb-4 cursor-pointer" onClick={() => handleRestaurantClick(restaurant._id)}>
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
                      <Button className="w-full" onClick={(e) => handleReservationClick(restaurant._id, e)}>
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
                  <Card key={event._id} className="mb-4 cursor-pointer" onClick={() => handleEventClick(event._id)}>
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
                      <Button className="w-full" onClick={(e) => { e.stopPropagation(); handleEventClick(event._id); }}>
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
      )}

      {!searchQuery && (
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
                  <div key={restaurant._id} className="flex-shrink-0 w-64">
                    <Card className="cursor-pointer" onClick={() => handleRestaurantClick(restaurant._id)}>
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
                        <Button className="w-full" onClick={(e) => handleReservationClick(restaurant._id, e)}>
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
                  <div key={event._id} className="flex-shrink-0 w-64">
                    <Card className="cursor-pointer" onClick={() => handleEventClick(event._id)}>
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
                        <Button className="w-full" onClick={(e) => { e.stopPropagation(); handleEventClick(event._id); }}>
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
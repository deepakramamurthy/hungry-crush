'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { searchRestaurantsAndEvents } from '@/lib/api'
import { Restaurant, Event } from '@/lib/types'
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Loader2, ChevronLeft, ChevronRight } from 'lucide-react'

export default function ClientHome() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [searchQuery, setSearchQuery] = useState(searchParams.get('query') || '')
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])
  const [events, setEvents] = useState<Event[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const restaurantsRef = useRef<HTMLDivElement>(null)
  const eventsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      setError(null)
      try {
        const { restaurants, events } = await searchRestaurantsAndEvents(searchQuery)
        setRestaurants(restaurants)
        setEvents(events)
      } catch (err) {
        setError('Failed to fetch data. Please try again later.')
        console.error('Error fetching data:', err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [searchQuery])

  const scroll = (direction: 'left' | 'right', ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      const { scrollLeft, clientWidth } = ref.current
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth
      ref.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
    }
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
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
      <h1 className="text-3xl font-bold mb-8">Welcome to Hungry Crush</h1>

      <main>
        {restaurants.length === 0 && events.length === 0 ? (
          <p>No results found.</p>
        ) : (
          <>
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
                  {restaurants.map((restaurant, index) => (
                    <div key={restaurant.id || index} className="flex-shrink-0 w-64">
                      <Card>
                        <CardHeader>
                          <CardTitle>{restaurant.name}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-gray-600">{restaurant.cuisine}</p>
                          <p className="mt-2">{restaurant.description}</p>
                        </CardContent>
                        <CardFooter>
                          <Link href={`/restaurants/${restaurant.id}`} passHref>
                            <Button className="w-full">Make Reservation</Button>
                          </Link>
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

            <section>
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
                  {events.map((event, index) => (
                    <div key={event.id || index} className="flex-shrink-0 w-64">
                      <Card>
                        <CardHeader>
                          <CardTitle>{event.name}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-gray-600">{new Date(event.date).toLocaleDateString()}</p>
                          <p className="mt-2">{event.description}</p>
                          {event.restaurant && (
                            <p className="mt-2 font-semibold">Hosted by: {event.restaurant.name}</p>
                          )}
                        </CardContent>
                        <CardFooter>
                          <Link href={`/events/${event.id}`} passHref>
                            <Button className="w-full">View Details</Button>
                          </Link>
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
          </>
        )}
      </main>
    </div>
  )
}
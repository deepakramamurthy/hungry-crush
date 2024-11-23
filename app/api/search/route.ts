import { NextResponse } from 'next/server'
import { getAllRestaurants, getAllEvents } from '@/lib/api'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const query = searchParams.get('q')

  try {
    const restaurants = await getAllRestaurants()
    const events = await getAllEvents()

    if (!query) {
      // If no query, return all restaurants and events, sorted with featured items first
      const sortedRestaurants = restaurants.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
      const sortedEvents = events.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
      return NextResponse.json({ restaurants: sortedRestaurants, events: sortedEvents })
    }

    const filteredRestaurants = restaurants.filter(restaurant =>
      restaurant.name.toLowerCase().includes(query.toLowerCase())
    ).sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))

    const filteredEvents = events.filter(event =>
      event.name.toLowerCase().includes(query.toLowerCase()) ||
      (event.restaurantName && event.restaurantName.toLowerCase().includes(query.toLowerCase()))
    ).sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))

    return NextResponse.json({
      restaurants: filteredRestaurants,
      events: filteredEvents
    })
  } catch (error) {
    console.error('Search error:', error)
    return NextResponse.json({ error: 'An error occurred while searching' }, { status: 500 })
  }
}
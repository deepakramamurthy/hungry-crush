import { NextResponse } from 'next/server'
import { getAllRestaurants, getAllEvents } from '@/lib/api'
import type { Restaurant, Event } from '@/lib/types'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const query = searchParams.get('query')

  if (!query) {
    return NextResponse.json({ restaurants: [], events: [] })
  }

  try {
    const allRestaurants: Restaurant[] = await getAllRestaurants()
    const allEvents: Event[] = await getAllEvents()

    const restaurants = allRestaurants.filter(restaurant =>
      restaurant.name.toLowerCase().includes(query.toLowerCase()) ||
      restaurant.cuisine.toLowerCase().includes(query.toLowerCase()) ||
      restaurant.description.toLowerCase().includes(query.toLowerCase())
    )

    const events = allEvents.filter(event =>
      event.name.toLowerCase().includes(query.toLowerCase()) ||
      event.description.toLowerCase().includes(query.toLowerCase()) ||
      (event.restaurantName && event.restaurantName.toLowerCase().includes(query.toLowerCase()))
    )

    return NextResponse.json({ restaurants, events })
  } catch (error) {
    console.error('Search error:', error)
    return NextResponse.json({ error: 'An error occurred while searching' }, { status: 500 })
  }
}
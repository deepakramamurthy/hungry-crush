import { NextResponse } from 'next/server'

const mockEvents = [
  { _id: '1', name: 'Wine Tasting Evening', date: '2024-12-15', description: 'Explore a variety of wines with our sommelier.', restaurantName: 'Tasty Bites' },
  { _id: '2', name: 'Sushi Making Class', date: '2024-12-20', description: 'Learn to make sushi from our expert chefs.', restaurantName: 'Sushi Haven' },
  { _id: '3', name: 'Spicy Food Challenge', date: '2024-12-25', description: 'Test your spice tolerance with our special menu.', restaurantName: 'Spice Garden' },
]

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const featured = searchParams.get('featured')

  let events = mockEvents
  if (featured === 'true') {
    events = events.slice(0, 2) // Return only 2 featured events
  }

  return NextResponse.json(events)
}